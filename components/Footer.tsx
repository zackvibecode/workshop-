import { NAV_LINKS, SERVICES, PHONE_DISPLAY, WA_LINK } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-xl font-extrabold tracking-[0.14em]">
            ZAQONE<span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            Premium vehicle wraps, automotive branding and custom graphics.
          </p>
        </div>

        <div>
          <p className="font-heading text-[11px] font-bold tracking-[0.25em] text-white/40">
            NAVIGATION
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-[11px] font-bold tracking-[0.25em] text-white/40">
            SERVICES
          </p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.no} className="text-sm text-white/60">
                {s.title}
              </li>
            ))}
          </ul>
          <p className="mt-7 font-heading text-[11px] font-bold tracking-[0.25em] text-white/40">
            CONTACT
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-white transition-colors hover:text-accent"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1360px] px-5 py-6 text-xs text-white/40 sm:px-8">
          © ZAQONE Automotive. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
