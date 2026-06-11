import { Button, Input } from "@chakra-ui/react";
import remoteWorkSVG from "../../../assets/undraw_laravel-and-vue_fios.svg";
import Footer from "../../../shared/components/Footer";
import NavigationBar from "../../../shared/components/NavigationBar";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import SectionHeader from "../../../shared/components/SectionHeader";
import { brand, primaryCta } from "../../../shared/config/site";
import { benefits, howItWorksSteps, services } from "../data/homeContent";

type NumberedItemProps = {
  index: number;
  title: string;
  description: string;
  compact?: boolean;
};

const NumberedItem = ({ index, title, description, compact = false }: NumberedItemProps) => (
  <div
    className={
      compact
        ? "flex items-start justify-center sm:justify-center"
        : "text-center"
    }
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-gradient text-xl font-bold text-white md:h-16 md:w-16 md:text-2xl">
      {index + 1}
    </div>
    <div className={compact ? "ml-4 flex w-[70%] flex-col text-left sm:w-[80%] md:w-[60%]" : ""}>
      <h2 className={`${compact ? "text-lg" : "mt-6 text-xl"} font-semibold text-black`}>
        {title}
      </h2>
      <p className={`${compact ? "text-gray-500" : "mt-2 text-black"} text-sm sm:text-base`}>
        {description}
      </p>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-white px-6 text-center text-black">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,81,255,0.06),transparent_45%),radial-gradient(circle_at_center,rgba(106,92,255,0.05),transparent_40%),radial-gradient(circle_at_bottom,rgba(166,0,255,0.05),transparent_42%)]" />
      <div className="absolute left-[-8rem] top-[8%] h-[30rem] w-[30rem] rounded-full bg-[#1F51FF]/25 blur-[120px]" />
      <div className="absolute right-[-8rem] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#6A5CFF]/20 blur-[130px]" />
      <div className="absolute bottom-[-10rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#A600FF]/15 blur-[140px]" />
      <div className="absolute left-1/2 top-[30%] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-[#1F51FF]/10 blur-[100px]" />
    </div>

    <div className="relative z-10 max-w-4xl">
      <h1 className="font-montserrat text-3xl font-bold md:text-5xl xl:text-6xl">
        Delegate More.
        <br />
        Grow Faster.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-sm text-black md:text-lg">
        Professional virtual assistants for admin, research, scheduling, and social media.
      </p>
      <div className="mt-8">
        <PrimaryButton href={primaryCta.href}>{primaryCta.label}</PrimaryButton>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="bg-gray-50 py-20">
    <SectionHeader title="How It Works" description="Getting started is simple." className="mb-16" />
    <div className="mx-auto flex max-w-5xl flex-col justify-center gap-12 px-6 md:flex-row">
      {howItWorksSteps.map((step, index) => (
        <NumberedItem key={step.title} index={index} {...step} />
      ))}
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="bg-white">
    <SectionHeader title="How We Help" className="pb-10 pt-28" />
    <div className="relative px-4 pb-28 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <div className="relative grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="relative h-full w-full rounded-xl border border-gray-200 bg-white p-6 text-left text-black"
          >
            <div className="w-fit rounded-2xl bg-primary-gradient p-4">
              <img src={service.icon} alt="" className="h-8 w-auto" />
            </div>
            <h2 className="mb-1 mt-5 text-base font-semibold sm:text-lg md:text-xl">
              {service.title}
            </h2>
            <p className="mb-1 mt-5 text-sm text-gray-500 sm:text-base">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="bg-gray-50">
    <SectionHeader title="Why Choose Us" className="pb-10 pt-28" />
    <div className="relative flex flex-col items-center justify-end px-4 pb-28 sm:justify-center sm:px-8 md:px-16 lg:flex-row lg:px-24 xl:px-48">
      <div className="relative flex w-full justify-center sm:justify-center lg:w-fit">
        <img
          src={remoteWorkSVG}
          alt="Team Collaboration"
          className="h-96 w-[284.81px] max-w-lg sm:max-w-md md:max-w-lg"
        />
      </div>

      <div className="mt-8 flex w-full flex-col justify-center space-y-8 font-montserrat lg:mt-0 lg:w-1/2">
        {benefits.map((benefit, index) => (
          <NumberedItem key={benefit.title} index={index} compact {...benefit} />
        ))}
      </div>
    </div>
  </section>
);

const LeadCaptureSection = () => (
  <section className="relative overflow-hidden bg-white px-8 py-20 shadow-sm">
    <div className="absolute -right-44 -top-24 h-[140%] w-[65%] rotate-[-30deg] rounded-[45%] bg-primary-gradient" />
    <div className="relative z-10 flex items-center justify-around">
      <div className="max-w-xl">
        <h1 className="font-montserrat text-3xl font-bold text-black md:text-4xl">
          Ready to grow?
        </h1>
        <p className="mt-4 text-black">
          Tell us what you need and we'll help you build your remote team.
        </p>
        <form className="mt-8">
          <div className="flex h-12 overflow-hidden rounded-lg border border-gray-300 bg-white">
            <Input
              type="email"
              placeholder="Enter your email"
              className="!h-full !rounded-none !border-0"
            />
            <Button className="!h-full !rounded-none !bg-primary-gradient !px-6 !text-white transition-transform duration-200 hover:scale-105">
              Confirm
            </Button>
          </div>
        </form>
      </div>

      <div className="relative z-10 hidden flex-col items-center text-center lg:flex">
        <h2 className="text-5xl font-bold tracking-wider text-white">{brand.shortName}</h2>
        <div className="mt-3 h-px w-20 bg-white/30" />
        <p className="mt-4 leading-relaxed text-white/80">
          Delegate More.
          <br />
          Grow Faster.
        </p>
      </div>
    </div>
  </section>
);

const HomeContent = () => {
  return (
    <div className="app-shell">
      <NavigationBar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ServicesSection />
        <BenefitsSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomeContent;
