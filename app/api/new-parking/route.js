import mongoose from "mongoose";
import dbConnection from "@/utils/db_connection";
import NewParking from "@/models/parking";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { plate, typeVehicle } = await req.json();

  try {
    await dbConnection();
    await NewParking.create({
      plate,
      type: typeVehicle,
    });
    return NextResponse.json({ msg: ["Parqueo agregado!"], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(error);
    }
  }
}
