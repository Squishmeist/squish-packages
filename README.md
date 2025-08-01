# Squish Packages

A modern monorepo template for developing and publishing TypeScript packages. Built with performance and developer experience in mind.

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development Workflow](#-development-workflow)
- [Example Package: React UI](#-example-package-react-ui)
- [Testing & Development](#-testing--development)
- [Building & Publishing](#-building--publishing)
- [Available Commands](#-available-commands)
- [License](#-license)
- [Built With](#-built-with)

## 🚀 Quick Start

1. **Replace `@acme` with your namespace**

2. **Update repository URLs in `packages/*/package.json`**

   Currently configured to publish as a private github package.

   ```json
   {
     "publishConfig": {
       "registry": "https://npm.pkg.github.com/"
     },
     "repository": {
       "type": "git",
       "url": "git+https://github.com/@yourusername/your-repo-name.git"
     }
   }
   ```

## 📁 Structure

```
├── apps/
│   ├── expo/          # React Native app
│   └── nextjs/        # Next.js web app
├── packages/
│   └── react-ui/      # Example: React UI library
├── tooling/
│   ├── eslint-config/ # Shared ESLint config
│   ├── prettier-config/ # Shared Prettier config
│   ├── tailwind-config/ # Shared Tailwind config
│   └── typescript-config/ # Shared TypeScript config
└── turbo/
    └── generators/    # Package scaffolding tools
```

## 🔄 Development

### 1. **Create packages in `/packages/`**

Each package is a standalone npm package that can be published independently.

> 📦 Example: packages/react-ui, packages/my-utils, etc.

### 2. **View packages in development apps**

- **`apps/nextjs`** - For React (Web) packages
- **`apps/expo`** - For React Native (Mobile) packages

### 3. **Path aliases for development**

To use your packages without publishing them, set up TypeScript path aliases in the appropriate app’s `tsconfig.json` file.

- For React Web `apps/nextjs/tsconfig.json`
- For React Native `apps/expo/tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "~/*": ["./src/*"],
      "@react-ui": ["./../../packages/react-ui/src/index.ts"],
      "@your-package": ["./../../packages/your-package/src/index.ts"]
    }
  }
}
```

> Replace @your-package with the actual name of your custom package.

This enables:

- ✅ Live reload during development
- ✅ Full TypeScript IntelliSense
- ✅ No build step needed during development
- ✅ Instant feedback on code changes

## 📦 Example Package: React UI

The `packages/react-ui` demonstrates how to build a modern React component library:

### Usage

```tsx
import { Button } from "@acme/react-ui";

import "@acme/react-ui/index.css";

function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

## 🏗️ Building & Publishing

> TODO: packages will be published by a github action ran on push to main if `packages/<package-name>/package.json` version has updated

## 📋 Available Commands

### Global Commands

```bash
pnpm dev          # Start all development servers
pnpm build        # Build all packages
pnpm lint         # Lint all packages and apps
pnpm format       # Format all code with Prettier
pnpm typecheck    # Type check everything
pnpm clean        # Clean all build artifacts
```

### App-Specific Commands

```bash
pnpm dev:next     # Start Next.js development server
pnpm android      # Start Expo on Android
pnpm ios          # Start Expo on iOS
```

## 📄 License

MIT © [Your Name]

## 🙏 Built With

- 🏎️ **[Turborepo](https://turbo.build)** - High-performance build system
- ⚡ **[tsup](https://tsup.egoist.dev)** - Zero-config TypeScript compiler
- 🧩 **[Radix UI](https://radix-ui.com)** - Low-level UI primitives
- 🎨 **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- 🎯 **[Class Variance Authority](https://cva.style)** - Component variant utilities
- 📦 **[pnpm](https://pnpm.io)** - Fast, disk space efficient package manager
- 📱 **[Expo](https://expo.dev)** - React Native development platform
- ⚛️ **[Next.js](https://nextjs.org)** - Full-stack React framework

---

<div align="center">
  <strong>Happy coding! 🎉</strong>
</div>
