import { Main } from "./components/home/Main";
import { ProductSell } from "./components/home/ProductSell";
import { SearchSpace } from "./components/home/SearchSpace";

export default function Home() {
  return (
    <div>
      <div className="h-[600px] w-full absolute left-0 top-0 bg-gradient-to-b from-[#000000ed] to-[transparent]"></div>

      <Main />
      <ProductSell />
      <SearchSpace />
      <footer className="bg-[#171616] py-4">
        <p className="text-[#fff] text-center font-bold">
          &copy; 2025 MotoFlex. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
