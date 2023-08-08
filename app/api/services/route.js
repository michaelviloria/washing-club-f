import { ServiceModel } from "@/models/service";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const GET = async () => {
  await dbConnection();
  try {
    const result = await ServiceModel.find({}).sort({ date: -1, time: 1 });
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req, res) => {
  await dbConnection();
  try {
    const body = await req.json();
    await ServiceModel.create(body);
    return NextResponse.json({
      msg: ["Servicio agregado!"],
      ok: true,
    });
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
