// Importamos el módulo http
const http = require("http");

// Declaramos el host en el que vamos a ejecutar el servidor
const host = "127.0.0.1";

// Puerto que utilizaremos
const puerto = 8060;

const libro = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: "1988",
};

let visitas = 0;

// El método createServer() de http crea un nuevo servidor HTTP y lo devuelve
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Hola mundo");
      break;
    case "/libro":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(libro));
      break;
    case "/visitas":
      visitas++;
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(
        `<html><body><h1>La web ha recibido: ${visitas} visitas</h1></body></html>`
      );
      break;
    case "/html":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end("<html><body><h1>¡Hola mundo!</h1></body></html>");
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("La página no existe");
      break;
  }
});

// Server se queda en escucha en host:puerto
server.listen(puerto, host, () => {
  console.log(`Servidor activo en http://${host}:${puerto}/`);
});
