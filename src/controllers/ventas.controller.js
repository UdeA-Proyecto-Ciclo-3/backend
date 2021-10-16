const Venta = require("../models/Venta");

exports.create = async (request, response) => {
  try {
    const venta = new Venta(request.body);
    console.log(venta);
    const ventaInsertada = await venta.save();

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

exports.getAll = async(request, response) => {
  try {
    const ventas = await Venta.find();
    console.log(ventas)
    response.status(200).json({
      success: true,
      message: "Obtiene todos los registros correctamente",
      ventas,
    });       
  } catch (err) {
    console.log(err)
    response.json({
      success: false,
      error: {
        message: "No se obtuvieron los registros de las ventas",
      },
    });
  }
}

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

/** Actualiza un recurso */
exports.update = async (request, response)=>{
  const idVenta = request.params.id;
  const venta = request.body;

  try {
    const ventaOriginal = await Venta.findById(idVenta);

    if( !ventaOriginal ){
      return response.json({
        success: false,
        error: {
          message: "El registro a actualizar, no existe",
        },
      });

    }
    const ventaActualizada = await Venta.findOneAndUpdate(
      { _id: idVenta },
      venta,
      { new: true }
    );
    response.json({
      success: true,
      message: "Se actualizó el registro con Id " + idVenta,
      venta: ventaActualizada,
    });
  } catch (err) {
    response.json({
      success: false,
      error: {
        message: "No existe el registro con Id " + idVenta,
      },
    });
  }

};

/** Elimina un recurso */
exports.delete = async( request, response ) => {

  const idVenta = request.params.id;

  try {
    const venta = await Venta.findById( idVenta );

    if( !venta ){
      return response.json({
        success: false,
        error: {
          message: "No existe el registro con Id " + idVenta,
        },
      });
    }

    const ventaEliminada = await Venta.findByIdAndRemove(idVenta);
    response.json({
      success: true,
      message: "Se eliminó registro con Id " + idVenta,
      venta: ventaEliminada,
    });

  } catch (err) {
    
    response.json({
      success: false,
      error: {
        message: "No se pudo eliminar el registro con Id " + idVenta,
      },
    });
  }
};