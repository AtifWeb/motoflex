import { Input } from "@/components/ui/input";
import { Box } from "../components/parts/Box";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={12} />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">
          Contact Us
        </h1>

        <div className=" mt-8  flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="text-[16px]">Enter Full name</label>
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] rounded-[4px] px-5 !text-[15px]"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text-[16px]">Enter Email</label>
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] rounded-[4px] px-5 !text-[15px]"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text-[16px]">Enter Phone Number</label>
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] rounded-[4px] px-5 !text-[15px]"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text-[16px]">Enter Your Message</label>

            <Textarea
              className="w-full h-[120px] bg-[#F7F7F7] rounded-[4px] px-5 py-3 !text-[15px] resize-none"
              placeholder="Enter Your Message"
            />
          </div>
          <Button className="h-[60px] font-semibold !text-[16px] mt-3 w-full cursor-pointer rounded-[10px] bg-gradient-to-b from-[#689ffd] to-[#4D8CF5]">
            Contact Us
          </Button>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
