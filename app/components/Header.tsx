import Image from "next/image";
import shoppingCart from "../assets/svg/cart.svg";
import Link from "next/link";
import Script from "next/script";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-top container">
          <a href="/" className="logo highlight">
            <b>One</b>Market
          </a>
          <div className="header-right">
            <nav className="header-links">
              <Link className="standard" href="/computing">
                <span>Computing</span>
              </Link>
              <Link className="standard" href="/mobile">
                <span>Mobile</span>
              </Link>
              <Link className="standard" href="/gaming">
                <span>Gaming</span>
              </Link>
              <Link className="standard" href="/appliances">
                <span>Appliances</span>
              </Link>
              <Link className="highlight" href="/deals">
                <span>Deals</span>
              </Link>
            </nav>
            <form className="search-input">
              <input type="search" id="" placeholder="Search" />
              <button>🔎︎</button>
            </form>
            <nav>
              <button>CART</button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
