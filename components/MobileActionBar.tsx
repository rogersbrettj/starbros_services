"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MessageIcon } from "./Icons";

export function MobileActionBar() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_1.35fr] gap-2">
        <a href={siteConfig.textHref} className="btn-secondary min-h-11 px-3 py-2.5">
          <MessageIcon /> Text Now
        </a>
        <Link href="/contact" className="btn-primary min-h-11 px-3 py-2.5">
          Free Quote
        </Link>
      </div>
    </div>
  );
}
