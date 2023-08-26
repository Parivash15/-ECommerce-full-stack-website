import React from "react";
import Image from "next/image";
import {} from "../../../public/logo.webp";
import { FiTwitter } from "react-icons/fi";
// import {FiFacebook} from "@react-icons/all-files"


export default function Footer() {
  return (
    <main className="flex justify-evenly mt-36">
      {/* Left side */}
      <div>
        <Image src="/logo.webp" alt="logo" width={200} height={200} />

        <p className=" mt-4">
          Small, artisan label that offers a thoughtfully
          <br/>
          curated collection of high quality everyday <br/>
          essentials made.
        </p>
        <div className="flex mt-6 gap-6">
          <FiTwitter />
          {/* <BiLogoFacebook/> */}
          {/* <FiFacebook/> */}
        </div>
      </div>

      {/* right side  */}
      <div className="flex gap-28">
        <div>
          <ul className="text-2xl font-bold text-zinc-600"> Company </ul>
          <div>
            <ul>About</ul>
            <ul>terms of use</ul>
            <ul>privacy policy</ul>
            <ul>How it works</ul>
            <ul>Contact us</ul>
          </div>
        </div>

        <div>
          <ul className="text-2xl font-bold text-zinc-600"> Support </ul>
          <div>
            <ul>Support Carrear</ul>
            <ul>24h service</ul>
            <ul>Quick chart</ul>
          </div>
        </div>

        <div>
          <ul className="text-2xl font-bold text-zinc-600"> Contact Us </ul>
          <div>
            <ul>Whatsapp</ul>
            <ul>Support 24h</ul>
          </div>
        </div>
      </div>
    </main>
  );
}
