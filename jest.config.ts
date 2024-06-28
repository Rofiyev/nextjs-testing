const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

import type { Config } from "@jest/types";

/** @type {Config.InitialOptions} */
const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);
