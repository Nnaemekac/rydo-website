'use client';

import { useState, type CSSProperties } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ToastProvider';
import { MESSAGE_STATUSES, type Message } from '@/lib/dashboardTypes';

const selectStyle: CSSProperties = {
  fontSize: 12,
  padding: '4px 8px',
  borderRadius: 6,
  border: '1px solid #DDE6F5',
  fontFamily: 'var(--font-inter),sans-serif',
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function OpsMessagesTable({ messages: initialMessages }: { messages: Message[] }) {
  const supabase = createClient();
  const { showToast } = useToast();
  const [messages, setMessages] = useState(initialMessages);

  async function handleStatusChange(id: number, status: string) {
    const { error } = await supabase.from('messages').update({ status }).eq('id', id);
    if (error) {
      showToast(`Failed to update: ${error.message}`, 'error');
      return;
    }
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
    showToast(`Message marked "${status}"`);
  }

  return (
    <div>
      <div className="mot-section-head">
        <div className="mot-section-title">Contact Messages</div>
        <span style={{ fontSize: 12, color: '#8494B5' }}>{messages.length} total</span>
      </div>
      <div className="mot-table-wrap">
        <div style={{ overflowX: 'auto' }}>
          <table className="mot-table">
            <thead>
              <tr>
                <th>From</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Topic</th>
                <th>Message</th>
                <th>Received</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', color: '#8494B5', padding: 24 }}>
                    No messages yet.
                  </td>
                </tr>
              ) : (
                messages.map((m) => (
                  <tr key={m.id}>
                    <td>{`${m.first_name} ${m.last_name}`}</td>
                    <td style={{ fontSize: 12 }}>{m.email}</td>
                    <td style={{ fontSize: 12 }}>{m.phone || '—'}</td>
                    <td>{m.topic || '—'}</td>
                    <td style={{ fontSize: 12, maxWidth: 260 }}>{m.message}</td>
                    <td style={{ color: '#8494B5', fontSize: 12 }}>{formatDate(m.created_at)}</td>
                    <td>
                      <select
                        value={m.status ?? 'new'}
                        onChange={(e) => handleStatusChange(m.id, e.target.value)}
                        style={selectStyle}
                      >
                        {MESSAGE_STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {s.replace('_', ' ')}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
