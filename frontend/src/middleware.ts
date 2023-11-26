import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshAccessToken = request.cookies.get('refreshAccessToken')?.value;
  const jwtToken = accessToken && refreshAccessToken;

  const allowedRoutes = ['/', '/login'];
  const isRouteAllowed = allowedRoutes.includes(pathname);

  if (!jwtToken) {
    if (!isRouteAllowed) {
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      return NextResponse.next();
    }
  } else {
    if (isRouteAllowed) {
      return NextResponse.redirect(new URL('/admin', request.url));
    } else {
      return NextResponse.next();
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|.*\\..*|_next/image|favicon.ico).*)',
}