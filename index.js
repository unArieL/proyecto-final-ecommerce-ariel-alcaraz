import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/products', (req, res) => {
  res.json(products)
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
});

//JSON de productos
const products = [
  {
    "id": 1,
    "nombre": "Zapatilla Urbana X1",
    "precio": 4500,
    "descripcion": "Zapatilla liviana ideal para el uso diario.",
    "modelo": "ZX-100"
  },
  {
    "id": 2,
    "nombre": "Remera Oversize Skull",
    "precio": 2500,
    "descripcion": "Remera de algodón estampada, corte oversize.",
    "modelo": "RSK-22"
  },
  {
    "id": 3,
    "nombre": "Mochila Antirrobo Pro",
    "precio": 6800,
    "descripcion": "Mochila con compartimento oculto y puerto USB.",
    "modelo": "MB-Pro"
  },
  {
    "id": 4,
    "nombre": "Campera Rompeviento Trail",
    "precio": 9200,
    "descripcion": "Campera liviana, impermeable y resistente al viento.",
    "modelo": "RW-Trail"
  },
  {
    "id": 5,
    "nombre": "Pantalón Jogger Cargo",
    "precio": 5600,
    "descripcion": "Jogger con bolsillos laterales estilo cargo.",
    "modelo": "JCG-01"
  }
]