import express from 'express';
import productsRouter from './src/routes/products.routes.js';
import usersRouter from './src/routes/users.routes.js';
import logRegRouter from './src/routes/logreg.routes.js'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(cors())

app.use('/api/products', productsRouter); //Ruta de productos
app.use('/api/users', usersRouter); //Ruta de usuarios
app.use('/api/auth', logRegRouter); //Ruta registro y login. Todavía está en construcción

//Puerto de servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});