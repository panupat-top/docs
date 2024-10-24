---
layout: doc
---

# Introduction to Next.js

Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. It is built on top of React and provides a powerful set of tools for building modern web applications.

## Key Features

- **Server-Side Rendering (SSR):** Render pages on the server instead of the client.
- **Static Site Generation (SSG):** Generate static HTML at build time.
- **API Routes:** Create API endpoints with ease.
- **File-based Routing:** Automatically create routes based on the file structure.
- **CSS and Sass Support:** Built-in support for CSS and Sass.
- **Image Optimization:** Optimize images on-demand.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org) (version 18+ or later)
- [pnpm](https://pnpm.io), [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)
- macOS, Windows (including WSL), and Linux are supported.

## Code Editor

We recommend using [Visual Studio Code](https://code.visualstudio.com).

### Recommended Extensions

Create a `.vscode/extensions.json` file with the following content:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

### Editor Settings

Create a .vscode/settings.json file with the following content:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.sortImports": "explicit"
  },
  "css.lint.unknownAtRules": "ignore"
}
```
