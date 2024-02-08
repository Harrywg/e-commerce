import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import ProductsFilter from "../components/ProductsFilter";
export default function Computing() {
  return (
    <>
      <Header />
      <main className="category_main container">
        <h1>Computing</h1>
        <ProductsFilter />
        <ProductsList category="computing" />
      </main>
      <Footer />
    </>
  );
}
