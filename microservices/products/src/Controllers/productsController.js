const Product = require('../models/Product');

const createProduct = (req, res) => {
  const { id, name, price } = req.body;
  const product = new Product(id, name, price);
  Product.create(product);
  res.status(201).json(product);
};

const getProducts = (req, res) => {
  const products = Product.getAll();
  res.status(200).json(products);
};

module.exports = { createProduct, getProducts };