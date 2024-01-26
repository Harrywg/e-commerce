import Header from "./components/Header";
import Image from "next/image";
import heroImage from "./assets/ai-hero.png";
import underline from "./assets/svg/underline.svg";
import Featured from "./components/Featured";
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
      </main>
    </>
  );
}
