import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { STAFF_COOKIE, isStaffPortal } from '@/lib/staffAuth';

export async function POST(request: Request) {
  const body = await request.json();
  const { portal } = body ?? {};

  if (!isStaffPortal(portal)) {
    return NextResponse.json({ error: 'Missing portal.' }, { status: 400 });
  }

  const supabase = await createClient();
  await supabase.auth.signOut();

  const response = NextResponse.json({ ok: true });
  response.cookies.set(STAFF_COOKIE[portal], '', { path: '/', maxAge: 0 });
  return response;
}
