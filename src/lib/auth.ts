import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from '@/lib/prisma';
import { nextCookies } from 'better-auth/next-js';
import DodoPayments from 'dodopayments';
import {
  dodopayments,
  checkout,
  portal,
  webhooks,
  usage,
} from '@dodopayments/better-auth';

export const dodoPayments = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  environment: 'test_mode',
});

export const auth = betterAuth({
  plugins: [
    nextCookies(),
    dodopayments({
      client: dodoPayments,
      createCustomerOnSignUp: true,

      use: [
        checkout({
          products: [
            {
              slug: 'premium-plan',
              productId: process.env.DODO_PRODUCT_ID!,
            },
          ],
          successUrl: '/dashboard',
          authenticatedUsersOnly: true,
        }),
        portal(),
        webhooks({
          webhookKey: process.env.DODO_PAYMENTS_WEBHOOK_SECRET!,
          onPayload: async (payload) => {
            console.log('Received webhook:', payload);
          },
        }),
        usage(),
      ],
    }),
  ],
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ['https://localhost:3000'],
});
