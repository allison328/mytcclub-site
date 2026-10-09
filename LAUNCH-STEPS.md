# My TC Club site: demo now, GitHub Pages at launch

Source: `clients/tc-club/site/`. Plain static files. No build step, so the folder
moves to a GitHub repo as-is and GitHub Pages serves it. `.nojekyll` and
`404.html` are already in it.

## While it's a demo (2026-10-03)
- Every public page carries `<meta name="robots" content="noindex,nofollow" data-demo="remove-at-launch">`.
- `robots.txt` blocks everything. `vercel.json` adds a noindex header on Vercel.
- So the demo can never outrank or duplicate the real domain later.

## Launch checklist
1. Fix the domain. mytcclub.com points at Cloudflare and errors (checked 2026-10-02). Point it at GitHub Pages. Do not touch the Google Workspace MX records, or her email breaks.
2. Remove the demo noindex: delete every line containing `data-demo="remove-at-launch"`.
3. Replace `robots.txt` with `robots.launch.txt` (allows crawling, blocks portal and file pages, points to the sitemap).
4. Connect the sign-up and freebie form: set `endpoint` in `assets/config.js`. Until then answers stay on the visitor's device.
5. Confirm the brokerage strip list in `assets/config.js` with Allison. Only LPT Realty and Legacy Real Estate are confirmed.
6. Allison's photos into the two About placeholders and the homepage "Meet Allison" spot.
7. Turn off "Help improve Claude" in her Claude settings, so the AI data line on the site stays true.
8. Submit `https://www.mytcclub.com/sitemap.xml` in Google Search Console, and link her Google Business Profile (service-area business, California) to the site.
9. Portal and client file pages are demos with fictional data. They stay noindex forever, and the real portal needs logins before real files go in it.

## SEO already in place
- Unique title and description per page, keyword first ("California transaction coordinator", "real estate admin support", "transaction coordinator pricing", "escrow explained").
- Canonical URLs on https://www.mytcclub.com, Open Graph and share image (`assets/og-image.jpg`), favicon.
- Schema.org: ProfessionalService (home), Service with $400 offer (pricing), Person (about), HowTo with 9 steps (escrow), FAQPage with 24 questions (faq), breadcrumbs everywhere.
- California page: 58 counties by region, map, and ~90 major cities in crawlable text. No thin city-by-city pages, on purpose: Google treats mass city pages as doorway spam.
- Images: WebP with JPEG fallback, sized, every image has descriptive alt text.
