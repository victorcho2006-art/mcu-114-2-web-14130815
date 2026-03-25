import { Product } from "./product";

let products = [
  new Product(1, "圖像 Angular 開發入門 第二版", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(2, "金魚都能懂的 CSS 必學屬性", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(3, "書籍 A", "博碩文化", 500, false, new Date("2024-4-10")),
  new Product(4, "書籍 B", "博碩文化", 500, true, new Date("2024-4-10")),
  new Product(5, "書籍 C", "博碩文化", 500, false, new Date("2024-4-10")),
  new Product(6, "書籍 D", "博碩文化", 500, false, new Date("2024-4-10")),
];

products.filter((item) => item.isShow).forEach((item) => console.table(item));
