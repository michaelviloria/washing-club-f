import NewService from "@/models/service";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export async function GET(request, params) {
  const { name } = params.params;
  try {
    await dbConnection();
    const dataServicesWasher = await NewService.find({
      washerName: name,
    });
    return NextResponse.json(dataServicesWasher);
  } catch (error) {
    console.log(error);
  }
}
