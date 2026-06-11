import { Button, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import remoteWorkSVG from "../../../assets/undraw_laravel-and-vue_fios.svg";
import Footer from "../../../shared/components/Footer";
import NavigationBar from "../../../shared/components/NavigationBar";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import RevealContent from "../../../shared/components/RevealContent";
import SectionHeader from "../../../shared/components/SectionHeader";
import { brand, primaryCta } from "../../../shared/config/site";
import { benefits, howItWorksSteps, services } from "../data/homeContent";

const heroServiceWords = [
  "admin",
  "research",
  "scheduling",
  "social media",
  "data entry",
  "calendar care",
  "customer support",
  "lead generation",
] as const;

type NumberedItemProps = {
  index: number;
  title: string;
  description: string;
  compact?: boolean;
};

const NumberedItem = ({
  index,
  title,
  description,
  compact = false,
}: NumberedItemProps) => (
  <div
    className={
      compact ? "flex w-full items-start justify-start" : "text-center"
    }
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-gradient text-xl font-bold text-white md:h-16 md:w-16 md:text-2xl">
      {index + 1}
    </div>
    <div
      className={compact ? "ml-4 flex min-w-0 flex-1 flex-col text-left" : ""}
    >
      <h2
        className={`${compact ? "text-lg" : "mt-6 text-xl"} font-semibold text-black`}
      >
        {title}
      </h2>
      <p
        className={`${compact ? "text-gray-500" : "mt-2 text-black"} text-sm sm:text-base`}
      >
        {description}
      </p>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-white px-4 py-28 text-center text-black sm:px-6">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,81,255,0.06),transparent_45%),radial-gradient(circle_at_center,rgba(106,92,255,0.05),transparent_40%),radial-gradient(circle_at_bottom,rgba(166,0,255,0.05),transparent_42%)]" />
      <div className="absolute left-[-8rem] top-[8%] h-[30rem] w-[30rem] rounded-full bg-[#1F51FF]/25 blur-[120px]" />
      <div className="absolute right-[-8rem] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#6A5CFF]/20 blur-[130px]" />
      <div className="absolute bottom-[-10rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#A600FF]/15 blur-[140px]" />
      <div className="absolute left-1/2 top-[30%] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-[#1F51FF]/10 blur-[100px]" />
    </div>

    <motion.div
      className="relative z-10 max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.85, ease: "easeOut" }}
    >
      <h1 className="font-montserrat text-4xl font-bold sm:text-5xl md:text-6xl xl:text-7xl [text-shadow:0_1px_8px_rgba(0,0,0,0.25)]">
        Virtual Services Agency
      </h1>
      <p className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base text-black sm:text-lg md:text-xl">
        <span>Professional virtual assistants for</span>
        <span className="hero-word-roller" aria-live="off">
          <span className="hero-word-roller__track">
            {heroServiceWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
            <span>{heroServiceWords[0]}</span>
          </span>
        </span>
      </p>
      <div className="mt-8">
        <PrimaryButton href={primaryCta.href} className="ml-4 px-6">
          {primaryCta.label}
        </PrimaryButton>
      </div>
    </motion.div>
  </section>
);

const HowItWorksSection = () => (
  <section className="overflow-hidden bg-gray-50 py-16 sm:py-20">
    <RevealContent direction="right">
      <SectionHeader
        title="How It Works"
        description="Getting started is simple."
        className="mb-12 px-6 sm:mb-16"
      />
    </RevealContent>
    <div className="mx-auto grid max-w-5xl grid-cols-1 justify-center gap-10 px-6 md:grid-cols-3 md:gap-8 lg:gap-12">
      {howItWorksSteps.map((step, index) => (
        <RevealContent key={step.title} direction="right" delay={index * 0.12}>
          <NumberedItem index={index} {...step} compact={true} />
        </RevealContent>
      ))}
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="overflow-hidden bg-white">
    <RevealContent direction="left">
      <SectionHeader
        title="How We Help"
        className="px-6 pb-10 pt-20 sm:pt-28"
      />
    </RevealContent>
    <div className="relative px-4 pb-20 sm:px-8 sm:pb-28 md:px-10 lg:px-24 xl:px-48">
      <div className="relative grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RevealContent
            key={service.title}
            as="article"
            direction="left"
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
          </RevealContent>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="overflow-hidden bg-gray-50">
    <RevealContent direction="right">
      <SectionHeader
        title="Why Choose Us"
        className="px-6 pb-10 pt-20 sm:pt-28"
      />
    </RevealContent>
    <div className="relative flex flex-col items-center justify-end gap-8 px-4 pb-20 sm:justify-center sm:px-8 sm:pb-28 md:px-10 lg:flex-row lg:px-24 xl:px-48">
      <RevealContent
        direction="right"
        className="relative flex w-full justify-center sm:justify-center lg:w-fit lg:flex-1"
      >
        <img
          src={remoteWorkSVG}
          alt="Team Collaboration"
          className="h-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-md"
        />
      </RevealContent>

      <div className="flex w-full flex-col justify-center space-y-8 font-montserrat lg:w-1/2">
        {benefits.map((benefit, index) => (
          <RevealContent
            key={benefit.title}
            direction="right"
            delay={index * 0.12}
          >
            <NumberedItem index={index} compact {...benefit} />
          </RevealContent>
        ))}
      </div>
    </div>
  </section>
);

const LeadCaptureSection = () => (
  <section className="relative overflow-hidden bg-white px-4 py-16 shadow-sm sm:px-8 sm:py-20">
    <div className="absolute -right-48 top-0 hidden h-[140%] w-[65%] rotate-[-30deg] rounded-[45%] bg-primary-gradient lg:block" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-primary-gradient opacity-10 lg:hidden" />
    <div className="relative z-10 flex flex-col items-center justify-around gap-10 lg:flex-row">
      <RevealContent direction="left" className="w-full max-w-xl">
        <h1 className="font-montserrat text-3xl font-bold text-black md:text-4xl">
          Ready to grow?
        </h1>
        <p className="mt-4 text-black">
          Tell us what you need and we'll help you build your remote team.
        </p>
        <form className="mt-8">
          <div className="flex min-h-12 flex-col overflow-hidden rounded-lg border border-gray-300 bg-white sm:h-12 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="!h-12 !rounded-none !border-0 sm:!h-full"
            />
            <Button className="!h-12 !rounded-none !bg-primary-gradient !px-6 !text-white transition-transform duration-200 hover:scale-105 sm:!h-full">
              Confirm
            </Button>
          </div>
        </form>
      </RevealContent>

      <RevealContent
        direction="left"
        className="relative z-10 hidden flex-col items-center text-center lg:flex"
      >
        <h2 className="text-5xl font-bold tracking-wider text-white">
          {brand.shortName}
        </h2>
        <div className="mt-3 h-px w-20 bg-white/30" />
        <p className="mt-4 leading-relaxed text-white/80">
          Delegate More.
          <br />
          Grow Faster.
        </p>
      </RevealContent>
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
