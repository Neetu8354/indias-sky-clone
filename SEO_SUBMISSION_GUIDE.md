# Skyexchlive — Search Engine Submission Guide

This is a **one-time external setup** you need to perform manually. Lovable cannot do this for you because it requires logging into your own Google & Bing accounts.

Estimated time: **15 minutes total**.

---

## 1. Google Search Console (5–7 min)

1. Go to https://search.google.com/search-console
2. Click **Add Property** → choose **URL prefix**
3. Enter: `https://skyexchlive.live/`
4. **Verify ownership** — easiest method: HTML tag
   - Google gives you a `<meta name="google-site-verification" content="..." />` tag
   - Tell Lovable: *"Add this Google verification meta to index.html: PASTE_THE_TAG"*
   - Republish, then click **Verify** in Search Console
5. Once verified, go to **Sitemaps** in the left menu
6. Submit: `sitemap.xml`
7. Go to **URL Inspection**, paste each important URL, and click **Request Indexing**:
   - `https://skyexchlive.live/`
   - `https://skyexchlive.live/cricket`
   - `https://skyexchlive.live/casino`
   - `https://skyexchlive.live/blog`
   - Each blog post URL

**Weekly check:** open Search Console → **Coverage** → fix any "Excluded" or "Error" pages.

---

## 2. Bing Webmaster Tools (3–5 min)

1. Go to https://www.bing.com/webmasters
2. Sign in with a Microsoft account
3. Click **Import from Google Search Console** (fastest) — auto-imports your verified site & sitemap
4. Or add manually: enter `https://skyexchlive.live/`, verify via meta tag (same flow as Google)
5. Submit sitemap: `https://skyexchlive.live/sitemap.xml`
6. Use **URL Submission** tool to push your top 10 URLs for instant indexing

---

## 3. IndexNow (instant indexing — optional, 2 min)

Bing & Yandex support IndexNow for instant URL pings.

1. In Bing Webmaster Tools → **IndexNow** → generate an API key
2. Tell Lovable: *"Add IndexNow key file at /public/{KEY}.txt with content {KEY}"*
3. Bing will auto-discover new URLs from your sitemap

---

## 4. After every content update

When you publish a new blog post or page:

1. Add the URL to `public/sitemap.xml` (Lovable can do this)
2. In Google Search Console → **URL Inspection** → paste the new URL → **Request Indexing**
3. In Bing Webmaster → **URL Submission** → paste the URL

---

## 5. Recommended weekly SEO routine

| Day | Task | Tool |
|-----|------|------|
| Mon | Check Coverage errors | Search Console |
| Wed | Review top queries & CTR | Search Console → Performance |
| Fri | Publish 1 new long-tail blog post | Lovable |
| Sun | Submit new URLs for indexing | Search Console + Bing |

---

## What's already in place

- ✅ `public/sitemap.xml` — all 13 URLs listed
- ✅ `public/robots.txt` — `Sitemap:` directive points to sitemap
- ✅ Per-page `<title>`, meta description, canonical, OG/Twitter tags
- ✅ JSON-LD: WebSite, Organization, FAQPage, BlogPosting, BreadcrumbList, AboutPage, ContactPage, ContactPoint
- ✅ Routed pages: `/`, `/about`, `/cricket`, `/casino`, `/contact`, `/blog`, `/blog/:slug`

You're SEO-ready — just complete the 3 external steps above.
