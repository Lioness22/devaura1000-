const express = require('express');

const router = express.Router();

let customers = [
  {
    id: 1,
    customerCode: 'CUS001',
    name: 'Arjun',
    email: 'arjun@example.com',
    phone: '9876543210',
    company: 'ABC Finance',
    customerType: 'Business',
    city: 'Kochi',
    country: 'India',
    status: 'Active',
    accountBalance: 50000,
    createdDate: '2026-09-01'
  },
  {
    id: 2,
    customerCode: 'CUS002',
    name: 'Athira',
    email: 'athira@example.com',
    phone: '9876543211',
    company: 'XYZ Solutions',
    customerType: 'Business',
    city: 'Thiruvananthapuram',
    country: 'India',
    status: 'Pending',
    accountBalance: 25000,
    createdDate: '2026-09-02'
  }
];


// GET all customers
router.get('/', (req, res) => {
  res.json(customers);
});


// GET customer by ID
router.get('/:id', (req, res) => {

  const id = Number(req.params.id);

  const customer = customers.find(
    customer => customer.id === id
  );

  if (!customer) {
    return res.status(404).json({
      message: 'Customer not found'
    });
  }

  res.json(customer);
});


// POST create customer
router.post('/', (req, res) => {

  const newCustomer = {
    id: customers.length + 1,
    ...req.body,
    createdDate: new Date().toISOString()
  };

  customers.push(newCustomer);

  res.status(201).json(newCustomer);
});


// PUT update customer
router.put('/:id', (req, res) => {

  const id = Number(req.params.id);

  const index = customers.findIndex(
    customer => customer.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Customer not found'
    });
  }

  customers[index] = {
    ...customers[index],
    ...req.body,
    id: id
  };

  res.json(customers[index]);
});


// DELETE customer
router.delete('/:id', (req, res) => {

  const id = Number(req.params.id);

  const index = customers.findIndex(
    customer => customer.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: 'Customer not found'
    });
  }

  const deletedCustomer = customers.splice(index, 1);

  res.json({
    message: 'Customer deleted successfully',
    customer: deletedCustomer[0]
  });
});


module.exports = router;