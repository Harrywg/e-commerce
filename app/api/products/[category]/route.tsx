import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { getPath } from "@/utils";
export async function GET(req: NextRequest, res: NextResponse) {
  async function fetchData() {
    // Replace with database call
    const category = getPath(req.nextUrl.pathname);
    const queries = req.nextUrl.searchParams;
    const limit = queries.get("limit");
    const file = await fs.readFile("./app/db/temp.json", "utf8");
    let allProducts = JSON.parse(file);
    let amountProducts = 0;

    if (queries.get("minPrice")) {
      allProducts = allProducts.filter((product: Product) => {
        return +product.sale_price >= Number(queries.get("minPrice"));
      });
    }

    if (queries.get("maxPrice")) {
      allProducts = allProducts.filter((product: Product) => {
        return +product.sale_price <= Number(queries.get("maxPrice"));
      });
    }

    const productsCategory = allProducts.filter((product: Product) => {
      if (product.category.toLowerCase() === category) {
        amountProducts++;
        if (limit && amountProducts <= +limit) {
          return true;
        }
      }
    });

    const highestPrice = allProducts.reduce((a: number, b: Product): number => {
      if (b.sale_price > a && b.category.toLowerCase() === category) {
        return b.sale_price;
      }
      return a;
    }, 0);

    return [productsCategory, highestPrice];
  }
  const [products, highestPrice] = await fetchData();
  return Response.json({ products, highestPrice });
}
