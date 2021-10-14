const Vendedor = require("../models/Vendedor");

exports.create = async (request, response) => {
    try {
        const vendedor = new Vendedor(request.body);
        const vendedorInsertado = await vendedor.save();

        response.status(200).json({
            success: true,
            message: "Creación del recurso exitosa",
            venta: vendedorInsertado,
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