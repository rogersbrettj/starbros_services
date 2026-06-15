import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowIcon } from "./Icons";

export function PromoBanner() {
  return (
    <div className="bg-black px-4 py-2.5 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-center text-xs font-bold sm:text-sm">
        <span>{siteConfig.promotion}</span>
        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-1 text-brand-300 underline decoration-brand-400 underline-offset-4 sm:inline-flex"
        >
          Claim offer <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
