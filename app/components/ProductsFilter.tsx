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
  const [sliderValues, setSliderValues] = useState<number[]>([0, 0]);
  const [mostValuable, setMostValuable] = useState<number>(300);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValues(newValue as number[]);
  };

  async function fetchProducts(
    initialLoad?: boolean,
    minPrice?: number,
    maxPrice?: number
  ) {
    setIsLoading(true);

    let queries = "";
    if (minPrice) {
      queries += `&minPrice=${minPrice}`;
    }
    if (maxPrice) {
      queries += `&maxPrice=${maxPrice}`;
    }

    const response = await fetch(
      `/api/products/${category}?limit=20${queries}`
    );
    const data = await response.json();
    setProducts(data.products);
    if (initialLoad) {
      setMostValuable(data.highestPrice);
      setSliderValues([0, data.highestPrice]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts(true);
  }, []);

  return (
    <div className="category_filter">
      <div className="container">
        <div className="category_filters">
          <div className="category_input-search-wrap">
            <input type="search" name="" className="category_filter-search" />
            <button>🔎︎</button>
          </div>
          <div className="category_input-slider-wrap">
            <p>
              £{sliderValues[0]} - £{sliderValues[1]}
            </p>
            <Slider
              value={sliderValues}
              onChange={handleSliderChange}
              onChangeCommitted={() =>
                fetchProducts(false, sliderValues[0], sliderValues[1])
              }
              valueLabelDisplay="auto"
              max={mostValuable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
