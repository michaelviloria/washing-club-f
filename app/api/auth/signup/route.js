import { UserModel } from "@/models/users";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await dbConnection();
    const { username, password } = await req.json();
    const userFound = await UserModel.findOne({ username });

    if (userFound)
      return NextResponse.json({ msg: ["El usuario ya existe."], ok: false });

    const hashedPassword = await bcrypt.hash(password, 12);
    await UserModel.create({
      username,
      password: hashedPassword,
    });

    return NextResponse.json({ msg: ["Usuario registrado!"], ok: true })
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

  return NextResponse.json({ message: "signup" });
}
