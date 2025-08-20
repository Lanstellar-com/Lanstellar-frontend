import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[87px] px-[100px] fixed top-0 left-0 right-0 bg-[#151515]/3 backdrop-blur-[2px] z-50">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={120} height={40} />
      </div>

      <nav>
        <ul className="flex gap-[40px] font-inter  text-[18px] font-medium text-[#f4f3f7]">
          <li className="cursor-pointer">Demo</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>

      <div>
        <Button className="bg-white text-black rounded-full px-6 font-inter h-[56px] w-[190px] text-[16px] font-medium">
          Launch App
        </Button>
      </div>
    </div>
  );
};
export default Navbar;
