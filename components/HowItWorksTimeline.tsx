'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { step: 1, index: 'STEP 01', title: 'Set Locations', desc: 'Enter your pickup and drop-off address. Auto-suggest knows every street in PH.' },
  { step: 2, index: 'STEP 02', title: 'Rider Assigned', desc: 'A verified RYDO rider nearby accepts your order within seconds.' },
  { step: 3, index: 'STEP 03', title: 'Track Live', desc: 'Watch your delivery in real time. Call, message, or app-call your rider directly.' },
  { step: 4, index: 'STEP 04', title: 'OTC Confirmed', desc: "Recipient enters their One-Time Code to confirm delivery. Zero risk of wrong handoff." },
];

export default function HowItWorksTimeline() {
  const [activeScene, setActiveScene] = useState(1);
  const [passedSteps, setPassedSteps] = useState<Set<number>>(new Set([1]));
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    let ticking = false;

    function update() {
      ticking = false;
      const timeline = timelineRef.current;
      const progressEl = progressRef.current;
      if (!timeline || !progressEl) return;

      const rect = timeline.getBoundingClientRect();
      const viewportLine = window.innerHeight * 0.5;

      let progressed = viewportLine - rect.top;
      progressed = Math.max(0, Math.min(rect.height, progressed));
      const ratio = rect.height > 0 ? progressed / rect.height : 0;
      progressEl.style.transform = `scaleY(${ratio})`;

      let currentStep = STEPS[0].step;
      const passed = new Set<number>();
      STEPS.forEach(({ step }) => {
        const marker = stepRefs.current[step];
        if (!marker) return;
        const markerCenter = marker.getBoundingClientRect().top + marker.offsetHeight / 2;
        if (markerCenter <= viewportLine) {
          passed.add(step);
          currentStep = step;
        }
      });
      setPassedSteps(passed);
      setActiveScene(currentStep);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="how-layout">
      <div className="how-timeline" ref={timelineRef}>
        <div className="how-timeline-progress" ref={progressRef}></div>
        {STEPS.map((s) => (
          <div
            key={s.step}
            className={`how-step${passedSteps.has(s.step) ? ' active' : ''}${activeScene === s.step ? ' current' : ''}`}
            data-step={s.step}
            onClick={() => setActiveScene(s.step)}
          >
            <div className="how-step-marker" ref={(el) => { stepRefs.current[s.step] = el; }}>
              <span className="how-step-dot"></span>
            </div>
            <div className="how-step-body">
              <div className="how-step-index">{s.index}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="how-visual">
        <div className="how-visual-sticky how-phone-wrap">
          <div className="how-phone">
            <span className="how-phone-btn how-phone-btn-power"></span>
            <span className="how-phone-btn how-phone-btn-vol1"></span>
            <span className="how-phone-btn how-phone-btn-vol2"></span>
            <div className="how-phone-glare"></div>
            <div className="how-phone-screen">
              <div className="how-phone-notch"></div>
              <div className="how-phone-sbar">
                <span>9:41</span>
                <span>●●● 100%</span>
              </div>
              <div className="how-phone-screens">
                <div
                  className={`how-scene${activeScene === 1 ? ' active' : ''}`}
                  style={{ background: 'var(--black)', padding: 18, display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Book a delivery</div>
                  <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 16 }}>Where to?</div>
                  <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '12px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--navy-l)', flexShrink: 0 }}></span>
                    <span style={{ fontSize: 12, color: '#fff' }}>Trans Amadi, Port Harcourt</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px dashed rgba(255,255,255,0.18)', borderRadius: 10, padding: '12px 14px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }}></span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Enter drop-off address…</span>
                  </div>
                  <div style={{ flex: 1, background: '#151B24', borderRadius: 12, position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '22px 22px' }}></div>
                    <div style={{ position: 'absolute', top: '36%', left: '28%', width: 22, height: 22, margin: '-22px 0 0 -11px', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', background: 'var(--navy-l)', boxShadow: '0 4px 10px rgba(0,0,0,0.4)' }}></div>
                  </div>
                  <div style={{ background: 'var(--orange)', borderRadius: 10, padding: 13, textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>Continue</div>
                </div>

                <div
                  className={`how-scene${activeScene === 2 ? ' active' : ''}`}
                  style={{ background: 'var(--black)', padding: 18, display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Order #RY-4821</div>
                  <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 18 }}>Rider is on the way</div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: 16, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#fff', flexShrink: 0 }}>
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 700, fontSize: 14, color: '#fff' }}>Chinedu Okafor</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>4.9 ★ · Honda CB125</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: 10, textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--orange)' }}>2 min</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>Arriving</div>
                    </div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: 10, textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 800, fontSize: 18, color: '#fff' }}>₦1,250</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>Fare</div>
                    </div>
                  </div>
                  <div style={{ flex: 1 }}></div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: 12, textAlign: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                      <i className="fa-solid fa-phone"></i>&nbsp; Call
                    </div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: 12, textAlign: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                      <i className="fa-solid fa-comment"></i>&nbsp; Message
                    </div>
                  </div>
                </div>

                <div className={`how-scene${activeScene === 3 ? ' active' : ''}`}>
                  <svg viewBox="0 0 280 420" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
                    <rect width="280" height="420" fill="#151B24" />
                    <g fill="#1b232f">
                      <rect x="20" y="30" width="70" height="50" rx="4" />
                      <rect x="120" y="20" width="90" height="60" rx="4" />
                      <rect x="20" y="110" width="60" height="70" rx="4" />
                      <rect x="150" y="120" width="90" height="60" rx="4" />
                      <rect x="20" y="220" width="80" height="60" rx="4" />
                      <rect x="140" y="230" width="100" height="70" rx="4" />
                      <rect x="30" y="320" width="90" height="60" rx="4" />
                      <rect x="160" y="330" width="80" height="50" rx="4" />
                    </g>
                    <g stroke="#2c3644" strokeWidth="6" strokeLinecap="round" fill="none">
                      <path d="M0,100 L280,95" />
                      <path d="M0,210 L280,215" />
                      <path d="M0,310 L280,305" />
                      <path d="M110,0 L100,420" />
                    </g>
                    <path
                      d="M40,90 C60,140 120,150 100,210 S150,290 130,340 S110,390 130,410"
                      fill="none"
                      stroke="var(--orange)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="2 14"
                      className="map-route-path how-scene-el"
                      style={{ opacity: activeScene === 3 ? 1 : 0 }}
                    />
                  </svg>
                  <div className="map-pin map-pin-start" style={{ top: '20%', left: '14%' }}>
                    <div className="map-pin-shape"><span>A</span></div>
                  </div>
                  <div className="map-pin map-pin-end" style={{ top: '97%', left: '46%' }}>
                    <div className="map-pin-shape"><span>B</span></div>
                  </div>
                  <div className="map-rider" style={{ top: '57%', left: '41%' }}>
                    <span className="map-rider-pulse"></span>
                    <span className="map-rider-dot">
                      <i className="fa-solid fa-motorcycle" style={{ color: 'var(--orange)', fontSize: 14 }}></i>
                    </span>
                  </div>
                  <div style={{ position: 'absolute', top: 14, left: 14, background: '#00E896', color: '#0D1117', fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 100 }}>● LIVE</div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderRadius: '18px 18px 0 0', padding: 18, boxShadow: '0 -8px 24px rgba(0,0,0,0.25)' }}>
                    <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--text)', marginBottom: 10 }}>Order #RY-4821</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--gray-500)', marginBottom: 6 }}>
                      <span>Rider</span>
                      <span style={{ color: 'var(--text)', fontWeight: 600 }}>Chinedu · 4.9 ★</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--gray-500)' }}>
                      <span>ETA</span>
                      <span style={{ color: 'var(--orange)', fontWeight: 700 }}>6 min</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`how-scene${activeScene === 4 ? ' active' : ''}`}
                  style={{ background: 'var(--black)', padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                >
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(0,168,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, color: '#00A85A', marginBottom: 18 }}>
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 800, fontSize: 19, color: '#fff', marginBottom: 8 }}>Delivered!</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 22 }}>
                    Code <b style={{ color: '#fff' }}>8847</b> confirmed by recipient
                  </div>
                  <div style={{ fontSize: 16, color: '#FFB300', letterSpacing: 3, marginBottom: 24 }}>★★★★★</div>
                  <div style={{ background: 'var(--orange)', borderRadius: 10, padding: '13px 36px', color: '#fff', fontWeight: 700, fontSize: 13 }}>Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
