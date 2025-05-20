import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="bg-[#fff] grid grid-cols-2 checkout-wrapper">
      <div className="p-10 h-[100vh] overflow-auto noscroll">
        <h1 className="text-[30px] font-bold">Review & Confirm Your Order</h1>
        <p className="mt-2">
          You’re just one step away from completing your purchase. Please review
          your order details carefully before proceeding. Make sure your billing
          information is accurate and your selected payment method is valid.
          Once your payment is confirmed, you will receive an order summary via
          email. If you have any questions or need assistance.
        </p>

        <div className="mt-10">
          <h1 className="text-[20px] font-bold">Contact Information</h1>
          <div className="mt-5 border-[1.5px] border-[#3d81fe86] p-4 rounded-[10px] flex flex-col gap-3">
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] rounded-[4px] px-5 !text-[15px]"
              placeholder="Enter Full Name"
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Email"
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Phone Number"
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Address"
            />

            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Country"
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter State"
            />

            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter City"
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter ZIP Code"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[20px] mt-7 font-bold">Payment Information</h1>

          <div className="mt-5 border-[1.5px] border-[#3d81fe86] p-4 rounded-[10px] grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-[#F7F7F7] to-[#F7F7F7] p-3 w-[150px] rounded-[10px]">
              <img src="/images/card.svg" className="w-[30px]" alt="" />
              <h1 className="text-[#0C0C0C] text-[14px] uppercase font-bold mt-1">
                Card Payment
              </h1>
            </div>

            <div className="relative col-span-2">
              <Input
                className="w-full h-[60px] bg-[#F7F7F7]  text-[16px] rounded-[4px] px-5"
                placeholder="Enter Cardholder Name"
              />
              <div className="flex items-center absolute right-2 top-[10px]">
                <img src="/images/master.png" className="w-[40px]" alt="" />
                <img src="/images/visa.png" className="w-[30px]" alt="" />
                <img src="/images/america.png" className="w-[40px]" alt="" />
                <img src="/images/union.png" className="w-[45px]" alt="" />
              </div>
            </div>
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Expiration Date"
            />
            <div className="relative">
              <Input
                className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
                placeholder="Security Code"
              />
              <img
                src="/images/security.svg"
                className="w-[30px] absolute right-3 top-4"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 mt-4 rounded-[10px]">
          <div className="mb-3 pb-[20px] border-b-[1px] border-b-[#afb0b2]">
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

          <div className="mt-2 flex items-center justify-between">
            <h1 className="text-[18px] uppercase font-bold">Total Amount</h1>
            <h1 className="font-bold text-[18px]">$2200</h1>
          </div>
        </div>

        <div className="flex items-center px-5 mt-5  gap-2">
          <Checkbox id="terms" className="bg-[#F7F7F7] w-[20px] h-[20px]" />
          <label
            htmlFor="terms"
            className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[16px] font-semibold"
          >
            Pay on arrival option
          </label>
        </div>

        <Button className="h-[60px] font-semibold !text-[16px] mt-7 w-full cursor-pointer rounded-[10px] bg-gradient-to-b from-[#689ffd] to-[#4D8CF5]">
          Place Order
        </Button>
      </div>
      <div className="h-[100vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}
