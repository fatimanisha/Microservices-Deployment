const Order = require('../models/Order');

const createOrder = (req, res) => {
  const { id, userId, productId, quantity } = req.body;
  const order = new Order(id, userId, productId, quantity);
  Order.create(order);
  res.status(201).json(order);
};

const getOrders = (req, res) => {
  const orders = Order.getAll();
  res.status(200).json(orders);
};

module.exports = { createOrder, getOrders };