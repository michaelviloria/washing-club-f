import { TypeVehicleModel } from "@/models/TypeVehicle";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export const GET = async () => {
  await dbConnection();
  try {
    const result = await TypeVehicleModel.find({});
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
  }
};
