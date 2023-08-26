import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import female from "../female/[slug]/page";

export default function Navbar() {
  return (
    <div className="flex justify-evenly mt-4">
      <div>
        <Image src="/logo.webp" alt="logo" width={200} height={20} />
      </div>

      <div>
        <ul className="flex justify-center gap-8 text-md">
          <li className="text-lg">
            <Link href={"/"}> Male </Link>
          </li>
          <li className="text-lg">
            <Link href={"./female"}> Female</Link>
          </li>
          <li className="text-lg">
            <Link href={"/"}>Kids</Link>
          </li>
          <li className="text-lg">
            <Link href={"./Allproducts"}>All products </Link>
          </li>
        </ul>
      </div>

      <input></input>

      <div className=" flex justify-center items-center h-10 w-10 rounded-full bg-gray-300">
        <FiShoppingCart />
      </div>
    </div>
  );
}
