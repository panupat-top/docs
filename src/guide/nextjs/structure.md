# Next.js Project Structure

This page provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the `app` and `pages` directories.

## File-Based

```markdown
src
├─ app
│ ├─ (auth)
│ │ ├─ layout.tsx
│ │ ├─ page.tsx
│ │ └─ sign-in/
│ ├─ (route)
│ │ ├─ layout.tsx
│ │ ├─ page.tsx
│ │ └─ home/
│ └─ layout.tsx
├─ components
├─ features
├─ models
└─ lib
.env
.eslintrc.json
.gitignore
.prettierignore
.prettierrc
next.config.mjs
package.json
tailwind.config.ts
tsconfig.json
```

### Description

- `/app`
  - `(auth)` for authentication layout
  - `(route)` for main layout
- `/components` for React components
- `/features` for feature components
- `/models` for types
- `/lib` for shared code
