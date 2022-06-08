/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const jsdom = require('jsdom');

module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
  testRegex: '(./tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

