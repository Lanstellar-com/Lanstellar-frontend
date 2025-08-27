import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const AssetsTransaction = () => {
  return (
    <div>
      <Card className=" border-none shadow-none rounded-none pt-2">
        <CardHeader className="text-[15.5px] px-0 text-black  font-semibold ">
          Asset Transactions
        </CardHeader>

        <CardContent className=" text-[13.78px] flex flex-col font-medium w-full justify-center items-center text-[#8C94A6]">
          <Image
            src={"/empty.svg"}
            alt="transactions"
            width={56.67}
            height={56.67}
            className=" mb-4 text-[#8C94A6] w-[215px] h-[142.01px]"
          />
          You haven’t added any asset! Add one and see transactions here.
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetsTransaction;
