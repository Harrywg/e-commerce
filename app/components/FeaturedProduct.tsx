import placeholder from "../assets/svg/placeholder.svg";
import Image from "next/image";
export default function FeaturedProduct({ product }: { product: Product }) {
  return (
    <div className="feat-prod">
      <div className="feat-prod_image-wrap">
        <Image
          src={placeholder}
          alt={product.name}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
      <div className="feat-prod_bottom">
        <h3>{product.name}</h3>
        {/* <img src={placeholder} alt={product.name} /> */}
        <p className="feat-prod_category">{product.category}</p>
        <p className="feat-prod_price">
          <span className="feat-prod_sale"> £{product.sale_price}</span>{" "}
          <span className="feat-prod_old">was £{product.price}</span>{" "}
          <span className="feat-prod_discount">
            -{product.discount_percent}%
          </span>
        </p>
      </div>
    </div>
  );
}
