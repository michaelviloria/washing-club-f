import NewParking from "@/models/parking";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnection();
    const data = await NewParking.find();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
