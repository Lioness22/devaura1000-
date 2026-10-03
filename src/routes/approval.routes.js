const express = require('express');

const router = express.Router();

let approvals = [
  {
    id: 1,
    transactionId: 2,
    transactionCode: 'TXN002',
    customerId: 2,
    amount: 25000,
    type: 'Transfer',
    description: 'Account transfer',
    status: 'Pending',
    createdDate: '2026-09-02'
  },
   {
    id: 2,
    transactionId: 3,
    transactionCode: 'TXN0035',
    customerId: 4,
    amount: 25000,
    type: 'Transfer',
    description: 'Account transfer',
    status: 'Pending',
    createdDate: '2026-09-03'
  }
];

router.get('/', (req, res) => {
  res.json(approvals);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const approval = approvals.find(
    approval => approval.id === id
  );
  if (!approval) {
    return res.status(404).json({
      message: 'Approval not found'
    });
  }
  res.json(approval);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = approvals.findIndex(
    approval => approval.id === id
  );
  if (index === -1) {
    return res.status(404).json({
      message: 'Approval not found'
    });
  }
  approvals[index] = {
    ...approvals[index],
    ...req.body,
    id
  };
  res.json(approvals[index]);
});
module.exports = router;