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
