"use client";
import { Input } from "@/components/ui/input";
import { Box } from "../components/car/Box";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/Footer";
import { getCars } from "@/api/Car";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getCars(setdata);
  }, []);
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={1} />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">Cars</h1>

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
                    Model
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Car Model"
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
                    placeholder="Enter Car Price"
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
                    placeholder="Enter Car Year"
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Mileage
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Car Mileage"
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Color
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Car Color"
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Condition
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Enter Car Condition"
                  />
                </li>
                <li>
                  <Button className="h-[50px] w-full rounded-[4px] cursor-pointer">
                    Filter Vehicle
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Found {data.length} vehicles</h1>
            {data.map((EachData: any) => (
              <Box
                data={EachData}
                id={EachData._id}
                key={EachData._id}
                heading={EachData.name}
                img={EachData.images[0]}
                price={EachData.price}
                damage={EachData.damage}
                driven={EachData.driven}
                type={EachData.type}
                geartype={EachData.geartype}
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
