"use client";
import { Input } from "@/components/ui/input";
import { Box } from "../components/parts/Box";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { getParts } from "@/api/Part";
export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getParts(setdata);
  }, []);
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={3} />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">
          Spare Parts
        </h1>

        <div className="grid grid-cols-[300px_1fr] gap-8 mt-8 showcase-main-type">
          <div>
            <div className="bg-[#EAECF0] rounded-[10px] p-5 sticky top-5">
              <h1 className="text-[20px] text-[#000] font-bold">Filters</h1>

              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Min. Order
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Min. Order"
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Price
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Price"
                  />
                </li>

                <li>
                  <Button className="h-[50px] w-full rounded-[4px] cursor-pointer">
                    Filter Spare Parts
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Found {data.length} Spare Parts</h1>
            {data.map((EachData: any) => (
              <Box
                data={EachData}
                id={EachData?._id}
                key={EachData._id}
                heading={EachData.name}
                price={EachData.price}
                rules={EachData.minorder}
                img={EachData.images[0]}
              />
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
