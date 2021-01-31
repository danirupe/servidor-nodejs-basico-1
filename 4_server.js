const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const puerto = 8060;

let nombre = "Daniel";
let apellidos = "Ruiz";

let aficiones = ["Crossfit", "Programar", "Fútbol"];

function mostrarAficiones() {
  let contenido = "";
  aficiones.forEach((aficion) => {
    contenido += `<li>${aficion}</li>`;
  });
  return contenido;
}

let libros = [
  {
    titulo: "Clean Code JavaScript",
    autor: "Miguel A. Gómez",
  },
  {
    titulo: "Building frontend web apps with plain JavaScript",
    autor: "Gerd Wagner",
  },
];

function mostrarLibros() {
  let contenidoLibros = "";
  for (let i = 0; i < libros.length; i++) {
    contenidoLibros += `<li><b>${libros[i].titulo}:</b> ${libros[i].autor}</li>`;
  }
  return contenidoLibros;
}

let cantidadLibros = libros.length;
let visitas = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  switch (req.url) {
    case "/":
      fs.readFile("4_bienvenida.html", function (err, text) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(text);
      });
      break;
    case "/nombre":
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(`<html><body><h1>Mi nombre es: ${nombre}</h1></body></html>`);
      break;
    case "/apellidos":
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(
        `<html><body><h1>Mis apellidos son: ${apellidos}</h1></body></html>`
      );
      break;
    case "/aficiones":
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(
        `<html><body>
          <h1>Mis aficiones son:</h1>
          <ul>
            ${mostrarAficiones()}
          </ul>
        </body></html>`
      );
      break;
    case "/libros":
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(
        `<html><body>
          <h1>Mis libros:</h1>
          <ul>
            ${mostrarLibros()}
          </ul>
        </body></html>`
      );
      break;
    case "/libros/cantidad":
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(
        `<html><body>
          <h1>Cantidad de libros: ${cantidadLibros}</h1>
        </body></html>`
      );
      break;
    case "/visitas":
      visitas++;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(
        `<html><body><h1>La web ha recibido: ${visitas} visitas</h1></body></html>`
      );
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Error");
      break;
  }
});

server.listen(puerto, host, () => {
  console.log(`Servidor activo en http://${host}:${puerto}/`);
});
