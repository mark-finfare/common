import { fromModule } from './module';

export const version = '0.0.1';

console.log(fromModule);

export function sum(a, b) {
  return a + b;
}

/**
 * This is what this function does
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function typedSum(a, b) {
  return a + b;
}
