import express from 'express';
import productsRouter from './src/routes/products.routes.js';
import usersRouter from './src/routes/users.routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors())

//Rutas
app.use('/api', productsRouter); //Productos
app.use('/api', usersRouter); //Usuarios

//Puerto de servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});