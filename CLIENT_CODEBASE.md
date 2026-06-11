# Client Codebase Documentation

These notes explain how the client is put together for future contributors. For setup commands and the shorter client overview, see [README.md](README.md). For the full repository entry point shown on GitHub, see the root [README.md](../README.md).

## Architecture

The client is organized around feature modules plus shared UI:

- `src/app` owns application setup and route registration.
- `src/pages` contains thin route wrappers.
- `src/features/*` contains page-specific UI and content data.
- `src/shared` contains reusable components and cross-page configuration.
- `src/assets` contains static SVG assets.

This keeps page-specific code near the page it serves while avoiding duplicated global elements like navigation, footer, CTA buttons, and section headers.

## Routing

Routes are defined in `src/app/App.tsx`.

Route metadata lives in `src/shared/config/site.ts`:

- `appRoutes` stores route paths and labels.
- `navLinks` controls the desktop/mobile navigation and footer navigation.
- `primaryCta` controls the shared "Build My Team" CTA.

When adding a route:

1. Add the route metadata to `site.ts`.
2. Create a route wrapper in `src/pages`.
3. Add the route element in `src/app/App.tsx`.
4. Add the route to `navLinks` only if it should appear globally.

Current route note: `Contact` exists in `site.ts` and appears in navigation data, but `src/app/App.tsx` only registers `/home` and `/price` right now. Add a contact page before relying on `/contact` as a working URL.

## Shared Components

Reusable shared components live in `src/shared/components`.

- `NavigationBar.tsx` renders desktop and mobile navigation from `navLinks`.
- `Footer.tsx` renders brand, navigation, service links, and contact details.
- `PrimaryButton.tsx` renders consistent CTA buttons as either links or buttons.
- `RevealContent.tsx` renders reusable scroll-aware entrance and exit motion.
- `SectionHeader.tsx` renders common section headings and optional descriptions.

Use shared components when styling or behavior should stay consistent across pages. Keep components inside a feature folder when they are only useful to that feature.

## Home Feature

Home page implementation lives in `src/features/home`.

```text
features/home/
  components/HomeContent.tsx
  data/homeContent.ts
```

`HomeContent.tsx` is split into local section components:

- `HeroSection`
- `HowItWorksSection`
- `ServicesSection`
- `BenefitsSection`
- `LeadCaptureSection`

Repeated lists are sourced from `homeContent.ts`:

- `howItWorksSteps`
- `services`
- `benefits`

To add a service card, add an item to `services`. To add a benefit or step, update the relevant array.

Home is responsive by default: mobile uses single-column stacks, tablet promotes service cards and pricing-style content to two-column layouts where appropriate, and desktop uses wider multi-column layouts. Section content is wrapped with `RevealContent` so alternating sections move in opposite directions while numbered items can stagger independently.

## Pricing Feature

Pricing page implementation lives in `src/features/pricing`.

```text
features/pricing/
  components/PriceContent.tsx
  components/PricingCards.tsx
  data/pricingPlans.ts
```

`pricingPlans.ts` is the source of truth for:

- Plan names
- Monthly prices
- Stripe checkout URLs
- Featured plan state
- Feature bullets

`PricingCards.tsx` renders every plan from `pricingPlans`, so new pricing tiers should be added in data rather than by copying JSX.

Pricing cards are responsive: one column on mobile, two columns on tablet, and four columns on wide desktop. Cards are individually animated with small staggered delays.

## Styling

Tailwind CSS is the primary styling system.

- Global Tailwind setup and base styles are in `src/index.css`.
- App-level shell styles are in `src/app/App.css`.
- The brand gradient is configured as `bg-primary-gradient` in `tailwind.config.js`.
- The Montserrat font family token is configured as `font-montserrat`.
- Hero rolling word animation keyframes are defined in `src/index.css`.

Prefer Tailwind utility classes for component styling. Use CSS files only for true global or app-shell concerns.

## Motion Guidelines

Use `RevealContent` for section-level content items that should animate on scroll. Pass `direction="right"` when content should enter from the right and exit left, and `direction="left"` when it should enter from the left and exit right. Use the `delay` prop for asynchronous numbered steps or pricing cards.

Keep hero and navigation page-load animation local to their components because those animations are tied to initial page visit timing rather than scroll position.

## Assets

SVG assets live in `src/assets`.

Feature data can import assets when an asset is part of a repeatable content item, such as service cards. Shared components can import assets when the asset is globally reused, such as social icons in the footer.

## Extending The Codebase

Use this default pattern for new areas:

```text
src/features/new-feature/
  components/NewFeatureContent.tsx
  data/newFeatureContent.ts
```

Keep route wrappers in `src/pages` thin. Put reusable pieces in `src/shared/components` only after they are useful across more than one feature.

## Documentation Links

- Root GitHub README: [../README.md](../README.md)
- Client setup README: [README.md](README.md)
- Client architecture notes: this file
