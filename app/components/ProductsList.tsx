"use client";
import { useEffect, useState } from "react";
import Product from "./Product";
export default function ProductsList({ category }: { category: string }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/api/products/${category}?limit=20`);
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
    setIsLoading(false);
  }, []);

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
