// Importar el módulo http
const http = require("http");

// Declaramos el host en el que vamos a ejecutar el servidor
const host = "127.0.0.1";

// Puerto que vamos a utilizar
const port = 8060;

// El método createServer() de http crea un nuevo servidor HTTP y lo devuelve
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola mundo");
});

// El servidor se queda escuchando en host:puerto
server.listen(port, host, () => {
  console.log(`Servidor activo en http://${host}:${port}/`);
});
