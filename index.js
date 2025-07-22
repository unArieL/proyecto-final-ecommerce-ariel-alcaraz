import express from 'express';
import productsRouter from './src/routes/products.routes.js';
import usersRouter from './src/routes/users.routes.js';
import authRouter from './src/routes/auth.routes.js'
import cors from 'cors';
import { authentication } from './src/middleware/auth.middleware.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT ?? 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = Path2D.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.use('/api/products', productsRouter); //Ruta de productos
app.use('/api/users', authentication, usersRouter); //Ruta de usuarios
app.use('/auth', authRouter); //Ruta registro y login. Todavía en construcción

//Puerto de servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});