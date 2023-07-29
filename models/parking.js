import { getCurrentDate, getCurrentTime } from "@/utils/getResources";
import mongoose, { Schema } from "mongoose";

const NewParkingSchema = new Schema({
  plate: {
    type: String,
    required: [true, "El número de placa es requerida."],
    trim: true,
    minLength: [3, "Minimo de letras y números es 3"],
    maxLength: [20, "Máximo de letras y números es 20"],
  },

  type: {
    type: String,
    required: [true, "El tipo de vehiculo es requerido."],
  },

  date: {
    type: String,
    default: `${getCurrentDate()}`,
  },

  time: {
    type: String,
    default: `${getCurrentTime()}`,
  },
});

const NewParking =
  mongoose.models.parkings || mongoose.model("parkings", NewParkingSchema);

export default NewParking;
