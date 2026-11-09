import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, Atom, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Users API Demo', href: '/users' },
    { label: 'Architecture', href: '/about' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 font-bold tracking-tight text-lg"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm shadow-brand-500/20">
              <Atom className="h-5 w-5 animate-[spin_10s_linear_infinite]" />
            </div>
            <span>
              Xivig<span className="text-brand-600 dark:text-brand-400">React</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-brand-600 dark:bg-slate-900 dark:text-brand-400 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/xivig/react-xivig-boilerplate"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 p-0"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-brand-600 dark:bg-slate-900 dark:text-brand-400'
                      : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="https://github.com/xivig/react-xivig-boilerplate"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-400"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Xivig Boilerplate. Released under the MIT
            License.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>React 19</span>
            <span>•</span>
            <span>Vite 6</span>
            <span>•</span>
            <span>TypeScript 5</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Vitest</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
