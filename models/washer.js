import mongoose, { Schema } from "mongoose";

const newWasherSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre del lavador es necesario."],
    minLength: 3,
    maxLength: 30,
  },
});

const washer =
  mongoose.models.washers || mongoose.model("washers", newWasherSchema);

export default washer;
