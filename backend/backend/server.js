const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const items = [
  { id: 1, titulo: 'Angular Basics',    categoria: 'Tech',    descripcion: 'Guía completa de Angular' },
  { id: 2, titulo: 'NativeScript Tips', categoria: 'Mobile',  descripcion: 'Tips de NativeScript' },
  { id: 3, titulo: 'TypeScript Guide',  categoria: 'Tech',    descripcion: 'Guía de TypeScript' },
  { id: 4, titulo: 'Node.js API',       categoria: 'Backend', descripcion: 'Crear APIs con Node' },
  { id: 5, titulo: 'Redux Patterns',    categoria: 'Tech',    descripcion: 'Patrones con Redux' }
];

// GET con filtrado por querystring
app.get('/api/items', (req, res) => {
  const { q, categoria } = req.query;
  let result = [...items];
  if (q) result = result.filter(i => i.titulo.toLowerCase().includes(q.toLowerCase()));
  if (categoria) result = result.filter(i => i.categoria === categoria);
  res.json(result);
});

app.listen(3000, () => console.log('API Express corriendo en http://localhost:3000'));
