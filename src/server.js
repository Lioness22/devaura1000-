require('dotenv').config();

const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const customerRoutes = require('./routes/customer.routes');
const transactionRoutes = require('./routes/transaction.routes');
const approvalRoutes = require('./routes/approval.routes');

const authenticateToken = require('./middleware/middleware');
const authorizeRoles = require('./middleware/role.middleware');

const app = express();


// ===============================
// CORS
// ===============================

const corsOptions = {
  origin: [
    'http://localhost:4200',
    'https://calm-lolly-751605.netlify.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


// ===============================
// JSON BODY PARSER
// ===============================

app.use(express.json());


// ===============================
// TEST API
// ===============================

app.get('/', (req, res) => {
  res.json({
    message: 'FinOps API is running'
  });
});


// ===============================
// AUTH ROUTES
// ===============================

app.use('/api/auth', authRoutes);


// ===============================
// CUSTOMER ROUTES
// ===============================

app.use(
  '/api/customers',
  authenticateToken,
  customerRoutes
);


// ===============================
// TRANSACTION ROUTES
// ===============================

app.use(
  '/api/transactions',
  authenticateToken,
  transactionRoutes
);


// ===============================
// APPROVAL ROUTES
// ===============================

app.use(
  '/api/approvals',
  authenticateToken,
  authorizeRoles('Admin', 'Manager'),
  approvalRoutes
);


// ===============================
// SERVER
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});