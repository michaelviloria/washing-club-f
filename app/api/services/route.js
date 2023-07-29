import NewService from "@/models/service";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnection();
    const data = await NewService.find().sort({ date: -1 });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
