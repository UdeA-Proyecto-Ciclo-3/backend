const mongoose = require("mongoose"),
  UsuarioSchema = mongoose.Schema(
    {
      nombre: {
        type: String,
        trim: true,
        required: true,
      },
      rol: {
        type: String,
        trim: true,
        required: true,
      },
      // rol: [{                               // Establece relación de 1 a N
      //   ref: 'Role',                        // Referencia al Schema Role
      //   type: Schema .Types .ObjectId       // ID asignado dentro del Schema de Role
      // }],
      correo: {
        type: String,
        unique: true,
        trim: true,
        required: true,
      },
      contrasena: {
        type: String,
        unique: true,
        trim: true,
        required: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

module.exports = mongoose.model("Usuario", UsuarioSchema);
