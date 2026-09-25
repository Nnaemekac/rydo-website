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
    <section className="section" style={{ paddingTop: 140, minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: 440 }}>
        <div className="modal-card" style={{ position: 'static', margin: '0 auto' }}>
          {checking && <p style={{ textAlign: 'center', color: 'var(--gray-500)' }}>Checking your reset link…</p>}

          {!checking && !hasSession && !done && (
            <div className="modal-success" style={{ display: 'block' }}>
              <h3>This link is invalid or has expired</h3>
              <p>Request a new password reset link and try again.</p>
              <div style={{ marginTop: 16 }}>
                <Link href="/login" className="btn btn-outline">
                  Back to Log In
                </Link>
              </div>
            </div>
          )}

          {!checking && hasSession && !done && (
            <>
              <div className="modal-title">Set a new password</div>
              <div className="modal-sub">Choose a new password for your account.</div>
              {error && <div className="modal-error show">{error}</div>}
              <form onSubmit={submit}>
                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="At least 6 characters"
                    minLength={6}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary form-submit-btn" type="submit" disabled={loading}>
                  {loading ? 'Saving…' : 'Set New Password'}
                </button>
              </form>
            </>
          )}

          {done && (
            <div className="modal-success" style={{ display: 'block' }}>
              <div className="modal-success-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3>Password updated!</h3>
              <p>You&apos;re all set — your new password is active.</p>
              <div style={{ marginTop: 16 }}>
                <Link href="/" className="btn btn-primary">
                  Continue
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
