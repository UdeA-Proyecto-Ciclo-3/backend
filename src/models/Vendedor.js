const mongoose = require("mongoose"),
    VendedoresSchema = mongoose.Schema(
        {
            nombre : {
                type: String,
                trim: true,
                required: true,
            },
            especialidad : {
                type: String,
                trim: true,
                required: true,
            },
            celular: {
                type: Number,
                required: true,
            },
            fechaIngreso: {
                type: Date,
                default : Date.now(),
            },
        }
    );

    module.exports = mongoose.model("Vendedor", VendedoresSchema)