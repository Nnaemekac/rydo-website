'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  as: Tag = 'div',
  className = '',
  threshold = 0.12,
  children,
}: {
  as?: 'div' | 'ol' | 'ul' | 'section';
  className?: string;
  threshold?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref as never} className={`${className}${visible ? ' is-in' : ''}`}>
      {children}
    </Tag>
  );
}
