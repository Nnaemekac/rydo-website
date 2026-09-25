import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { STAFF_COOKIE } from '@/lib/staffAuth';

export async function POST() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  const response = NextResponse.json({ ok: true });
  response.cookies.set(STAFF_COOKIE.mot, '', { path: '/', maxAge: 0 });
  response.cookies.set(STAFF_COOKIE.ops, '', { path: '/', maxAge: 0 });
  return response;
}
