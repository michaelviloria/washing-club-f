import { StateModel } from "@/models/state";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnection();

    const data = await StateModel.find({});
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
};
