import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from './ui/Button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      className="h-9 w-9 p-0"
      title={`Current theme: ${theme}. Click to switch.`}
      aria-label="Toggle visual theme"
    >
      {theme === 'light' && <Sun className="h-4 w-4 text-amber-500" />}
      {theme === 'dark' && <Moon className="h-4 w-4 text-brand-400" />}
      {theme === 'system' && <Laptop className="h-4 w-4 text-slate-500" />}
    </Button>
  );
}
