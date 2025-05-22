import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Link from "next/link";
export const ProductSell = () => {
  return (
    <div className="bg-[#171616]">
      <div className="max-w-[1300px] mx-auto py-20">
        <h1 className="text-[#fff] text-[40px] text-center font-bold">
          Products We Sell
        </h1>
        <p className="text-[#fff] text-[18px] w-[700px] mx-auto mt-2 leading-[30px] text-center">
          At Moto Flex, we bring motion to life. Whether you’re searching for
          your dream car, a high-performance motorcycle, or reliable spare parts
          — we’ve got you covered. Our commitment to quality, value, and service
          ensures that every journey starts right here. Discover trusted
          vehicles, premium components, and a passion for the road — all under
          one brand.
        </p>
        <div className="grid grid-cols-3 gap-10  w-[70%] mx-auto mt-8 boxes-home-area">
          <Link href="/car" className="bg-[#504f4f] p-7 rounded-[10px]">
            <div className="h-[60px] w-[60px] bg-[#171616] flex items-center justify-center rounded-[15px] mb-4">
              <TimeToLeaveIcon fontSize="large" className="text-[#fff]" />
            </div>
            <h1 className="text-[#fff] font-semibold text-[24px]">Cars</h1>
            <p className="text-[#fff] text-[15px] mt-2 leading-[25px]">
              Explore products and suppliers for your business from millions of
              offerings worldwide.
            </p>
          </Link>
          <Link href="/bike" className="bg-[#504f4f] p-7 rounded-[10px]">
            <div className="h-[60px] w-[60px] bg-[#171616] flex items-center justify-center rounded-[15px] mb-4">
              <TwoWheelerIcon fontSize="large" className="text-[#fff]" />
            </div>
            <h1 className="text-[#fff] font-semibold text-[24px]">Bikes</h1>
            <p className="text-[#fff] text-[15px] mt-2 leading-[25px]">
              Explore products and suppliers for your business from millions of
              offerings worldwide.
            </p>
          </Link>
          <Link href="/spare_parts" className="bg-[#504f4f] p-7 rounded-[10px]">
            <div className="h-[60px] w-[60px] bg-[#171616] flex items-center justify-center rounded-[15px] mb-4">
              <SettingsSuggestIcon fontSize="large" className="text-[#fff]" />
            </div>
            <h1 className="text-[#fff] font-semibold text-[24px]">
              Spare Parts
            </h1>
            <p className="text-[#fff] text-[15px] mt-2 leading-[25px]">
              Explore products and suppliers for your business from millions of
              offerings worldwide.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
