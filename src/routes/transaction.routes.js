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
  },
  {
    id: 3,
    transactionCode: 'TXN003',
    customerId: 3,
    customerName: 'Rahul',
    type: 'Payment',
    amount: 35000,
    status: 'Completed',
    paymentMethod: 'Credit Card',
    description: 'Invoice payment',
    createdDate: '2026-09-03'
  },
  {
    id: 4,
    transactionCode: 'TXN004',
    customerId: 4,
    customerName: 'Anjali',
    type: 'Deposit',
    amount: 42000,
    status: 'Completed',
    paymentMethod: 'Bank Transfer',
    description: 'Account deposit',
    createdDate: '2026-09-04'
  },
  {
    id: 5,
    transactionCode: 'TXN005',
    customerId: 5,
    customerName: 'Vishnu',
    type: 'Payment',
    amount: 18000,
    status: 'Failed',
    paymentMethod: 'Debit Card',
    description: 'Payment attempt failed',
    createdDate: '2026-09-05'
  },
  {
    id: 6,
    transactionCode: 'TXN006',
    customerId: 6,
    customerName: 'Meera',
    type: 'Payment',
    amount: 27500,
    status: 'Completed',
    paymentMethod: 'UPI',
    description: 'Service payment',
    createdDate: '2026-09-06'
  },
  {
    id: 7,
    transactionCode: 'TXN007',
    customerId: 7,
    customerName: 'Nikhil',
    type: 'Transfer',
    amount: 31500,
    status: 'Pending',
    paymentMethod: 'Bank Transfer',
    description: 'Business account transfer',
    createdDate: '2026-09-07'
  },
  {
    id: 8,
    transactionCode: 'TXN008',
    customerId: 8,
    customerName: 'Divya',
    type: 'Payment',
    amount: 12500,
    status: 'Completed',
    paymentMethod: 'UPI',
    description: 'Customer invoice payment',
    createdDate: '2026-09-08'
  },
  {
    id: 9,
    transactionCode: 'TXN009',
    customerId: 9,
    customerName: 'Sandeep',
    type: 'Deposit',
    amount: 60000,
    status: 'Completed',
    paymentMethod: 'Bank Transfer',
    description: 'Business account deposit',
    createdDate: '2026-09-09'
  },
  {
    id: 10,
    transactionCode: 'TXN010',
    customerId: 10,
    customerName: 'Lakshmi',
    type: 'Payment',
    amount: 22000,
    status: 'Pending',
    paymentMethod: 'Credit Card',
    description: 'Pending invoice payment',
    createdDate: '2026-09-10'
  },
  {
    id: 11,
    transactionCode: 'TXN011',
    customerId: 11,
    customerName: 'Adarsh',
    type: 'Transfer',
    amount: 45000,
    status: 'Completed',
    paymentMethod: 'NEFT',
    description: 'Corporate account transfer',
    createdDate: '2026-09-11'
  },
  {
    id: 12,
    transactionCode: 'TXN012',
    customerId: 12,
    customerName: 'Neha',
    type: 'Payment',
    amount: 18500,
    status: 'Completed',
    paymentMethod: 'UPI',
    description: 'Monthly service payment',
    createdDate: '2026-09-12'
  },
  {
    id: 13,
    transactionCode: 'TXN013',
    customerId: 13,
    customerName: 'Kiran',
    type: 'Withdrawal',
    amount: 10000,
    status: 'Completed',
    paymentMethod: 'Bank Transfer',
    description: 'Account withdrawal',
    createdDate: '2026-09-13'
  },
  {
    id: 14,
    transactionCode: 'TXN014',
    customerId: 14,
    customerName: 'Sneha',
    type: 'Payment',
    amount: 32000,
    status: 'Completed',
    paymentMethod: 'Debit Card',
    description: 'Product purchase payment',
    createdDate: '2026-09-14'
  },
  {
    id: 15,
    transactionCode: 'TXN015',
    customerId: 15,
    customerName: 'Manu',
    type: 'Transfer',
    amount: 15000,
    status: 'Failed',
    paymentMethod: 'UPI',
    description: 'Transfer failed due to insufficient balance',
    createdDate: '2026-09-15'
  },
  {
    id: 16,
    transactionCode: 'TXN016',
    customerId: 16,
    customerName: 'Swathi',
    type: 'Deposit',
    amount: 50000,
    status: 'Completed',
    paymentMethod: 'Bank Transfer',
    description: 'Business account deposit',
    createdDate: '2026-09-16'
  },
  {
    id: 17,
    transactionCode: 'TXN017',
    customerId: 17,
    customerName: 'Akhil',
    type: 'Payment',
    amount: 27500,
    status: 'Pending',
    paymentMethod: 'UPI',
    description: 'Pending customer payment',
    createdDate: '2026-09-17'
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