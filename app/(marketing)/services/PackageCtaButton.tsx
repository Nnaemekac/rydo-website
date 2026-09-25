'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useModal } from '@/components/modals/ModalProvider';

type PackageCtaButtonProps = {
  className: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function PackageCtaButton({ className, style, children }: PackageCtaButtonProps) {
  const { openPackage } = useModal();

  return (
    <button type="button" onClick={() => openPackage()} className={className} style={style}>
      {children}
    </button>
  );
}
