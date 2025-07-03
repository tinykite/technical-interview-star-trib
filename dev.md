# 🛠 Development & Run Commands

This is a full stack repository using:

- **Frontend**: [Next.js](https://nextjs.org/) (App Router) + [Tailwind CSS](https://tailwindcss.com/) + TypeScript 
- **Backend** [Nest.js](https://nestjs.com/) + [GraphQL](https://graphql.org/) + TypeScript

## Install Dependencies
Once you have created a copy of this repository and navigated to the correct branch, install dependencies with:

```bash
yarn install
```

## Start the Frontend (Next.js)
```
yarn dev:web
```
Runs the Next.js app in development mode

Once running, visit http://localhost:3000

## Start the Backend (Nest.js + GraphQL)
```
yarn dev:api
```
Starts the Nest.js backend using the GraphQL server.
Once running, the GraphQL playground will be available at http://localhost:4000/graphql.

## Tests
- To run all tests: `yarn test`
- To run tests across the frontend `yarn workspace web test`
- To run tests across the backend `yarn workspace api test`

## Project Structure
- apps/
  - web/                  # Frontend — Next.js
    - northern-star/      # Our Frontend Design System
  - api/                  # Backend — Nest.js

## Troubleshooting Tips
If you encounter module resolution issues or things seem broken, try reinstalling dependencies:
```
rm -rf node_modules
yarn install
```
