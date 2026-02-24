# RecommendoTV (recommend-ow)

A response Vue 3 application that displays curated TV shows grouped by genre, supports search and provides detailed sho views using the TVMaze API.

## High-Level Architecture

UI Layer (Views + Components)

-->

State Layer (Pinia Stores)

-->

Service Layer (API abstraction + normalization)

--> 

External API (TVMaze)

## Technology Stack 

* Vue 3 (Composition API)
* Javascript
* Pinia (State management)
* Vue Router
* Vitest
* Native Fetch API (due to simple API calls)

Dependencies are intentionally minimal as per the assignment requirements to prioritize clarity and architectural signal.

## Folder Structure

Chose the feature-based structure because it keeps related logic grouped.

```
src/
│
├── app/
│   ├── router/
│   └── App.vue
│
├── features/
│   ├── shows/
│   │   ├── components/
│   │   ├── views/
│   │   ├── store/
│   │   ├── services/
│   │   └── config/
│   │
│   └── search/
│       ├── components/
│       └── store/
│
├── shared/
│   ├── components/
│   ├── composables/
│   └── utils/
│
├── services/
│   └── apiClient.js
│
└── main.js
```
## Design Decisions
### Dashboard Design

Decided to go with curated genres: Action, Comedy, Horror, Sports, Science-Fiction.

Reasons for choosing these select genres over fetching based on TVMaze results.

* TVMaze could return dozens of different genres, which would overload the UI with too many categories. 
* Ensures a predictable layout


### Normalization
Normalizing the API responses into a consistent internal model, since TVMaze had too many attributes.

#### Model
```
{
  id,
  name,
  image,
  rating,
  genres,
  summary,
  status,
  runtime,
  premiered,
  network
}
```

## Routing

```
/ --> DashboardVie
/show/:kd --> ShowDetailsView
```
To be extended with more if time permits. 


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
