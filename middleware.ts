import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';
import { STAFF_COOKIE, STAFF_LOGIN_PATH, type StaffPortal } from '@/lib/staffAuth';

function portalForPath(pathname: string): StaffPortal | null {
  if (pathname.startsWith('/mot/dashboard')) return 'mot';
  if (pathname.startsWith('/ops/dashboard')) return 'ops';
  return null;
}

export async function middleware(request: NextRequest) {
  const { supabaseResponse, user } = await updateSession(request);

  const portal = portalForPath(request.nextUrl.pathname);
  if (!portal) {
    return supabaseResponse;
  }

  if (!user) {
    return NextResponse.redirect(new URL(STAFF_LOGIN_PATH[portal], request.url));
  }

  const staffCookie = request.cookies.get(STAFF_COOKIE[portal]);
  if (!staffCookie || staffCookie.value !== user.email) {
    return NextResponse.redirect(new URL(STAFF_LOGIN_PATH[portal], request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    '/mot/dashboard/:path*',
    '/ops/dashboard/:path*',
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
