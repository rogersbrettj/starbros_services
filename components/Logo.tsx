import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${footer ? "rounded-xl bg-white p-2" : ""}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/brand/starbros-logo-main.png"
        alt={`${siteConfig.name} logo`}
        width={1254}
        height={1254}
        priority
        className={`object-contain transition-transform group-hover:scale-[1.02] ${
          footer
            ? "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]"
            : "h-14 w-14 sm:h-16 sm:w-16"
        }`}
      />
    </Link>
  );
}
