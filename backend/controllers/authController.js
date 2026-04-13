
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { correo, contraseña } = req.body;

  db.query('SELECT * FROM usuarios WHERE correo=?', [correo], async (err, r) => {
    if (!r.length) return res.status(400).json({ msg: 'No existe' });

    const valid = await bcrypt.compare(contraseña, r[0].contraseña);
    if (!valid) return res.status(400).json({ msg: 'Error credenciales' });

    const token = jwt.sign({ id: r[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};
