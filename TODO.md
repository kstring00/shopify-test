# TODO — content and assets to replace

Everything below is editable in the theme editor without touching code (see README for where).
Placeholder copy was written in the brand voice so nothing reads as filler, but it is Claude's
draft, not yours: read it once and make it true.

## Store setup (Shopify admin, not the theme)

- [ ] **Products are Draft.** Set Daily Routine Kit to Active, or its product page and the Family
      Shelf show empty in any preview.
- [ ] **Clinic products and collection.** The store still holds Clinic Welcome Kit Builder, Parent
      Newsletter Studio and The Clinic Shelf collection. The theme no longer links to them; archive
      or delete them in the admin so they never surface in search or /collections/all.
- [ ] **Product descriptions** still say "In development. Final contents, format, and delivery
      details will be confirmed before launch." The product page shows the description as the intro
      of "Inside this kit"; rewrite it before launch.
- [ ] **Delivery format and mechanism.** The theme says "Editable [format] template. Instant
      delivery after purchase." Decide the format (Canva, Google Docs, PowerPoint...) and the
      delivery app (for example Shopify Digital Downloads), then replace `[format]` in
      Home > Featured kit and Product > Details > Format & what's included. The FAQ answer "Do I
      need special software?" also promises a quick-start note; keep it true or edit it.
- [ ] **Refund policy, Terms of service.** Only a privacy policy exists. Create refund and terms
      under Settings > Policies; the footer and the product-page guarantee link pick them up
      automatically. Decide the refund window; the guarantee copy currently avoids a number.
- [ ] **About page.** Create a page with handle `about`, choose template **page.about**. The footer
      and homepage "Read the whole story" link point to `/pages/about` and the footer link stays
      hidden until the page exists.
- [ ] **Contact page** exists (handle `contact`, template page.contact). Submit the form once
      after publishing to confirm delivery to the store sender email (kyle@stringhamwebdesign.com,
      Settings > Notifications > Sender email).
- [ ] **Navigation.** Main menu is Home / Catalog / Contact. Suggested: The Family Shelf, About,
      Contact (Online Store > Navigation > Main menu).
- [ ] **Remove the 4 generator sample products** (tagged "Sample Product") and the "Default example
      products" collection so they do not show on /collections/all or in search.
- [ ] **Store meta description** (Online Store > Preferences). The theme setting
      *Homepage meta description* is used as a fallback.
- [ ] **Shop Pay / accelerated checkout** buttons are enabled under the add-to-cart button.
      Turn off in Theme settings > Cart if you want only one button.

## Assets

- [ ] **Founder photo of Kyle** — Home > Founder story, About > Founder story, Product > A note
      from Kyle. Portrait, at least 1000px tall. Alt text is prefilled.
- [ ] **Product mockup images, 4 to 6 per product** (page-by-page previews). Upload as product
      media in the admin; the gallery is a thumbnail carousel sized for them. The first image is
      also used on shelf cards and the homepage featured kit.
- [ ] **Hero image** — Home > Shelf hero (optional; placeholder renders until then).
- [ ] **Shelf door image** — 404 > Shelf doors (optional).
- [ ] **Logo** — Theme settings > Logo and favicon. Wordmark text is used until then.
- [ ] **Favicon** (32px PNG) — Theme settings > Logo and favicon.
- [ ] **Social share image** (1200 × 630) — Theme settings > The Support Shelf.
- [ ] **Social links** — Footer > Policies and links > Social links (all empty, icons hidden).

## Homepage copy to confirm

- [ ] Hero headline and subhead (Home > Shelf hero).
- [ ] Three proof points: "Made by someone who works with kids every day", "Editable, not just a
      PDF", "Instant download".
- [ ] Founder credibility points (In the room every day / Design is the day job / Made for real
      homes). Spell out real credentials if you want them named.
- [ ] Featured kit included list (three generic lines today).
- [ ] Testimonials: section is built and hidden. Enable Home > Testimonials and add blocks once
      you have quotes with permission.

## Product page copy to confirm

- [ ] "Inside this kit" items for the Daily Routine Kit (Product > Inside this kit). These are
      plausible drafts, not confirmed contents.
- [ ] "Who it's for" cards.
- [ ] FAQ answers (editable? delivered how? safe for my child? refunds? software needed?).
- [ ] Guarantee line wording.
- [ ] Trust strip wording (No personal data / Not medical advice / You customize everything).

## About page copy to confirm

- [ ] Founder story paragraphs.
- [ ] "Why this exists".
- [ ] Equal exchange principles (three cards).
- [ ] **Faith line** — written briefly in the "One more thing" section; replace with your own wording
      or delete the section.

## Collection and other pages

- [ ] Shelf promises come from each collection's description (already written in admin). Fallbacks
      live in Collection > Shelf header.
- [ ] Interactive Shelf "Coming soon — customizable builders" copy (Collection > Shelf empty state).
- [ ] 404 copy.

## Later

- [ ] Run PageSpeed on the published theme and share the number; it could not be measured from
      the build environment. Images are lazy-loaded below the fold and the only added script is
      1.3 KB; the remaining weight is Horizon's own bundle.
- [ ] If you ever sell in another language, re-enable `MatchingTranslations` in
      `theme/.theme-check.yml` and translate the `tss` namespace in the locale files.
