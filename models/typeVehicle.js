import mongoose, { Schema } from "mongoose";

const TypeVehicleSchema = new Schema({
  vehicle: {
    type: String,
    required: [true, "El tipo de vehiculo es necesario."],
    minLength: 3,
    maxLength: 20,
  },
});

export const TypeVehicleModel =
  mongoose?.models?.TypeVehicle ||
  mongoose.model("TypeVehicle", TypeVehicleSchema);
