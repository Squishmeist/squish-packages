/** @type {import("next").NextConfig} */
export default {
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/react-ui"],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
