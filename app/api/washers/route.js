import washer from "@/models/washer";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnection();
    const dataWasher = await washer.find({});
    return NextResponse.json(dataWasher);
  } catch (error) {
    console.log(error);
  }
}
