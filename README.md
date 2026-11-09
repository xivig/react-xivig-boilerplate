# ⚛️ React 19 + TypeScript + Vite Enterprise Boilerplate

[![React](https://img.shields.io/badge/React-19.0%2B-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4%2B-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-FCC72B?style=flat-square&logo=vitest&logoColor=black)](https://vitest.dev/)
[![ESLint](https://img.shields.io/badge/Code%20Style-ESLint%209%20Flat-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A production-ready, highly-opinionated enterprise template repository for modern React applications. Designed to eliminate the 4–8 hours typically spent wiring together routers, state providers, testing suites, theme toggles, API clients, and linting pipelines after running bare starter tools.

---

---

## ⚡ Core Documentation & Developer Resources

- 📘 **[Complete React 19 & TypeScript Production Mastery Tutorial (TUTORIAL.md)](TUTORIAL.md)** — Comprehensive 10-step handbook from mental models and hooks to compound UI patterns, async routing, testing, and CI/CD.
- 🚀 **[Developer Handy Cheat Sheet (DEVELOPER-HANDY-CHEATSHEET.md)](DEVELOPER-HANDY-CHEATSHEET.md)** — Ultra-condensed desk companion with React 19 hooks matrix, TypeScript event signatures, Top 8 gotchas & solutions, and Tailwind layout recipes.

## 🚀 Why This Boilerplate vs. Bare `npm create vite`?

While `npm create vite` generates an empty shell (only `App.tsx` and `main.tsx`), **real-world production applications require an established architecture**. This boilerplate provides:

| Feature Area | Bare `create-vite` | `react-xivig-boilerplate` |
| :--- | :--- | :--- |
| **Directory Conventions** | ❌ Flat `src/` dump | ✅ Clean domain layout (`components/`, `hooks/`, `services/`, `layouts/`, `types/`, `pages/`) |
| **Theme System** | ❌ None | ✅ Persistent `ThemeProvider` (Light, Dark, and System auto-detection with zero flicker) |
| **Styling Pipeline** | ❌ Plain CSS | ✅ Tailwind CSS with `tailwind-merge` & `clsx` (`cn()` helper) |
| **Routing** | ❌ None | ✅ React Router with layouts, mobile navigation drawer, and 404 fallback |
| **Testing Suite** | ❌ None | ✅ Vitest + React Testing Library + `@testing-library/jest-dom` + `jsdom` preconfigured |
| **Async Data Fetching** | ❌ Manual boilerplate | ✅ Type-safe API client abstraction + `useFetch` hook with `AbortController` cancellation |
| **Reusable UI Primitives**| ❌ None | ✅ Accessible `Button`, `Card`, `Badge`, `Input`, `Modal`, and `Skeleton` primitives |
| **Quality Gate** | ❌ Basic ESLint | ✅ ESLint 9 Flat Config, Prettier 3, strict TypeScript flags, and GitHub Actions CI matrix |

---

## ⚡ Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/xivig/react-xivig-boilerplate.git my-app
cd my-app
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Hot Module Replacement (HMR) updates in milliseconds.

---

## 🛠️ Available NPM Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local Vite development server with HMR on port `3000`. |
| `npm run build` | Runs strict type checking (`tsc -b`) and generates production Rollup bundle in `/dist`. |
| `npm run preview` | Serves the production `/dist` build locally for performance verification. |
| `npm run test` | Launches Vitest in watch mode with instant test feedback. |
| `npm run test:run` | Executes all unit test suites once (used in CI pipeline). |
| `npm run typecheck` | Validates TypeScript types across the codebase with `tsc --noEmit`. |
| `npm run lint` | Analyzes code quality using ESLint 9 Flat Config rules. |
| `npm run lint:fix` | Automatically fixes autofixable ESLint and import errors. |
| `npm run format` | Enforces uniform code style via Prettier across all `.ts`, `.tsx`, and `.css` files. |

---

## 📂 Architecture & Directory Organization

```text
react-xivig-boilerplate/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI quality gate (Node 20 & 22 matrix)
├── .vscode/
│   ├── extensions.json          # Recommended developer IDE extensions
│   └── settings.json            # Auto-formatting on save with Prettier & ESLint
├── public/
│   └── vite.svg                 # Static public assets
├── src/
│   ├── components/
│   │   ├── ui/                  # Headless & accessible UI primitives
│   │   │   ├── Badge.tsx        # Pill badges with semantic variants
│   │   │   ├── Button.tsx       # Button with variants, sizes, and loading state
│   │   │   ├── Card.tsx         # Structured content cards
│   │   │   ├── Input.tsx        # Accessible styled input with validation
│   │   │   ├── Modal.tsx        # Dialog with backdrop and ESC key listener
│   │   │   └── Skeleton.tsx     # Animated loading placeholders
│   │   └── ThemeToggle.tsx      # Smooth theme switching button
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme state provider (light / dark / system)
│   ├── hooks/
│   │   ├── useDebounce.ts       # Delays execution of fast-updating values
│   │   ├── useFetch.ts          # AbortController-backed data fetcher
│   │   ├── useLocalStorage.ts   # Reactive type-safe browser storage sync
│   │   └── useTheme.ts          # Consumes ThemeContext
│   ├── layouts/
│   │   └── RootLayout.tsx       # Sticky navbar, mobile menu drawer, <Outlet />, and footer
│   ├── pages/
│   │   ├── HomePage.tsx         # Hero section, feature matrix, and interactive demos
│   │   ├── UsersPage.tsx        # Live API consumer with search filtering & skeletons
│   │   ├── AboutPage.tsx        # Architectural explanation & technology rationale
│   │   └── NotFoundPage.tsx     # Modern 404 page with return route
│   ├── services/
│   │   └── api.ts               # Type-safe API client wrapper
│   ├── tests/
│   │   ├── setup.ts             # Vitest jsdom & matchMedia mocks
│   │   ├── Button.test.tsx      # Unit specs for Button variants and clicks
│   │   ├── ThemeToggle.test.tsx # Theme switching unit spec
│   │   └── useDebounce.test.ts  # Fake timer unit tests for debouncing
│   ├── types/
│   │   └── index.ts             # Global TypeScript models and API interfaces
│   ├── utils/
│   │   └── cn.ts                # Tailwind class combiner (clsx + tailwind-merge)
│   ├── App.tsx                  # BrowserRouter routing table and theme provider
│   ├── index.css                # Tailwind directives and CSS theme variables
│   ├── main.tsx                 # React 19 createRoot entry point
│   └── vite-env.d.ts            # Vite client types
├── eslint.config.js             # Modern ESLint 9 Flat Config
├── index.html                   # HTML entry point (serves /src/main.tsx)
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Tailwind theme colors and dark mode class strategy
├── tsconfig.json                # Strict TypeScript configuration with @/* path alias
├── tsconfig.node.json           # TypeScript configuration for build tool configs
├── vite.config.ts               # Vite 6 bundler configuration and manual chunks
└── vitest.config.ts             # Vitest test runner configuration
```

---

## 🧱 Key Architectural Patterns

### 1. The `cn()` Helper for Safe Class Merging
Never concatenate Tailwind strings with template literals! Use `cn()` to automatically deduplicate conflicting utility classes:
```tsx
import { cn } from '@/utils/cn';

export function Banner({ className, variant }: { className?: string; variant: 'info' | 'alert' }) {
  return (
    <div className={cn(
      'p-4 rounded-lg bg-slate-100 text-slate-800',
      variant === 'alert' && 'bg-rose-100 text-rose-800',
      className // Custom class overrides take precedence cleanly
    )}>
      Content
    </div>
  );
}
```

### 2. Path Aliases (`@/*`)
Imports always reference from the `src/` directory root regardless of file depth:
```tsx
// Clean path alias (no relative ../../../ hell)
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';
import type { User } from '@/types';
```

### 3. Data Fetching with Cancellation
Avoid memory leaks and race conditions using `useFetch`:
```tsx
import { useFetch } from '@/hooks/useFetch';
import { fetchUsers } from '@/services/api';

export function UserList() {
  const { data, loading, error, refetch } = useFetch(fetchUsers);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div>{data?.map(user => <div key={user.id}>{user.name}</div>)}</div>;
}
```

---

## 🚢 Deployment Guides

### Vercel
1. Push your repository to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

### Netlify
Create `netlify.toml` in your project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Docker
```dockerfile
# Multi-stage production Dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 📄 License

This boilerplate is open-sourced under the permissive **[MIT License](LICENSE)**. Free for personal, commercial, and enterprise applications.
