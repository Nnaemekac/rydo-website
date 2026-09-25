'use client';

import { useState } from 'react';

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={item.question} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <div className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span className="faq-q-text">{item.question}</span>
            <div className="faq-icon">+</div>
          </div>
          <div className="faq-a">{item.answer}</div>
        </div>
      ))}
    </div>
  );
}
