# 🛒 API de Productos y Usuarios

Este proyecto es una API RESTful creada con **Node.js** y **Firebase Firestore**, que permite gestionar productos y usuarios. Incluye autenticación, filtrado y conexión a base de datos en la nube.

---

## 🚀 Tecnologías Usadas

- Node.js
- Express
- Firebase (Firestore)
- JavaScript
- UUID
- JWT
- CORS
- Zod

---

## 📂 Estructura del Proyecto

```
📂 src/
        ├── 📂 config/
                ├── 📄 firebase.js
                └── 📄 token-generator.js
        ├── 📂 controllers/
                ├── 📄 auth.controllers.js
                ├── 📄 products.controllers.js
                └── 📄 users.controllers.js
        ├── 📂 middleware/
                └── 📄 auth.middleware.js
        ├── 📂 models/
                ├── 📄 products.models
                └── 📄 users.models
        ├── 📂 routes/
                ├── 📄 auth.routes.js
                ├── 📄 prodcuts.routes.js
                └── 📄 users.routes.js
        └── 📂 services/
                ├── 📄 products.services.js
                └── 📄 users.services.js
📄 index.js
```

---

## 📦 Instalación

```bash
git clone https://github.com/unArieL/proyecto-final-ecommerce-ariel-alcaraz.git
cd proyecto-final-ecommerce-ariel-alcaraz
npm install
```

---

## ▶️ Ejecución

### Desarrollo:

```bash
npm run dev
```

### Producción:

```bash
npm start
```

---

## 🔐 Autenticación

- Registro y login de usuarios con email y contraseña.
- JWT para proteger rutas privadas.
- Campo `admin` para diferenciar roles.

---

## 📬 Rutas de la API

### Unico usuario de momento

`"email": "julian.rivas@yahoo.com", "password": "JuliR!2024"`

### Productos

- `GET /api/products` → Listar todos los productos
- `GET /api/products/:id` → Obtener producto por ID
- `POST /api/products` → Crear producto
- `PATCH /api/products/:id` → Actualizar producto
- `DELETE /api/products/:id` → Eliminar producto
- `GET /api/products/search?buscar=Mochila` → Buscar (ignora mayúsculas)

### Usuarios (solo admin)

- `POST /api/register` → Registrar usuario
- `POST /api/login` → Iniciar sesión
- `GET /api/users` → (Ruta protegida, solo admin)

---

## 🔎 Funcionalidades

- Creación, lectura, actualización y eliminación de productos.
- Filtro por stock, categoría, precio.
- Uso de `keywords` para facilitar búsquedas.
- Seguridad con JWT.
- Datos almacenados en Firestore.

---

## ✅ Estado del Proyecto

> En desarrollo. Se planean futuras mejoras como panel de administración y sistema de roles más avanzado.

---

## 🌍 Vercel

- [API RESTful](https://proyecto-final-ecommerce-ariel-alca-eight.vercel.app/)

---

## 📚 Recursos Útiles

- [Firebase Docs](https://firebase.google.com/docs)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/introduction)
- [Zod](https://zod.dev/)

---

## 👤 Autor

**Ariel Alcaraz Checa**  
[GitHub](https://github.com/unArieL)  
[LinkedIn](https://linkedin.com/in/arielalcarazcheca)
