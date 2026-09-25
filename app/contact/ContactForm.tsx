'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { trackEvent } from '@/components/PostHogProvider';
import { ANALYTICS_EVENTS } from '@/lib/posthog';

const CONTACT_TOPICS = [
  'Select a topic…',
  'Delivery issue or complaint',
  'Rider enquiry / application',
  'Business / bulk order partnership',
  'Privacy or data request',
  'Media enquiry',
  'General question',
];

export default function ContactForm() {
  const supabase = createClient();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(CONTACT_TOPICS[0]);
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.from('messages').insert({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      topic,
      message: message.trim(),
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSent(true);
    trackEvent(ANALYTICS_EVENTS.CONTACT_FORM_SUBMITTED);
  }

  return (
    <div className="form-card">
      <div className="form-title">Send us a message</div>
      {error && <div className="modal-error show">{error}</div>}

      {!sent && (
        <form onSubmit={submit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Prosper"
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
                placeholder="Okonkwo"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="prosper@email.com"
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">What can we help with?</label>
            <select className="form-select" value={topic} onChange={(e) => setTopic(e.target.value)}>
              {CONTACT_TOPICS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell us how we can help…"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary form-submit-btn"
            type="submit"
            disabled={loading}
            style={{ padding: 16, fontSize: 15 }}
          >
            {loading ? 'Sending…' : 'Send Message →'}
          </button>
        </form>
      )}

      {sent && (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div className="modal-success-icon" style={{ margin: '0 auto 14px' }}>
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 700,
              fontSize: 17,
              marginBottom: 6,
            }}
          >
            Message sent!
          </div>
          <div style={{ fontSize: 14, color: 'var(--gray-500)' }}>
            We respond within 2 hours on weekdays. Thanks for reaching out.
          </div>
        </div>
      )}

      <div style={{ marginTop: 14, fontSize: 12, color: 'var(--gray-500)', textAlign: 'center' }}>
        We respond within 2 hours on weekdays ·{' '}
        <a href="/privacy-policy" style={{ color: 'var(--orange)' }}>
          Privacy policy
        </a>
      </div>
    </div>
  );
}
