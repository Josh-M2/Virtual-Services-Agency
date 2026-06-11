export const appRoutes = {
  home: {
    label: "Home",
    path: "/home",
  },
  pricing: {
    label: "Price",
    path: "/price",
  },
  contact: {
    label: "Contact",
    path: "/contact",
  },
} as const;

export const primaryCta = {
  label: "Build My Team",
  href: "/price",
} as const;

export const brand = {
  shortName: "VSA",
  name: "Virtual Services Agency",
  tagline: "Delegate More. Grow Faster.",
  email: "hello@vsa.com",
  phone: "+63 XXX XXX XXXX",
  availability: "Available Monday - Friday",
  copyright: "(c) 2026 VSA. All rights reserved.",
} as const;

export const navLinks = [
  appRoutes.home,
  appRoutes.pricing,
  appRoutes.contact,
] as const;
