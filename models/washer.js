import mongoose, { Schema } from "mongoose";

const WasherSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre del lavador es necesario."],
    minLength: 3,
    maxLength: 30,
  },
});

export const WasherModel =
  mongoose?.models?.Washer || mongoose.model("Washer", WasherSchema);
