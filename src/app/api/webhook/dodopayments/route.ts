import prisma from '@/lib/prisma';
import { Webhooks } from '@dodopayments/nextjs';
import { clerkClient } from '@clerk/nextjs/server';

export const POST = Webhooks({
  webhookKey: process.env.DODO_PAYMENTS_WEBHOOK_SECRET!,

  onSubscriptionActive: async (payload) => {
    const { subscription_id, customer, status } = payload.data;
    const metadata = payload.data.metadata as Record<string, string>;
    const userId = metadata.userId;

    if (!userId) {
      console.error('No userId found in subscription metadata');
      return;
    }

    try {
      await prisma.subscription.upsert({
        where: { userId },
        update: {
          status,
          dodoSubscriptionId: subscription_id,
          dodoCustomerId: customer.customer_id,
        },
        create: {
          userId,
          dodoSubscriptionId: subscription_id,
          dodoCustomerId: customer.customer_id,
          status,
          plan: metadata.plan || 'Pro',
        },
      });

      // Update Clerk public metadata for RBAC access
      const clerk = await clerkClient();
      await clerk.users.updateUserMetadata(userId, {
        publicMetadata: {
          plan: metadata.plan || 'Pro',
        },
      });

      console.log(
        `Subscription active and metadata updated for user: ${userId}`,
      );
    } catch (e) {
      console.error('Error handling active subscription webhook:', e);
    }
  },

  onSubscriptionRenewed: async (payload) => {
    const { subscription_id, status } = payload.data;
    try {
      await prisma.subscription.update({
        where: { dodoSubscriptionId: subscription_id },
        data: { status },
      });
      console.log(`Subscription renewed: ${subscription_id}`);
    } catch (e) {
      console.error('Error handling renewed subscription webhook:', e);
    }
  },

  onSubscriptionCancelled: async (payload) => {
    const { subscription_id, status } = payload.data;
    try {
      const subscription = await prisma.subscription.update({
        where: { dodoSubscriptionId: subscription_id },
        data: { status },
      });

      // Remove access
      const clerk = await clerkClient();
      await clerk.users.updateUserMetadata(subscription.userId, {
        publicMetadata: { plan: null },
      });

      console.log(`Subscription cancelled for user: ${subscription.userId}`);
    } catch (e) {
      console.error('Error handling cancelled subscription webhook:', e);
    }
  },

  onPayload: async (payload) => {
    // Catch-all
    console.log(`Received unknown DodoPayments webhook event: ${payload.type}`);
  },
});
