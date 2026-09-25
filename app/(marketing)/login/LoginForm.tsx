'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

type View = 'login' | 'forgot';

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const notice = searchParams.get('notice');
  const next = searchParams.get('next') || '/orders';
  const supabase = createClient();

  const [view, setView] = useState<View>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<{ title: string; message: string } | null>(null);

  async function submitLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push(next);
    router.refresh();
  }

  async function submitForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(forgotEmail.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSuccess({
      title: 'Check your email',
      message: `We've sent a password reset link to ${forgotEmail.trim()}.`,
    });
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
            <i className="fa-solid fa-user-lock"></i> Customer Account
          </div>
          <h1 className="auth-title">
            Welcome back
            <br />
            <span>to RYDO.</span>
          </h1>
          <p className="auth-sub">
            Log in to send packages, apply as a rider, and track the status of your requests — all
            from your RYDO account.
          </p>
        </div>

        <div className="auth-card">
          <div className="auth-card-tabs">
            <button
              className={`auth-card-tab${view === 'login' ? ' active' : ''}`}
              onClick={() => {
                setView('login');
                setError('');
                setSuccess(null);
              }}
            >
              Log In
            </button>
            <Link href="/signup" className="auth-card-tab" style={{ display: 'block' }}>
              Sign Up
            </Link>
          </div>

          {!success && (
            <>
              <div className="auth-card-title">
                <i className="fa-solid fa-shield-halved"></i> Account Login
              </div>
              <div className="auth-card-sub">Log in with your email and password.</div>
            </>
          )}

          {!success && notice && !error && <div className="auth-error">{notice}</div>}
          {!success && error && <div className="auth-error">{error}</div>}

          {!success && view === 'login' && (
            <form onSubmit={submitLogin}>
              <input
                className="auth-field"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="auth-field"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ textAlign: 'right', marginBottom: 16 }}>
                <button
                  type="button"
                  onClick={() => {
                    setView('forgot');
                    setError('');
                  }}
                  className="auth-link"
                  style={{ fontSize: 13, background: 'none', border: 'none', padding: 0 }}
                >
                  Forgot password?
                </button>
              </div>
              <button className="auth-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Logging in…' : 'Log In →'}
              </button>
            </form>
          )}

          {!success && view === 'forgot' && (
            <form onSubmit={submitForgotPassword}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
                Enter your account email and we&apos;ll send you a link to reset your password.
              </p>
              <input
                className="auth-field"
                type="email"
                placeholder="Email"
                required
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
              />
              <button className="auth-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Sending…' : 'Send Reset Link'}
              </button>
              <div style={{ textAlign: 'center', marginTop: 14 }}>
                <button
                  type="button"
                  onClick={() => {
                    setView('login');
                    setError('');
                  }}
                  className="auth-link"
                  style={{ fontSize: 13, background: 'none', border: 'none', padding: 0 }}
                >
                  ← Back to log in
                </button>
              </div>
            </form>
          )}

          {success && (
            <div style={{ textAlign: 'center' }}>
              <div className="auth-success-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div className="auth-card-title">{success.title}</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
                {success.message}
              </p>
              <button
                type="button"
                onClick={() => {
                  setView('login');
                  setSuccess(null);
                  setError('');
                }}
                className="auth-submit-btn"
                style={{ display: 'block', width: '100%' }}
              >
                Back to Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function LoginForm() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  );
}
