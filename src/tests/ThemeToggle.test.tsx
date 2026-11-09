import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/context/ThemeContext';

describe('ThemeToggle Component', () => {
  it('renders theme toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle visual theme/i });
    expect(button).toBeInTheDocument();
  });

  it('cycles theme on click without throwing', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle visual theme/i });
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
