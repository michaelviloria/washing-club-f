import NewService from "@/models/service";
import dbConnection from "@/utils/db_connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { plateNumber, serviceValue, washerName, typeService, typeVehicle } =
    await req.json();

  try {
    await dbConnection();
    await NewService.create({
      plateNumber,
      serviceValue,
      washerName,
      typeService,
      typeVehicle,
    });
    return NextResponse.json({ msg: ["Servicio agregado!"], success: true });
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
