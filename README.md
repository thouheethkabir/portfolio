# thouheethkabir.com

Personal portfolio. Plain HTML, CSS and JavaScript — no framework, no build step,
no dependencies, nothing to pay for.

```
index.html
404.html
robots.txt
sitemap.xml
assets/
  styles.css
  fonts.css
  main.js
  fonts/      Inter + Geist Mono (variable, latin subset, self-hosted)
  img/        profile + 10 project thumbnails (webp)
```

Total page weight is roughly **330 KB**, fonts and images included.

## Run it locally

```bash
npx serve portfolio
```

Or open `index.html` directly in a browser — there is no build step.

## Editing

Everything lives in `index.html`. To add a project, copy one `<li class="card">`
block and change the link, image, name and meta line. Drop the new thumbnail in
`assets/img/`.

Design tokens (colours, spacing, fonts) are CSS custom properties at the top of
`assets/styles.css`.

## Deploying — free options

All three are free for a static site of this size and support a custom domain
with automatic HTTPS.

### Cloudflare Pages (recommended)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Framework preset: **None**. Build command: leave empty. Output directory: `/`.
4. Custom domains → add `thouheethkabir.com` and `www.thouheethkabir.com`.

### GitHub Pages

1. Push to a repo named `<username>.github.io` (or any repo, then Settings → Pages
   → Source: `main` / root).
2. Add a file named `CNAME` containing `www.thouheethkabir.com`.
3. Point the domain's DNS at GitHub Pages, then tick "Enforce HTTPS".

### Netlify

Drag the folder onto <https://app.netlify.com/drop>, then Site settings → Domain
management → add the custom domain.

## Moving the domain off Framer

The domain currently resolves to Framer. Once the new host is live and verified
on its temporary URL, repoint DNS at the new host and only then cancel Framer —
that way there is no window where the site is down.

## Notes

- Fonts are self-hosted, so there are no third-party requests at runtime.
- Images are webp, resized to 640px (2× the display size) and lazy-loaded below
  the fold.
- The clock in the header renders in `Asia/Kolkata` regardless of the visitor's
  timezone.
- The footer's "Check Framer" link points at the referral URL
  `https://framer.link/kabir`. The copyright year updates itself.
- `404.html` at the root is picked up automatically by Cloudflare Pages, GitHub
  Pages and Netlify — no config needed. Its "Back to home" link points at `/`,
  which is correct for a custom domain. If you ever host it under a subpath
  (e.g. a GitHub Pages project site at `/repo/`), change that link to match.
- Section fade-ins are skipped when the visitor has "reduce motion" enabled.
