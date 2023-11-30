import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ACCESS_TOKEN,
  ADMIN_DASHBOARD_URL,
  LOGIN_URL,
  REFRESH_ACCESS_TOKEN,
} from "./utils/constants";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;
  const refreshAccessToken = request.cookies.get(REFRESH_ACCESS_TOKEN)?.value;
  const jwtToken = accessToken && refreshAccessToken;

  const allowedRoutes = ["/", LOGIN_URL];
  const isRouteAllowed = allowedRoutes.includes(pathname);

  if (!jwtToken) {
    if (!isRouteAllowed) {
      return NextResponse.redirect(new URL(LOGIN_URL, request.url));
    } else {
      return NextResponse.next();
    }
  } else {
    if (isRouteAllowed) {
      return NextResponse.redirect(new URL(ADMIN_DASHBOARD_URL, request.url));
    } else {
      return NextResponse.next();
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|_next/static|.*\\..*|_next/image|favicon.ico).*)",
};
