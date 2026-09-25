import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Log in to your RYDO account to send packages, apply as a rider, and track your orders.',
};

export default function LoginPage() {
  return <LoginForm />;
}
