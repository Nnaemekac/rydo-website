'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/components/AuthProvider';
import { trackEvent } from '@/components/PostHogProvider';
import { ANALYTICS_EVENTS } from '@/lib/posthog';
import { useModal } from './ModalProvider';
import ModalShell from './ModalShell';

export default function PackageModal({ onSubmitted }: { onSubmitted?: () => void }) {
  const { modal, close } = useModal();
  const { user } = useAuth();
  const supabase = createClient();

  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [packageType, setPackageType] = useState('Document');
  const [weight, setWeight] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [ref, setRef] = useState<string | null>(null);

  function handleClose() {
    setError('');
    setRef(null);
    close();
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const payload = {
      sender_name: senderName.trim(),
      sender_phone: senderPhone.trim(),
      pickup_address: pickup.trim(),
      dropoff_address: dropoff.trim(),
      package_type: packageType,
      weight_kg: weight || null,
      recipient_name: recipientName.trim(),
      recipient_phone: recipientPhone.trim(),
      notes: notes.trim() || null,
      status: 'pending',
      user_id: user?.id ?? null,
    };

    const insertQuery = supabase.from('package_requests').insert(payload);
    const { data, error } = user ? await insertQuery.select().single() : await insertQuery;
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    const reference = user
      ? 'RY-' + String((data as { id: number }).id).padStart(4, '0')
      : 'RY-' + Date.now().toString().slice(-6);
    setRef(reference);
    trackEvent(ANALYTICS_EVENTS.PACKAGE_REQUEST_SUBMITTED, { guest: !user });
    onSubmitted?.();
  }

  return (
    <ModalShell active={modal === 'package'} onClose={handleClose}>
      <div className="modal-eyebrow">
        <span className="badge badge-orange">
          <i className="fa-solid fa-box"></i> Send a Package
        </span>
      </div>
      <div className="modal-title">Request a delivery</div>
      <div className="modal-sub">
        Tell us where it&apos;s going — our team will confirm pricing and arrange pickup. You&apos;ll
        get a reference number to check the status of your request.
      </div>
      {error && <div className="modal-error show">{error}</div>}

      {!ref && (
        <form onSubmit={submit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Phone</label>
              <input
                className="form-input"
                type="tel"
                placeholder="+234 801 234 5678"
                required
                value={senderPhone}
                onChange={(e) => setSenderPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Pickup Address</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. 12 Aba Road, Port Harcourt"
              required
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Drop-off Address</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. 4 Peter Odili Road, GRA"
              required
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Package Type</label>
              <select
                className="form-select"
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
              >
                <option value="Document">Document / Envelope</option>
                <option value="Small Package">Small Package (up to 5kg)</option>
                <option value="Bulk">Bulk / Multi-drop</option>
                <option value="Freight">Freight / Heavy Item</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Approx. Weight (kg)</label>
              <input
                className="form-input"
                type="number"
                min="0"
                step="0.1"
                placeholder="e.g. 2"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Recipient Name</label>
              <input
                className="form-input"
                type="text"
                required
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Recipient Phone</label>
              <input
                className="form-input"
                type="tel"
                placeholder="+234 801 234 5678"
                required
                value={recipientPhone}
                onChange={(e) => setRecipientPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Notes for the rider (optional)</label>
            <textarea
              className="form-textarea"
              placeholder="Gate code, landmark, handling instructions…"
              style={{ minHeight: 70 }}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button className="btn btn-primary form-submit-btn" type="submit" disabled={loading}>
            {loading ? 'Submitting…' : 'Request Pickup'}
          </button>
        </form>
      )}

      {ref && (
        <div className="modal-success" style={{ display: 'block' }}>
          <div className="modal-success-icon">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h3>Request received!</h3>
          <p>Your reference number — save this to check your request status:</p>
          <div className="modal-ref">{ref}</div>
          <p>Our team will confirm pricing and pickup shortly. We&apos;ll reach you on the phone number you provided.</p>
          <button className="btn btn-outline" style={{ marginTop: 12 }} onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </ModalShell>
  );
}
