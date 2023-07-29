import mongoose, { Schema } from "mongoose";

const newTypeVehicleSchema = new Schema({
  vehicle: {
    type: String,
    required: [true, "El tipo de vehiculo es necesario."],
    minLength: 3,
    maxLength: 20,
  },
});

const typeVehicle =
  mongoose.models.vehicles || mongoose.model("vehicles", newTypeVehicleSchema);

export default typeVehicle;
