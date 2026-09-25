'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MotLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter your Ministry email and password.');
      return;
    }

    setLoading(true);

    const res = await fetch('/api/auth/staff-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ portal: 'mot', email: email.trim(), password }),
    });
    const body = await res.json();

    setLoading(false);

    if (!res.ok) {
      setError(body.error || 'Something went wrong. Please try again.');
      return;
    }

    router.push('/mot/dashboard');
    router.refresh();
  }

  return (
    <div className="mot-login-wrap">
      <div className="mot-login-title">
        <i className="fa-solid fa-shield-halved"></i> Secure Portal Login
      </div>
      <div className="mot-login-sub">Access restricted to authorised government and regulatory officers.</div>

      {error && <div className="modal-error show">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="mot-field"
          type="email"
          placeholder="Ministry email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mot-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mot-login-btn" type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Access Dashboard →'}
        </button>
      </form>

      <div style={{ marginTop: 14, textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
        Secured by RYDO · NDPA 2023 · TLS 1.3 · Access logged &amp; audited
      </div>
    </div>
  );
}
