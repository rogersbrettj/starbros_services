import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo({ footer = false }: { footer?: boolean }) {
  const logoSrc = footer
    ? "/images/brand/starbros-logo-main.png"
    : "/images/brand/starbros-logo-header.jpg";

  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${footer ? "rounded-xl bg-white p-2" : ""}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={logoSrc}
        alt={`${siteConfig.name} logo`}
        width={footer ? 1254 : 1672}
        height={footer ? 1254 : 390}
        priority
        className={`object-contain transition-transform group-hover:scale-[1.02] ${
          footer
            ? "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]"
            : "h-11 w-[188px] sm:h-12 sm:w-[206px] lg:h-14 lg:w-[240px] xl:h-16 xl:w-[276px]"
        }`}
      />
    </Link>
  );
}
