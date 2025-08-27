import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" p-5 border-b border-b-[#E5E5E5] px-10 font-fredoka  flex items-center justify-between">
      <div className="">
        {" "}
        <h2 className=" text-[25.84px] text-[#49576D]">
          Welcome <span className=" text-black">Test👋,</span>
        </h2>
      </div>
      <div className="flex items-center gap-2 justify-center w-[156px] h-[34.5px] ">
        <div className="">
          <Link href="/dashboard/account">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <div className=" flex flex-row gap-1 items-center ">
          <div className="bg-gradient-to-r from-[#468FF7] to-[#844CCB] p-[1px] flex justify-center items-center rounded-full">
            <div className="   bg-white rounded-full h-[26px] w-[91px] flex justify-center items-center px-3 mx-auto">
              <h2 className=" text-transparent bg-gradient-to-r from-[#468FF7] to-[#844CCB] bg-clip-text text-[12.6px] ">
                0xb1....5678
              </h2>
            </div>
          </div>
          <div className=" ">
            <DropdownMenu>
              <DropdownMenuTrigger className=" outline-none border-none bg-transparent flex items-center justify-center">
                <ChevronDownIcon className=" text-[#8C94A6]" size={15} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/dashboard/account">
                    <h2 className=" text-[13px] text-[#49576D] hover:bg-[#F4F3F7] px-5 py-2 cursor-pointer">
                      Account
                    </h2>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard/settings">
                    <h2 className=" text-[13px] text-[#49576D] hover:bg-[#F4F3F7] px-5 py-2 cursor-pointer">
                      Settings
                    </h2>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/login">
                    <h2 className=" text-[13px] text-[#49576D] hover:bg-[#F4F3F7] px-5 py-2 cursor-pointer">
                      Logout
                    </h2>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
