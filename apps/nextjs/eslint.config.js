import baseConfig from "@acme/eslint-config/base";
import nextjsConfig from "@acme/eslint-config/nextjs";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...nextjsConfig,
];
