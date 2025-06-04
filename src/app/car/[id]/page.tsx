"use client";
import { Button } from "@/components/ui/button";
import { Header } from "@/app/components/Header";
import { useRouter } from "next/navigation";
import { Footer } from "@/app/components/Footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { useEffect, useState } from "react";
import { getCarById } from "@/api/Car";
export default function Home() {
  const router = useRouter();
  const [data, setdata] = useState<any>(null);

  useEffect(() => {
    const url = window.location.href;
    const id = url.split("/car/")[1];
    getCarById(id, setdata);
  }, []);
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={1} />
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black uppercase text-[30px]">{data?.name}</h1>
        </div>
        <div className="flex items-center gap-2 mt-2 top_range_area">
          <p className="text-[17px] border-[1px] border-[#000] px-3 py-2 rounded-[6px]">
            <span className="font-bold">Vehicle Price: {data?.price}</span>
          </p>
        </div>
        <Splide
          aria-label="My Favorite Images"
          className="my-10 hidden splide-slide-custom"
          options={{
            pagination: false,
          }}
        >
          {data?.images.map((eachImg: any, key: any) => (
            <SplideSlide key={key}>
              <img
                src={eachImg}
                alt=""
                className="w-full object-cover rounded-[10px]"
              />
            </SplideSlide>
          ))}
        </Splide>

        <div className="grid grid-cols-3 mt-3 gap-2">
          {data?.images.map((EachImage: any, key: any) => (
            <img
              key={key}
              src={EachImage}
              alt=""
              className="h-[300px] w-full object-cover rounded-[5px]"
            />
          ))}
        </div>

        <div className="bg-[#fff] p-6 rounded-[10px] mt-3">
          <h1 className="text-[22px] font-bold pb-4 border-b-[1px] border-b-[#00000035]">
            Vehicle characteristics
          </h1>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <p className="text-[17px]">
              <span className="font-bold">Damage:</span> {data?.damage}
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Gear Type:</span> {data?.geartype}
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Year:</span> {data?.year}
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Fuel Type:</span> {data?.petroltype}
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Drive:</span> {data?.type}
            </p>{" "}
            <p className="text-[17px]">
              <span className="font-bold">Mileage:</span> {data?.driven} KM
            </p>
          </div>
        </div>

        <div className="bg-[#fff] p-6 rounded-[10px] mt-3">
          <h1 className="text-[22px] font-bold pb-4 border-b-[1px] border-b-[#00000035]">
            Vehicle Description
          </h1>
          <p className="mt-4">{data?.description}</p>
        </div>
        <div className="bg-[#fff] hidden p-6 rounded-[10px] mt-3">
          <h1 className="text-[22px] font-bold pb-4 border-b-[1px] border-b-[#00000035]">
            Equipment
          </h1>
          <ul className="grid grid-cols-3 mt-4 gap-2">
            <li className="">Front Airbags / Side Airbag / Curtain Airbag</li>
            <li>ABS (Anti-lock Brake System)</li>
            <li>ESP / ESC (Electronic Stability Program / Control)</li>
            <li>Rear view camera</li>
            <li>AEB (Autonomous Emergency Braking)</li>
            <li>Navigation system</li>
            <li>Bluetooth / USB</li>
            <li>Power Trunk</li>
            <li>Cruise control</li>
            <li>Heating Seat</li>
            <li>Steering Wheel Control / Steering Remocon</li>
            <li>ECM (Electrochromic mirror)</li>
            <li>Hi-Pass System</li>
            <li>Rain Sensor, Light Sensor</li>
            <li>Radio, CD Player, DVD Player, CD Changer</li>
          </ul>
        </div>

        <div className="flex items-center  gap-2 mt-5">
          <Button
            onClick={() => {
              window.sessionStorage.removeItem("order");

              let cart = window.sessionStorage.getItem("cart");

              if (cart) {
                let cart_new = [...JSON.parse(cart), data];
                window.sessionStorage.setItem("cart", JSON.stringify(cart_new));
              } else {
                window.sessionStorage.setItem("cart", JSON.stringify([data]));
              }

              router.push("/cart");
            }}
            className="h-[40px] font-semibold !text-[16px]  w-[140px] cursor-pointer rounded-[10px] bg-gradient-to-b from-[#ef7253] to-[#FF4E20]"
          >
            Add To Cart
          </Button>
          <Button
            onClick={() => {
              window.sessionStorage.setItem("order", JSON.stringify([data]));
              router.push("/checkout");
            }}
            className="h-[60px] font-semibold !text-[16px]  w-[120px] cursor-pointer rounded-[10px] bg-gradient-to-b from-[#689ffd] to-[#4D8CF5]"
          >
            Place Order
          </Button>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
