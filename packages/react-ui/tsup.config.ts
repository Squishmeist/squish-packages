import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/index.css"],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
