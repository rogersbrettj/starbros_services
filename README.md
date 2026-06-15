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
    starbros-logo-wide.png
    starbros-logo-square.png
    starbros-favicon.png
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

## Connect the Quote Form

Copy the example environment file:

```bash
cp .env.example .env.local
```

### Option 1: Formspree

1. Create a form at Formspree.
2. Copy the full endpoint, such as `https://formspree.io/f/your-form-id`.
3. Add it to `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

The reusable form in `components/QuoteForm.tsx` sends `FormData` to that
endpoint and includes loading, success, and error states.

### Option 2: Resend or a Next.js API Route

Create an App Router route such as `app/api/quote/route.ts`. Validate the
submitted fields on the server, send the message through Resend, and return an
appropriate JSON response. Then point `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to
`/api/quote`, or rename the environment variable to a more general endpoint
name.

Keep API keys server-side only. Never expose a Resend API key through a
`NEXT_PUBLIC_` environment variable.

### Spam Reduction

The form includes a hidden honeypot field. For a public launch, also enable the
form provider's spam controls, validate all fields server-side, apply rate
limiting to a custom API route, and consider Turnstile or reCAPTCHA if spam
becomes a problem.

## Update Business Details

Most editable business content is centralized in `config/site.ts`:

- Phone number, call link, and SMS link
- Official business name
- Service areas
- Service-area Google Maps embed URL
- Promotion text
- Business hours
- Navigation links
- Form endpoint
- Social media URLs
- Services
- Gallery items
- FAQs
- Team bios

Add real Facebook and Instagram URLs to `socialLinks`. Footer social links stay
hidden while those values are empty.

## Update Website Content

- **Reviews:** Replace the labeled placeholder cards in
  `app/reviews/page.tsx` only with verified feedback and customer permission.
- **Gallery:** Update `galleryItems` in `config/site.ts`.
- **Map:** Update `serviceAreaMapEmbedUrl` in `config/site.ts` to change the
  general service-region map. Do not publish a fake street address.
- **Business hours:** Update `businessHours` in `config/site.ts` when the
  weekday schedule changes.
- **Form:** Add the environment variable described above.

## Deploy on Vercel

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in the Vercel project environment
   variables.
4. Deploy the project.
5. Add `starbros.com` in the Vercel project domain settings.
6. Update DNS records using the exact values Vercel provides.
7. Confirm both the root domain and preferred `www` redirect work.
8. Submit `https://starbros.com/sitemap.xml` in Google Search Console after
   launch.

The site is statically renderable, includes page-specific metadata, canonical
URLs, LocalBusiness and Service schema, `robots.txt`, `sitemap.xml`, and a web
manifest.
