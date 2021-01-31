// Importar el módulo http
const http = require("http");

// Declaramos el host en el que vamos a ejecutar el servidor
const host = "127.0.0.1";

// Puerto que vamos a utilizar
const port = 8060;

const mensaje = "Estás en la página de contacto";

const server = http.createServer((req, res) => {
  // Con un switch simulamos las rutas del servidor y las respuestas para cada una de las rutas
  switch (req.url) {
    // Página de inicio
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Hola mundo");
      break;
    // Simulamos una página de contacto
    case "/contacto":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end(mensaje);
      break;
    // Respuesta por defecto para el resto de rutas que no corresponden con las dos anteriores
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("La página no existe");
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Servidor activo en http://${host}:${port}/`);
});
