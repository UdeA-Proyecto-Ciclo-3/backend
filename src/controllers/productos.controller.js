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
exports.getById = async (request, response) => {
  try {
    const producto = await Producto.findById(request.params.id);

    console.log(producto);

    response.json({
      registra: true,
      mensaje: "Obtiene el registro con el Id " + request.params.id,
      producto,
    });
  } catch (err) {
    console.log(err);
    response.json({
      registra: false,
      error: {
        mensaje: "No existe el registro con el Id " + request.params.id,
      },
    });
  }
};

/** Actualiza un recurso */
exports.update = async (request, response) => {
  const idProducto = request.params.id;
  const producto = request.body;

  try {
    const productoOriginal = await Producto.findById(idProducto);

    if (!productoOriginal) {
      return response.json({
        registra: false,
        error: {
          mensaje: "El registro a actualizar no existe",
        },
      });
    }
    const productoActualizado = await Producto.findOneAndUpdate(
      { _id: idProducto },
      producto,
      { new: true }
    );
    response.json({
      registra: true,
      mensaje: "Se actualizó el registro con Id " + idProducto,
      producto: productoActualizado,
    });
  } catch (err) {
    console.log(err);
    response.json({
      registra: false,
      error: {
        mensaje: "No existe el registro con el Id " + idProducto,
      },
    });
  }
};

/** Elimina un recurso */
exports.delete = async (request, response) => {
  try {
    const producto = await Producto.findByIdAndRemove(request.params.id);

    console.log(producto);

    response.json({
      registra: true,
      mensaje: "Se ha eliminado el registro con el Id " + request.params.id,
      producto,
    });
  } catch (err) {
    console.log(err);
    response.json({
      registra: false,
      error: {
        mensaje: "No existe el registro con el Id " + request.params.id,
      },
    });
  }
};
