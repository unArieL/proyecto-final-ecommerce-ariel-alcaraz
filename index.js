import express from 'express';

const app = express();
const PORT = 3000;

//JSON de productos
const products = [
  {
    "id": 1,
    "name": "Zapatilla Urbana X1",
    "price": 4500,
    "description": "Zapatilla liviana ideal para el uso diario.",
    "model": "ZX-100",
    "stock": "Si"
  },
  {
    "id": 2,
    "name": "Remera Oversize Skull",
    "price": 2500,
    "description": "Remera de algodón estampada, corte oversize.",
    "model": "RSK-22",
    "stock": "No"
  },
  {
    "id": 3,
    "name": "Mochila Antirrobo Pro",
    "price": 6800,
    "description": "Mochila con compartimento oculto y puerto USB.",
    "model": "MB-Pro",
    "stock": "Si"
  },
  {
    "id": 4,
    "name": "Campera Rompeviento Trail",
    "price": 9200,
    "description": "Campera liviana, impermeable y resistente al viento.",
    "model": "RW-Trail",
    "stock": "No"
  },
  {
    "id": 5,
    "name": "Pantalón Jogger Cargo",
    "price": 5600,
    "description": "Jogger con bolsillos laterales estilo cargo.",
    "model": "JCG-01",
    "stock": "Si"
  }
]

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/products', (req, res) => {
  res.json(products)
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const findById = products.find((product) => product.id == id);
  
  if(findById) {
    res.status(302).json(findById);
  } else {
    res.status(404).json("Producto no encontrado")
  }
});

app.get('/products/stock/:stock', (req, res) => {
  const { stock } = req.params;
  const filterByStock = products.filter((product) => product.stock.toLowerCase() == stock.toLowerCase());
  res.json(filterByStock);
});