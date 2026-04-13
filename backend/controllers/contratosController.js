
const db = require('../config/db');

exports.crear = (req, res) => {
  const { trabajador, servicio } = req.body;

  db.query(
    'INSERT INTO contrataciones(id_cliente,id_trabajador,id_servicio,fecha,estado) VALUES(?,?,?,NOW(),?)',
    [req.user.id, trabajador, servicio, 'pendiente'],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Contratado' });
    }
  );
};
