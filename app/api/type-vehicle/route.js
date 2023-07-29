import typeVehicle from "@/models/typeVehicle";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnection();
    const typeVehicles = await typeVehicle.find({});
    return NextResponse.json(typeVehicles);
  } catch (error) {
    console.log(error);
  }
}
