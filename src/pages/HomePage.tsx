import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ShieldCheck,
  Palette,
  Moon,
  TestTube,
  Layers,
  ArrowRight,
  Plus,
  Minus,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export function HomePage() {
  const [count, setCount] = useLocalStorage<number>('xivig-demo-counter', 0);
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: 'Vite 6 Fast Engine',
      description:
        'Instant Hot Module Replacement (HMR) powered by native ES modules and Rollup production builds.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
      title: 'Strict TypeScript 5',
      description:
        'Full static type safety, TSConfig strict flags, and clean `@/*` path alias resolution out-of-the-box.',
    },
    {
      icon: <Palette className="h-6 w-6 text-brand-500" />,
      title: 'Tailwind CSS Styling',
      description:
        'Utility-first styling with automatic class merging via `cn()` and responsive modern design tokens.',
    },
    {
      icon: <Moon className="h-6 w-6 text-indigo-500" />,
      title: 'Zero-Flicker Dark Mode',
      description:
        'Persistent ThemeProvider supporting light, dark, and system preferences with zero layout shift.',
    },
    {
      icon: <TestTube className="h-6 w-6 text-rose-500" />,
      title: 'Vitest & Testing Library',
      description:
        'Preconfigured unit and integration testing suite with jsdom, assertions, and coverage reporting.',
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-500" />,
      title: 'Modular Architecture',
      description:
        'Industry-standard domain directories for components, hooks, layouts, pages, services, types, and utils.',
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-medium text-brand-600 dark:text-brand-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Modern React 19 Enterprise Foundation</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
          Production-Ready React Architecture for Fast Shipping
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Skip hours of repetitive setup. A fully modern, opinionated, and tested starter
          kit built on React 19, TypeScript, Vite, Tailwind CSS, and Vitest.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link to="/users">
            <Button size="lg" className="gap-2">
              <span>Explore Live API Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Architecture Guide
            </Button>
          </Link>
          <Button variant="secondary" size="lg" onClick={() => setModalOpen(true)}>
            Open Modal Demo
          </Button>
        </div>
      </section>

      {/* Interactive Feature Demo Card */}
      <section className="max-w-xl mx-auto">
        <Card className="border-brand-500/30 shadow-lg shadow-brand-500/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="default">Interactive Demo</Badge>
              <span className="text-xs text-slate-500 font-mono">
                `useLocalStorage` hook
              </span>
            </div>
            <CardTitle className="pt-2">Persistent Reactive State</CardTitle>
            <CardDescription>
              This counter is synchronized with browser localStorage. Refresh the page or
              toggle tabs and your count remains preserved!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-6">
            <span className="text-6xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">
              {count}
            </span>
          </CardContent>
          <CardFooter className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCount((prev) => prev - 1)}
              aria-label="Decrement"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCount(0)}
              aria-label="Reset"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setCount((prev) => prev + 1)}
              aria-label="Increment"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Feature Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Curated Best Practices</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Everything you need to launch enterprise-grade web applications with high
            maintainability and rock-solid DX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="hover:border-brand-500/50 hover:shadow-md transition-all duration-200"
            >
              <CardHeader>
                <div className="mb-2 inline-flex p-3 rounded-lg bg-slate-100 dark:bg-slate-800 w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm leading-normal">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Sample Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Accessible Modal Component"
        description="Built with pure React & Tailwind CSS without bulky heavy UI libraries."
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            This dialog features automatic backdrop clicks, escape key listening, body
            scroll lock, and keyboard accessibility.
          </p>
          <div className="rounded-lg bg-slate-100 p-3 text-xs font-mono dark:bg-slate-800">
            &lt;Modal isOpen=&#123;modalOpen&#125; onClose=&#123;close&#125;
            title="..."&gt;
          </div>
          <div className="flex justify-end pt-2">
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Got it, close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
