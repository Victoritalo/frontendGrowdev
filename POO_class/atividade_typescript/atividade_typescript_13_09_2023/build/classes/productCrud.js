"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    productList = [];
    productId = 1;
    register(product) {
        product.id = this.productId;
        this.productId++;
        this.productList.push(product);
    }
    listAllProduct() {
        return this.productList;
    }
    deleteProduct(id) {
        const itemIndex = this.productList.findIndex((product) => {
            return product.id === id;
        });
        if (itemIndex === -1) {
            return `Product ID does not exist`;
        }
        else {
            const deleted = this.productList.splice(itemIndex, 1)[0];
            return `Deleted successfully ${JSON.stringify(deleted)}`;
        }
    }
}
exports.ProductManager = ProductManager;
