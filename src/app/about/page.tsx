import { Input } from "@/components/ui/input";
import { Box } from "../components/parts/Box";
import { Header } from "../components/Header";
import { Button } from "@/components/ui/button";
import { CountriesOperated } from "../components/CountriesOperated";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9]">
      <Header active={13} />
      <div className="max-w-[1300px] mx-auto py-10">
        <h1 className="text-center font-black uppercase text-[40px]">
          About Us
        </h1>

        <div className=" mt-8 showcase-main-type">
          <p>
            At Motoflex, we believe in fueling freedom, adventure, and
            convenience. Founded with a passion for everything on wheels, we are
            a one-stop destination for cars, motorbikes, and high-quality spare
            parts. Whether you’re searching for your next ride or the right
            component to keep it running smoothly, Motoflex is here to deliver
            reliability, performance, and value.
          </p>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
