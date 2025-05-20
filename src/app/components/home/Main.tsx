"use client";
import React from "react";
import { HeaderHome } from "../HeaderHome";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Main = () => {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
      className="h-[600px] bg-cover bg-center"
    >
      <HeaderHome />

      <div className="max-w-[1300px] mx-auto z-20 mt-[100px] relative">
        <h1 className="text-[#fff] text-[50px] font-bold w-[700px] leading-[65px]">
          Moto Flex — Drive the Future, Ride with Confidence
        </h1>

        <div className="bg-[#fff] rounded-[99px] w-[700px] flex items-center mt-8 relative">
          <Input
            className="w-full h-[55px] border-0 text-[18px] rounded-[99px] px-6"
            placeholder="Enter Brand"
          />

          <Button
            onClick={() => router.push("/car")}
            className="h-[50px] absolute right-1 text-[15px] px-8 bg-[#FF4E20]  cursor-pointer rounded-[99px]"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
