# own-clean-react

A from-scratch take on the `clean-react` course, built with Modern.js, React 19,
React Hook Form and TanStack Query.

## Requirements

Node 24 (`nvm use` reads `.nvmrc`) and pnpm.

## Scripts

```bash
pnpm install
pnpm dev            # Modern.js dev server on http://localhost:8080
pnpm build          # production build in dist/
pnpm serve          # serve the production build

pnpm test           # Vitest, single run
pnpm test:watch     # Vitest, watch mode
pnpm lint           # oxlint
pnpm lint:fix
pnpm format         # Biome: format and organize imports
pnpm format:check
pnpm typecheck      # tsc --noEmit
```

## Tooling

- **Lint:** oxlint, configured in `.oxlintrc.json`.
- **Formatting:** Biome, configured in `biome.json` (its linter is off).
- **Tests:** Vitest with jsdom and Testing Library, configured in `vitest.config.mts`.
  Tests live in `tests/`, and `tests/setup.ts` loads the jest-dom matchers.
- **Data fetching:** a `QueryClientProvider` wraps every route in `src/routes/layout.tsx`.
