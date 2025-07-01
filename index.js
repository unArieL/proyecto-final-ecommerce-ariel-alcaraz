import express from 'express';
import productsRouter from './src/routes/products.routes.js';
import usersRouter from './src/routes/users.routes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

//Rutas de productos
app.use('/api', productsRouter);

//Rutas de usuarios
app.use('/api', usersRouter);

//Puerto de servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});