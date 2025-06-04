"use client";
import { Input } from "@/components/ui/input";
import { Box } from "../components/bike/Box";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { CountriesOperated } from "../components/CountriesOperated";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { getBikes } from "@/api/Bike";
export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getBikes(setdata);
  }, []);
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={2} />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">Bikes</h1>

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
                    Location
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Location"
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Search by Keyword
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Search by Keyword"
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Year
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Year"
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
                    placeholder="Enter Price "
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Registered In
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Price "
                  />
                </li>

                <li>
                  <Button className="h-[50px] w-full rounded-[4px] cursor-pointer">
                    Filter Bikes
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Found {data.length} Bikes</h1>
            {data.map((EachData: any) => (
              <Box
                data={EachData}
                key={EachData._id}
                id={EachData._id}
                heading={EachData?.name}
                price={EachData?.price}
                img={EachData?.images[0]}
                driven={EachData.driven}
                year={EachData.year}
                petroltype={EachData.petroltype}
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
