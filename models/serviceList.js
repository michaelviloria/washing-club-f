import mongoose, { Schema } from "mongoose";

const ServiceListSchema = new Schema({
  service: {
    type: String,
    required: [true, "El tipo de servicio es necesario."],
    minLength: 3,
    maxLength: 30,
  },
});

export const ServiceListModel =
  mongoose?.models?.ServiceList ||
  mongoose.model("ServiceList", ServiceListSchema);
