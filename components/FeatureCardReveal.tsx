'use client';

import { useEffect } from 'react';

export default function FeatureCardReveal() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.feature-card'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
