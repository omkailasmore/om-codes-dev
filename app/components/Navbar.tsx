"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", ...navItems.map((item) => item.href.slice(1))];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let current = "home";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          current = sectionId;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="
          mx-auto flex max-w-5xl items-center justify-between
          rounded-2xl border border-white/[0.08]
          bg-[#05070d]/75 px-4 py-3
          shadow-2xl shadow-black/20
          backdrop-blur-xl
          sm:px-5
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="text-base font-semibold tracking-tight text-white">
            om
            <span className="text-white/35 transition-colors group-hover:text-white/60">
              .codes.dev
            </span>
          </span>

          <span
            className="
              hidden rounded-full border border-white/10
              px-2 py-0.5 text-[9px] uppercase
              tracking-[0.18em] text-white/30
              sm:inline-block
            "
          >
            CSE
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative rounded-full px-3 py-2
                  text-xs transition-all duration-200
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:bg-white/[0.04] hover:text-white/80"
                  }
                `}
              >
                {item.name}

                {isActive && (
                  <span
                    className="
                      absolute bottom-1 left-1/2
                      h-0.5 w-0.5 -translate-x-1/2
                      rounded-full bg-white
                    "
                  />
                )}
              </a>
            );
          })}

          {/* Contact */}
          <a
            href="#contact"
            className="
              ml-2 rounded-full
              border border-white/10
              bg-white/[0.04]
              px-4 py-2
              text-xs font-medium text-white/80
              transition-all duration-200
              hover:border-white/20
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            Let&apos;s connect
            <span className="ml-1.5 text-white/40">↗</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full border border-white/10
            bg-white/[0.03]
            transition
            hover:bg-white/[0.08]
            md:hidden
          "
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`
                absolute left-0 top-0 h-px w-4 bg-white
                transition-transform duration-200
                ${isOpen ? "translate-y-[6px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                absolute left-0 top-[6px] h-px w-4 bg-white
                transition-opacity duration-200
                ${isOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                absolute left-0 top-3 h-px w-4 bg-white
                transition-transform duration-200
                ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}
              `}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
          mx-auto mt-2 max-w-5xl overflow-hidden
          rounded-2xl border border-white/[0.08]
          bg-[#05070d]/95
          backdrop-blur-xl
          transition-all duration-300
          md:hidden
          ${
            isOpen
              ? "max-h-[500px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }
        `}
      >
        <div className="p-3">
          <a
            href="#home"
            onClick={closeMenu}
            className={`
              flex items-center justify-between rounded-xl
              px-4 py-3 text-sm transition
              ${
                activeSection === "home"
                  ? "bg-white/[0.06] text-white"
                  : "text-white/50 hover:bg-white/[0.04] hover:text-white"
              }
            `}
          >
            Home
            <span className="text-xs text-white/20">01</span>
          </a>

          {navItems.map((item, index) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`
                  flex items-center justify-between rounded-xl
                  px-4 py-3 text-sm transition
                  ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                  }
                `}
              >
                {item.name}

                <span className="text-xs text-white/20">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </a>
            );
          })}

          <div className="my-2 h-px bg-white/[0.06]" />

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              flex items-center justify-between
              rounded-xl bg-white px-4 py-3
              text-sm font-medium text-black
              transition hover:bg-white/90
            "
          >
            Let&apos;s connect
            <span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}