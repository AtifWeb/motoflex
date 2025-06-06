"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { postOrder } from "@/api/Order";
export default function Home() {
  const router = useRouter();
  const [payOnArrival, setPayOnArrival] = useState(false);
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [cardholdername, setcardholdername] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [expiry_date, setexpiry_date] = useState("");
  const [cvv, setcvv] = useState("");
  const [active, setactive] = useState(false);
  const [data, setdata] = useState([]);

  const isFormValid = () => {
    return (
      fullname &&
      email &&
      phone &&
      address &&
      country &&
      state &&
      city &&
      zipcode &&
      payOnArrival &&
      cardholdername &&
      cardnumber &&
      expiry_date &&
      cvv
    );
  };

  useEffect(() => {
    const cart = window.sessionStorage.getItem("cart") as string;
    const order = window.sessionStorage.getItem("order") as string;

    let combine = [];

    if (cart) {
      combine = JSON.parse(cart);
    }

    if (order) {
      combine = [...combine, ...JSON.parse(order)];
    }

    console.log(combine);

    setdata(combine);
  }, []);

  const placeOrder = (e: any) => {
    const content = {
      fullname: fullname,
      email: email,
      phone: phone,
      address: address,
      country: country,
      state: state,
      city: city,
      zipcode: zipcode,
      cardholdername: cardholdername,
      cardnumber: cardnumber,
      expiry_date: expiry_date,
      cvv: cvv,
      order: data,
    };
    postOrder(content, setactive);
    console.log(content);
  };

  return (
    <div className="bg-[#fff] grid grid-cols-2 checkout-wrapper">
      <div className="p-10 h-[100vh] overflow-auto noscroll">
        <h1 className="text-[30px] font-bold">Review & Confirm Your Order</h1>
        <p className="mt-2">
          Please ensure all your personal information, shipping address, and
          payment method are accurate and up to date. This information is
          required to process your order smoothly, deliver it to the correct
          location, and complete your payment securely. Incomplete or incorrect
          details may lead to delays or failed transactions. Your data is
          protected and used solely for order fulfillment and customer service
          purposes.
        </p>

        <div className="mt-10">
          <h1 className="text-[20px] font-bold">Contact Information</h1>
          <div className="mt-5 border-[1.5px] border-[#3d81fe86] p-4 rounded-[10px] flex flex-col gap-3">
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] rounded-[4px] px-5 !text-[15px]"
              placeholder="Enter Full Name"
              onChange={(e) => setfullname(e.target.value)}
              value={fullname}
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Phone Number"
              onChange={(e) => setphone(e.target.value)}
              value={phone}
            />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-[20px] font-bold">Shipping Address</h1>
          <div className="mt-5 border-[1.5px] border-[#3d81fe86] p-4 rounded-[10px] flex flex-col gap-3">
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Address"
              onChange={(e) => setaddress(e.target.value)}
              value={address}
            />

            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter Country"
              onChange={(e) => setcountry(e.target.value)}
              value={country}
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter State"
              onChange={(e) => setstate(e.target.value)}
              value={state}
            />

            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter City"
              onChange={(e) => setcity(e.target.value)}
              value={city}
            />
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Enter ZIP Code"
              onChange={(e) => setzipcode(e.target.value)}
              value={zipcode}
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
                onChange={(e) => setcardholdername(e.target.value)}
                value={cardholdername}
              />
              <div className="flex items-center absolute right-2 top-[10px]">
                <img src="/images/master.png" className="w-[40px]" alt="" />
                <img src="/images/visa.png" className="w-[30px]" alt="" />
                <img src="/images/america.png" className="w-[40px]" alt="" />
                <img src="/images/union.png" className="w-[45px]" alt="" />
              </div>
            </div>
            <div className="relative col-span-2">
              <Input
                className="w-full h-[60px] bg-[#F7F7F7]  text-[16px] rounded-[4px] px-5"
                placeholder="Enter Card Number"
                onChange={(e) => setcardnumber(e.target.value)}
                value={cardnumber}
              />
            </div>
            <Input
              className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
              placeholder="Expiration Date"
              onChange={(e) => setexpiry_date(e.target.value)}
              value={expiry_date}
            />
            <div className="relative">
              <Input
                className="w-full h-[60px] bg-[#F7F7F7] text-[16px] rounded-[4px] px-5"
                placeholder="CVV"
                onChange={(e) => setcvv(e.target.value)}
                value={cvv}
              />
              <img
                src="/images/security.svg"
                className="w-[30px] absolute right-3 top-4"
                alt=""
              />
            </div>
            <div className="flex items-center    mt-1  gap-2">
              <Checkbox
                id="terms"
                className="bg-[#F7F7F7] cursor-pointer w-[20px] h-[20px]"
              />
              <label
                htmlFor="terms"
                className="text-sm cursor-pointer  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[16px] font-medium text-[#00000092]"
              >
                Billing is Same as shipping address
              </label>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-4 mt-4 rounded-[10px]">
          {data.map((Eachdata: any, key: any) => (
            <div
              key={key}
              className={`${
                key + 1 != data.length &&
                "mb-3 pb-[20px] border-b-[1px] border-b-[#afb0b2] "
              }`}
            >
              <h1 className="text-[13px] mb-2 font-bold">Product {key + 1}</h1>
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="font-bold">{Eachdata.name}</h1>
                  <p className="font-bold">1998</p>
                </div>
                <p className="font-bold">{Eachdata.price}</p>
              </div>
            </div>
          ))}

          {/* <div className="mt-2 flex items-center justify-between">
            <h1 className="text-[18px] uppercase font-bold">Total Amount</h1>
            <h1 className="font-bold text-[18px]">$2200</h1>
          </div> */}
        </div>

        <div className="flex items-center px-5 mt-5  gap-2">
          <Checkbox
            id="terms"
            className="bg-[#F7F7F7] cursor-pointer w-[20px] h-[20px]"
            checked={payOnArrival}
            onCheckedChange={(checked) => setPayOnArrival(checked === true)}
          />
          <label
            htmlFor="terms"
            className="text-sm  cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[16px] font-semibold"
          >
            Pay on arrival option
          </label>
        </div>

        <Button
          onClick={placeOrder}
          disabled={!isFormValid() || active}
          className={`h-[60px] font-semibold !text-[16px] mt-7 w-full cursor-pointer rounded-[10px] bg-gradient-to-b from-[#689ffd] to-[#4D8CF5] ${
            (!isFormValid() || active) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {active ? "Placing Order...." : "Place Order"}
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
