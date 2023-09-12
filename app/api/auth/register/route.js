import { NextResponse } from "next/server";
import dbConnection from "@/utils/db_connection";
import mongoose from "mongoose";
import { UserModel } from "@/models/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    await dbConnection();

    const { username, password, confirmPassword } = await req.json();

    if (!password)
      return NextResponse.json({
        msg: ["Ingresa una contraseña"],
        ok: false,
      });

    if (!confirmPassword)
      return NextResponse.json({
        msg: ["Ingresa de nuevo la contraseña"],
        ok: false,
      });

    if (password !== confirmPassword)
      return NextResponse.json({
        msg: ["Las contraseñas no coinciden"],
        ok: false,
      });

    const userFound = await UserModel.findOne({ username });

    if (userFound)
      return NextResponse.json({ msg: ["El usuario ya existe"], ok: false });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username,
      password: hashedPassword,
    });

    const { password: passwordUser, ...rest } = newUser._doc;

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
        msg: ["Usuario creado correctamente!!"],
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
