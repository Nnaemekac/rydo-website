'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function ResetPasswordForm() {
  const supabase = createClient();

  const [checking, setChecking] = useState(true);
  const [hasSession, setHasSession] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setHasSession(Boolean(data.session));
      setChecking(false);
    });
  }, [supabase]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
  }

  return (
    <section className="auth-hero">
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <div className="auth-badge">
            <i className="fa-solid fa-key"></i> Customer Account
          </div>
          <h1 className="auth-title">
            Reset your
            <br />
            <span>password.</span>
          </h1>
          <p className="auth-sub">Choose a new password to get back into your RYDO account.</p>
        </div>

        <div className="auth-card">
          {checking && (
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
              Checking your reset link…
            </p>
          )}

          {!checking && !hasSession && !done && (
            <div style={{ textAlign: 'center' }}>
              <div className="auth-card-title">This link is invalid or has expired</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
                Request a new password reset link and try again.
              </p>
              <Link href="/login" className="auth-submit-btn" style={{ display: 'block', textDecoration: 'none' }}>
                Back to Log In
              </Link>
            </div>
          )}

          {!checking && hasSession && !done && (
            <>
              <div className="auth-card-title">
                <i className="fa-solid fa-shield-halved"></i> Set a new password
              </div>
              <div className="auth-card-sub">Choose a new password for your account.</div>
              {error && <div className="auth-error">{error}</div>}
              <form onSubmit={submit}>
                <input
                  className="auth-field"
                  type="password"
                  placeholder="At least 6 characters"
                  minLength={6}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button className="auth-submit-btn" type="submit" disabled={loading}>
                  {loading ? 'Saving…' : 'Set New Password →'}
                </button>
              </form>
            </>
          )}

          {done && (
            <div style={{ textAlign: 'center' }}>
              <div className="auth-success-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div className="auth-card-title">Password updated!</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
                You&apos;re all set — your new password is active.
              </p>
              <Link href="/" className="auth-submit-btn" style={{ display: 'block', textDecoration: 'none' }}>
                Continue
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
