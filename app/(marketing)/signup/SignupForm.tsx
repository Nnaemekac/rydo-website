'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function SignupForm() {
  const supabase = createClient();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<{ title: string; message: string; showOrdersBtn: boolean } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          phone: phone.trim(),
        },
      },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSuccess({
      title: 'Account created!',
      message: data.session
        ? `You're all set, ${firstName.trim()}.`
        : `Check ${email.trim()} to confirm your account before logging in.`,
      showOrdersBtn: Boolean(data.session),
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
            <i className="fa-solid fa-user-plus"></i> Customer Account
          </div>
          <h1 className="auth-title">
            Join RYDO
            <br />
            <span>in minutes.</span>
          </h1>
          <p className="auth-sub">
            Create an account to send packages, apply as a rider, and keep track of everything in
            one place.
          </p>
        </div>

        <div className="auth-card">
          <div className="auth-card-tabs">
            <Link href="/login" className="auth-card-tab" style={{ display: 'block' }}>
              Log In
            </Link>
            <button className="auth-card-tab active">Sign Up</button>
          </div>

          {!success && (
            <>
              <div className="auth-card-title">
                <i className="fa-solid fa-shield-halved"></i> Create Account
              </div>
              <div className="auth-card-sub">Takes less than a minute.</div>
            </>
          )}

          {!success && error && <div className="auth-error">{error}</div>}

          {!success && (
            <form onSubmit={submit}>
              <div className="auth-row">
                <input
                  className="auth-field"
                  type="text"
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="auth-field"
                  type="text"
                  placeholder="Last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
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
                type="tel"
                placeholder="+234 801 234 5678"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="auth-field"
                type="password"
                placeholder="Password (at least 6 characters)"
                minLength={6}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="auth-consent">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label>
                  I agree to RYDO&apos;s{' '}
                  <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
                  <Link href="/terms">Terms of Service</Link>.
                </label>
              </div>
              <button className="auth-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Creating account…' : 'Create Account →'}
              </button>
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
              <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
                {success.showOrdersBtn && (
                  <Link href="/orders" className="auth-submit-btn" style={{ display: 'block', textDecoration: 'none' }}>
                    View My Orders
                  </Link>
                )}
                <Link href="/" className="auth-link" style={{ fontSize: 13 }}>
                  Continue to homepage
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
