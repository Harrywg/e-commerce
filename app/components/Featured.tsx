"use client";

import { useState, useEffect } from "react";
import FeaturedProduct from "./FeaturedProduct";

export default function Featured() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      const res = await fetch("/api/products/featured");
      const data = await res.json();
      setFeaturedProducts(data.products);
    }
    fetchFeaturedProducts();
  }, []);
  return (
    <div className="feat-prod_wrap">
      {featuredProducts.map((product: Product) => {
        return <FeaturedProduct product={product} key={product.id} />;
      })}
    </div>
  );
}
