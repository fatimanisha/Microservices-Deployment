const User = require('../models/user');

const createUser = (req, res) => {
  const { id, name, email } = req.body;
  const user = new User(id, name, email);
  User.create(user);
  res.status(201).json(user);
};

const getUsers = (req, res) => {
  const users = User.getAll();
  res.status(200).json(users);
};

module.exports = { createUser, getUsers };