const users = [];

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static getAll() {
    return users;
  }

  static create(user) {
    users.push(user);
    return user;
  }
}

module.exports = User;