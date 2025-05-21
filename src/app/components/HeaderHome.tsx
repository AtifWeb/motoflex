import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const HeaderHome = () => {
  return (
    <div className="z-20 relative mt-3">
      <div className="flex items-center justify-between max-w-[1300px] mx-auto gap-7">
        <img src="/images/logo-black.png" className="w-[150px]" alt="" />

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-5 mr-6 header-home-links">
            <Link
              href="/car"
              className="text-[#fff]  text-[16px] uppercase font-bold"
            >
              Cars
            </Link>
            <Link
              href="/bike"
              className="text-[#fff]  text-[16px] uppercase font-bold"
            >
              Bikes
            </Link>
            <Link
              href="/spare_parts"
              className="text-[#fff]  text-[16px] uppercase font-bold"
            >
              Spare Parts
            </Link>
          </div>

          <Button className="h-[45px] text-[15px] px-6 bg-[#fff] text-[#171616]  cursor-pointer rounded-[99px] hover:text-[#fff]">
            Sign in
          </Button>

          <Button className="h-[45px] text-[15px] px-6 bg-[#FF4E20]  cursor-pointer rounded-[99px]">
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};
