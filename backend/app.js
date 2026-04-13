
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/contratos', require('./routes/contratos'));

app.get('/', (req, res) => res.send('API El CameJob NEXT LEVEL 🚀'));

app.listen(process.env.PORT || 3000, () =>
  console.log('Servidor corriendo')
);
