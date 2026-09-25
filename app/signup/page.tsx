import type { Metadata } from 'next';
import SignupForm from './SignupForm';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a RYDO account to send packages, apply as a rider, and track your orders.',
};

export default function SignupPage() {
  return <SignupForm />;
}
