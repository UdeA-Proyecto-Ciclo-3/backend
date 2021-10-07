import { Schema, model } from "mongoose";

const RolSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
      default: "comprador",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Rol", RolSchema);
