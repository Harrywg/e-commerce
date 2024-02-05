import placeholder from "../assets/product-images/mouse.png";
import Image from "next/image";
import Product from "./Product";
export default function FeaturedProduct({
  product,
  loading,
}: {
  product?: Product;
  loading: boolean;
}) {
  return (
    <a className="feat-prod">
      <div className="feat-prod_image-wrap">
        <img src={product?.image_url} alt="" />
      </div>
      <div className={`feat-prod_bottom `}>
        <h3>{product?.name || "Loading..."} </h3>
        <p className={`feat-prod_category ${loading ? "loading" : ""}`}>
          {product?.category}
        </p>
        <p className="feat-prod_price">
          <span className={`feat-prod_sale ${loading ? "loading" : ""}`}>
            {" "}
            £{product?.sale_price}
          </span>{" "}
          <span className={`feat-prod_old ${loading ? "loading" : ""}`}>
            was £{product?.price}
          </span>{" "}
          <span className={`feat-prod_discount ${loading ? "loading" : ""}`}>
            -{product?.discount_percent}%
          </span>
        </p>
      </div>
    </a>
  );
}
