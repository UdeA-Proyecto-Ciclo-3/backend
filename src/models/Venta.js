const mongoose = require("mongoose"),
  VentasSchema = mongoose.Schema(
    {
      factura: {
        type: Number,
        required: true,
      },
      cliente: {
        type: String,
        trim: true,
        required: true,
      },
      descripcion: {
        type: String,
        trim: true,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },

      fechaPago: {
        type: Date,
        required: true,
      },
      responsable: {
        type: String,
        trim: true,
        required: true,
      },
      estado: {
        type: String,
        trim: true,
        required: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
module.exports = mongoose.model("Venta", VentasSchema);
