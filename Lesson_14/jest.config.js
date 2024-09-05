/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: false,
  // runner: 'jest-runner',
  // testTimeout: 70000,
  // rootDir: './',
  // testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  // detectOpenHandles: true,
  // setupFilesAfterEnv: ['./setupJest.js'],
  reporters: ['default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Contract Monitoring Test Report',
        publicPath: './reports',
        filename: 'test-report.html',
        enableMergeData: true,
        dataMergeLevel: 3,
      },
    ],
  ],
};

module.exports = config;