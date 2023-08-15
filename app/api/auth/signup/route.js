import { UserModel } from "@/models/users";
import dbConnection from "@/utils/db_connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

export async function POST(req) {
  await dbConnection();
  try {
    const { username, password } = await req.json();

    const userFound = await UserModel.findOne({ username });
    if (userFound) return NextResponse.json({ msg: ["El usuario ya existe."] });

    const hashedPassword = await bcrypt.hash(password, 12);

    await UserModel.create({ username, password: hashedPassword });
    return NextResponse.json({ msg: ["Usuario creado!"], ok: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
    }
  }
}
