import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("auth");

  if (!auth && request.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
