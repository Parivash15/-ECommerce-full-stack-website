import React from "react";
import Image from "next/image";
import {} from "../../../public/promotion3.webp";
import {} from "../../../public/promotion4.webp";
import {} from "@/../../public/screenshot1.png";
import {} from "@/../../public/screenshot2.png";

export default function Promotions() {
  return (
    <main className="mt-20 py-4 px-8">
      <div>
        <h1 className="flex justify-center text-lg text-sky-800 font-bold">
          PROMOTIONS
        </h1>

        <h2 className="text-4xl font-bold flex justify-center mt-4">
          {" "}
          Our Promotion Events
        </h2>
      </div>

    
      <div className=" flex gap-8 mt-7 px-12 ">
        {/* Left side */}
        <div className="space-y-2">
       
       <Image 
       src="/screenshot1.png" 
       alt= "picture1" 
       width={650} 
       height={100}/>

            <Image 
            src="/screenshot2.png" 
            alt= "picture2"
             width={650}
              height={200}/>
        </div>


        {/* Right side */}
        <div className="flex gap-8">
          <Image
            src="/Promotion3.webp"
            alt="event3"
            width={250}
            height={200}
            className=" bg-slate-400 "
          />
          <Image
            src="/Promotion4.webp"
            alt="event4"
            width={300}
            height={200}
            className="bg-stone-600"
          />

        </div>
        </div>
    </main>
  );
}
