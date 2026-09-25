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
    <section className="section" style={{ paddingTop: 140, minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: 440 }}>
        <div className="modal-card" style={{ position: 'static', margin: '0 auto' }}>
          <div className="modal-tabs">
            <Link href="/login" className="modal-tab">
              Log In
            </Link>
            <button className="modal-tab active">Sign Up</button>
          </div>

          {!success && error && <div className="modal-error show">{error}</div>}

          {!success && (
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    className="form-input"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    className="form-input"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
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
                <label className="form-label">Phone Number</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="+234 801 234 5678"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  className="form-input"
                  type="password"
                  placeholder="At least 6 characters"
                  minLength={6}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-consent">
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
              <button className="btn btn-primary form-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Creating account…' : 'Create Account'}
              </button>
            </form>
          )}

          {success && (
            <div className="modal-success" style={{ display: 'block' }}>
              <div className="modal-success-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3>{success.title}</h3>
              <p>{success.message}</p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
                {success.showOrdersBtn && (
                  <Link href="/orders" className="btn btn-primary">
                    View My Orders
                  </Link>
                )}
                <Link href="/" className="btn btn-outline">
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
