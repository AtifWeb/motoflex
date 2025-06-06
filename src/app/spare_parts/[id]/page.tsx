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
import { getPartById } from "@/api/Part";
export default function Home() {
  const router = useRouter();

  const [data, setdata] = useState<any>(null);

  useEffect(() => {
    const url = window.location.href;
    const id = url.split("/spare_parts/")[1];
    getPartById(id, setdata);
  }, []);

  return (
    <div className="bg-[#F9F9F9]">
      <Header active={3} />
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black uppercase text-[30px]">{data?.name}</h1>
        </div>
        <div className="flex items-center gap-2 mt-2 top_range_area">
          <p className="text-[17px] border-[1px] border-[#000] px-3 py-2 rounded-[6px]">
            <span className="font-bold">Price {data?.price}</span>
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
          {data?.images.map((eachImg: any, key: any) => (
            <img
              key={key}
              src={eachImg}
              alt=""
              className="h-[300px] w-full object-cover rounded-[5px]"
            />
          ))}
        </div>

        <div className="bg-[#fff] p-6 rounded-[10px] mt-3">
          <h1 className="text-[22px] font-bold pb-4 border-b-[1px] border-b-[#00000035]">
            Vehicle Description
          </h1>
          <p className="mt-4">{data?.description}</p>
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
              window.sessionStorage.setItem("order", JSON.stringify([id]));
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
