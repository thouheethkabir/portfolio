# Editing the site yourself

No build step, no CMS, nothing to install. Every page is a plain HTML file —
if you can edit text in a browser, you can edit this site.

**Important:** the live site is the `main` branch. The `staging` branch is the
draft. Edit `staging`, look at it, then merge into `main` when you're happy.
Nothing you do on `staging` is public.

---

## The easiest way — edit on GitHub, from any device

1. Open the file you want to change:
   - **Case study** → <https://github.com/thouheethkabir/portfolio/edit/staging/work/ojas-cafe/index.html>
   - **Home page** → <https://github.com/thouheethkabir/portfolio/edit/staging/index.html>
2. Change the words between the tags. Leave the tags alone.
3. Scroll down, write a short note about what you changed, and click
   **Commit changes** — making sure it says **Commit directly to the `staging` branch**.

That's it. To put it live, see *Publishing* below.

### What you can safely change

Text sits between an opening and a closing tag. Only touch what's in the middle:

```html
<p>This sentence is yours to rewrite.</p>
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

```html
<li>Station layout and prep flow, so a large menu stays executable at peak</li>
```

A few characters are written as codes, because the raw character breaks HTML:

| You want | Type this |
|---|---|
| & | `&amp;` |
| — (long dash) | `&mdash;` |
| ' (curly apostrophe) | `&rsquo;` |
| · (middle dot) | `&middot;` |

### What to leave alone

- Anything inside `<head>` … `</head>` unless you're changing the page title or
  description on purpose
- The `<script type="application/ld+json">` block — that's the structured data
  Google reads. If you change a heading, the content here no longer matches.
  Tell Claude instead and it'll update both together.
- Class names, `id=`, `href=`, `src=`

---

## Where each part of the case study lives

Open `work/ojas-cafe/index.html` and look for these — each section starts with
an `id`, so searching for the id jumps you straight there.

| Section on the page | Search for |
|---|---|
| Headline and intro line | `cs-head` |
| The brief | `id="s-brief"` |
| Brand positioning | `id="s-position"` |
| Brand identity | `id="s-brand"` |
| Menu engineering | `id="s-menu"` |
| Kitchen systems and SOPs | `id="s-kitchen"` |
| The website | `id="s-site"` |
| Operations, billing and loyalty | `id="s-ops"` |
| Online presence | `id="s-online"` |
| Marketing and launch | `id="s-launch"` |
| What's next | `id="s-next"` |
| Details table | `id="s-facts"` |

## Changing a photo caption

```html
<figcaption>Signature plates carry the weight on the menu.</figcaption>
```

## Adding a photo

1. Put the image in `assets/img/` (WebP or JPG, about 1200px wide).
2. Copy an existing `<figure>` block and change the filename, the `alt`
   description and the caption:

```html
<figure class="cs-fig">
  <img src="../../assets/img/YOUR-FILE.webp" width="1216" height="684"
       alt="Plain description of what is in the photo" loading="lazy" decoding="async">
  <figcaption>Your caption.</figcaption>
</figure>
```

`alt` matters — it's what Google and screen readers read.

---

## Checking it before it goes live

```bash
npx serve portfolio
```

Then open <http://localhost:4321>. Or just double-click `index.html`.

---

## Publishing

When `staging` looks right, open a pull request from `staging` into `main` and
merge it:

<https://github.com/thouheethkabir/portfolio/compare/main...staging>

GitHub Pages rebuilds automatically and the change is live in about a minute.

If you'd rather not do that yourself, just say **publish** to Claude.
