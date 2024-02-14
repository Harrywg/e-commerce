import { promises as fs } from "fs";

export async function GET() {
  async function fetchData() {
    // Replace with database call
    const file = await fs.readFile("./app/data.json", "utf8");
    const allProducts = JSON.parse(file);

    return allProducts.filter((product: Product) => product.featured);
  }
  const products = await fetchData();
  return Response.json({ products });
}
