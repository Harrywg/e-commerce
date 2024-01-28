"use client";

import { useState, useEffect } from "react";
import Product from "./Product";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function ProductSlider({
  category,
  amount = 10,
  amountShown,
}: {
  category: string;
  amount: number;
  amountShown: number;
}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    console.log(`/api/products/${category}&&limit=${amount}`);
    async function fetchProducts() {
      const res = await fetch(`/api/products/${category}?limit=${amount}`);
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    setIsLoading(false);
    console.log(products);
  }, [products]);

  return (
    // <div className="product-slider">
    //   {products.map((product: Product, i) => {
    //     return <Product key={product.id} />;
    //   })}
    // </div>

    <div className="product-slider embla" ref={emblaRef}>
      <div className="embla__container">
        {products.map((product: Product, i) => {
          return <Product product={product} loading={false} key={product.id} />;
        })}
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}
