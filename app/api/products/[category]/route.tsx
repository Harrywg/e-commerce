import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  async function fetchData() {
    // Replace with database call
    // const { category } = req;

    const file = await fs.readFile("./app/db/temp.json", "utf8");
    const allProducts = JSON.parse(file);

    return allProducts.filter((product: Product) => product.featured);
  }
  const products = await fetchData();
  return Response.json({ products });
}
