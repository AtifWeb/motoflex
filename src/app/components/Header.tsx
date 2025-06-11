"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const Header = ({ active }: any) => {
  const router = useRouter();
  const [menu, setmenu] = useState(false);
  return (
    <>
      <aside
        className={`h-[100vh] duration-300 w-[200px] px-3 bg-[#fff] fixed top-0 -left-[300px] z-20 ${
          menu && "!left-0"
        } `}
      >
        <Link href="/">
          <img src="/images/logo-white.png" className="w-[150px]" alt="" />
        </Link>
        <div className="flex flex-col gap-2 mt-7">
          <Link href="/" className="text-[18px] font-bold uppercase">
            HOME
          </Link>
          <Link href="/about" className="text-[18px] font-bold uppercase">
            about us
          </Link>
          <Link href="/contact" className="text-[18px] font-bold uppercase">
            contact us
          </Link>
        </div>
      </aside>
      <div className="header">
        <div className="flex items-center max-w-[1300px] mx-auto gap-7">
          <Link href="/">
            <img src="/images/logo-white.png" className="w-[150px]" alt="" />
          </Link>

          <div className="flex-1 searchinput">
            <Input
              className="w-full h-[50px] rounded-[4px] px-5"
              placeholder="Enter Brand"
            />
          </div>

          <div className="flex items-center gap-1">
            <Button className="h-[50px] rounded-[4px] cursor-pointer">
              Search Vehicle
            </Button>
            <Button
              className="h-[50px] rounded-[4px] cursor-pointer"
              variant="outline"
            >
              Sign in
            </Button>
            <button className="hidden menu-icon" onClick={() => setmenu(!menu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-[#171616] mt-2">
          <div className="flex items-center max-w-[1300px] justify-between mx-auto px-3">
            <div className="flex items-center gap-3">
              <Link
                href="/car"
                className={`text-[#fff] py-3  px-3  text-[14px]  uppercase font-bold hover:bg-[#FF4E20] flex items-center gap-1 ${
                  active == 1 && "bg-[#FF4E20]"
                }`}
              >
                Cars
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[15px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <Link
                className={`text-[#fff] py-3  px-3  text-[14px]  uppercase font-bold hover:bg-[#FF4E20] flex items-center gap-1 ${
                  active == 2 && "bg-[#FF4E20]"
                }`}
                href="/bike"
              >
                Motorcycles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[15px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <Link
                className={`text-[#fff] py-3  px-3  text-[14px]  uppercase font-bold hover:bg-[#FF4E20] flex items-center gap-1 ${
                  active == 3 && "bg-[#FF4E20]"
                }`}
                href="/spare_parts"
              >
                Spare Parts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[15px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <div>
                <svg
                  onClick={() => router.push("/cart")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="size-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
