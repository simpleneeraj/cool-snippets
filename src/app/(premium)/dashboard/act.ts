'use server';

import { dodoPayments } from '@/lib/auth';

export const customerRetrieve = async (customerID: string) => {
  const customer = await dodoPayments.customers.retrieve(customerID);
  console.log('customer', customer);
};
