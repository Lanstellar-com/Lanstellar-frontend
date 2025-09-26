"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { AssetDetailsModal } from "./assets-details";
import api from "@/lib/api";

interface Asset {
  id: string;
  assetTitle: string;
  assetCategory: string;
  assetLocation: string;
  verified: string;
  assetWorth: string | number;
  image: string;
  status: string;
  statusColor: string;
}

const AssetsList = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const fetchAssets = async () => {
    try {
      const res = await api.get("/assets/");
      console.log("Fetched assets:", res.data.assets);
      const data: Asset[] = res.data.assets;
      setAssets(data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <div className="p-[26px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-auto  gap-6">
      {assets.map((asset) => (
        <Dialog
          key={asset.id}
          onOpenChange={(open) => open && setSelectedAsset(asset)}
        >
          <DialogTrigger asChild>
            <Card className="h-[357px] mx-auto w-[313px] cursor-pointer rounded-[20px] bg-[#F9F9F9] p-[10px] shadow-none border-none">
              <div className="flex flex-col gap-2">
                <Image
                  src={asset.image}
                  alt={asset.assetTitle}
                  width={100}
                  height={100}
                  className="w-full rounded-[10px] h-[204px] object-cover"
                />
                <div className="flex flex-row items-center justify-between gap-2">
                  <span className="text-[#8C94A6] capitalize font-medium text-[12.06px]">
                    {asset.assetCategory}
                  </span>
                  <span
                    className={`text-[10.34px] gap-1 font-medium flex flex-row items-center justify-center text-[#1A1A21] h-[20px] w-[76px] rounded-[4px]   ${
                      asset.verified === "true"
                        ? "bg-[#D3FED3]"
                        : "bg-[#FCDB86]"
                    } bg-opacity-10`}
                  >
                    {asset.verified === "true" ? "Verified ✅" : "In Review ⏳"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[13.78px] font-semibold">
                    {asset.assetTitle}
                  </h2>
                  <p className="text-[13.78px] text-[#1A1A21] font-medium">
                    {asset.assetLocation}
                  </p>
                  <p className="text-[20px] text-[#292D32] font-bold">
                    ${asset.assetWorth.toLocaleString()}
                  </p>
                </div>
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] w-full h-[90vh] scrollbar-hide overflow-y-auto">
            <AssetDetailsModal />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default AssetsList;
