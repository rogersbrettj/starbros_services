import { galleryItems } from "@/config/site";
import { BeforeAfterCard } from "./BeforeAfterCard";

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((item, index) => (
        <BeforeAfterCard
          key={item.src}
          {...item}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
