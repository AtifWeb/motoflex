import { Input } from "@/components/ui/input";
import { Box } from "../components/parts/Box";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
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
                    Supplier Country
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Supplier Country"
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
                    placeholder="Enter Condition"
                  />
                </li>
                <li>
                  <label
                    htmlFor="#"
                    className="font-bold text-[15px] mb-1 block"
                  >
                    Material
                  </label>
                  <Input
                    className="w-full h-[50px] bg-[#fff] rounded-[4px] px-5"
                    placeholder="Material"
                  />
                </li>
                <li>
                  <Button className="h-[50px] w-full rounded-[4px] cursor-pointer">
                    Filter Parts
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Found 20 Spare Parts</h1>
            <Box
              heading="PQ Passenger Racing Car Wheels Te37 Other Auto"
              price="$59.99-84.99"
              img="https://s.alicdn.com/@sc04/kf/H419d171895c1450ea14d6e44676122abS.png_300x300.jpg"
            />
            <Box
              heading="SJC Car Parts for Audi A7 Headlights Car Accessories RS7 Daytime "
              price="$450.00-500.00"
              img="https://s.alicdn.com/@sc04/kf/Hb7a5ca9f06fe4a57b1fde6413850bfebH.jpg_300x300.jpg"
            />
            <Box
              heading="Car Parts Secondary Air Smog Pump Fits 2011-2016 Toyotas Tacomas"
              price="$200.00-225.00"
              img="https://s.alicdn.com/@sc04/kf/Heb88cb09ed1c4134adaef4da866b77dcD.jpg_300x300.jpg"
            />
            <Box
              heading="Car Parts for Ford Mustang Pedal Accelerator 2-80163, 70108"
              price="$176.00-219.00"
              img="https://s.alicdn.com/@sc04/kf/S35c5b87ec44247ebb1e0e56948059df2L.jpg_300x300.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
