import { Product } from "../TypesProject/types";
export class ProductManager {
  productList: Product[] = [];
  productId: number = 1;
  register(product: Product): void {
    product.id = this.productId;
    this.productId++;
    this.productList.push(product);
  }
  listAllProduct(): Product[] {
    return this.productList;
  }
  deleteProduct(id: number): string | boolean {
    const itemIndex = this.productList.findIndex((product) => {
      return product.id === id;
    });
    if (itemIndex === -1) {
      return `Product ID does not exist`;
    } else {
      const deleted = this.productList.splice(itemIndex, 1)[0];
      return `Deleted successfully ${JSON.stringify(deleted)}`;
    }
  }
}