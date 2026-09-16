# Search visibility for Vivek Softwares

The canonical production domain is https://viveksoftwares.online. Set
`NEXT_PUBLIC_SITE_URL=https://viveksoftwares.online` in the hosting environment
before building. Existing hosting values override the code default; remove any
old xbear.online value. The local `.env.local` value has also been updated.

## What the site provides

- A public homepage at `/`; `/dashboard` permanently redirects to `/`.
- Linked, server-rendered team profiles at `/team/vivek-bharamshetti`,
  `/team/vaishnavi-yelapure` and `/team/aditya-rachatte`.
- Page titles, descriptions, canonical URLs, social previews, and JSON-LD
  linking the website, business and people. Profile details reflect existing
  project content; review them with each team member before publishing changes.
- `/sitemap.xml` lists public canonical pages. `/robots.txt` permits crawling;
  the login page remains crawlable so Google can see its `noindex` directive.
- Optional Search Console verification through `GOOGLE_SITE_VERIFICATION`.

## Production setup

1. Deploy the updated project using the existing Netlify configuration and attach
   `viveksoftwares.online` as the primary custom domain. Check DNS and HTTPS.
   Redirect any alternative domains to the primary domain in the host settings.
2. Verify domain ownership in [Google Search Console](https://search.google.com/search-console).
   A Domain property uses the DNS TXT record supplied by Google. Alternatively,
   for a URL-prefix property, set `GOOGLE_SITE_VERIFICATION` to the HTML meta-tag
   token Google supplies, then rebuild and deploy. Never invent a token.
3. Submit `https://viveksoftwares.online/sitemap.xml`. Inspect the homepage and
   each team profile using URL Inspection, test the live URL, and request indexing.
4. Check the Page indexing report for canonical or crawl errors. Check actual
   search impressions for each person's name in the Performance report.
5. Keep each person's real professional profiles linked to their page on this
   domain. Add portfolios and experience only when accurate and approved by the
   person; do not add fabricated reviews, credentials or profile links.

Google's [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features)
says ordinary SEO practices apply to AI Overviews and AI Mode. No AI text file,
special schema or paid API guarantees inclusion. Google must first crawl and
index eligible pages, and ranking or recommendation is not guaranteed.

## Validation

Run `npm run lint`, `npm run build`, and `node --test tests/notify-enquiry.test.mjs`.
After `npm run start -- --port 3100`, run `node scripts/check-seo.mjs` to check
rendered metadata, structured data, sitemap, indexing rules and redirects.

The notification endpoint requires `SMS_WEBHOOK_URL` for provider delivery.
Enquiries are stored through the existing Firebase form independently of this
optional notification. Validate Firebase configuration and Firestore rules in
the hosting environment; local checks do not send real enquiries or messages.
