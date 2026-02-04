import { NextResponse } from "next/server";

export function middleware(request) {
  // 1. Check karein ke cookie mein 'isLoggedIn' maujood hai ya nahi
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;
  const { pathname } = request.nextUrl;

  // 2. Wo routes jinhein hum protect karna chahte hain
  const protectedRoutes = ["/dashboard", "/queries"];

  // LOGIC A: Agar user login NAHI hai aur wo protected page par jane ki koshish kare
  if (!isLoggedIn && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // LOGIC B: Agar user login HAI aur wo wapis /login page kholna chahe
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Baaki sab normal chalne dein
  return NextResponse.next();
}

// --- YE HISSA SABSE IMPORTANT HAI ---
export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/queries/:path*", // Ab queries par bhi middleware chalega
    "/login"
  ],
};