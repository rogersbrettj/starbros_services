"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { PromoBanner } from "./PromoBanner";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <PromoBanner />
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 lg:h-[84px] lg:px-8">
          <Logo />
          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Main navigation"
          >
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition hover:text-brand-600 ${
                  pathname === item.href ? "text-brand-600" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={siteConfig.callHref}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-black transition hover:text-brand-600"
            >
              <PhoneIcon className="h-4 w-4 text-brand-600" />
              {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Get Your Free Quote
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-black shadow-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div id="mobile-menu">
          {open && (
            <MobileMenu
              pathname={pathname}
              onNavigate={() => setOpen(false)}
            />
          )}
        </div>
      </header>
    </>
  );
}
