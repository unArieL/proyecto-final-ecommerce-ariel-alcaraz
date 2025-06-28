import express from 'express';

const app = express();
const PORT = 3000;

//JSON de productos
const products = [
  {
    "id": 1,
    "name": "Laptop Lenovo ThinkPad X1 Carbon",
    "price": 1500.33,
    "category": "Electrónica",
    "stock": 25,
    "description": "Ultraliviana y potente, ideal para profesionales que necesitan rendimiento y portabilidad. Pantalla de 14'' Full HD, procesador Intel i7 y 16GB de RAM."
  },
  {
    "id": 2,
    "name": "Auriculares Sony WH-1000XM5",
    "price": 350.58,
    "category": "Audio",
    "stock": 40,
    "description": "Auriculares inalámbricos con cancelación activa de ruido líder en el mercado, sonido de alta fidelidad y hasta 30 horas de batería."
  },
  {
    "id": 3,
    "name": "Silla Ergonómica Herman Miller Aeron",
    "price": 1200.90,
    "category": "Muebles",
    "stock": 10,
    "description": "Diseñada para brindar soporte ergonómico durante largas jornadas de trabajo. Ajustes personalizables y materiales de alta calidad."
  },
  {
    "id": 4,
    "name": "Smartphone Samsung Galaxy S24",
    "price": 999.49,
    "category": "Electrónica",
    "stock": 30,
    "description": "Teléfono inteligente de última generación con pantalla AMOLED de 6.8'', cámara triple de 108MP y procesador Exynos de alto rendimiento."
  },
  {
    "id": 5,
    "name": "Cafetera Nespresso Vertuo",
    "price": 199.49,
    "category": "Electrodomésticos",
    "stock": 50,
    "description": "Cafetera automática que prepara café de calidad barista con solo presionar un botón. Compatible con cápsulas Vertuo y con función de apagado automático."
  }
]

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//MOSTRAR PRODUCTOS
app.get('/products', (req, res) => {
  res.json(products)
});

app.get('/products/search', (req, res) => {
  const { name, price, mayorQue } = req.query;
  if(!isNaN(mayorQue)) {
    const filtroMayor = products.filter((product) => product.price > mayorQue);
    res.json(filtroMayor);
  }
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