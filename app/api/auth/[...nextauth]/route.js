import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnection from "@/utils/db_connection";
import { UserModel } from "@/models/users";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          await dbConnection();

          const userFound = await UserModel.findOne({
            username: credentials.username,
          }).select("+password");

          if (!userFound) return null;

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            userFound.password
          );
          console.log("Password MATCH --->", passwordMatch);
          console.log("SIGNIN NextAuth", {
            password1: credentials.password,
            password2: userFound.password,
          });
          if (!passwordMatch) return null;
          console.log("USERFOUND authorize", userFound);
          return userFound;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
