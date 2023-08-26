import { client } from "../../../sanity/lib/client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import {} from "../../../public/shirt1.png";
import {} from "../../../public/shirt2.png";
import {} from "../../../public/shirt3.png";
import Productcomponents from "../../components/productcomponents";

export default async function Products() {
  const products = await client.fetch(
    `*[_type == 'Shirts'] {
      _id,
    Blackshirt,
    shirt,
  price,
  priceLink,
    "imageUrl": image.asset->url
  }`,
    { caches: "no-cache" }
  );
  console.log(products);
  return (
    <div>
      <div className="mt-20 py-4 px-8">
        <h1 className="flex justify-center text-lg text-sky-800 font-bold">
          PRODUCTS
        </h1>

        <h2 className="text-4xl font-bold flex justify-center mt-4">
          Check What We Have
        </h2>
      </div>
      {/* <div className="flex gap-6 px-40 mt-8">
        <div>
          <Image src="/shirt1.png" alt="shirt" width={400} height={200} />
        <h3>sweat shirt</h3>
        <h1>$401</h1>
        </div>
        <div>
          <Image src="/shirt2.png" alt="shirt" width={400} height={200} />
          <h3>Sash Tie Dress</h3>
          <h1>$545</h1>
        </div>
        
        <div>
          <Image src="/shirt3.png" alt="shirt" width={400} height={200} />
        <h3>Flex Sweat Shirt</h3>
        <h1>$175</h1>
        </div>
      
      </div> */}

      <div className="flex justify-evenly gap-12 px-28">
        {products.map((product: any) => (
          <Productcomponents
            key={product._id}
            title={product.blackshirt}
            price={product.price}
            priceLink={product.priceLink}
            image={product.imageUrl}
          />
        ))}

      </div>
    </div>
  );
}
