import { pricingPlans, type PricingPlan } from "../data/pricingPlans";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import { primaryCta } from "../../../shared/config/site";

const CheckIcon = () => (
  <svg
    className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const handleCheckout = () => {
    window.location.href = plan.checkoutUrl;
  };

  return (
    <article className="relative flex h-full w-full flex-col rounded-xl bg-white p-6 text-center shadow-lg transition hover:shadow-xl">
      {plan.featured && (
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-primary-gradient p-[1px]">
          <div className="h-full w-full rounded-xl bg-white" />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="mb-3 bg-primary-gradient bg-clip-text text-sm font-bold uppercase text-transparent">
          {plan.name}
        </h3>

        <div className="mb-6 flex items-end justify-center gap-1 text-3xl font-bold text-black md:text-5xl">
          {plan.price}
          <span className="text-sm font-normal text-gray-500">/ month</span>
        </div>

        <div className="flex flex-1 flex-col gap-3 text-left">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start">
              <CheckIcon />
              <p className="text-sm text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <PrimaryButton
            href={primaryCta.href}
            onClick={handleCheckout}
            className={`w-full rounded-lg px-4 py-3 font-bold transition hover:scale-[1.02] ${
              plan.featured
                ? "bg-primary-gradient text-white"
                : "border border-gray-300 bg-white text-black"
            }`}
          >
            {primaryCta.label}
          </PrimaryButton>
        </div>
      </div>
    </article>
  );
};

const PricingCards = () => {
  return (
    <div className="mx-auto sm:my-12 md:my-16 grid w-full max-w-6xl grid-cols-1 gap-6  md:grid-cols-4">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
};
export default PricingCards;
