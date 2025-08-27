import Image from "next/image";
import React from "react";
import AssetsChart from "./components/assets-chart";
import AssetsTransaction from "./components/assets-transaction";

const Page = () => {
  return (
    <div className=" font-inter space-y-[27px]">
      <div className=" flex flex-row justify-between items-center mb-6">
        <span className=" text-[15.5px] text-black gap-2 flex items-center font-medium">
          <Image
            src={"/icons/balance.svg"}
            alt="balance"
            width={20.67}
            height={20.67}
            className="text-[#8C94A6] w-[20.67px] h-[20.67px]"
          />
          Credit Balance
        </span>
        <span className=" font-semibold text-[15.5px]">$0.00</span>
      </div>
      <div className="">
        <AssetsChart />
      </div>
      <div className="">
        <AssetsTransaction />
      </div>
    </div>
  );
};

export default Page;
