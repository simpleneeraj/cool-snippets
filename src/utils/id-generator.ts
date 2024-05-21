import { randomBytes } from 'crypto';

/**
 * Generates a random slide ID using nanoid.
 * @param {number} length - Length of the generated ID.
 * @returns {string} - Random slide ID.
 */
export const generateID = (length: number = 16): string => {
  return randomBytes(length).toString('hex');
};
