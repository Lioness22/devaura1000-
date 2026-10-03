const express = require('express');

const router = express.Router();

let transactions = [
  {
    id: 1,
    transactionCode: 'TXN001',
    customerId: 1,
    customerName: 'Arjun',
    type: 'Payment',
    amount: 50000,
    status: 'Completed',
    paymentMethod: 'Bank Transfer',
    description: 'Customer payment',
    createdDate: '2026-09-01'
  },
  {
    id: 2,
    transactionCode: 'TXN002',
    customerId: 2,
    customerName: 'Athira',
    type: 'Transfer',
    amount: 25000,
    status: 'Pending',
    paymentMethod: 'UPI',
    description: 'Account transfer',
    createdDate: '2026-09-02'
  }
];


// GET all transactions
router.get('/', (req, res) => {
  res.json(transactions);
});


// GET transaction by ID
router.get('/:id', (req, res) => {

  const id = Number(req.params.id);

  const transaction = transactions.find(
    transaction => transaction.id === id
  );

  if (!transaction) {
    return res.status(404).json({
      message: 'Transaction not found'
    });
  }

  res.json(transaction);
});


// POST transaction
router.post('/', (req, res) => {

  const newTransaction = {
    id: transactions.length + 1,
    ...req.body,
    createdDate: new Date().toISOString()
  };

  transactions.push(newTransaction);

  res.status(201).json(newTransaction);
});


// PUT transaction
router.put('/:id', (req, res) => {

  const id = Number(req.params.id);

  const index = transactions.findIndex(
    transaction => transaction.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Transaction not found'
    });
  }

  transactions[index] = {
    ...transactions[index],
    ...req.body,
    id
  };

  res.json(transactions[index]);
});


// DELETE transaction
router.delete('/:id', (req, res) => {

  const id = Number(req.params.id);

  const index = transactions.findIndex(
    transaction => transaction.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Transaction not found'
    });
  }

  const deletedTransaction = transactions.splice(index, 1);

  res.json({
    message: 'Transaction deleted successfully',
    transaction: deletedTransaction[0]
  });
});


module.exports = router;