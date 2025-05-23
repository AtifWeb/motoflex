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
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-[18px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="text-[#fff] text-[13px]">Pakistan</p>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-[18px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                  />
                </svg>
                <p className="text-[#fff] text-[13px]">English</p>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-[14px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <p className="text-[#fff] text-[13px]">+923228742433</p>
              </div>

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
