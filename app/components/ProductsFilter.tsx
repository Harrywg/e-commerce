"use client";
import { ReactEventHandler, SyntheticEvent, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

export default function ProductsFilter({
  setProducts,
  products,
  category,
  setIsLoading,
}: {
  setProducts: Function;
  category: string;
  setIsLoading: Function;
  products: Array<Product>;
}) {
  const [sliderValues, setSliderValues] = useState<number[]>([0, 2000]);
  const [mostValuable, setMostValuable] = useState<number>(300);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValues(newValue as number[]);
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/api/products/${category}?limit=20`);
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const highestPrice = products.reduce((a, b): number => {
      if (b.sale_price > a) {
        return b.sale_price;
      }
      return a;
    }, 0);

    setMostValuable(highestPrice);
  }, [products]);
  return (
    <div className="category_filter">
      <div className="container">
        <input type="search" name="" id="" />
        <Slider
          value={sliderValues}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          max={mostValuable}
        />
      </div>
    </div>
  );
}
