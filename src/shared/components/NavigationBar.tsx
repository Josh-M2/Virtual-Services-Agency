import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { brand, navLinks, primaryCta } from "../config/site";
import PrimaryButton from "./PrimaryButton";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path: string) => {
    const active = location.pathname.toLowerCase() === path.toLowerCase();

    return `relative px-2 py-2 text-sm font-semibold transition-colors
      after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full
      after:origin-right after:scale-x-0 after:rounded-full after:bg-primary-gradient
      after:transition-transform after:duration-300
      hover:after:origin-left hover:after:scale-x-100
      ${active ? "text-black after:scale-x-100" : "text-gray-700"}`;
  };

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-3 z-[9999] px-3 sm:top-4 sm:px-4"
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-6 sm:py-4"
        >
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="bg-gradient-to-r from-[#1F51FF] to-[#A600FF] bg-clip-text font-extrabold text-transparent">
              {brand.shortName}
            </span>
            <p className="truncate text-sm font-bold text-inherit sm:text-base">
              - {brand.name}
            </p>
          </Link>

          <PopoverGroup className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={navLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}

            <PrimaryButton href={primaryCta.href} className="ml-4 px-6">
              {primaryCta.label}
            </PrimaryButton>
          </PopoverGroup>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden"
            aria-label="Open navigation menu"
          >
            <Bars3Icon className="size-7" />
          </button>
        </nav>
      </motion.header>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm" />

        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full max-w-sm bg-white px-6 py-6 shadow-2xl">
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/"
              className="flex min-w-0 items-center gap-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="bg-gradient-to-r from-[#1F51FF] to-[#A600FF] bg-clip-text font-extrabold text-transparent">
                {brand.shortName}
              </span>
              <p className="truncate font-bold text-inherit">- {brand.name}</p>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <XMarkIcon className="size-7" />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <PrimaryButton href={primaryCta.href} className="w-fit px-6">
              {primaryCta.label}
            </PrimaryButton>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default NavigationBar;
