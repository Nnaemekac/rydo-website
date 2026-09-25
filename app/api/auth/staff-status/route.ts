import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import { STAFF_COOKIE } from '@/lib/staffAuth';

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ mot: false, ops: false });
  }

  const cookieStore = await cookies();
  const motCookie = cookieStore.get(STAFF_COOKIE.mot);
  const opsCookie = cookieStore.get(STAFF_COOKIE.ops);

  return NextResponse.json({
    mot: motCookie?.value === user.email,
    ops: opsCookie?.value === user.email,
  });
}
