import { NextResponse } from "next/server";

export async function middleware(req) {
  try {
    const token = req.cookies.get("auth_cookie");

    if (!token) return NextResponse.redirect(new URL("/login", req.url));
    
    const res = await fetch(`${req.nextUrl.origin}/api/auth/check`, {
      headers: {
        token: token.value,
      },
    });

    const data = await res.json();

    if (!data.isAuthorized)
      return NextResponse.redirect(new URL("/login", req.url));

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/customers/:path*",
    "/parking/:path*",
    "/services/:path*",
    "/washers/:path*",
    "/new-customer/:path*",
  ],
};
