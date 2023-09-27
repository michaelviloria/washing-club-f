import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, "La descripcion del servicio es requerida"],
      minLength: [3, "Minimo de letras y números es 3"],
      maxLength: [20, "Máximo de letras y números es 20"],
    },

    plate: {
      type: String,
      required: [true, "El número de placa es requerida."],
      minLength: [3, "Minimo de letras y números es 3"],
      maxLength: [20, "Máximo de letras y números es 20"],
    },

    price: {
      type: String,
      required: [true, "El valor del servicio es requerido."],
      trim: true,
      minLength: [4, "Valor minimo del servicio es de 4 cifras."],
      maxLength: [6, "Valor máximo del servicio es de 6 cifras."],
    },

    typeVehicle: {
      type: String,
      required: [true, "El tipo de vehiculo es requerido."],
    },

    washerName: {
      type: String,
      required: [true, "El nombre del lavador es requerido."],
      minLength: [3, "La cantidad minima de letras es 3"],
      maxLength: [50, "La cantidad máxima de letras es 50"],
    },

    state: {
      type: String,
      default: "Pendiente",
    },

    category: {
      type: String,
      default: "lavada",
    },

    date: {
      type: String,
    },
    time: {
      type: String,
    },
    dateUtc: {
      type: Date,
    },
  },
  { versionKey: false }
);

export const ServiceModel =
  mongoose?.models?.Service || mongoose.model("Service", ServiceSchema);
