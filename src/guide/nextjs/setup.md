# Creating a New Next.js Project

This guide will walk you through the steps to create a new Next.js project from scratch.

## Step 1: Installation

::: code-group

```bash [pnpm]
pnpm create create-next-app@latest
```

```bash [npm]
npx create-next-app@latest
```

```bash [yarn]
yarn create create-next-app@latest
```

:::

Navigate to Your Project Directory

```bash
cd my-next-app
```

Start the Development Server

::: code-group

```bash [pnpm]
pnpm dev
```

```bash [npm]
npm run dev
```

```bash [yarn]
yarn dev
```

:::

Open your browser and navigate to `http://localhost:3000` to see your new Next.js app in action.

> Reference: [nextjs](https://nextjs.org/docs/getting-started/installation)

## Step 2: Configuration

- Add ESLint

```bash
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
```

- Configuration files

::: code-group

```json{5,6} [.eslintrc.json]
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "prettier/prettier": ["error", { "semi": false }]
  }
}
```

```json [.prettierrc]
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": false,
  "useTabs": false,
  "bracketSameLine": false,
  "jsxSingleQuote": false,
  "arrowParens": "always"
}
```

```gitignore [.prettierignore]
node_modules

# Ignore artifacts:
build
coverage
```

```json{7,8} [package.json]
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --check './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc",
    "format:fix": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  },
  "dependencies": {
    //
  },
  "devDependencies": {
    //
  }
}
```

:::

- env

## Step 3: Styling

- [Tailwind CSS](https://tailwindcss.com) - Rapidly build modern websites without ever leaving your HTML.
- [shadcn/ui](https://ui.shadcn.com) - Build your component library.
- svg icon

## Step 4: State Management

- [Zustand](https://zustand.docs.pmnd.rs) - A small, fast, and scalable bearbones state management solution.

## Step 5: HTTP Client

- [Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js
- [TanStack Query](https://tanstack.com/query/latest) - Powerful asynchronous state management

## Step 6: Route & Authentication

- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js

## Step 7: Multiple Languages

- [i18n](https://next-intl-docs.vercel.app) - In this guide you will learn how to set up internationalization (i18n) in your app.

## Plugin & Utility (Optional)

- [Day.js](https://day.js.org) - Parse, validate, manipulate, and display dates and times in JavaScript.
- [Numeral.js](http://numeraljs.com) - A javascript library for formatting and manipulating numbers.
- [React Hook Form](https://www.react-hook-form.com) - Performant, flexible and extensible forms with easy-to-use validation.
- [TanStack Table](https://tanstack.com/table/latest) - Headless UI for building powerful tables & datagrids
- [Framer Motion](https://www.framer.com/motion/) - Complete documentation of the Framer Motion animation library.
- [Class Transformer](https://github.com/typestack/class-transformer) - Plain objects are objects that are instances of Object class.
