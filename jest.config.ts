/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  roots: ["<rootDir>/src"],

  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
