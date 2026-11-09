import { CheckCircle2, Code2, Cpu, FileCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export function AboutPage() {
  const decisions = [
    {
      title: 'Vite 6 over Webpack / CRA',
      reason:
        'Create React App was officially deprecated in 2023. Webpack requires complex loaders and slow bundling. Vite leverages native browser ES modules during development for sub-millisecond HMR and Rollup for optimal tree-shaken production bundles.',
    },
    {
      title: 'Strict TypeScript 5 over Plain JS & PropTypes',
      reason:
        'PropTypes only validate props at runtime in development. Strict TypeScript catches contract mismatches, null pointers, and missing props at compile-time directly in your IDE with zero runtime bundle overhead.',
    },
    {
      title: 'Tailwind CSS & cn() over Heavy UI Kits',
      reason:
        'Full UI component suites (like legacy Bootstrap or bloated widget libraries) add unnecessary JavaScript weight and rigid theming. Tailwind CSS with `tailwind-merge` and `clsx` (`cn()`) provides atomic styling and infinite customizability.',
    },
    {
      title: 'Vitest over Jest',
      reason:
        'Jest requires Babel transforms or ts-jest which runs a separate compilation pipeline. Vitest reuses Vite’s exact transform pipeline, sharing plugins, configuration, and path aliases for 10x faster test runs.',
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Architecture & Design Philosophy
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Why this boilerplate exists, what problems it eliminates, and how it serves as a foundation for production software.
        </p>
      </div>

      {/* Rationale Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {decisions.map((decision, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                <CardTitle className="text-lg">{decision.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {decision.reason}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Directory Structure */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-brand-600 dark:text-brand-400" />
            <CardTitle className="text-lg">Project Directory Organization</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="rounded-lg bg-slate-900 p-4 text-xs font-mono text-slate-100 overflow-x-auto leading-relaxed">
{`react-xivig-boilerplate/
├── .github/workflows/       # Automated CI Quality Gate (Node 20/22 matrix, lint, typecheck, test, build)
├── .vscode/                 # Workspace settings, recommended extensions, Tailwind IntelliSense
├── public/                  # Static assets (favicons, manifest, robots.txt)
├── src/
│   ├── components/          # Reusable UI primitives (Button, Card, Badge, Modal, Input, Skeleton)
│   ├── context/             # React Context providers (ThemeContext)
│   ├── hooks/               # Custom reusable React hooks (useTheme, useDebounce, useLocalStorage, useFetch)
│   ├── layouts/             # Shared page layouts (RootLayout with navbar & footer)
│   ├── pages/               # Route components (HomePage, UsersPage, AboutPage, NotFoundPage)
│   ├── services/            # API clients, HTTP wrappers, and external integrations
│   ├── tests/               # Vitest suite, testing-library setup, and unit specs
│   ├── types/               # TypeScript interfaces, domain models, and API types
│   ├── utils/               # Pure utility functions (cn class combiner)
│   ├── App.tsx              # Application routing table & provider composition
│   ├── index.css            # Tailwind directives and CSS variables
│   └── main.tsx             # React 19 createRoot entry point
├── eslint.config.js         # Modern ESLint 9 Flat Config
├── index.html               # Vite HTML entry point
├── package.json             # NPM metadata and scripts
├── tailwind.config.js       # Tailwind CSS theme extension
├── tsconfig.json            # Strict TypeScript configuration with @/* alias
├── vite.config.ts           # Vite 6 configuration & path alias resolution
└── vitest.config.ts         # Vitest unit testing configuration`}
          </pre>
        </CardContent>
      </Card>

      {/* Stack Specs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <Card className="p-6 space-y-2">
          <Cpu className="h-6 w-6 text-brand-600 dark:text-brand-400 mx-auto" />
          <h3 className="font-semibold text-base">Modern React 19</h3>
          <p className="text-xs text-slate-500">Function components, modern hooks, concurrency ready</p>
        </Card>
        <Card className="p-6 space-y-2">
          <FileCheck className="h-6 w-6 text-brand-600 dark:text-brand-400 mx-auto" />
          <h3 className="font-semibold text-base">Zero TypeScript Errors</h3>
          <p className="text-xs text-slate-500">Strict mode enabled with zero implicit any</p>
        </Card>
        <Card className="p-6 space-y-2">
          <Code2 className="h-6 w-6 text-brand-600 dark:text-brand-400 mx-auto" />
          <h3 className="font-semibold text-base">Zero Bloat</h3>
          <p className="text-xs text-slate-500">No deprecated jQuery, Bootstrap 4, or Webpack dependencies</p>
        </Card>
      </div>
    </div>
  );
}
