import dbConnection from "@/utils/db_connection";
import bcrypt from "bcryptjs";
import { UserModel } from "@/models/users";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    await dbConnection();

    const { username, password } = await req.json();

    const userFound = await UserModel.findOne({ username }).select("+password");

    if (!userFound)
      return NextResponse.json({
        msg: ["Usuario no encontrado"],
        ok: false,
      });

    const isCorrect = await bcrypt.compare(password, userFound.password);

    if (!isCorrect)
      return NextResponse.json({
        msg: ["Contraseña incorrecta"],
        ok: false,
      });

    const { password: passwordUser, ...rest } = userFound._doc;

    const token = jwt.sign({ rest }, process.env.SECRET, {
      expiresIn: 43200,
    });

    const cookie = serialize("auth_cookie", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 43200,
      path: "/",
    });

    return NextResponse.json(
      {
        msg: ["Inicio de sesion correcto!!"],
        ok: true,
      },
      {
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
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
