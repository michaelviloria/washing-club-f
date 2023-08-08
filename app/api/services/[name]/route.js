import { ServiceModel } from "@/models/Service.js";
import dbConnection from "@/utils/db_connection.js";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { name } = params;
  await dbConnection();
  try {
    const result = await ServiceModel.find({ washerName: name });
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
  }
};
