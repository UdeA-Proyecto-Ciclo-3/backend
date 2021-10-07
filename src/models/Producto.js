const mongoose = require("mongoose"),
  ProductosSchema = mongoose.Schema(
    {
      descripcion: {
        type: String,
        trim: true,
        required: true,
      },
      valorUnitario: {
        type: Number,
        required: true,
      },
      estado: {
        type: String,
        required: true,
      },
      fechaIngreso: {
        type: Date,
        default: Date.now(),
      },
      // creadoPor: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "Usuario",
      // },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

module.exports = mongoose.model("Producto", ProductosSchema);
