import { Schema, model, models } from "mongoose";

const OtherCashSchema = new Schema({
  description: {
    type: String,
    required: [true, "La descripcion es requerida"],
    minLength: [3, "Minimo de letras y números es 3"],
    maxLength: [100, "Máximo de letras y números es 20"],
  },

  plate: {
    type: String,
    default: "No tiene",
  },

  price: {
    type: String,
    required: [true, "El precio es requerido"],
  },

  state: {
    type: String,
    default: "Pendiente",
  },

  category: {
    type: String,
    default: "otro",
  },

  date: String,
  time: String,
  dateUtc: Date,
});

export const OtherCashModel =
  models?.OtherCash || model("OtherCash", OtherCashSchema);
