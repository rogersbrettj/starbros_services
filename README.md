# StarBro's Services Website

Mobile-first Next.js website for StarBro's Services, a local
college-student-operated concrete pressure washing business serving Peachtree
City and surrounding Georgia communities.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next/image`
- Metadata routes for sitemap, robots, and web manifest

## Run Locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run lint
npm run build
```

The project also includes a `pnpm-lock.yaml`, so `pnpm install` and
`pnpm dev` are valid alternatives when using pnpm.

## Brand and Team Assets

The supplied images live in:

```text
public/images/
  brand/
    starbros-logo-main.png
    starbros-logo-header.jpg
    starbros-logo-wide.png
    starbros-logo-square.png
    starbros-favicon.png
    starbros-favicon-16.png
    starbros-favicon-32.png
    starbros-favicon-48.png
    starbros-apple-touch-icon.png
    starbros-icon-192.png
    starbros-icon-512.png
  team/
    brett-headshot.png
    kaden-headshot.png
  gallery/
    driveway-before-after.jpg
    sidewalk-before-after.jpg
    patio-before-after.jpg
    walkway-before-after.jpg
```

Replace a file while preserving its filename to update it without touching
component code. Keep images reasonably compressed and use descriptive alt text
whenever adding a new image to the site data.

## Add Gallery Photos

1. Add the optimized image to `public/images/gallery`.
2. Open `config/site.ts`.
3. Add or update an item in the `galleryItems` array.
4. Set the category, title, image path, description, and descriptive alt text.

The current gallery uses composite before-and-after images. New project images
can use the same layout by placing the before view on the left and after view on
the right.

For good performance, use WebP, AVIF, or optimized JPEG files when possible.
Keep full-width images near 2000 pixels or less unless a larger source is
needed.

## Quote Form

The quote form is connected to Formspree form ID `meewnkol` using
`@formspree/react`. The public form ID is centralized in `config/site.ts`, and
the tailored form in `components/QuoteForm.tsx` includes native required-field
validation, Formspree field errors, loading and success states, business
metadata, and a honeypot field.

No deployment environment variable is required for the Formspree form ID.
Update `formspreeFormId` in `config/site.ts` if the form changes later.

### Spam Reduction

The form includes a hidden honeypot field. For a public launch, also enable the
form provider's spam controls, validate all fields server-side, apply rate
limiting to a custom API route, and consider Turnstile or reCAPTCHA if spam
becomes a problem.

## Google Reviews

The reviews page keeps existing verified-review placeholders visible by default.
It also includes a server-side Google Places integration that can load official
Google reviews after credentials are added to the hosting environment:

```bash
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=
GOOGLE_REVIEW_URL=
```

- `GOOGLE_PLACES_API_KEY` is a server-side secret and should not be exposed in
  client code.
- `GOOGLE_PLACE_ID` identifies the StarBro's Services Google place listing.
- `GOOGLE_REVIEW_URL` is optional and powers the "Review us on Google" button.

Google Places review data is limited to the reviews returned by the Place
Details API. For full owner-managed Google Business Profile review access, use
the official Google Business Profile Reviews API with verified business access
and OAuth credentials. Do not scrape Google reviews or publish invented reviews.

## Update Business Details

Most editable business content is centralized in `config/site.ts`:

- Phone number, call link, and SMS link
- Official business name
- Service areas
- Service-area Google Maps embed URL
- Promotion text
- Business hours
- Navigation links
- Formspree form ID
- Social media URLs
- Services
- Gallery items
- FAQs
- Team bios

Add real Facebook and Instagram URLs to `socialLinks`. Footer social links stay
hidden while those values are empty.

## Update Website Content

- **Reviews:** Replace the labeled placeholder cards in
  `app/reviews/page.tsx` only with verified feedback and customer permission,
  or configure the Google reviews environment variables above.
- **Gallery:** Update `galleryItems` in `config/site.ts`.
- **Map:** Update `serviceAreaMapEmbedUrl` in `config/site.ts` to change the
  general service-region map. Do not publish a fake street address.
- **Business hours:** Update `businessHours` in `config/site.ts` when the
  weekday schedule changes.
- **Form:** Update `formspreeFormId` in `config/site.ts` if a different
  Formspree form should receive submissions.

## Deploy on Vercel

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Deploy the project.
4. Add `starbros.com` in the Vercel project domain settings.
5. Update DNS records using the exact values Vercel provides.
6. Confirm both the root domain and preferred `www` redirect work.
7. Submit `https://starbros.com/sitemap.xml` in Google Search Console after
   launch.

The site is statically renderable, includes page-specific metadata, canonical
URLs, LocalBusiness and Service schema, `robots.txt`, `sitemap.xml`, and a web
manifest.
