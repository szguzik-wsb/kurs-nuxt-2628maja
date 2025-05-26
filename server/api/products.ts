// server/api/products.ts

// Import modułu Node do pracy z plikami
import { readFileSync } from "fs";
import { join } from "path";

// Endpoint GET /api/products
export default defineEventHandler(() => {
  // Ścieżka do pliku z danymi
  const dataPath = join(process.cwd(), "server/data/products.json");

  // Odczyt pliku JSON
  const json = readFileSync(dataPath, "utf-8");

  // Parsowanie i zwrot danych
  return JSON.parse(json);
});
