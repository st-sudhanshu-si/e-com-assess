"use client"

import React, { useState } from "react";
import Filter from "./components/filter";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProductList from "./components/productCard";

export default function Home() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleCartItemCountChange = (count: number): void => {
    setCartItemCount(count);
  };

  return (
    <main>
      <section className="hero-section">
        <Hero cartItemCount={cartItemCount} />
      </section>
      <div className="product-section">
        <Filter />
        <ProductList
          onCartItemCountChange={handleCartItemCountChange}
          cartItemCount={cartItemCount}
        />
      </div>
      <Footer />
    </main>
  );
}
