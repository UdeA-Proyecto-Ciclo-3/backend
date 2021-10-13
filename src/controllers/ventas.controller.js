const Venta = require("../models/Venta");

exports.create = async (request, response) => {
  try {
    const venta = new Venta(request.body);
    const ventaInsertada = await venta.save();
    console.log(ventaInsertada);

    response.status(200).json({
      success: true,
      message: "Creación del recurso exitosa",
      venta: ventaInsertada,
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

/** Obtiene un recurso por su ID */
exports.getById = async (request, response) =>{
 
  try {
      const venta = await Venta.findById(request.params.id);
      response.status(200).json({
        success: true,
        message: "Obtiene el registro con el ID " + request.params.id,
        venta: venta,
      });
  } catch (err) {
    response.status(500).json({
      success: false,
      error: {
        message: "No exise el registro con el Id " + request.params.id,
      },
    });
  }
};