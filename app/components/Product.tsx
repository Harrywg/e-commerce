"use client";
import placeholder from "../assets/svg/placeholder.svg";
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
        <Image src={placeholder} alt="placeholder" layout="fill" />
      </div>
      <p>Title</p>
      <p>Category</p>
    </a>
  );
}
