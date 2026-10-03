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
  },
  {
    id: 3,
    customerCode: 'CUS003',
    name: 'Rahul',
    email: 'rahul@example.com',
    phone: '9876543212',
    company: 'Malabar Technologies',
    customerType: 'Business',
    city: 'Kozhikode',
    country: 'India',
    status: 'Active',
    accountBalance: 75000,
    createdDate: '2026-09-03'
  },
  {
    id: 4,
    customerCode: 'CUS004',
    name: 'Anjali',
    email: 'anjali@example.com',
    phone: '9876543213',
    company: 'Kerala Traders',
    customerType: 'Business',
    city: 'Thrissur',
    country: 'India',
    status: 'Active',
    accountBalance: 42000,
    createdDate: '2026-09-04'
  },
  {
    id: 5,
    customerCode: 'CUS005',
    name: 'Vishnu',
    email: 'vishnu@example.com',
    phone: '9876543214',
    company: 'Cochin Digital',
    customerType: 'Business',
    city: 'Kochi',
    country: 'India',
    status: 'Inactive',
    accountBalance: 18000,
    createdDate: '2026-09-05'
  },
  {
    id: 6,
    customerCode: 'CUS006',
    name: 'Meera',
    email: 'meera@example.com',
    phone: '9876543215',
    company: 'GreenLeaf Organics',
    customerType: 'Business',
    city: 'Kottayam',
    country: 'India',
    status: 'Active',
    accountBalance: 63500,
    createdDate: '2026-09-06'
  },
  {
    id: 7,
    customerCode: 'CUS007',
    name: 'Nikhil',
    email: 'nikhil@example.com',
    phone: '9876543216',
    company: 'Prime Logistics',
    customerType: 'Business',
    city: 'Alappuzha',
    country: 'India',
    status: 'Pending',
    accountBalance: 31500,
    createdDate: '2026-09-07'
  },
  {
    id: 8,
    customerCode: 'CUS008',
    name: 'Divya',
    email: 'divya@example.com',
    phone: '9876543217',
    company: 'Bright Media',
    customerType: 'Business',
    city: 'Kollam',
    country: 'India',
    status: 'Active',
    accountBalance: 48500,
    createdDate: '2026-09-08'
  },
  {
    id: 9,
    customerCode: 'CUS009',
    name: 'Sandeep',
    email: 'sandeep@example.com',
    phone: '9876543218',
    company: 'TechWave Systems',
    customerType: 'Business',
    city: 'Ernakulam',
    country: 'India',
    status: 'Active',
    accountBalance: 92000,
    createdDate: '2026-09-09'
  },
  {
    id: 10,
    customerCode: 'CUS010',
    name: 'Lakshmi',
    email: 'lakshmi@example.com',
    phone: '9876543219',
    company: 'Royal Interiors',
    customerType: 'Business',
    city: 'Palakkad',
    country: 'India',
    status: 'Pending',
    accountBalance: 27500,
    createdDate: '2026-09-10'
  },
  {
    id: 11,
    customerCode: 'CUS011',
    name: 'Adarsh',
    email: 'adarsh@example.com',
    phone: '9876543220',
    company: 'NextGen Solutions',
    customerType: 'Business',
    city: 'Kannur',
    country: 'India',
    status: 'Active',
    accountBalance: 56000,
    createdDate: '2026-09-11'
  },
  {
    id: 12,
    customerCode: 'CUS012',
    name: 'Neha',
    email: 'neha@example.com',
    phone: '9876543221',
    company: 'BlueSky Consulting',
    customerType: 'Business',
    city: 'Kochi',
    country: 'India',
    status: 'Active',
    accountBalance: 38500,
    createdDate: '2026-09-12'
  },
  {
    id: 13,
    customerCode: 'CUS013',
    name: 'Kiran',
    email: 'kiran@example.com',
    phone: '9876543222',
    company: 'Coastal Exports',
    customerType: 'Business',
    city: 'Kasaragod',
    country: 'India',
    status: 'Inactive',
    accountBalance: 12000,
    createdDate: '2026-09-13'
  },
  {
    id: 14,
    customerCode: 'CUS014',
    name: 'Sneha',
    email: 'sneha@example.com',
    phone: '9876543223',
    company: 'Urban Styles',
    customerType: 'Business',
    city: 'Thiruvananthapuram',
    country: 'India',
    status: 'Active',
    accountBalance: 67000,
    createdDate: '2026-09-14'
  },
  {
    id: 15,
    customerCode: 'CUS015',
    name: 'Manu',
    email: 'manu@example.com',
    phone: '9876543224',
    company: 'Vertex Industries',
    customerType: 'Business',
    city: 'Thrissur',
    country: 'India',
    status: 'Pending',
    accountBalance: 22500,
    createdDate: '2026-09-15'
  },
  {
    id: 16,
    customerCode: 'CUS016',
    name: 'Swathi',
    email: 'swathi@example.com',
    phone: '9876543225',
    company: 'Sunrise Healthcare',
    customerType: 'Business',
    city: 'Kollam',
    country: 'India',
    status: 'Active',
    accountBalance: 81000,
    createdDate: '2026-09-16'
  },
  {
    id: 17,
    customerCode: 'CUS017',
    name: 'Akhil',
    email: 'akhil@example.com',
    phone: '9876543226',
    company: 'SmartBuild Constructions',
    customerType: 'Business',
    city: 'Kottayam',
    country: 'India',
    status: 'Active',
    accountBalance: 45000,
    createdDate: '2026-09-17'
  },
  {
    id: 18,
    customerCode: 'CUS018',
    name: 'Gopika',
    email: 'gopika@example.com',
    phone: '9876543227',
    company: 'FreshMart Retail',
    customerType: 'Business',
    city: 'Alappuzha',
    country: 'India',
    status: 'Pending',
    accountBalance: 19500,
    createdDate: '2026-09-18'
  },
  {
    id: 19,
    customerCode: 'CUS019',
    name: 'Faisal',
    email: 'faisal@example.com',
    phone: '9876543228',
    company: 'Malabar Foods',
    customerType: 'Business',
    city: 'Kozhikode',
    country: 'India',
    status: 'Active',
    accountBalance: 73500,
    createdDate: '2026-09-19'
  },
  {
    id: 20,
    customerCode: 'CUS020',
    name: 'Reshma',
    email: 'reshma@example.com',
    phone: '9876543229',
    company: 'Elegant Furnishings',
    customerType: 'Business',
    city: 'Kannur',
    country: 'India',
    status: 'Active',
    accountBalance: 52000,
    createdDate: '2026-09-20'
  },
  {
    id: 21,
    customerCode: 'CUS021',
    name: 'Jithin',
    email: 'jithin@example.com',
    phone: '9876543230',
    company: 'CoreTech Innovations',
    customerType: 'Business',
    city: 'Kochi',
    country: 'India',
    status: 'Inactive',
    accountBalance: 16500,
    createdDate: '2026-09-21'
  },
  {
    id: 22,
    customerCode: 'CUS022',
    name: 'Amritha',
    email: 'amritha@example.com',
    phone: '9876543231',
    company: 'Lotus Events',
    customerType: 'Business',
    city: 'Thiruvananthapuram',
    country: 'India',
    status: 'Active',
    accountBalance: 61000,
    createdDate: '2026-09-22'
  },
  {
    id: 23,
    customerCode: 'CUS023',
    name: 'Sreejith',
    email: 'sreejith@example.com',
    phone: '9876543232',
    company: 'Harbor Marine Services',
    customerType: 'Business',
    city: 'Kochi',
    country: 'India',
    status: 'Pending',
    accountBalance: 34000,
    createdDate: '2026-09-23'
  },
  {
    id: 24,
    customerCode: 'CUS024',
    name: 'Parvathy',
    email: 'parvathy@example.com',
    phone: '9876543233',
    company: 'Wellness Care',
    customerType: 'Business',
    city: 'Kottayam',
    country: 'India',
    status: 'Active',
    accountBalance: 47000,
    createdDate: '2026-09-24'
  },
  {
    id: 25,
    customerCode: 'CUS025',
    name: 'Rakesh',
    email: 'rakesh@example.com',
    phone: '9876543234',
    company: 'Metro Auto Parts',
    customerType: 'Business',
    city: 'Palakkad',
    country: 'India',
    status: 'Active',
    accountBalance: 88000,
    createdDate: '2026-09-25'
  },
  {
    id: 26,
    customerCode: 'CUS026',
    name: 'Keerthana',
    email: 'keerthana@example.com',
    phone: '9876543235',
    company: 'Creative Hub',
    customerType: 'Business',
    city: 'Thrissur',
    country: 'India',
    status: 'Pending',
    accountBalance: 28000,
    createdDate: '2026-09-26'
  },
  {
    id: 27,
    customerCode: 'CUS027',
    name: 'Naveen',
    email: 'naveen@example.com',
    phone: '9876543236',
    company: 'Eastern Trading Co',
    customerType: 'Business',
    city: 'Kollam',
    country: 'India',
    status: 'Active',
    accountBalance: 69500,
    createdDate: '2026-09-27'
  },
  {
    id: 28,
    customerCode: 'CUS028',
    name: 'Aparna',
    email: 'aparna@example.com',
    phone: '9876543237',
    company: 'Prime Education',
    customerType: 'Business',
    city: 'Thiruvananthapuram',
    country: 'India',
    status: 'Active',
    accountBalance: 36000,
    createdDate: '2026-09-28'
  },
  {
    id: 29,
    customerCode: 'CUS029',
    name: 'Joel',
    email: 'joel@example.com',
    phone: '9876543238',
    company: 'Western Electronics',
    customerType: 'Business',
    city: 'Ernakulam',
    country: 'India',
    status: 'Inactive',
    accountBalance: 14500,
    createdDate: '2026-09-29'
  },
  {
    id: 30,
    customerCode: 'CUS030',
    name: 'Devika',
    email: 'devika@example.com',
    phone: '9876543239',
    company: 'Harmony Textiles',
    customerType: 'Business',
    city: 'Kozhikode',
    country: 'India',
    status: 'Active',
    accountBalance: 58500,
    createdDate: '2026-09-30'
  },
  {
    id: 31,
    customerCode: 'CUS031',
    name: 'Midhun',
    email: 'midhun@example.com',
    phone: '9876543240',
    company: 'Green Valley Enterprises',
    customerType: 'Business',
    city: 'Pathanamthitta',
    country: 'India',
    status: 'Pending',
    accountBalance: 31000,
    createdDate: '2026-10-01'
  },
  {
    id: 32,
    customerCode: 'CUS032',
    name: 'Nandana',
    email: 'nandana@example.com',
    phone: '9876543241',
    company: 'Skyline Ventures',
    customerType: 'Business',
    city: 'Idukki',
    country: 'India',
    status: 'Active',
    accountBalance: 76500,
    createdDate: '2026-10-02'
  }
];


// GET all customers
router.get('/', (req, res) => {
  res.json(customers);
});

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

router.post('/', (req, res) => {
  const newCustomer = {
    id: customers.length + 1,
    ...req.body,
    createdDate: new Date().toISOString()
  };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

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