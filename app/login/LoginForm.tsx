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
    <section className="section" style={{ paddingTop: 140, minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: 440 }}>
        <div className="modal-card" style={{ position: 'static', margin: '0 auto' }}>
          <div className="modal-tabs">
            <button
              className={`modal-tab${view === 'login' ? ' active' : ''}`}
              onClick={() => {
                setView('login');
                setError('');
                setSuccess(null);
              }}
            >
              Log In
            </button>
            <Link href="/signup" className="modal-tab">
              Sign Up
            </Link>
          </div>

          {!success && notice && !error && <div className="modal-error show">{notice}</div>}
          {!success && error && <div className="modal-error show">{error}</div>}

          {!success && view === 'login' && (
            <form onSubmit={submitLogin}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ textAlign: 'right', marginBottom: 16 }}>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setView('forgot');
                    setError('');
                  }}
                  style={{ fontSize: 13, color: 'var(--orange)' }}
                >
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-primary form-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Logging in…' : 'Log In'}
              </button>
            </form>
          )}

          {!success && view === 'forgot' && (
            <form onSubmit={submitForgotPassword}>
              <p style={{ fontSize: 14, color: 'var(--gray-500)', marginBottom: 18 }}>
                Enter your account email and we&apos;ll send you a link to reset your password.
              </p>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@email.com"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
              </div>
              <button className="btn btn-primary form-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Sending…' : 'Send Reset Link'}
              </button>
              <div style={{ textAlign: 'center', marginTop: 14 }}>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setView('login');
                    setError('');
                  }}
                  style={{ fontSize: 13, color: 'var(--gray-500)' }}
                >
                  ← Back to log in
                </a>
              </div>
            </form>
          )}

          {success && (
            <div className="modal-success" style={{ display: 'block' }}>
              <div className="modal-success-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3>{success.title}</h3>
              <p>{success.message}</p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16 }}>
                <Link href="/login" className="btn btn-outline">
                  Back to Log In
                </Link>
              </div>
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
