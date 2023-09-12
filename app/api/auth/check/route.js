import { headers } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnection from "@/utils/db_connection";
import { UserModel } from "@/models/users";

export async function GET() {
  try {
    const headersList = headers();
    const token = headersList.get("token");

    if (!token)
      return NextResponse.json({
        msg: "Usuario no autorizado",
      });

    try {
      const isTokenValid = jwt.verify(token, process.env.SECRET);

      const {rest} = isTokenValid;

      await dbConnection();
      const userFound = await UserModel.findById(rest._id);

      if (!userFound)
        return NextResponse.json({
          msg: "Usuario no encontrado",
        });

      return NextResponse.json({
        isAuthorized: true,
        msg: "Usuario autorizado.",
      });
    } catch (error) {
      return NextResponse.json({
        msg: "El token no es valido",
        error,
      });
    }
  } catch (error) {
    return NextResponse.json({
      msg: "Ha ocurrido un error",
      error,
    });
  }
}
