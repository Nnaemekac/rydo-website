'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';

export type ModalKind = 'package' | 'rider' | null;

type ModalContextValue = {
  modal: ModalKind;
  openLogin: (notice?: string) => void;
  openSignup: () => void;
  openPackage: () => void;
  openRider: () => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [modal, setModal] = useState<ModalKind>(null);

  const close = useCallback(() => {
    setModal(null);
  }, []);

  const openLogin = useCallback(
    (notice?: string) => {
      router.push(notice ? `/login?notice=${encodeURIComponent(notice)}` : '/login');
    },
    [router]
  );

  const openSignup = useCallback(() => {
    router.push('/signup');
  }, [router]);

  const openPackage = useCallback(() => {
    setModal('package');
  }, []);

  const openRider = useCallback(() => {
    if (!user) {
      openLogin("You'll need an account before applying to ride — this lets you track your application status. Log in or create one below.");
      return;
    }
    setModal('rider');
  }, [user, openLogin]);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
  }, [modal]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [close]);

  return (
    <ModalContext.Provider value={{ modal, openLogin, openSignup, openPackage, openRider, close }}>
      {children}
    </ModalContext.Provider>
  );
}
