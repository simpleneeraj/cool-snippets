import { dodopaymentsClient } from '@dodopayments/better-auth';
import { createAuthClient } from 'better-auth/react';

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  dodopayments: payments,
} = createAuthClient({
  plugins: [dodopaymentsClient()],
});
