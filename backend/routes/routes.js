const express = require('express');
const router = express.Router();

const BreadController = require('../controllers/api/BreadController');
const MeatController = require('../controllers/api/MeatController');
const StatusController = require('../controllers/api/StatusController');
const OptionalController = require('../controllers/api/OptionalController');
const CustomerController = require('../controllers/api/CustomerController');
const OrderController = require('../controllers/api/OrderController');

// Rotas de pães

router.get('/breads', (req, res) => BreadController.index(req, res));
router.get('/breads/:id?', (req, res) => BreadController.show(req, res));
router.post('/createBread', (req, res) => BreadController.store(req, res));
router.put('/updateBread', (req, res) => BreadController.update(req, res));
router.delete('/deleteBread/:id', (req, res) => BreadController.destroy(req, res));

// Rotas de carnes

router.get('/meats', (req, res) => MeatController.index(req, res));
router.get('/meats/:id?', (req, res) => MeatController.show(req, res));
router.post('/createMeat', (req, res) => MeatController.store(req, res));
router.put('/updateMeat', (req, res) => MeatController.update(req, res));
router.delete('/deleteMeat/:id', (req, res) => MeatController.destroy(req, res));

// Rotas de status

router.get('/status', (req, res) => StatusController.index(req, res));
router.get('/status/:id?', (req, res) => StatusController.show(req, res));

// Rotas de opcionais

router.get('/optionals', (req, res) => OptionalController.index(req, res));
router.get('/optionals/:id?', (req, res) => OptionalController.show(req, res));
router.post('/createOptional', (req, res) => OptionalController.store(req, res));
router.put('/updateOptional', (req, res) => OptionalController.update(req, res));
router.delete('/deleteOptional/:id', (req, res) => OptionalController.destroy(req, res));

// Rotas de clientes

router.get('/customers', (req, res) => CustomerController.index(req, res));
router.get('/customers/:id?', (req, res) => CustomerController.show(req, res));
router.post('/createCustomer', (req, res) => CustomerController.store(req, res));
router.put('/updateCustomer', (req, res) => CustomerController.update(req, res));
router.delete('/deleteCustomer/:id', (req, res) => CustomerController.destroy(req, res));

// Rotas de pedidos

router.get('/orders', (req, res) => OrderController.index(req, res));
router.get('/orders/:id?', (req, res) => OrderController.show(req, res));
router.post('/createOrder', (req, res) => OrderController.store(req, res));
router.put('/updateOrder', (req, res) => OrderController.update(req, res));
router.delete('/deleteOrder/:id', (req, res) => OrderController.destroy(req, res));

module.exports = router;
