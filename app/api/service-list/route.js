import serviceList from "@/models/serviceList";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnection();
    const dataServiceList = await serviceList.find();
    return NextResponse.json(dataServiceList);
  } catch (error) {
    console.log(error);
  }
}
