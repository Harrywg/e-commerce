"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import placeholder from "../assets/product-images/vr.png";

export default function Product({
  product,
  loading,
}: {
  product: Product;
  loading: boolean;
}) {
  const [imageUrl, setImageUrl] = useState("/placeholder.svg");
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <a className="embla__slide product">
      <div className="product_image-wrap">
        <img src={product?.image_url} alt="" />
      </div>
      <div className="product_bottom">
        <strong>{product?.name}</strong>

        <p className="product_price">
          <span>£{product.on_sale ? product.sale_price : product.price}</span>
          <span className="product_sale">
            {product.on_sale ? `-${product.discount_percent}%` : ""}
          </span>
        </p>
      </div>
    </a>
  );
}
