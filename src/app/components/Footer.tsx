"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CountriesOperated } from "./CountriesOperated";

export const Footer = () => {
  const router = useRouter();
  return (
    <>
      <CountriesOperated />
      <div className="footer bg-[#171616] p-5">
        <div className="max-w-[1300px] mx-auto py-10 grid grid-cols-[1.2fr_2fr_1fr]">
          <div className="border-r-[1px] border-r-[#ffffff4a]">
            <img src="/images/logo-black.png" className="w-[150px]" alt="" />
            <div className="mt-7">
              <h1 className="text-[#fff] text-[18px] font-semibold uppercase mb-4">
                Site Navigation
              </h1>
              <ul className="grid grid-cols-2 gap-3">
                <li>
                  <Link
                    href="/"
                    className="text-[#fff] font-semibold uppercase"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/car"
                    className="text-[#fff] font-semibold uppercase"
                  >
                    Cars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bike"
                    className="text-[#fff] font-semibold uppercase"
                  >
                    Bikes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/spare_parts"
                    className="text-[#fff] font-semibold uppercase"
                  >
                    Spare Parts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-[#fff] font-semibold uppercase"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/checkout"
                    className="text-[#fff] font-semibold uppercase"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pl-10">
            <div className="mt-7">
              <h1 className="text-[#fff] text-[18px] font-semibold uppercase mb-4">
                Popular Countries
              </h1>
              <div className="grid grid-cols-3 mt-5 gap-5">
                <div>
                  <a
                    href="https://plc.auction/auction/from-us/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    United States
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-nl/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    Netherlands
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-kr/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    South Korea
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-it/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    Italy
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-fr/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    France
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-es/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    Spain
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-de/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    Germany
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-ca/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    Canada
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-be/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    Belgium
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-at/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    Austria
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://plc.auction/auction/from-ae/sale-type-auction"
                    className="text-[#fff] items-center text-[14px] uppercase"
                  >
                    United Arab Emirates
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-[1px] border-l-[#ffffff4a] pl-10">
            <div className="mt-7">
              <h1 className="text-[#fff] text-[18px] font-semibold uppercase mb-4">
                Our Social Network
              </h1>

              <ul className="flex items-center gap-2">
                <li>
                  <Link
                    href="https://www.instagram.com/motoflexdeals?igsh=MTMycjZrYm92aDF4bA%3D%3D&utm_source=qr"
                    className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#fff] rounded-[99px]"
                  >
                    <InstagramIcon className="text-[#fff]" fontSize="medium" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/share/1HWLaQVcFJ/?mibextid=wwXIfr"
                    className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#fff] rounded-[99px]"
                  >
                    <FacebookIcon className="text-[#fff]" fontSize="medium" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tiktok.com/@motoflexofficial?_t=ZS-8wKS9sOSkDA&_r=1"
                    className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#fff] rounded-[99px]"
                  >
                    <img
                      src="/images/tiktok.svg"
                      className="w-full h-full"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
