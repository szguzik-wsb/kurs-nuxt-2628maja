import { readFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  // Wczytaj plik JSON z produktami
  const file = await readFile(
    join(process.cwd(), "server/data/products.json"),
    "utf-8",
  );
  const products = JSON.parse(file);

  // Zwróć pojedynczy produkt
  return products.find((p: any) => p.id === Number(id));
});
