import mongoose, { Schema } from "mongoose";

const newServiceListSchema = new Schema({
  service: {
    type: String,
    required: [true, "El tipo de servicio es necesario."],
    minLength: 3,
    maxLength: 30,
  },
});

const serviceList =
  mongoose.models.listservices ||
  mongoose.model("listservices", newServiceListSchema);

export default serviceList;
