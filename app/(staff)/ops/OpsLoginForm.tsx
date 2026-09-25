'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function OpsLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/staff-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ portal: 'ops', email: trimmedEmail, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Unable to sign in.');
        setLoading(false);
        return;
      }

      router.push('/ops/dashboard');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="mot-login-wrap">
      <div className="mot-login-title">
        <i className="fa-solid fa-lock"></i> Staff Login
      </div>
      <div className="mot-login-sub">Access restricted to authorised RYDO team members.</div>

      {error && (
        <div
          style={{
            display: 'block',
            background: 'rgba(224,48,48,0.12)',
            border: '1px solid rgba(224,48,48,0.3)',
            color: '#FF8A8A',
            borderRadius: 10,
            padding: '10px 14px',
            fontSize: 13,
            marginBottom: 14,
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          className="mot-field"
          type="email"
          placeholder="RYDO staff email"
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
          {loading ? 'Signing in…' : 'Sign In →'}
        </button>
      </form>
    </div>
  );
}
