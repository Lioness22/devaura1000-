const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const customerRoutes = require('./routes/customer.routes');
const authenticateToken = require('./middleware/middleware');

const app = express();
const transactionRoutes =
  require('./routes/transaction.routes');
  const approvalRoutes =
  require('./routes/approval.routes');
app.use(cors({
  origin: 'http://localhost:4200'
}));

const authorizeRoles =
  require('./middleware/role.middleware');

app.use(express.json());


// Root API
app.get('/', (req, res) => {
  res.json({
    message: 'FinOps API is running'
  });
});


// Authentication
app.use('/api/auth', authRoutes);


// Protected Customer APIs
app.use(
  '/api/customers',
  authenticateToken,
  customerRoutes
);

// transactions
app.use(
  '/api/transactions',
  authenticateToken,
  transactionRoutes
);
// app.use(
//   '/api/approvals',
//   authenticateToken,
//   approvalRoutes
// );
app.use(
  '/api/approvals',
  authenticateToken,
  authorizeRoles('Admin', 'Manager'),
  approvalRoutes
);
// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});