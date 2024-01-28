import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getPath } from "@/utils";
export async function GET(req: NextRequest, res: NextResponse) {
  async function fetchData() {
    // Replace with database call
    const category = getPath(req.nextUrl.pathname);
    const queries = req.nextUrl.searchParams;
    const limit = queries.get("limit");
    const file = await fs.readFile("./app/db/temp.json", "utf8");
    const allProducts = JSON.parse(file);
    let amountProducts = 0;

    return allProducts.filter((product: Product) => {
      // return product.category.toLowerCase() === category && amountProducts;
      if (product.category.toLowerCase() === category) {
        amountProducts++;
        if (limit && amountProducts <= +limit) {
          return true;
        }
      }
    });
  }
  const products = await fetchData();
  return Response.json({ products });
}
