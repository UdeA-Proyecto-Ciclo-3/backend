import express from "express";

const app = express();
const puerto = 4000;

const info = {
  name: "backend",
  version: "1.0.0",
  description:
    "BackEnd (API): Proyecto Mision TIC, Ciclo 3 (App  de seguimiento de las ventas de un producto y/o servicio en una empresa)",
};

app.use(express.json({ extended: true })); // Habilita uso de JSON (Obliga enviar 'Content-Type':'application/json' el header de la petición)

app.get("/", (request, response) => {
  response.json(info);
  console.log(info);
});

app.get("/productos", (request, response) => {
  const productos = ["manzana", "pera", "mora"];
  response.json({
    productos,
  });
  console.log(productos);
});

app.post("/productos", (request, response) => {
  const data = request.body;
  console.log(data);
  response.json({
    mensaje: "se registro un producto",
  });
});

app.put("/productos", (request, response) => {
  const data = request.body;
  console.log(data);
  response.json({
    mensaje: "se actualizo un producto",
  });
});

app.delete("/productos/:id", (request, response) => {
  const data = request.body;
  console.log(data);
  console.log(request.params.id);
  response.json({
    mensaje: "se eliminó un producto",
  });
});

app.listen(puerto, () => {
  console.log("escuchando en el puerto ", puerto);
});
