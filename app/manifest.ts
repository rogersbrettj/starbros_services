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
        src: "/images/brand/starbros-favicon.png",
        sizes: "1254x1254",
        type: "image/png",
      },
    ],
  };
}
