// Importamos el módulo http
const http = require("http");
// Importamos el módulo filesystem
const fs = require("fs");

// Dclaramos el host en el que vamos a ejecutar el servidor
const host = "127.0.0.1";

// Puerto que utilizaremos
const puerto = 8060;

// El método createServer() de http crea un nuevo servidor HTTP y lo devuelve
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Hola mundo, ¿qué tal?");
      break;
    case "/fichero":
      fs.readFile("3_fichero_externo.html", function (err, text) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(text);
      });
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Error");
      break;
  }
});

// Server se queda en escucha en host:puerto
server.listen(puerto, host, () => {
  console.log(`Servidor activo en http://${host}:${puerto}/`);
});
