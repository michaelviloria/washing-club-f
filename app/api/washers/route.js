import { WasherModel } from "../../../models/Washer";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export const GET = async () => {
  await dbConnection();
  try {
    const result = await WasherModel.find({});
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
  }
};
