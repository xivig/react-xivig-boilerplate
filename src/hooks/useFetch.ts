import { useState, useEffect, useCallback } from 'react';
import type { ApiResponse } from '@/types';

/**
 * Custom hook for data fetching with AbortController lifecycle cancellation.
 */
export function useFetch<T>(
  fetcher: (signal: AbortSignal) => Promise<T>
): ApiResponse<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [trigger, setTrigger] = useState(0);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    setTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetcher(controller.signal)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [fetcher, trigger]);

  return { data, error, loading, refetch };
}
