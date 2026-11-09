import { useState, useMemo } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { useDebounce } from '@/hooks/useDebounce';
import { fetchUsers } from '@/services/api';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import {
  Search,
  Mail,
  Phone,
  Globe,
  Building2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

export function UsersPage() {
  const { data: users, loading, error, refetch } = useFetch(fetchUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 250);

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    if (!debouncedSearch.trim()) return users;
    const query = debouncedSearch.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.company.name.toLowerCase().includes(query)
    );
  }, [users, debouncedSearch]);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live API Consumer</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Demonstrating custom `useFetch`, `useDebounce`, AbortController cancellation,
            and loading states.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={refetch}
          disabled={loading}
          className="gap-2 self-start sm:self-auto"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </Button>
      </div>

      {/* Search Bar */}
      <div className="max-w-md">
        <div className="relative">
          <Input
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Error State */}
      {error && (
        <Card className="border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20">
          <CardContent className="p-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
            <Button variant="danger" size="sm" onClick={refetch}>
              Retry
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
            </Card>
          ))}
        </div>
      )}

      {/* Empty Search Results */}
      {!loading && !error && filteredUsers.length === 0 && (
        <div className="text-center py-12 space-y-3">
          <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
            No users found matching &ldquo;{debouncedSearch}&rdquo;
          </p>
          <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')}>
            Clear search filter
          </Button>
        </div>
      )}

      {/* Users Grid */}
      {!loading && !error && filteredUsers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card
              key={user.id}
              className="hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold text-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-base">{user.name}</CardTitle>
                      <CardDescription className="text-xs">
                        @{user.username}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    ID #{user.id}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <a
                    href={`mailto:${user.email}`}
                    className="hover:text-brand-600 dark:hover:text-brand-400 truncate"
                  >
                    {user.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-600 dark:hover:text-brand-400 truncate"
                  >
                    {user.website}
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                  <Building2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate font-medium">{user.company.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
