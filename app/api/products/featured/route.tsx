import { promises as fs } from "fs";

export async function GET() {
  async function fetchData() {
    // Replace with database call
    const file = await fs.readFile("./app/db/temp.json", "utf8");
    const allProducts = JSON.parse(file);
    interface Product {
      featured: boolean;
    }

    return allProducts.filter((product: Product) => product.featured);
  }
  const products = await fetchData();
  return Response.json({ products });
}
