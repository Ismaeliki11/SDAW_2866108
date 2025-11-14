// --- Servidor Node.js para la práctica SDAW ---
// Importamos los módulos necesarios
const express = require('express'); // Express para crear el servidor
const path = require('path');     // Path para trabajar con rutas de archivos

// Inicializamos la aplicación Express
const app = express();

// Definimos el puerto en el que escuchará el servidor
// Usamos el puerto 3000, como es habitual en desarrollo
const PORT = 3000;

// --- Middleware ---
// Configuramos Express para servir archivos estáticos (como script.js, css, etc.)
// Le decimos que la carpeta raíz del proyecto (__) es donde encontrará estos archivos.
// Cuando index.html pida 'script.js', Express sabrá dónde encontrarlo.
app.use(express.static(path.join(__dirname, '/')));

// --- Rutas ---
// Definimos la ruta principal de la aplicación ('/')
app.get('/', (req, res) => {
  // Cuando alguien acceda a la raíz (ej: http://localhost:3000),
  // le enviamos el archivo 'index.html'.
  res.sendFile(path.join(__dirname, 'index.html'));
});

// --- Iniciamos el servidor ---
// Ponemos el servidor a escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`¡Servidor iniciado con éxito!`);
  console.log(`Escuchando en http://localhost:${PORT}`);
  console.log(`Asignatura: SDAW | Estudiante: Ismael Flores Andreo`);
});