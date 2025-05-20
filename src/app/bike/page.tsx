import { Input } from "@/components/ui/input";
import { Box } from "../components/bike/Box";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
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
            <h1>Found 20 Bikes</h1>
            <Box
              heading="Chinese Bikes Other 2024 for Sale"
              price="$884.99"
              img="https://cache1.pakwheels.com/ad_pictures/9984/ducati-other-21-2024-99843651.webp"
            />
            <Box
              heading="Chinese Bikes Other 2025 for Sale"
              price="$700"
              img="https://cache4.pakwheels.com/ad_pictures/1147/chinese-bikes-other-2025-114729395.webp"
            />
            <Box
              heading="Sigma Valentino 250 2025 for Sale"
              price="$900.99"
              img="https://cache2.pakwheels.com/ad_pictures/1147/chinese-bikes-other-2025-114728939.webp"
            />
            <Box
              heading="Suzuki Bike 2025"
              price="$900"
              img="https://cache1.pakwheels.com/ad_pictures/1217/suzuki-gs-150-2022-121748711.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
