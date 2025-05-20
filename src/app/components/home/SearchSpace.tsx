import React from "react";
import { Button } from "@/components/ui/button";
export const SearchSpace = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-[1300px] mx-auto py-20">
        <h1 className="text-[30px] font-bold mb-2">
          Our Search Space Products
        </h1>
        <p className="mb-8 w-[800px] font-medium">
          At Moto Flex, we offer a complete range of automotive solutions — from
          premium cars and powerful motorcycles to high-quality spare parts.
          Whether you’re upgrading your ride or replacing a part, our products
          are built to deliver performance, reliability, and style.
        </p>
        <div className="grid grid-cols-3 gap-10 showcase-home">
          <div
            className="h-[400px] relative bg-cover bg-center rounded-[10px] p-6 pb-8 flex flex-col justify-end"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          >
            <div className="relative z-10">
              <h1 className="text-[#fff] text-[25px] font-bold ">Buy Cars</h1>
              <p className="text-[#fff] font-medium text-[14px] mt-3 mb-6">
                Explore our wide range of reliable, top-quality cars at
                unbeatable prices. Buy with confidence and drive home your
                perfect ride today.
              </p>
              <Button className="h-[40px] text-[14px] px-5 bg-[#FF4E20] hover:bg-[#fff] hover:text-[#000]  cursor-pointer rounded-[99px]">
                Search Cars
              </Button>
            </div>
            <div className="h-[400px] rounded-[10px] w-full absolute left-0 top-0 bg-gradient-to-t from-[#000000ed] to-[transparent]"></div>
          </div>
          <div
            className="h-[400px] relative bg-cover bg-center rounded-[10px] p-6 pb-8 flex flex-col justify-end"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1622185135825-d34b40aa03ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          >
            <div className="relative z-10">
              <h1 className="text-[#fff] text-[25px] font-bold ">Buy Bikes</h1>
              <p className="text-[#fff] font-medium text-[14px] mt-3 mb-6">
                Discover powerful and stylish motorcycles built for every road
                and rider. Buy your perfect bike today and ride with confidence
                and freedom.
              </p>
              <Button className="h-[40px] text-[14px] px-5 bg-[#FF4E20] hover:bg-[#fff] hover:text-[#000]  cursor-pointer rounded-[99px]">
                Search Bikes
              </Button>
            </div>
            <div className="h-[400px] rounded-[10px] w-full absolute left-0 top-0 bg-gradient-to-t from-[#000000ed] to-[transparent]"></div>
          </div>
          <div
            className="h-[400px] relative bg-cover bg-center rounded-[10px] p-6 pb-8 flex flex-col justify-end"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          >
            <div className="relative z-10">
              <h1 className="text-[#fff] text-[25px] font-bold ">
                Buy Spare Parts
              </h1>
              <p className="text-[#fff] font-medium text-[14px] mt-3 mb-6">
                Get high-quality, genuine spare parts to keep your ride running
                smoothly. Shop now for reliable performance and long-lasting
                durability.
              </p>
              <Button className="h-[40px] text-[14px] px-5 bg-[#FF4E20] hover:bg-[#fff] hover:text-[#000]  cursor-pointer rounded-[99px]">
                Search Cars
              </Button>
            </div>
            <div className="h-[400px] rounded-[10px] w-full absolute left-0 top-0 bg-gradient-to-t from-[#000000ed] to-[transparent]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
