import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "El usuario es requerido."],
      minLength: [3, "El usuario debe tener como minimo 3 caracteres."],
      maxLength: [50, "El usuario debe tener como maximo 50 caracteres."],
    },

    password: {
      type: String,
      required: [true, "La contraseña es requerida."],
      select: false,
    },
  },
  {
    versionKey: false,
  }
);

export const UserModel = models?.User || model("User", UserSchema);
