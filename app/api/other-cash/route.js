import { OtherCashModel } from "@/models/otherCash";
import dbConnection from "@/utils/db_connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnection();
    const data = await OtherCashModel.find({}).sort({ dateUtc: -1 });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req, res) => {
  try {
    await dbConnection();
    const body = await req.json();
    await OtherCashModel.create(body);
    return NextResponse.json({ msg: ["Movimiento agregado!"], ok: true });
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
