import Image from "next/image";
import shoppingCart from "../assets/svg/cart.svg";

export default function Header() {
  return (
    <header>
      <div className="header-top container">
        <a href="/" className="logo highlight">
          <b>One</b>Market
        </a>
        <div className="header-right">
          <nav className="header-links">
            <a className="standard" href="">
              <span>Computing</span>
            </a>
            <a className="standard" href="">
              <span>Mobile</span>
            </a>
            <a className="standard" href="">
              <span>Gaming</span>
            </a>
            <a className="standard" href="">
              <span>Appliances</span>
            </a>
            <a className="highlight" href="">
              <span> Deals</span>
            </a>
          </nav>
          <form className="search-input">
            <input type="search" id="" placeholder="Search" />
            <button>🔎︎</button>
          </form>
          <nav>
            <a id="shopping-cart" href="">
              <Image
                src={shoppingCart}
                width={30}
                height={30}
                alt="shopping cart"
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
