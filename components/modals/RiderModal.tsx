'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/components/AuthProvider';
import { trackEvent } from '@/components/PostHogProvider';
import { ANALYTICS_EVENTS } from '@/lib/posthog';
import { MOT_ZONES, NIGERIAN_STATES, DEFAULT_RIDER_STATE } from '@/lib/constants';
import { useModal } from './ModalProvider';
import ModalShell from './ModalShell';

async function uploadRiderFile(file: File, prefix: string) {
  const supabase = createClient();
  const path = `${prefix}_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
  const { error } = await supabase.storage.from('rider-documents').upload(path, file);
  if (error) throw error;
  return path;
}

export default function RiderModal({ onSubmitted }: { onSubmitted?: () => void }) {
  const { modal, close } = useModal();
  const { user } = useAuth();
  const supabase = createClient();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zone, setZone] = useState(MOT_ZONES[0]);
  const [vehicle, setVehicle] = useState('Motorcycle');
  const [licence, setLicence] = useState('');
  const [nin, setNin] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState(DEFAULT_RIDER_STATE);
  const [lga, setLga] = useState('');
  const [consent, setConsent] = useState(false);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!user || name) return;
    const first = (user.user_metadata?.first_name as string) || '';
    const last = (user.user_metadata?.last_name as string) || '';
    setName([first, last].filter(Boolean).join(' '));
    setPhone((user.user_metadata?.phone as string) || '');
    setEmail(user.email || '');
  }, [user, name]);

  function handleClose() {
    setError('');
    setDone(false);
    close();
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!user) {
      setError('Your session expired — please log in again before applying.');
      return;
    }

    setLoading(true);

    let documentPath: string | null = null;
    let selfiePath: string | null = null;
    try {
      if (idFile) documentPath = await uploadRiderFile(idFile, 'id');
      if (selfieFile) selfiePath = await uploadRiderFile(selfieFile, 'selfie');
    } catch (uploadError) {
      setLoading(false);
      const message = uploadError instanceof Error ? uploadError.message : 'Unknown error';
      setError(`Could not upload your file: ${message} (you can still submit without it and send it later)`);
      return;
    }

    const payload = {
      full_name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      preferred_zone: zone,
      vehicle_type: vehicle,
      licence_number: licence.trim(),
      nin: nin.trim(),
      house_address: address.trim(),
      state,
      lga: lga.trim(),
      document_path: documentPath,
      selfie_path: selfiePath,
      status: 'applied',
      user_id: user.id,
    };

    const { error } = await supabase.from('rider_applications').insert(payload);
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
    trackEvent(ANALYTICS_EVENTS.RIDER_APPLICATION_SUBMITTED);
    onSubmitted?.();
  }

  return (
    <ModalShell active={modal === 'rider'} onClose={handleClose}>
      <div className="modal-eyebrow">
        <span className="badge badge-orange">
          <i className="fa-solid fa-motorcycle"></i> Become a Rider
        </span>
      </div>
      <div className="modal-title">Apply to ride with RYDO</div>
      <div className="modal-sub">
        Takes about 3 minutes. Our team reviews applications and reaches out within 24 hours for KYC
        verification.
      </div>
      {error && <div className="modal-error show">{error}</div>}

      {!done && (
        <form onSubmit={submit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
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
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Preferred Zone</label>
              <select className="form-select" value={zone} onChange={(e) => setZone(e.target.value)}>
                {MOT_ZONES.map((z) => (
                  <option key={z}>{z}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Vehicle Type</label>
              <select className="form-select" value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                <option>Motorcycle</option>
                <option>Scooter</option>
                <option>Bicycle</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Driver&apos;s Licence Number</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. RIV-XXXXXXXX"
              required
              value={licence}
              onChange={(e) => setLicence(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">NIN (National Identification Number)</label>
            <input
              className="form-input"
              type="text"
              placeholder="11-digit NIN"
              maxLength={11}
              pattern="[0-9]{11}"
              required
              value={nin}
              onChange={(e) => setNin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">House Address</label>
            <input
              className="form-input"
              type="text"
              placeholder="Street address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">State</label>
              <select className="form-select" required value={state} onChange={(e) => setState(e.target.value)}>
                {NIGERIAN_STATES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">LGA (Local Government Area)</label>
              <input
                className="form-input"
                type="text"
                placeholder="e.g. Obio-Akpor"
                required
                value={lga}
                onChange={(e) => setLga(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Valid ID or Licence Photo (optional for now)</label>
            <label className={`modal-file${idFile ? ' has-file' : ''}`}>
              <i className="fa-solid fa-upload"></i>
              <span>{idFile ? idFile.name : 'Click to upload — you can also send this later'}</span>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setIdFile(e.target.files?.[0] ?? null)}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Face Photo / Selfie (for verification)</label>
            <label className={`modal-file${selfieFile ? ' has-file' : ''}`}>
              <i className="fa-solid fa-camera"></i>
              <span>{selfieFile ? selfieFile.name : 'Click to upload a clear selfie — you can also send this later'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelfieFile(e.target.files?.[0] ?? null)}
              />
            </label>
          </div>
          <div className="form-consent">
            <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <label>
              I agree to RYDO&apos;s{' '}
              <Link href="/terms" onClick={handleClose}>
                Rider Terms &amp; Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" onClick={handleClose}>
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          <button className="btn btn-primary form-submit-btn" type="submit" disabled={loading}>
            {loading ? 'Submitting…' : 'Submit Application'}
          </button>
        </form>
      )}

      {done && (
        <div className="modal-success" style={{ display: 'block' }}>
          <div className="modal-success-icon">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h3>Application submitted!</h3>
          <p>
            Thanks for applying to ride with RYDO. Our onboarding team will call or WhatsApp you within
            24 hours to verify your documents.
          </p>
          <button className="btn btn-outline" style={{ marginTop: 12 }} onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </ModalShell>
  );
}
