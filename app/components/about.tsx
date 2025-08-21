import Image from "next/image";
import React from "react";

const audiences = [
  { icon: "/icons/bank.svg", label: "Banks" },
  { icon: "/icons/money.svg", label: "Hard Money Lenders" },
  { icon: "/icons/properties.svg", label: "Property Owners" },
  { icon: "/icons/microfinance.svg", label: "Microfinance Institutions" },
  { icon: "/icons/defi.svg", label: "DeFi Investors" },
  { icon: "/icons/liquidity.svg", label: "Liquidity Providers" },
];

const About = () => {
  return (
    <div className=" p-[64px] space-y-20 font-inter">
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
      <div className=" space-y-10 relative ">
        <div className=" flex flex-col justify-center">
          <span className=" text-[#969798] text-[12px] text-center ">
            WHO IS LANSTELLAR FOR?
          </span>
          <h2 className=" text-[32px] text-[#212121] font-bold font-inter text-center">
            Our Target Audience{" "}
          </h2>
        </div>
        <div className=" w-[94%] mx-auto absolute  border mt-10 border-dashed h-0.5 "></div>

        <div className="flex justify-between gap-0 z-50">
          {audiences.map((item, index) => (
            <div key={index} className=" flex gap-0">
              <div className="flex flex-col items-center text-center justify-center">
                <div className=" w-16 h-16 flex items-center justify-center rounded-lg mb-3">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="w-16 h-16 z-50"
                  />
                </div>
                <p className="text-[#555555] text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
