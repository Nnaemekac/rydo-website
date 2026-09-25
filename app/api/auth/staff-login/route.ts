import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import {
  STAFF_ALLOWLIST_TABLE,
  STAFF_COOKIE,
  STAFF_COOKIE_MAX_AGE,
  isStaffPortal,
} from '@/lib/staffAuth';

export async function POST(request: Request) {
  const body = await request.json();
  const { portal, email, password } = body ?? {};

  if (!isStaffPortal(portal) || !email || !password) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const supabase = await createClient();

  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    return NextResponse.json({ error: signInError.message }, { status: 401 });
  }

  const { data: staffRow } = await supabase
    .from(STAFF_ALLOWLIST_TABLE[portal])
    .select('full_name, role')
    .eq('email', email)
    .maybeSingle();

  if (!staffRow) {
    await supabase.auth.signOut();
    return NextResponse.json(
      { error: 'This account is not authorised for staff access.' },
      { status: 403 }
    );
  }

  const response = NextResponse.json({ staff: staffRow });
  response.cookies.set(STAFF_COOKIE[portal], email, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: STAFF_COOKIE_MAX_AGE,
  });
  return response;
}
