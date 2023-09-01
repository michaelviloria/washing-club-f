import { UserModel } from "@/models/users";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await dbConnection();
    const { username, password } = await req.json();

    if (!username && !password)
      return NextResponse.json({
        msg: ["El usuario es requerido", "La contraseña es requerida"],
        ok: false,
      });

    if (!username)
      return NextResponse.json({ msg: ["El usuario es requerido"], ok: false });

    if (!password)
      return NextResponse.json({
        msg: ["La contraseña es requerida"],
        ok: false,
      });

    const userFound = await UserModel.findOne({ username }).select("+password");
    if (!userFound)
      return NextResponse.json({ msg: ["Usuario no encontrado"], ok: false });
    console.log(userFound);

    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch)
      return NextResponse.json({
        msg: ["La contraseña no coincide"],
        ok: false,
      });

    console.log("SIGNIN API --->>>", {
      password,
      password2: userFound.password,
    });

    return NextResponse.json({
      msg: ["Inicio de sesion satisfactorio."],
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
}
