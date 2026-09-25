'use client';

import { useState } from 'react';

export default function EarningsCalculator() {
  const [trips, setTrips] = useState(8);
  const [order, setOrder] = useState(1900);
  const [days, setDays] = useState(6);

  const monthly = Math.round(trips * order * days * 4.3 * 0.86);

  return (
    <div className="earnings-calc">
      <div className="calc-title">
        <i className="fa-solid fa-sack-dollar"></i> Estimate Your Monthly Earnings
      </div>
      <div className="calc-slider">
        <div className="slider-group">
          <div className="slider-label">
            <span>Daily trips</span>
            <span>{trips} trips/day</span>
          </div>
          <input
            type="range"
            min={2}
            max={20}
            value={trips}
            onChange={(e) => setTrips(Number(e.target.value))}
          />
        </div>
        <div className="slider-group">
          <div className="slider-label">
            <span>Avg. order value</span>
            <span>₦{order.toLocaleString()} / order</span>
          </div>
          <input
            type="range"
            min={500}
            max={5000}
            step={100}
            value={order}
            onChange={(e) => setOrder(Number(e.target.value))}
          />
        </div>
        <div className="slider-group">
          <div className="slider-label">
            <span>Days per week</span>
            <span>{days} days</span>
          </div>
          <input
            type="range"
            min={1}
            max={7}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="calc-result">
        <div className="calc-result-label">Estimated monthly take-home</div>
        <div className="calc-result-value">₦{monthly.toLocaleString()}</div>
        <div style={{ fontSize: 12, color: 'var(--gray-500)', marginTop: 4 }}>
          After RYDO&apos;s 13–15% platform commission · Based on your inputs
        </div>
      </div>
    </div>
  );
}
