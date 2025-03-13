const orders = [];

class Order {
  constructor(id, userId, productId, quantity) {
    this.id = id;
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
  }

  static getAll() {
    return orders;
  }

  static create(order) {
    orders.push(order);
    return order;
  }
}

module.exports = Order;