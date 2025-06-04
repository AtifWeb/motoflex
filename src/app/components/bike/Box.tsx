"use client";
import React from "react";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Box = ({
  id,
  img,
  heading,
  price,
  driven,
  year,
  petroltype,
  data,
  buy = true,
}: any) => {
  const router = useRouter();
  return (
    <div className="grid component-area grid-cols-[300px_1fr_180px] mt-4 boxshadow rounded-[10px] bg-[#fff] p-2">
      <img src={img} alt="" className="w-full h-[220px] object-cover" />
      <div className="p-3 flex flex-col">
        <h1 className="font-black text-[20px]">{heading}</h1>
        <p className="font-black text-[20px] mb-2">{year}</p>

        <p className="text-[20px] font-semibold flex-1">{price}</p>

        <div className="grid grid-cols-2 gap-1 mt-2">
          <div className="flex items-center gap-1">
            <DateRangeIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">{year}</h1>
          </div>

          <div className="flex items-center gap-1">
            <SettingsSuggestIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">{petroltype}</h1>
          </div>
          <div className="flex items-center gap-1">
            <NetworkCheckIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">{driven} km</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-2  pb-3 pr-3 pl-4 border-l-[1px] border-l-[#00000064]">
        <Button
          onClick={() => router.push(`/bike/${id}`)}
          className="h-[50px] font-semibold !text-[16px] mt-7 w-full cursor-pointer rounded-[10px] bg-gradient-to-b from-[#ef7253] to-[#FF4E20]"
        >
          Details
        </Button>
        <Button
          onClick={() => {
            window.sessionStorage.setItem("order", JSON.stringify([data]));
            router.push("/checkout");
          }}
          className="h-[50px] flex items-center justify-center text-[#fff] font-semibold !text-[16px]  w-full cursor-pointer rounded-[10px] bg-gradient-to-b from-[#689ffd] to-[#4D8CF5]"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};
