"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

const AddAssetsDialog = () => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
  };
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    onFileChange(selectedFile);
  };
  return (
    <div>
      <form>
        <DialogContent className="w-fit border-[4px] border-[#F8F8F8] rounded-[20px] ">
          <DialogHeader>
            <DialogTitle className=" text-[20px] font-semibold text-black">
              Add new asset
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            <div className="grid gap-1.5">
              <Label
                htmlFor="name-1"
                className=" text-[13.78px] font-medium text-[#1A1A21]"
              >
                Asset Name
              </Label>
              <Input
                id="name-1"
                name="name"
                placeholder="Enter Asset name"
                className=" w-[454px] h-[37px] rounded-[10px] border-[1px] border-[#F1F1F1] bg-[#F5F5F5] px-3 py-2 text-[13.78px] font-medium text-[#CBCBCB]"
              />
            </div>
            <div className="grid gap-1.5">
              <Label
                htmlFor="name-1"
                className=" text-[13.78px] font-medium text-[#1A1A21]"
              >
                Asset Category
              </Label>
              <Select>
                <SelectTrigger className="w-full h-[37px] rounded-[10px] border-[1px] border-[#F1F1F1] bg-[#F5F5F5] px-3 py-2 text-[13.78px] font-medium text-[#CBCBCB] shadow-none">
                  <SelectValue placeholder="Enter Asset Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Cartegories</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label
                htmlFor="name-1"
                className=" text-[13.78px] font-medium text-[#1A1A21]"
              >
                Asset Worth
              </Label>
              <Input
                id="name-1"
                name="name"
                placeholder="Enter asset Worth ($)"
                className=" w-[454px] h-[37px] rounded-[10px] border-[1px] border-[#F1F1F1] bg-[#F5F5F5] px-3 py-2 text-[13.78px] font-medium text-[#CBCBCB]"
              />
              <span className=" text-[#8C94A6] text-[11px] font-medium">
                *Make sure the worth written is correct
              </span>
            </div>
            <div className="grid gap-1.5">
              <Label
                htmlFor="name-1"
                className=" text-[13.78px] font-medium text-[#1A1A21]"
              >
                Asset Location
              </Label>
              <Select>
                <SelectTrigger className="w-full h-[37px] rounded-[10px] border-[1px] border-[#F1F1F1] bg-[#F5F5F5] px-3 py-2 text-[13.78px] font-medium text-[#CBCBCB] shadow-none">
                  <SelectValue placeholder="Enter Asset Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Locations</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="name-1">Asset Description</Label>
              <Textarea
                id="name-1"
                name="name"
                placeholder="Enter asset description"
                className=" w-[454px] h-[65px] rounded-[10px] border-[1px] border-[#F1F1F1] bg-[#F5F5F5] px-3 py-2 text-[13.78px] font-medium text-[#CBCBCB]"
              />
            </div>

            <div className="grid ">
              <Label className="text-sm font-medium text-[#1A1A21] mb-2 block">
                Assets Documents
              </Label>

              <Card className="border-[1px] border-dashed border-[#F1F1F1] bg-white h-[86px] shadow-none flex flex-col justify-center items-center">
                <CardContent className="p-4 flex flex-col justify-center items-center w-full">
                  <input
                    type="file"
                    accept=".png,.jpg,.jpeg"
                    onChange={handleFileSelect}
                    className="hidden"
                    id={`file- Assets-Documents.replace(/\s+/g, "-").toLowerCase()}`}
                  />

                  <label
                    htmlFor={`file-Assets-Documents.replace(/\s+/g, "-").toLowerCase()}`}
                    className="cursor-pointer w-full flex flex-col items-center justify-center text-center"
                  >
                    {file ? (
                      <div className="flex items-center justify-center gap-2">
                        <FileText className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-gray-700 truncate max-w-[160px]">
                          {file.name}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                          src="/icons/document.svg"
                          alt="Upload"
                          width={28}
                          height={28}
                        />
                        <p className="text-[13px] text-gray-600 leading-snug">
                          Drag your files here or{" "}
                          <span className="text-[#563BB5] font-medium">
                            choose to browse
                          </span>
                        </p>
                      </div>
                    )}
                  </label>
                </CardContent>
              </Card>
              <div className=" ">
                <p className="text-[12px] font-medium text-[#8C94A6]">
                  *We only support PNGs and JPEG under 10MB
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button className="bg-gradient-to-r from-[#439EFF] to-[#5B1E9F] text-white px-4 py-2 rounded-[10px] flex items-center gap-2 w-full">
              Add Asset
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </div>
  );
};

export default AddAssetsDialog;
