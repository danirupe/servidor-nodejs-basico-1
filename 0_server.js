// Importar el módulo http
const http = require("http");

// Declaramos el host en el que vamos a ejecutar el servidor
const host = "127.0.0.1";

// Puerto que vamos a utilizar
const port = 8060;

// El método createServer() de http crea un nuevo servidor HTTP y lo devuelve
const server = http.createServer((req, res) => {
  // Código de estado indicando que la operación ha sido satisfactoria.
  res.statusCode = 200;
  // Tipo de contenido que vamos a recibir
  res.setHeader("Content-Type", "text/plain");
  // Escribimos la respuesta
  res.write("Hola mundo");
  // Finalizamos la respuesta
  res.end();
});

// El servidor se queda escuchando en host:puerto
server.listen(port, host, () => {
  console.log(`Servidor activo en http://${host}:${port}/`);
});
