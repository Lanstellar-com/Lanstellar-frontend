import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="relative h-screen bg-[#F5F5F5] bg-[url('/heropatern.svg')] bg-cover bg-center text-white flex flex-col items-center justify-center ">
      <Image
        src="/heronoise.png"
        alt="hero"
        width={1200}
        height={800}
        className="absolute top-0 left-0 w-[1700px] h-full z-0 opacity-20"
      />

      <div className="relative z-20 text-center  px-4 my-20">
        <h1 className="text-[64px] text-[#212121] leading-[72px] font-medium font-helvetica">
          Bridging traditional assets with
          <br /> decentralized finance.
        </h1>

        <div className="mt-5 flex justify-center gap-4">
          <Button className=" h-[56px] w-[190px] font-inter text-[16px] bg-gradient-to-t from-[#2E2E2E] to-[#4A4A4A] text-white px-6 py-3 rounded-full">
            Request a Loan
          </Button>
          <Button className="bg-white h-[56px] w-[190px] font-inter text-[16px] text-black px-6 py-3 rounded-full">
            Start Investing
          </Button>
        </div>
      </div>

      <div className="absolute w-[200px] h-[200px] bottom-10 left-0 mb-5">
        <Image
          src="/assets.png"
          alt="coins"
          width={200}
          height={235}
          className=" object-cover"
        />
      </div>
      <div className="absolute bottom-0 z-20 w-full ">
        <div className="flex items-center justify-between px-[100px] py-6">
          <div className="flex items-center">
            <Image src="/logo2.svg" alt="logo" width={120} height={40} />
          </div>

          <nav>
            <ul className="flex gap-[40px] font-inter text-[18px] font-medium text-[#151515]">
              <li className="cursor-pointer">Demo</li>
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
