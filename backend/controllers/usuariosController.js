
const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.registro = async (req, res) => {
  const { nombre, correo, contraseña, tipo_usuario } = req.body;
  const hash = await bcrypt.hash(contraseña, 10);

  db.query(
    'INSERT INTO usuarios(nombre,correo,contraseña,tipo_usuario) VALUES(?,?,?,?)',
    [nombre, correo, hash, tipo_usuario],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Usuario creado' });
    }
  );
};
