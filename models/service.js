import { getCurrentDate, getCurrentTime } from "../utils/getResources";
import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    plate: {
      type: String,
      required: [true, "El número de placa es requerida."],
      trim: true,
      minLength: [3, "Minimo de letras y números es 3"],
      maxLength: [20, "Máximo de letras y números es 20"],
    },

    typeVehicle: {
      type: String,
      required: [true, "El tipo de vehiculo es requerido."],
    },

    typeService: {
      type: String,
      required: [true, "El tipo de servicio es requerido."],
    },

    price: {
      type: String,
      required: [true, "El valor del servicio es requerido."],
      trim: true,
      minLength: [4, "Valor minimo del servicio es de 4 cifras."],
      maxLength: [6, "Valor máximo del servicio es de 6 cifras."],
    },

    washerName: {
      type: String,
      required: [true, "El nombre del lavador es requerido."],
      minLength: [3, "La cantidad minima de letras es 3"],
      maxLength: [50, "La cantidad máxima de letras es 50"],
    },

    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

export const ServiceModel =
  mongoose?.models?.Service || mongoose.model("Service", ServiceSchema);
