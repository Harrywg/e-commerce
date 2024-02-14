"use client";
import { useEffect, useState } from "react";
import Product from "./Product";
export default function ProductsList({
  products,
  isLoading,
}: {
  products: Array<Product>;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div>
        <p>Loading products...</p>
      </div>
    );
  } else {
    return (
      <div className="product-list">
        {products.map((product: Product) => {
          return <Product product={product} loading={false} key={product.id} />;
        })}
      </div>
    );
  }
}
