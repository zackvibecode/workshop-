"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WA_LINK } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 shadow-[0_1px_0_rgba(14,14,16,0.07)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 sm:px-8 md:py-5">
        {/* logo */}
        <a
          href="#top"
          className={`font-heading text-lg font-extrabold tracking-[0.14em] transition-colors ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          ZAQONE<span className="text-accent">.</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-heading text-[13px] font-semibold tracking-wide transition-colors ${
                  scrolled ? "text-charcoal hover:text-ink" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn !py-2.5 !px-5 text-[13px] ${scrolled ? "btn-dark" : "btn-accent"}`}
          >
            Get a Quote <span className="arr">→</span>
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className={`grid h-10 w-10 place-items-center md:hidden ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          <div className="space-y-1.5">
            <span className={`block h-[2px] w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-80 border-t border-line" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-heading text-sm font-semibold text-charcoal"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full justify-center">
              Get a Quote <span className="arr">→</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
