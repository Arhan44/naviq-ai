﻿module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  env: { node: true, browser: true, es2022: true },
  rules: {
    "no-console": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
