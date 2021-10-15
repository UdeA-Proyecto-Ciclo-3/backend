const Vendedor = require("../models/Vendedor");

exports.create = async (request, response) => {
    try {
        const vendedor = new Vendedor(request.body);
        const vendedorInsertado = await vendedor.save();

        response.status(200).json({
            success: true,
            message: "Creación del recurso exitosa",
            vendedor: vendedorInsertado,
        });
    } catch (err) {
        console.log(err)
        response.json({
            success: false,
            error: {
                message: "No se creo el recurso",
            }
        });
    }
};

exports.getAll = async (request, response) => {
    try {
        const vendedores = await Vendedor.find();
        response.status(200).json({
            success: true,
            message: "Obtiene todos los registros correctamente",
            vendedores,
        });
    } catch (err) {
        console.log(err)
        response.json({
            success: false,
            error: {
                message: "No se obtuvierpn los registros de los vendedores",
            }
        });
    }
};

/** Obtiene un recurso por su ID */
exports.getById = async (request, response) =>{
 
  try {
      const vendedor = await Vendedor.findById(request.params.id);
      response.status(200).json({
        success: true,
        message: "Obtiene el registro con el ID " + request.params.id,
        vendedor,
      });
  } catch (err) {
      console.log(err)
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
  const idVendedor = request.params.id;
  const vendedor = request.body;

  try {
    const vendedorOriginal = await Vendedor.findById(idVendedor);

    if( !vendedorOriginal ){
      return response.json({
        success: false,
        error: {
          message: "El registro a actualizar, no existe",
        },
      });

    }
    const vendedorActualizado = await Vendedor.findOneAndUpdate(
      { _id: idVendedor },
      vendedor,
      { new: true }
    );
    response.json({
      success: true,
      message: "Se actualizó el registro con Id " + idVendedor,
      venta: vendedorActualizado,
    });
  } catch (err) {
      console.log(err)
    response.json({
      success: false,
      error: {
        message: "No existe el registro con Id " + idVendedor,
      },
    });
  }

};

exports.delete = async ( request, response ) => {
    const idVendedor = request.params.id;

    try {
        const vendedor = await Vendedor.findById(idVendedor);

        if( !vendedor){
            return response.json({
                success: false,
                error: {
                    message: "No existe el registro con Id " + idVendedor,
                }
            });

        };
    const vendedorEliminado = await Vendedor.findByIdAndRemove(idVendedor);
    response.json({
        success: true,
        message: "Se eliminó el registro con Id " + idVendedor,
        vendedor: vendedorEliminado,
    })
            
    } catch (error) {
        response.json({
            success: false,
            error: {
                message: "No se pudo eleimiar el registro con Id " + idVendedor,
            }
        });
    }

};