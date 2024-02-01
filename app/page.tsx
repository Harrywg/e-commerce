import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import heroImage from "./assets/ai-hero.png";
import underline from "./assets/svg/underline.svg";
import Featured from "./components/Featured";
import ProductSlider from "./components/ProductSlider";
import dealBanner from "./assets/deal-banner.png";
export default function Home() {
  return (
    <>
      <Header />
      <main className="homepage_main container">
        <h1>The Best Place For Tech</h1>
        <div className="homepage_hero-wrap">
          <Image
            className="homepage_hero-image"
            src={heroImage}
            alt={"computers and mobile devices"}
          />
          <div className="overlay">
            <h2>Sale</h2>
            <p>
              Up to{" "}
              <span>
                50%
                <Image
                  className="underline"
                  src={underline}
                  alt="underline squiggle"
                />
              </span>{" "}
              off selected products
            </p>

            <a href="">Browse</a>
          </div>
        </div>

        <div className="homepage_featured">
          <h2>What&apos;s Hot? 🔥</h2>
          <Featured />
        </div>

        <div className="homepage_sliders">
          <div className="homepage_sliders-grid slider-banner">
            <a className="deal-banner highlight">
              <Image src={dealBanner} alt="special deal"></Image>
            </a>
            <div>
              <div className="homepage_sliders-title">
                <h2>Computing</h2>
                <a href="">View All</a>
              </div>
              <ProductSlider category="computing" amount={20} />
            </div>
          </div>
          <div className="homepage_sliders-title">
            <h2>Mobile</h2>
            <a href="">View All</a>
          </div>
          <ProductSlider category="mobile" amount={20} />
          <div className="homepage_sliders-grid">
            <div>
              <div className="homepage_sliders-title">
                <h2>Gaming</h2>
                <a href="">View All</a>
              </div>

              <ProductSlider category="gaming" amount={10} />
            </div>
            <div>
              <div className="homepage_sliders-title">
                <h2>Appliances</h2>
                <a href="">View All</a>
              </div>
              <ProductSlider category="appliances" amount={10} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
