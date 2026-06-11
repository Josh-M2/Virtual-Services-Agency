# Virtual Services Agency Client

React + TypeScript + Vite client for the Virtual Services Agency website.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Chakra UI
- Headless UI
- Heroicons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview a production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  app/                 App shell, routes, app-level CSS
  assets/              SVGs and static visual assets
  features/            Page-specific feature modules
    home/              Home page sections and data
    pricing/           Pricing page sections and data
  pages/               Route-level page wrappers
  shared/              Reusable components and shared config
    components/        Navigation, footer, buttons, headers
    config/            Brand, routes, CTA, navigation links
  main.tsx             React entry point
  index.css            Global CSS and Tailwind directives
```

## Main Routes

- `/` redirects to `/home`
- `/home` renders the landing page
- `/price` renders the pricing page

Route paths and labels are centralized in `src/shared/config/site.ts`.

## Updating Content

Most repeatable content is data-driven:

- Home steps, services, and benefits: `src/features/home/data/homeContent.ts`
- Pricing plans and checkout links: `src/features/pricing/data/pricingPlans.ts`
- Brand, navigation, and main CTA: `src/shared/config/site.ts`

Add or update items in those files first. The UI components map over the data and render the repeated cards/lists automatically.
