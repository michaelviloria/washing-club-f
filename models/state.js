import { Schema, model, models } from "mongoose";

const StateSchema = new Schema(
  {
    state: String,
  },
  {
    versionKey: false,
  }
);

export const StateModel = models?.State || model("State", StateSchema);
