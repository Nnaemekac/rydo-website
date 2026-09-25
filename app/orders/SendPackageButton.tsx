'use client';

import { useModal } from '@/components/modals/ModalProvider';

export default function SendPackageButton() {
  const { openPackage } = useModal();

  return (
    <button className="btn btn-primary" style={{ cursor: 'pointer' }} onClick={openPackage}>
      Send a Package
    </button>
  );
}
