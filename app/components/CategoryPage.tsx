"use client";
import { useState } from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
export default function CategoryPage({ category }: { category: string }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <ProductsFilter
        category={category}
        setProducts={setProducts}
        products={products}
        setIsLoading={setIsLoading}
      />
      <div className="container">
        <ProductsList products={products} isLoading={isLoading} />
      </div>
    </>
  );
}
