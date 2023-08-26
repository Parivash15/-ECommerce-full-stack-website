"use client";
import Image from "next/image";
import { checkout } from "@/checkout";

function Productcomponents(props: any) {
  console.log(props);
  return (
    <div>
      <div>
        <Image src={props?.image} alt="shirt" width={400} height={200} />
        <h3>{props?.title}</h3>
        <h1>{props?.price}</h1>
        <button
          onClick={() => {
            checkout({
              lineItems: [{ price: props.priceLink, quantity: 1 }],
            });
          }}
        >
        <div className="bg-amber-800/50 text-gray-100 font-semibold rounded-lg py-2 px-3">Buy Now</div>
        </button>
      </div>
    </div>
  );
}
export default Productcomponents;
