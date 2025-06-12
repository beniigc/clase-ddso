const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

const PORT = 9000;

const comparisons = {};


app.post('/comparison', (req, res) => {
  const { izquierda, derecha, historial } = req.body; 

  const ip = req.socket.remoteAddress;
  const date = new Date();

  if (!comparisons[ip]) {
    comparisons[ip] = { izquierda: 0, derecha: 0, date, historial: [] };
  }

  comparisons[ip].izquierda = izquierda;
  comparisons[ip].derecha = derecha;
  comparisons[ip].historial = historial;

  res.status(201).json({ message: 'Datos de comparación y historial actualizados' });
});

app.get('/comparison', (req, res) => {
  const ip = req.socket.remoteAddress;
  res.status(200).json(comparisons[ip] || {
    izquierda: 0,
    derecha: 0,
    historial: [],
  });
});

app.get('/stats', (req, res) => {
  res.status(200).json({ todo: "pendiente" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
