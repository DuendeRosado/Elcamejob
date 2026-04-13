
const r = require('express').Router();
const { registro } = require('../controllers/usuariosController');
r.post('/registro', registro);
module.exports = r;
