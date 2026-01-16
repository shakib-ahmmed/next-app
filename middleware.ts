import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const authCookie = req.cookies.get("auth"); 
    const auth = authCookie?.value; 

    if (req.nextUrl.pathname.startsWith("/add-item") && auth !== "true") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = { matcher: ["/add-item"] };
