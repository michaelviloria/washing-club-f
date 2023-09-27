import mongoose, { Schema } from "mongoose";

const ParkingSchema = new Schema(
  {
    description: {
      type: String,
      default: "Parqueo"
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

    state: {
      type: String,
      default: "Pendiente",
    },

    category: {
      type: String,
      default: "parqueo",
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
  {
    versionKey: false,
  }
);

export const ParkingModel =
  mongoose?.models?.Parking || mongoose.model("Parking", ParkingSchema);
