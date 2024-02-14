import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryPage from "../components/CategoryPage";
import ScrollListener from "../components/ScrollListener";
export default function Computing() {
  return (
    <>
      <Header />
      <ScrollListener />
      <main className="category_main ">
        <div className="category_bg">
          <div className="container category_title">
            <h1>Gaming</h1>
          </div>
          <CategoryPage category="gaming" />
        </div>
      </main>
      <Footer />
    </>
  );
}
