import type { User } from '@/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Type-safe API client wrapper with abort signal support.
 */
export async function fetchUsers(signal?: AbortSignal): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`, { signal });
  if (!response.ok) {
    throw new ApiError(`Failed to fetch users: HTTP ${response.status}`, response.status);
  }
  return response.json();
}
