const products = [];

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static getAll() {
    return products;
  }

  static create(product) {
    products.push(product);
    return product;
  }
}

module.exports = Product;