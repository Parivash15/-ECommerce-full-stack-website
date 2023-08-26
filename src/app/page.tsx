import Hero from "./hero-section/page";
import Products from "./products-section/page";
import Promotions from "./promotion-section/page";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <Products />
    </div>
  );
}
