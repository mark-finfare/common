import { fromModule } from './module.js';

export const version = '1.0.0';

export function sum(a, b) {
  return a + b;
}

/**
 * This is what ~~this function does~~ was updated
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function typedSum(a, b) {
  return a + b;
}

export { fromModule as foo } from './module.js';
export { fromModule };
