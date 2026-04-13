
const r = require('express').Router();
const auth = require('../middleware/auth');
const { crear, listar } = require('../controllers/serviciosController');

r.post('/', auth, crear);
r.get('/', listar);

module.exports = r;
