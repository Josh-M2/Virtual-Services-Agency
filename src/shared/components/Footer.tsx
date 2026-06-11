import { Link } from "react-router-dom";
import facebookLogo from "../../assets/facebookLogo.svg";
import instagramLogo from "../../assets/instagramLogo.svg";
import linkedInLogo from "../../assets/linkedInLogo.svg";
import twitterLogo from "../../assets/twitterLogo.svg";
import { brand, navLinks } from "../config/site";

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: twitterLogo,
  },
  {
    label: "Facebook",
    href: "#",
    icon: facebookLogo,
  },
  {
    label: "Instagram",
    href: "#",
    icon: instagramLogo,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: linkedInLogo,
  },
] as const;

const footerServices = [
  "Admin Support",
  "Social Media",
  "Research",
  "Scheduling",
  "Data Entry",
] as const;

const Footer = () => {
  return (
    <footer className="bg-black pt-20 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-4">
        <div>
          <span className="bg-primary-gradient bg-clip-text text-3xl font-extrabold text-transparent">
            {brand.shortName}
          </span>

          <p className="mt-4 max-w-xs text-sm text-gray-400">
            Helping businesses save time and scale with reliable virtual assistants.
          </p>

          <div className="mt-6 flex justify-center gap-4 md:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="opacity-70 transition hover:opacity-100"
                aria-label={link.label}
              >
                <img src={link.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 font-medium text-gray-500">Navigation</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-medium text-gray-500">Services</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 font-medium text-gray-500">Get In Touch</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>{brand.email}</li>
            <li>{brand.phone}</li>
            <li>{brand.availability}</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 px-6 pb-8 pt-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>{brand.copyright}</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
