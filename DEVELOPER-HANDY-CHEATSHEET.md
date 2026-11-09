# 🚀 Modern React 19 & TypeScript Developer Handy Cheat Sheet

An ultra-condensed, copy-paste ready developer desk companion for React 19, TypeScript, Tailwind CSS, Vite, and Vitest.

---

## ⚡ React 19 Hooks Quick Reference

| Hook | Signature / Pattern | Primary Purpose & Best Practice |
| :--- | :--- | :--- |
| `useState<T>` | `const [state, setState] = useState<T>(init);` | Local component state. Use updater function `setState(prev => ...)` for concurrent safety. |
| `useReducer` | `const [state, dispatch] = useReducer(reducer, init);` | Complex state transitions involving multiple interdependent variables or state machines. |
| `useEffect` | `useEffect(() => { ... return () => cleanup(); }, [deps]);` | Synchronizing with external non-React systems (DOM listeners, WebSockets, timers). |
| `useRef<T>` | `const ref = useRef<HTMLInputElement>(null);` | Persistent mutable value or DOM node reference without triggering re-renders. |
| `useContext` | `const val = useContext(MyContext);` | Consuming broadcast values from ancestor Context providers. |
| `useMemo` | `const cached = useMemo(() => compute(a), [a]);` | Caching computationally intensive operations across renders. |
| `useCallback`| `const fn = useCallback(() => doWork(id), [id]);` | Preserving function reference equality across renders for memoized children. |
| `useActionState` *(React 19)* | `const [state, formAction, isPending] = useActionState(fn, init);` | Manages async server/client actions with built-in loading (`isPending`) and error tracking. |
| `useOptimistic` *(React 19)* | `const [optimisticVal, setOptimistic] = useOptimistic(val, updateFn);` | Instantly displays tentative UI changes while an asynchronous request is in flight. |
| `use` *(React 19)* | `const data = use(fetchPromise);` | Reads the value of a resource (Promise or Context) conditionally inside components. |

---

## ⌨️ TypeScript React Events & Prop Types Matrix

```tsx
// 1. Common Synthetic Event Handlers
onClick:      (e: React.MouseEvent<HTMLButtonElement>) => void
onChange:     (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
onSubmit:     (e: React.FormEvent<HTMLFormElement>) => void
onKeyDown:    (e: React.KeyboardEvent<HTMLInputElement>) => void
onFocus:      (e: React.FocusEvent<HTMLInputElement>) => void
onBlur:       (e: React.FocusEvent<HTMLInputElement>) => void

// 2. React Prop Types
children:     React.ReactNode           // Any renderable node (JSX, string, number, null)
element:      React.ReactElement        // Valid JSX element only
style:        React.CSSProperties       // Inline CSS object: { color: 'red', marginTop: 12 }
className:    string                    // Class string

// 3. Inheriting Native HTML Attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

// 4. Inheriting Component Props with Ref
export const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithRef<'input'>>(
  ({ className, ...props }, ref) => <input ref={ref} className={className} {...props} />
);
```

---

## 🚫 Top 8 React Gotchas & Modern Solutions

### 1. The Derived State Anti-Pattern
```tsx
// ❌ BAD: Storing redundant state that can be computed
const [items, setItems] = useState<Item[]>([]);
const [itemCount, setItemCount] = useState(0); // Duplicated state!

// ✅ GOOD: Calculate derived values on the fly during render
const [items, setItems] = useState<Item[]>([]);
const itemCount = items.length; // Always synchronized, zero re-renders!
```

### 2. Mutating Object/Array State Directly
```tsx
// ❌ BAD: Mutating existing array in place
userList.push(newUser);
setUserList(userList); // Object reference didn't change; React won't re-render!

// ✅ GOOD: Create a shallow copy with spread
setUserList(prev => [...prev, newUser]);
```

### 3. Fetching in `useEffect` Without AbortController
```tsx
// ❌ BAD: Memory leaks and race conditions on quick navigation
useEffect(() => {
  fetch('/api/data').then(res => res.json()).then(setData);
}, [query]);

// ✅ GOOD: Cancel requests when dependencies update or component unmounts
useEffect(() => {
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => { if (err.name !== 'AbortError') console.error(err); });

  return () => controller.abort();
}, [query]);
```

### 4. Index as List Key Anti-Pattern
```tsx
// ❌ BAD: Using array index causes rendering bugs when filtering or reordering
{items.map((item, index) => <TodoItem key={index} {...item} />)}

// ✅ GOOD: Use unique, stable identifiers
{items.map(item => <TodoItem key={item.id} {...item} />)}
```

---

## 🎨 Tailwind CSS Quick Layout Recipes

### 1. Absolute Centering (Flex & Grid)
```html
<!-- Flexbox -->
<div class="flex items-center justify-center min-h-screen">Centered</div>

<!-- Grid -->
<div class="grid place-items-center min-h-screen">Centered</div>
```

### 2. Full-Page App Shell (Sticky Header + Footer)
```html
<div class="flex min-h-screen flex-col">
  <header class="sticky top-0 z-50 h-16 border-b bg-white dark:bg-slate-900">Header</header>
  <main class="flex-1 container mx-auto p-4">Main Content</main>
  <footer class="border-t py-6 text-center">Footer</footer>
</div>
```

### 3. Responsive Auto-Fit Card Grid
```html
<!-- Responsive columns: 1 column on mobile, 2 on tablet, 3 on desktop, 4 on wide screen -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <div class="rounded-xl border p-6 bg-white dark:bg-slate-900 shadow-sm">Card</div>
</div>
```

### 4. Accessible Modal Overlay Backdrop
```html
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
  <!-- Dialog -->
  <div class="relative z-50 w-full max-w-lg rounded-xl bg-white p-6 shadow-xl dark:bg-slate-900">
    Dialog Content
  </div>
</div>
```

---

## 🧪 Vitest & Testing Library Cheat Sheet

### 1. Query Priority Order
1. `screen.getByRole('button', { name: /save/i })` *(Always prefer accessible roles)*
2. `screen.getByLabelText(/email address/i)` *(For form inputs)*
3. `screen.getByPlaceholderText(/search/i)`
4. `screen.getByText(/submit/i)`
5. `screen.getByTestId('custom-widget')` *(Last resort)*

### 2. Query Methods Difference
| Method Prefix | When Element Exists | When Element Does NOT Exist | Returns |
| :--- | :--- | :--- | :--- |
| `getBy...` | Returns element | **Throws Error** | Element |
| `queryBy...` | Returns element | **Returns `null`** (Used for `toBeNull` / not in DOM) | Element \| null |
| `findBy...` | **Waits & Returns** | **Throws Error after timeout** | Promise\<Element\> |

### 3. User Event Testing Pattern
```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

it('submits form on button click', async () => {
  const user = userEvent.setup();
  const handleSubmit = vi.fn();

  render(<SearchForm onSubmit={handleSubmit} />);

  const input = screen.getByRole('textbox', { name: /search/i });
  const button = screen.getByRole('button', { name: /submit/i });

  await user.type(input, 'React 19');
  await user.click(button);

  expect(handleSubmit).toHaveBeenCalledWith('React 19');
});
```

---

## 🛠️ CLI Quick Reference

```bash
npm run dev        # Launch Vite local dev server on :3000
npm run typecheck  # Run tsc --noEmit (Strict type check)
npm run lint       # Run ESLint 9 Flat Config
npm run test:run   # Run all Vitest specs once
npm run build      # Compile production bundle in /dist
```
