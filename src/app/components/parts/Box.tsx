"use client";
import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
export const Box = ({ img, heading, price }: any) => {
  const router = useRouter();
  return (
    <div className="grid component-area grid-cols-[300px_1fr_180px] mt-4 boxshadow rounded-[10px] bg-[#fff] p-2">
      <img src={img} alt="" className="w-full" />
      <div className="p-3 flex flex-col">
        <h1 className="font-black text-[20px]">{heading}</h1>
        <p className="font-semibold text-[18px] flex-1">{price}</p>

        <p className="text-[16px] font-semibold">Rules</p>

        <div className="grid grid-cols-2 gap-1 mt-2">
          <div className="flex items-center gap-1">
            <LocalGasStationIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">Min. Order: 4 pieces</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-2  pb-3 pr-3 pl-4 border-l-[1px] border-l-[#00000064]">
        <Button
          onClick={() => router.push("/spare_parts/123")}
          className="h-[50px] font-semibold !text-[16px] mt-7 w-full cursor-pointer rounded-[10px] bg-gradient-to-b from-[#ef7253] to-[#FF4E20]"
        >
          Details
        </Button>
        <Link
          href="/checkout"
          className="h-[50px] flex items-center justify-center text-[#fff] font-semibold !text-[16px]  w-full cursor-pointer rounded-[10px] bg-gradient-to-b from-[#689ffd] to-[#4D8CF5]"
        >
          Place Order
        </Link>
      </div>
    </div>
  );
};
