export type PricingPlan = {
  name: string;
  price: string;
  checkoutUrl: string;
  featured?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Launch",
    price: "$149",
    checkoutUrl: "",
    features: [
      "Dedicated virtual assistant support for essential daily tasks.",
      "Inbox cleanup, scheduling, and basic admin assistance.",
      "Perfect for individuals testing remote support for the first time.",
    ],
  },
  {
    name: "Growth",
    price: "$399",
    checkoutUrl: "",
    featured: true,
    features: [
      "Full-time virtual assistant coverage for growing workloads.",
      "Email, calendar, research, and CRM task management.",
      "Weekly alignment check-ins to keep operations running smoothly.",
      "Ideal for founders and small teams scaling operations.",
    ],
  },
  {
    name: "Scale",
    price: "$899",
    checkoutUrl: "",
    features: [
      "Multi-role virtual assistant support for teams and businesses.",
      "Advanced workflow handling across tools, platforms, and systems.",
      "Priority task execution with faster turnaround times.",
      "Includes coordination support for up to 5 team members.",
      "Best for companies ready to delegate operations at scale.",
    ],
  },
  {
    name: "Elite",
    price: "$1499",
    checkoutUrl: "",
    features: [
      "Dedicated senior-level virtual assistant + operations support.",
      "End-to-end business process handling and optimization.",
      "Daily priority support with near real-time responsiveness.",
      "Direct collaboration sessions for strategy and execution.",
      "Built for high-output founders and fast-moving teams.",
    ],
  },
];
