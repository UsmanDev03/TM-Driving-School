import { NextResponse } from "next/server";

export function proxy(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/dashboard", "/queries"];

 if (!isLoggedIn && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// --- YE HISSA SABSE IMPORTANT HAI ---
export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/queries/:path*",
    "/login"
  ],
};