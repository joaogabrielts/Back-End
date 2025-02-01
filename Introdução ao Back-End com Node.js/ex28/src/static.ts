export class ProductList {
  static productList: string[] = [];

  static addProduct(product: string) {
    this.productList.push(product);
  }

  static removeProduct(remove: string){
    this.productList = this.productList.filter(name => name !== remove);

  }
  
  static getProducts() {
    console.log(this.productList);
  }
}
