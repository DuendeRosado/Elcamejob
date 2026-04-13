
const r = require('express').Router();
const auth = require('../middleware/auth');
const { crear } = require('../controllers/contratosController');

r.post('/', auth, crear);

module.exports = r;
