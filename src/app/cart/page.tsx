"use client";
import { Box as BikeBox } from "../components/bike/Box";
import { Box as CarBox } from "../components/car/Box";
import { CountriesOperated } from "../components/CountriesOperated";

import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Footer } from "../components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-[#F9F9F9]">
      <Header />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">Cart</h1>

        <div className="grid grid-cols-[1fr_300px] gap-8 mt-8 cart-grid">
          <div>
            <h1 className="text-[20px] font-bold">Cart Motoflex</h1>
            <CarBox
              heading="Honda Accord"
              price="$2000"
              img="https://img.plc.auction/medium/img5/01/1998/2/219/6ae663c81fdc8d8906d2d53103772ca9/0f1caec24d334fc1ae691b6268afdb20_hrs.jpg"
              buy={false}
            />
            <BikeBox
              heading="Suzuki Bike 2025"
              price="$900"
              img="https://cache1.pakwheels.com/ad_pictures/1217/suzuki-gs-150-2022-121748711.webp"
              buy={false}
            />
          </div>
          <div>
            <div className="bg-[#EAECF0] rounded-[10px] p-5 sticky top-5">
              <h1 className="text-[20px] text-[#000] font-bold">Cart Order</h1>

              <div className="mt-6 mb-3 pb-[20px] border-b-[1px] border-b-[#afb0b2]">
                <h1 className="text-[13px] mb-2 font-bold">Product One</h1>
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="font-bold">Honda Accord</h1>
                    <p className="font-bold">1998</p>
                  </div>
                  <p className="font-bold">$900</p>
                </div>
              </div>
              <div className="mt-2 mb-3 pb-[20px] border-b-[1px] border-b-[#afb0b2]">
                <h1 className="text-[13px] mb-2 font-bold">Product Two</h1>
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="font-bold">Suzuki Bike 2025</h1>
                    <p className="font-bold">1998</p>
                  </div>
                  <p className="font-bold">$900</p>
                </div>
              </div>

              <div className="mt-2 pb-[20px] flex items-center justify-between">
                <h1 className="text-[18px] uppercase font-bold">
                  Total Amount
                </h1>
                <h1 className="font-bold text-[18px]">$2200</h1>
              </div>
              <Button
                onClick={() => router.push("/checkout")}
                className="h-[50px] w-full rounded-[4px] cursor-pointer"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
