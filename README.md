# The Support Shelf — Shopify storefront theme

Storefront theme for **The Support Shelf** (`vgb9f2-eg.myshopify.com`): premium, editable
digital resources for parents and caregivers of kids who need a little more structure.
The founder works inside ABA clinics every day; that is the credibility story, but the store is
aimed at families, not clinics.

The theme lives in `theme/`. It is Shopify's **Horizon 4.2.0** (the "Radiant" theme the store
generator installed) with a brand layer on top. Horizon's architecture is untouched; everything
added is prefixed `tss-` so it is easy to find and easy to remove.

- Live theme in the store: **Radiant** (untouched).
- Development build pushed from this repo: **The Support Shelf (dev build)**, unpublished.
  Publish it from Shopify admin > Online Store > Themes when you are ready. Nothing here
  publishes automatically.

## What changed

| Area | Files | Notes |
| --- | --- | --- |
| Brand tokens | `snippets/tss-tokens.liquid`, `assets/tss.css` | Cream / sage / ink / clay as CSS custom properties, fed by the theme's Color palette setting. Section rhythm (96px desktop / 56px mobile), 68ch measure, radii, shadows, motion tokens. No section hard-codes a color. |
| Motion | `assets/tss-reveal.js` | Fade / translate-up reveal on scroll. Honors `prefers-reduced-motion`; content is never hidden without JS. Card hover lift is Horizon's own setting. |
| Typography | `config/settings_data.json` | Instrument Serif (headings, italic accent) + Inter (body, subheadings). |
| Homepage | `sections/tss-hero`, `tss-featured-kit`, `tss-steps`, `tss-founder`, `tss-testimonials`, `tss-email-capture` | `templates/index.json`. Hero → featured Daily Routine Kit → how it works → founder → (testimonials, disabled) → email. `tss-two-doors` is used on the 404 page and stays available for the Interactive Shelf launch. |
| Product page | `blocks/tss-benefit`, `tss-format`, `tss-guarantee`, `tss-trust-strip`; `sections/tss-inside-kit`, `tss-who-for`, `tss-faq`, `tss-related` | `templates/product.json`. Order: gallery → title → benefit → price → Format & what's included → add to cart → guarantee → trust strip → Inside this kit → Who it's for → founder note → FAQ → More from this shelf. Horizon's sticky add-to-cart bar is enabled (full-width on mobile). |
| Collection ("shelf") | `sections/tss-shelf-header`, `tss-shelf-grid`, `tss-shelf-empty` | `templates/collection.json`. Large editorial cards, first product featured. Empty shelves show a per-shelf "coming soon" message with the email form. |
| About / Contact / 404 | `sections/tss-page-intro`, `tss-rich-text`, `tss-contact` | `templates/page.about.json`, `page.contact.json`, `404.json`. |
| Header / footer | `sections/header-group.json`, `sections/tss-footer.liquid`, `blocks/_tss-footer-column`, `_tss-footer-link`, `sections/footer-group.json` | Search, country and language pickers off; sticky header on scroll-up. Footer lists shelves, About (appears once the page exists), Contact and every store policy automatically; "Powered by Shopify" is off. |
| SEO | `snippets/meta-tags.liquid`, `config/settings_schema.json` | Homepage title and meta description settings, per-page description fallbacks, default social share image slot, theme-color meta. |
| Copy | `locales/en.default.json`, `locales/en.default.schema.json` | All new strings live under a `tss` namespace. |
| Tooling | `.theme-check.yml` | `MatchingTranslations` disabled because the store sells in English only. |

Everything else in `theme/` is Horizon as pulled from the store (commit `baseline`).

## Working on it

Requirements: Node 18+ and Shopify CLI 3.x (`npm i -g @shopify/cli`).

Local preview with hot reload (opens a browser login the first time):

```bash
cd theme
shopify theme dev --store vgb9f2-eg.myshopify.com
```

Static checks (no store access needed):

```bash
cd theme
shopify theme check
```

Push a new or updated **unpublished** theme. Never pass `--live` or run `shopify theme publish`;
publishing is done by a human in the admin.

```bash
cd theme
shopify theme push --unpublished --store vgb9f2-eg.myshopify.com
```

To update the dev build that already exists, push to it by ID instead of creating another copy
(find the ID with `shopify theme list --store vgb9f2-eg.myshopify.com`):

```bash
cd theme
shopify theme push --theme <THEME_ID> --store vgb9f2-eg.myshopify.com
```

Note on this repository's first push: the environment the theme was built in could not reach
Shopify's login servers, so the dev build was created with the Admin API (duplicate of the live
theme plus an upsert of every changed file) rather than the CLI. The result is the same kind of
unpublished theme the CLI creates.

## Editing copy without code

Open the theme editor (Online Store > Themes > The Support Shelf (dev build) > Customize).
Every piece of copy is a section or block setting:

| What | Where in the editor |
| --- | --- |
| Hero headline, subhead, buttons, proof points, hero image | Home > **Shelf hero** |
| Shelf door (title, promise, image) | 404 > **Shelf doors** (also addable to Home when the Interactive Shelf launches) |
| Featured kit benefit, format line, included list | Home > **Featured kit** |
| Founder story, photo, credibility points | Home > **Founder story** (and About > Founder story) |
| How it works steps | Home > **Steps or principles** |
| Testimonials | Home > **Testimonials** (enable the section and add blocks) |
| Email capture copy | Home / Collection / About > **Email capture** |
| Product title size, benefit override | Product > Product information > Details > *One-line benefit* |
| Format & what's included | Product > Product information > Details > *Format & what's included* |
| Guarantee wording and link | Product > Product information > Details > *Guarantee line* |
| Trust strip | Product > Product information > Details > *Trust strip* |
| Inside this kit items (per product) | Product > **Inside this kit** > *Item* blocks (set "Only show for this product") |
| Who it's for cards (per product) | Product > **Who it's for** |
| FAQ questions | Product > **FAQ** |
| Shelf promises, meta line | Collection > **Shelf header** |
| Empty-shelf copy | Collection > **Shelf empty state** |
| About page sections | Page: about > each section |
| Contact intro, email line, response time | Page: contact > **Page intro**, **Contact form** |
| 404 copy | 404 > **404** section |
| Footer columns, links, tagline | Footer > **Shelf footer** |
| Tagline, homepage title tag and meta description, social share image | Theme settings > **The Support Shelf** |
| Colors (cream, ink, sage, clay, card, deep sage) | Theme settings > Colors > Color palette |
| Fonts | Theme settings > Typography |

Product metafields (optional, override the editor defaults per product): `custom.one_line_benefit`
(single line), `custom.whats_included` and `custom.inside_this_kit` (multi-line, one item per line).
They are read automatically if you create them in Settings > Custom data > Products.

See `TODO.md` for the content and assets that are still placeholders.
