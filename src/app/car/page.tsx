import { Input } from "@/components/ui/input";
import { Box } from "../components/car/Box";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={1} />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">Cars</h1>

        <div className="grid grid-cols-[300px_1fr] gap-8 mt-8">
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
              </ul>
            </div>
          </div>
          <div>
            <h1>Found 3 826 617 vehicles</h1>
            <Box
              heading="Honda Accord"
              img="https://img.plc.auction/medium/img5/01/1998/2/219/6ae663c81fdc8d8906d2d53103772ca9/0f1caec24d334fc1ae691b6268afdb20_hrs.jpg"
            />
            <Box
              heading="KIA K5"
              img="https://img.plc.auction/medium/img5/26/2021/872/125236/5c0e9e4cc0bcdfab18c38d910b82d6ad/977d46e661a0a2be3d57362e49aed67c.jpg"
            />
            <Box
              heading="Mercedes Benz CLA 200"
              img="https://img.plc.auction/medium/img5/47/2023/28/140517/3c02f90d8079856c9a546ee23d374469/b9b055508241b88e01cf49897fdabdd0.jpg"
            />
            <Box
              heading="Citroen C5"
              img="https://img.plc.auction/medium/img5/47/2022/54/82576/2fb3250002a670bc636184e60141445c/674d61beaa3df217eb19212cbfbc5956.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
