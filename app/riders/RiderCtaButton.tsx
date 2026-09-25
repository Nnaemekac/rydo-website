'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useModal } from '@/components/modals/ModalProvider';

type RiderCtaButtonProps = {
  className: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function RiderCtaButton({ className, style, children }: RiderCtaButtonProps) {
  const { openRider } = useModal();

  return (
    <button type="button" onClick={() => openRider()} className={className} style={style}>
      {children}
    </button>
  );
}
