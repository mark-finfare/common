import { fromModule } from './module';

export const version = '0.0.2';

console.log(fromModule);

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

export { fromModule as foo } from './module';
