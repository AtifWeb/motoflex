"use client";

import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [data, setdata] = useState([]);

  useEffect(() => {
    const cart = window.sessionStorage.getItem("cart") as string;
    const cart_parse = JSON.parse(cart);

    setdata(cart_parse);
    console.log(cart_parse);
  }, []);

  return (
    <div className="bg-[#F9F9F9]">
      <Header />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">Cart</h1>

        <div className="grid grid-cols-[1fr_300px] gap-8 mt-8 cart-grid">
          <div>
            <h1 className="text-[20px] font-bold">Cart Motoflex</h1>
            {data.map((Eachdata: any) => (
              <div
                key={Eachdata._id}
                className="grid component-area grid-cols-[300px_1fr_180px] mt-4 boxshadow rounded-[10px] bg-[#fff] p-2"
              >
                <img
                  src={Eachdata.images[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="p-3 flex flex-col">
                  <h1 className="font-black text-[20px]">{Eachdata.name}</h1>
                  <p className="font-black text-[20px] ">{Eachdata.price}</p>
                  {Eachdata.year && (
                    <p className="font-black text-[20px] ">{Eachdata.year}</p>
                  )}

                  {Eachdata.damage && (
                    <p className="text-[16px] font-semibold">
                      {Eachdata.damage}
                    </p>
                  )}

                  <div className="flex-1 flex flex-col justify-end">
                    <div className="grid grid-cols-2 gap-2">
                      {Eachdata.minorder && (
                        <p className="text-[16px] font-semibold">
                          {Eachdata.minorder}
                        </p>
                      )}

                      {Eachdata.type && (
                        <div className="flex items-center gap-1">
                          <TimeToLeaveIcon
                            fontSize="small"
                            className="text-[#FF4E20]"
                          />
                          <h1 className="text-[14px]">{Eachdata.type}</h1>
                        </div>
                      )}

                      {Eachdata.geartype && (
                        <div className="flex items-center gap-1">
                          <SettingsSuggestIcon
                            fontSize="small"
                            className="text-[#FF4E20]"
                          />
                          <h1 className="text-[14px]">{Eachdata.geartype}</h1>
                        </div>
                      )}

                      {Eachdata.petroltype && (
                        <div className="flex items-center gap-1">
                          <LocalGasStationIcon
                            fontSize="small"
                            className="text-[#FF4E20]"
                          />
                          <h1 className="text-[14px]">{Eachdata.petroltype}</h1>
                        </div>
                      )}

                      {Eachdata.driven && (
                        <div className="flex items-center gap-1">
                          <NetworkCheckIcon
                            fontSize="small"
                            className="text-[#FF4E20]"
                          />
                          <h1 className="text-[14px]">{Eachdata.driven} km</h1>
                        </div>
                      )}

                      {Eachdata.year && (
                        <div className="flex items-center gap-1">
                          <DateRangeIcon
                            fontSize="small"
                            className="text-[#FF4E20]"
                          />
                          <h1 className="text-[14px]">{Eachdata.year}</h1>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-[#EAECF0] rounded-[10px] p-5 sticky top-5">
              <h1 className="text-[20px] text-[#000] font-bold">Cart Order</h1>

              {data.map((Eachdata: any, key: any) => (
                <div
                  key={key}
                  className="mt-6 mb-3 pb-[20px] border-b-[1px] border-b-[#afb0b2]"
                >
                  <h1 className="text-[13px] mb-2 font-bold">
                    Product {key + 1}
                  </h1>
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="font-bold">{Eachdata.name}</h1>
                      {Eachdata.year && (
                        <p className="font-bold">{Eachdata.year}</p>
                      )}
                    </div>
                    <p className="font-bold">{Eachdata.price}</p>
                  </div>
                </div>
              ))}

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
