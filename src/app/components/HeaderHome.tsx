import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const HeaderHome = () => {
  const router = useRouter();
  const [menu, setmenu] = useState(false);
  return (
    <>
      <aside
        className={`h-[100vh]  duration-300 w-[200px] px-3 bg-[#fff] fixed top-0 -left-[300px] z-50 ${
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
          <Link href="/spare_parts" className="text-[18px] font-bold uppercase">
            contact us
          </Link>
        </div>
      </aside>
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

            <button className="hidden menu-icon" onClick={() => setmenu(!menu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
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
      </div>
    </>
  );
};
