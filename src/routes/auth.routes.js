const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = require('../data/users');

const router = express.Router();

const JWT_SECRET = 'finops-secret-key';

router.post('/login', async (req, res) => {

  const { username, password } = req.body;

  // 1. Validate request
  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password are required'
    });
  }

  // 2. Find user
  const user = users.find(
    user => user.username === username
  );

  if (!user) {
    return res.status(401).json({
      message: 'Invalid username or password'
    });
  }

  // 3. Compare password
  const passwordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordValid) {
    return res.status(401).json({
      message: 'Invalid username or password'
    });
  }

  // 4. Create JWT
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

  // 5. Send response
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