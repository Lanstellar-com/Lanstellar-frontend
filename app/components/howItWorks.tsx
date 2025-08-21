import Image from "next/image";
import React from "react";

const steps = [
  {
    id: "01",
    title: "Tokenize",
    description:
      "Upload your asset for AI powered verification. We’ll mint a secure NFT onchain.",
    image: "/upload.svg",
  },
  {
    id: "02",
    title: "Loan",
    description:
      "Once verified, request a stablecoin loan with your verified asset as collateral.",
    image: "/loan.svg",
  },
  {
    id: "03",
    title: "Grow",
    description:
      "Use the funds to grow your business. Repay with interest, reclaim your asset.",
    image: "/grow.svg",
  },
];

const HowItWorks = () => {
  return (
    <section className="p-[64px]">
      {/* Section Title */}
      <div className="flex flex-col justify-start mb-12">
        <span className="text-[#969798] text-[12px] tracking-wide">
          SIMPLE 3 STEP FLOW
        </span>
        <h2 className="text-[32px] text-[#212121] font-bold font-inter">
          How Lanstellar Works..
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white font-inter rounded-xl border border-gray-200 shadow-sm flex flex-col"
          >
            <div className=" p-6 space-y-3 ">
              <span className=" text-stroke font-semibold text-[18px] text-transparent mb-2">
                {step.id}
              </span>

              <h3 className="text-[18px] font-bold text-[#212121] mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-[#555555] mb-6">{step.description}</p>
            </div>
            <div
              className={`mt-auto flex justify-end ${
                index === 1 ? "pr-8" : "pl-8"
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={193}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
