import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/customers",
    "/new-customer",
    "/parking",
    "/parking/:path*",
    "/services",
    "/services/:path*",
    "/washers",
    "/washers/:path*",
  ],
};

export function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const newUrl = new URL("/dashboard", req.nextUrl);

    return NextResponse.redirect(newUrl);
  }
  return NextResponse.next();
}
