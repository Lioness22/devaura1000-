const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../data/users');
const router = express.Router();
const JWT_SECRET = 'finops-secret-key';
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password are required'
    });
  }
  const user = users.find(
    user => user.username === username
  );
  if (!user) {
    return res.status(401).json({
      message: 'Invalid username or password'
    });
  }
  const passwordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordValid) {
    return res.status(401).json({
      message: 'Invalid username or password'
    });
  }
  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );
  res.json({
    message: 'Login successful',
    token: token,
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role
    }
  });
});

module.exports = router;