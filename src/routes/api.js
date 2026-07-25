const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/appController');
const payCtrl = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.get('/analytics', auth, ctrl.getAnalytics);
router.post('/payment/qris', auth, payCtrl.createQris);
router.post('/payment/va', auth, payCtrl.createVa);
router.post('/payment/webhook', payCtrl.handleWebhook);

router.get('/tamu', auth, ctrl.getAllTamu);
router.post('/tamu', auth, ctrl.createTamu);
router.delete('/tamu/:id', auth, ctrl.deleteTamu);
router.get('/vendor', auth, ctrl.getAllVendor);
router.post('/vendor', auth, ctrl.createVendor);
router.delete('/vendor/:id', auth, ctrl.deleteVendor);
router.get('/anggaran', auth, ctrl.getAllAnggaran);
router.post('/anggaran', auth, ctrl.createAnggaran);
router.delete('/anggaran/:id', auth, ctrl.deleteAnggaran);

module.exports = router;