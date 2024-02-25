import Stripe from 'stripe';

// @ts-ignore: Ignore TypeScript error related to API version mismatch
export const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: '2024-02-04',
} as unknown as Stripe.StripeConfig);
