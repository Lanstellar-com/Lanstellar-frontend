import Image from "next/image";
import React from "react";

const audiences = [
  { icon: "/icons/bank.svg", label: "Banks" },
  { icon: "/icons/bank.svg", label: "Hard Money Lenders" },
  { icon: "/icons/bank.svg", label: "Property Owners" },
  { icon: "/icons/bank.svg", label: "Microfinance Institutions" },
  { icon: "/icons/bank.svg", label: "DeFi Investors" },
  { icon: "/icons/bank.svg", label: "Liquidity Providers" },
];

const About = () => {
  return (
    <div className=" pt-[82px] space-y-20 font-inter">
      <div className=" flex justify-center flex-col space-y-4">
        <h2 className=" text-[32px] font-bold font-inter text-center">
          What is <span className=" text-[#5F5F60]">lanstellar ?</span>
        </h2>
        <p className=" text-[#5F5F60] font-medium font-inter text-center max-w-3xl mx-auto text-[22px] leading-[34px]">
          Lanstellar is a non-custodial RWA lending platform that unlocks
          instant stable-coin liquidity for real-world asset owners and asset
          managers. We are bridging the gap between traditional asset holders
          (like real estate owners or institutions) and DeFi investors, enabling
          loans to be issued in stablecoins within minutes.
        </p>
      </div>
      <div className="">
        <div className=" flex flex-col justify-center">
          <span className=" text-[#969798] text-[12px] text-center ">
            WHO IS LANSTELLAR FOR?
          </span>
          <h2 className=" text-[32px] text-[#212121] font-bold font-inter text-center">
            Our Target Audience{" "}
          </h2>
        </div>
        <div className="flex justify-center gap-12 flex-wrap">
          {audiences.map((item, index) => (
            <div key={index} className=" flex">
              <div className="flex flex-col items-center text-center justify-center">
                <div className=" w-16 h-16 flex items-center justify-center rounded-lg mb-3">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {item.label}
                </p>
              </div>
              <div className=" w-20 border-t border-dashed h-0.5 "></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
