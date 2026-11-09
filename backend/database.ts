interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, title: "Ноутбук", price: 350000, inStock: true },
  { id: 2, title: "Клавиатура", price: 15000, inStock: false },
  { id: 3, title: "Мышь", price: 8000, inStock: true },
  { id: 4, title: "Монитор", price: 120000, inStock: true }
];

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getProductById(id: number): Promise<Product> {
  await delay(500);

  const product = products.find((item) => item.id === id);

  if (!product) {
    throw new Error("Товар не найден");
  }

  return product;
}

async function getAllProducts(): Promise<Product[]> {
  await delay(500);
  return products;
}

async function getAvailableProducts(): Promise<Product[]> {
  await delay(500);
  return products.filter((product) => product.inStock);
}

async function main(): Promise<void> {
  console.log("Товар с id 1:", await getProductById(1));
  console.log("Все товары:", await getAllProducts());
  console.log("Товары в наличии:", await getAvailableProducts());
}

main();