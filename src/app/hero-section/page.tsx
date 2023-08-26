import React from "react";
import Image from "next/image";
import {} from "../../../public/headergirl.webp";
import Button from "@/app/UI-Components/button";
import { FiShoppingCart } from "react-icons/fi";
import {} from "../../../public/Featured1.webp";
import {} from "../../../public/Featured2.webp";
import {} from "../../../public/Featured3.webp";
import {} from "../../../public/Featured4.webp";

export default function Hero() {
  return (
    <main className="mt-14 py-4 px-20 flex justify-between">
      {/* {left side } */}
      <div>
        <div className="font-bold text-lg text-blue-800 px-7 py-3 rounded-lg">
          Sale 70%
        </div>

        <h1 className="scroll-m-20 mt-9 text-9xl font-extrabold tracking-tight lg:text-7xl justify-center">
          An Industrial Take on Streetwear
        </h1>

        <p className="mt-6 lg:text-lg">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <div>
          <button className="bg-black text-gray-200 py-4 px-6 mt-10 flex text-lg font-bold">
            <FiShoppingCart className="text-gray-200 bg-black mx-4 text-3xl font:bold " />
            Start Shopping
          </button>
        </div>

        <div className="flex justify-between mt-36">
          <Image src="/Featured1.webp" alt="fig1" width={150} height={100} />
          <Image src="/Featured2.webp" alt="fig2" width={150} height={100} />
          <Image src="/Featured3.webp" alt="fig3" width={150} height={100} />
          <Image src="/Featured4.webp" alt="fig4" width={150} height={100} />
        </div>
      </div>

      {/* {right side } */}
      <Image src="/headergirl.webp" alt="sidebar" width={650} height={650} />
    </main>
  );
}
