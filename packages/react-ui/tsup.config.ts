import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: false,
  clean: false,
  external: ["react", "react-dom"],
  banner: {
    js: "\"use client\";\nimport * as React from 'react';",
  },
  target: "ES2022",
  dts: true,
});
