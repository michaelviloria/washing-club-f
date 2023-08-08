import { ParkingModel } from "@/models/Parking";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const GET = async () => {
  await dbConnection();
  try {
    const result = await ParkingModel.find({});
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req, res) => {
  await dbConnection();
  try {
    const body = await req.json();
    await ParkingModel.create(body);
    return NextResponse.json({ msg: ["Parqueo agregado!"], ok: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json({ msg: errorList, ok: false });
    } else {
      return NextResponse.json(error);
    }
  }
};
