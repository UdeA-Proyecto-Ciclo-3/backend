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