import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description:
      "Local college-student-operated concrete pressure washing in Peachtree City, Georgia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2299dd",
    icons: [
      {
        src: "/images/brand/starbros-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/starbros-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
