"use client";
import placeholder from "../assets/product-images/vr.png";
import Image from "next/image";

export default function Product({
  product,
  loading,
}: {
  product: Product;
  loading: boolean;
}) {
  return (
    <a className="embla__slide product">
      <div className="product_image-wrap">
        {/* <Image src={placeholder} alt="placeholder" /> */}
        <img src={product.image_url} alt="" />
      </div>
      <div className="product_bottom">
        <strong>TitleTitleTitleTitleTitleTitle</strong>

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
