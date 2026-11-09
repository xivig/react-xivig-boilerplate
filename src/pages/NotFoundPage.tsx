import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
        <h2 className="text-xl font-semibold">Page Not Found</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The route you are trying to access does not exist or may have moved.
        </p>
      </div>

      <Link to="/">
        <Button className="gap-2">
          <Home className="h-4 w-4" />
          <span>Return to Home</span>
        </Button>
      </Link>
    </div>
  );
}
