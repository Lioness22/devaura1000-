const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin123', 10),
    name: 'Admin User',
    role: 'Admin'
  },
  {
    id: 2,
    username: 'manager',
    password: bcrypt.hashSync('manager123', 10),
    name: 'Finance Manager',
    role: 'Manager'
  },
  {
    id: 3,
    username: 'user',
    password: bcrypt.hashSync('user123', 10),
    name: 'Finance User',
    role: 'User'
  }
];

module.exports = users;