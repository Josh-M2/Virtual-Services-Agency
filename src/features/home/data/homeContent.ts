import administratative from "../../../assets/administratative.svg";
import dataEntry from "../../../assets/dataEntry.svg";
import muchMore from "../../../assets/muchMore.svg";
import research from "../../../assets/research.svg";
import scheduling from "../../../assets/scheduling.svg";
import socialMedia from "../../../assets/socialMedia.svg";

export const howItWorksSteps = [
  {
    title: "Tell Us Your Needs",
    description: "Share your tasks and goals.",
  },
  {
    title: "Meet Your VA",
    description: "We'll match you with the right assistant.",
  },
  {
    title: "Start Delegating",
    description: "Focus on growing your business.",
  },
] as const;

export const services = [
  {
    icon: socialMedia,
    title: "Social Media",
    description: "Content, engagement, and brand growth.",
  },
  {
    icon: administratative,
    title: "Admin Support",
    description: "Email, calendars, and organization.",
  },
  {
    icon: research,
    title: "Research",
    description: "Lead generation and market insights.",
  },
  {
    icon: scheduling,
    title: "Scheduling",
    description: "Meetings, appointments, and travel.",
  },
  {
    icon: dataEntry,
    title: "Data Entry",
    description: "CRM updates and database management.",
  },
  {
    icon: muchMore,
    title: "Custom Tasks",
    description: "Flexible support tailored to your business.",
  },
] as const;

export const benefits = [
  {
    title: "Top talent",
    description:
      "We hire only the best, with rigorous screening and ongoing training for our VAs.",
  },
  {
    title: "Flexibility",
    description:
      "Scale your VA hours up or down based on your changing business requirements.",
  },
  {
    title: "Affordable",
    description:
      "Our VA packages can save you up to 70% compared to a full-time in-house hire.",
  },
  {
    title: "Proven Results",
    description:
      "Our VAs have helped businesses across industries streamline operations and drive growth.",
  },
] as const;
