import { ServiceModel } from "@/models/service";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { name } = params;
  await dbConnection();
  try {
    const result = await ServiceModel.find({ washerName: name }).sort({
      dateUtc: -1,
    });
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
  }
};
