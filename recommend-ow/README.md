# RecommendoTV (recommend-ow)

RecommendoTV is a Vue 3 frontend assignment project that displays curated TV show rows by genre, supports global search, and shows detailed show information using the TVMaze public API.

## Technology Stack 

* Vue 3 (Composition API)
* Javascript
* Pinia (State management)
* Vue Router
* Vitest
* Native Fetch API (due to simple API calls)

Dependencies are intentionally minimal as per the assignment requirements to prioritize clarity and architectural signal.


## Architecture Decisions 

I used a feature-based structure (`features/shows`, `features/search`) so related code stays together.

I also split responsibilities:

- **services**: API calls and response normalization
- **stores**: loading, errors, caching, orchestration
- **components/views**: UI rendering and interactions

This keeps the code easier to read and test.

## Main decisions

- **Curated genres**: I used a fixed list of genres to keep the dashboard clean and predictable.
- **Normalization**: API responses are mapped into one internal show model so UI code stays stable.
- **Caching**: loaded shows and details are cached in stores to avoid unnecessary requests.
- **Named routes**: navigation is clearer and safer (`Dashboard`, `ShowDetails`).
- **Theme toggle**: light/dark mode uses CSS variables + localStorage (no extra dependency).


## Project structure

```text
src/
  app/
  assets/
  features/
    search/
    shows/
  services/
  shared/
  __tests__/
```

## API endpoints used

- `GET /shows?page=0`
- `GET /shows/:id`
- `GET /search/shows?q=:query`

Base URL: `https://api.tvmaze.com`

## Current test focus

- normalization logic
- store behavior (caching, sorting, error handling)
- search stale-request protection
- details view route reactivity
- theme persistence

## Local Setup

### Prerequisites

- Node.js `^20.19.0 || >=22.12.0`
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Unit Tests

Run tests in watch mode:

```bash
npm run test:unit
```

Run tests once:

```bash
npm run test:unit -- --run
```

## Formatting

```bash
npm run format
```

## Lighthouse

I also ran Lighthouse locally.

You can put your final scores here:

| Metric | Score |
|---|---|
| Performance | `43` |
| Accessibility | `84` |
| Best Practices | `100` |
| SEO | `83` |

## Tradeoffs And Next Steps

Tradeoffs made:

- curated genre list over fully dynamic rendering of all genres fetched by tvmaze api 
- bounded dataset instead of infinite pagination
- lightweight architecture over heavy framework/plugin additions

If extended further:

- split loading/error flags by operation type (dashboard vs details)
- richer keyboard navigation for search dropdown (arrow navigation)
- sanitize API HTML summaries in stricter production contexts

---
P.S.
Lighthouse performance scores could likely be improved further. Due to time constraints and some limitations of the TVMaze API, I made a few pragmatic tradeoffs to keep the architecture simple and focused on frontend structure, clarity, and maintainability. I would be happy to walk through these decisions and discuss possible optimizations during the interview.

I also pushed changes directly to main while working under time pressure. After the submission deadline, I may open additional pull requests for refinements or small improvements, purely to demonstrate standard Git workflow practices. I will not introduce new changes to main after the deadline. 