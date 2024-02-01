"use client";

import { useState, useEffect } from "react";
import Product from "./Product";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function ProductSlider({
  category,
  amount = 10,
}: {
  category: string;
  amount: number;
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
      <button
        className="embla__prev product-slider_button highlight"
        onClick={scrollPrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
        </svg>
      </button>
      <button
        className="embla__next product-slider_button highlight"
        onClick={scrollNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
        </svg>
      </button>
    </div>
  );
}
