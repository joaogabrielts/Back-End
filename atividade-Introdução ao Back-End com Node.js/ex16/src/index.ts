import { IProduct } from "./interface";

const productList: IProduct[] = [];

const createProduct = (product: IProduct) => {
  productList.push(product);
  return { product, messagem: "Product sucessfully creatd" };
};

const getProducts = () => {
  return productList;
};

const product1 = createProduct({ id: 1, name: "Geladeira", price: 2400 });
console.log(product1);

const product2 = createProduct({ id: 2, name: "Cooktop", price: 1200 });
console.log(product2);


console.log(getProducts());
