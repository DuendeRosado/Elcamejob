
const db = require('../config/db');

exports.crear = (req, res) => {
  const { titulo, descripcion, precio } = req.body;

  db.query(
    'INSERT INTO servicios(titulo,descripcion,precio,id_usuario) VALUES(?,?,?,?)',
    [titulo, descripcion, precio, req.user.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Servicio creado' });
    }
  );
};

exports.listar = (req, res) => {
  db.query('SELECT * FROM servicios', (err, r) => res.json(r));
};
