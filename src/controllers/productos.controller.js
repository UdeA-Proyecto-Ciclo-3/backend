const Producto = require("../models/Producto");

/** Crea nuevo recurso */
exports.create = async (request, response) => {
  try {
    const producto = new Producto(request.body);

    const productoInsertado = await producto.save();

    response.status(200).json({
      success: true,
      message: "Creación del recurso exitosa",
      producto: productoInsertado,
    });
  } catch (err) {
    console.log(err);
    response.json({
      success: false,
      error: {
        message: "No se creo el recurso",
      },
    });
  }
};

/** Obtiene todos los recursos */
exports.getAll = async (request, response) => {
  try {
    const productos = await Producto.find();

    response.status(200).json({
      success: true,
      message: "Busqueda exitosa",
      cantidad: productos.length,
      productos,
    });

    console.log("GET /api/productos");
  } catch (err) {
    console.log(err);
    response.json({
      success: false,
      error: {
        message: "No se obtuvieron los recursos",
      },
    });
  }
};

/** Obtiene un recurso por su ID */
exports.getById = (request, response) => {
  console.log("GET /api/productos");
  response.json("GET /api/productos");
};

/** Actualiza un recurso */
exports.update = (request, response) => {
  console.log("PUT /api/productos");
  response.json("PUT /api/productos");
};

/** Elimina un recurso */
exports.delete = (request, response) => {
  console.log("DELETE /api/productos");
  response.json("DELETE /api/productos");
};
