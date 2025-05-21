"use client";
import { Button } from "@/components/ui/button";
import { Header } from "@/app/components/Header";
import { useRouter } from "next/navigation";
import { Footer } from "@/app/components/Footer";
export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={2} />
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex items-center justify-between">
          <h1 className="font-black uppercase text-[30px]">
            Jeep COMPASS, 2024
          </h1>
        </div>
        <div className="flex items-center gap-2 mt-2 top_range_area">
          <p className="text-[17px] border-[1px] border-[#000] px-3 py-2 rounded-[6px]">
            <span className="font-bold">Vehicle</span> 00000008
          </p>
          <p className="text-[17px] border-[1px] border-[#000] px-3 py-2 rounded-[6px]">
            <span className="font-bold">VIN</span> 3C4NJDAN8RT161099
          </p>
        </div>

        <div className="grid grid-cols-3 mt-3 gap-2">
          <img
            src="https://img.plc.auction/medium/img5/60/2025/10/681b7a185f4b11746631192.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-[5px]"
          />
          <img
            src="https://img.plc.auction/medium/img5/60/2025/10/681b7a2f1327e1746631215.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-[5px]"
          />{" "}
          <img
            src="https://img.plc.auction/medium/img5/60/2025/10/681b7a2f263141746631215.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-[5px]"
          />{" "}
          <img
            src="https://img.plc.auction/medium/img5/60/2025/10/681b7a2f8afa81746631215.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-[5px]"
          />{" "}
          <img
            src="https://img.plc.auction/medium/img5/60/2025/10/681b7a2fb7f9f1746631215.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-[5px]"
          />
          <img
            src="https://img.plc.auction/medium/img5/60/2025/10/681b7a30787241746631216.jpg"
            alt=""
            className="h-[300px] w-full object-cover rounded-[5px]"
          />
        </div>

        <div className="bg-[#fff] p-6 rounded-[10px] mt-3">
          <h1 className="text-[22px] font-bold pb-4 border-b-[1px] border-b-[#00000035]">
            Vehicle characteristics
          </h1>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <p className="text-[17px]">
              <span className="font-bold">Make:</span> Jeep
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Model:</span> Compass
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Year:</span> 2024
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Body Type:</span> Crossover
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Fuel Type:</span> Gasoline
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Drive:</span> All Wheel Drive
            </p>{" "}
            <p className="text-[17px]">
              <span className="font-bold">Mileage:</span> 2 100 km (1 305 mi)
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Transmission:</span> Automatic
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Keys:</span> Yes
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Engine capacity:</span> 2.0 L (2000
              CC)
            </p>
            <p className="text-[17px]">
              <span className="font-bold">Color:</span> Gray
            </p>
          </div>
        </div>

        <div className="bg-[#fff] p-6 rounded-[10px] mt-3">
          <h1 className="text-[22px] font-bold pb-4 border-b-[1px] border-b-[#00000035]">
            Vehicle Description
          </h1>
          <p className="mt-4">
            Jeep Compass 2024 — jak nowy! Na sprzedaż całkowicie idealny Jeep
            Compass z rocznika 2024 i przebiegiem zaledwie 2100 km. Samochód bez
            żadnych uszkodzeń — w stanie fabrycznym! Wszystko działa
            perfekcyjnie, jeździ świetnie, gotowy do drogi. Nowoczesny,
            niezawodny i ekonomiczny SUV z bogatym wyposażeniem. Idealna opcja
            dla osób szukających nowego auta — bez czekania i ryzyka.
          </p>
        </div>
        <div className="bg-[#fff] p-6 rounded-[10px] mt-3">
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
        <div className="flex items-center gap-2 mt-5">
          <Button
            onClick={() => router.push("/cart")}
            className="h-[40px] font-semibold !text-[16px]  w-[140px] cursor-pointer rounded-[10px] bg-gradient-to-b from-[#ef7253] to-[#FF4E20]"
          >
            Add To Cart
          </Button>
          <Button
            onClick={() => router.push("/checkout")}
            className="h-[40px] font-semibold !text-[16px]  w-[140px] cursor-pointer rounded-[10px] bg-gradient-to-b from-[#ef7253] to-[#FF4E20]"
          >
            Order now
          </Button>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
