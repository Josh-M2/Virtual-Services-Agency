# Virtual Services Agency Client

This is the frontend for the Virtual Services Agency website. It is a React + TypeScript + Vite app focused on a simple marketing flow: introduce the agency, explain what clients can delegate, and guide visitors toward the pricing page.

For the repository-level overview, see the root [README.md](../README.md). For more detailed architecture notes, see [CLIENT_CODEBASE.md](CLIENT_CODEBASE.md).

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Chakra UI
- Headless UI
- Heroicons
- Framer Motion

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

Note: `Contact` is already listed in the shared navigation config, but a `/contact` route has not been wired into `src/app/App.tsx` yet.

## Responsive Layout

The client is built mobile-first with Tailwind breakpoints:

- Base classes target mobile screens.
- `sm` and `md` refine tablet layouts.
- `lg` and `xl` expand multi-column desktop sections.

Home sections use responsive grids/flex layouts for steps, service cards, benefits, and lead capture. Pricing cards render as one column on mobile, two columns on tablet, and four columns on wide desktop.

## Motion

Animations use Framer Motion through the shared `src/shared/components/RevealContent.tsx` wrapper.

- The navigation fades and drops in after a one-second page-load delay.
- Hero content fades in as one synchronized group after one second.
- Hero service terms use a CSS word roller in `src/index.css`.
- Section content alternates direction: the first post-hero section enters from the right and exits left, the next enters from the left and exits right, and so on.
- Numbered/step content is staggered with small async delays.
- Pricing header and cards use the same reveal pattern.

## Updating Content

Most repeatable content is data-driven:

- Home steps, services, and benefits: `src/features/home/data/homeContent.ts`
- Pricing plans and checkout links: `src/features/pricing/data/pricingPlans.ts`
- Brand, navigation, and main CTA: `src/shared/config/site.ts`

Add or update items in those files first. The UI components map over the data and render the repeated cards/lists automatically.

## Notes For Future Work

- Add real Stripe or payment links in `src/features/pricing/data/pricingPlans.ts` when checkout is ready.
- Add a contact page or remove the contact nav item until that route exists.
- Keep new page-specific sections inside `src/features` first, then promote components into `src/shared/components` only when they are reused.
