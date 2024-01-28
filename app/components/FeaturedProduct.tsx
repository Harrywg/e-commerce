import placeholder from "../assets/svg/placeholder.svg";
import Image from "next/image";
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
        <Image
          src={placeholder}
          alt={product?.name || ""}
          layout={"fill"}
          objectFit={"contain"}
        />
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
