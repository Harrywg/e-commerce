"use client";

import { useState, useEffect } from "react";
import FeaturedProduct from "./FeaturedProduct";

export default function Featured() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFeaturedProducts() {
      const res = await fetch("/api/products/featured");
      const data = await res.json();
      setFeaturedProducts(data.products);
    }
    fetchFeaturedProducts();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [featuredProducts]);

  if (isLoading)
    return (
      <div className="feat-prod_wrap">
        <FeaturedProduct loading={true} />
        <FeaturedProduct loading={true} />
        <FeaturedProduct loading={true} />
        <FeaturedProduct loading={true} />
        <FeaturedProduct loading={true} />
      </div>
    );
  else
    return (
      <div className="feat-prod_wrap">
        {featuredProducts.map((product: Product, i) => {
          if (i < 4)
            return (
              <FeaturedProduct
                product={product}
                key={product.id}
                loading={false}
              />
            );
        })}
      </div>
    );
}
