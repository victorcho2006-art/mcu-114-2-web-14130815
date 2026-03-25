import { Product } from "./product";

let products = [
  new Product(1, "圖像 Angular 開發入門 第二版", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(2, "金魚都能懂的 CSS 必學屬性", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(3, "書籍 A", "博碩文化", 500, false, new Date("2024-4-10")),
  new Product(4, "書籍 B", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(5, "書籍 C", "博碩文化", 500, false, new Date("2024-4-10")),
  new Product(6, "書籍 D", "博碩文化", 500, false, new Date("2024-4-10")),
];

// 新增產品
const newProduct = new Product(0, "書籍 E", "博碩文化", 500, false, new Date("2024-4-10"));
addProduct(newProduct);
console.table(products);

// 刪除產品 By index
removeProduct(6);
console.table(products);

removeProductById(4);
console.table(products);

function addProduct(product: Product): void {
  const id = products.length === 0 ? 1 : Math.max(...products.map(({ id }) => id)) + 1;
  product.id = id;
  products.push(product);
}

function removeProduct(index: number): void {
  products.splice(index, 1);
}

// 刪除產品 By id
function removeProductById(removeID: number): void {
  const index = products.findIndex(({ id }) => id === removeID);
  products.splice(index, 1);
}
