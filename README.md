# The Exploded Website

The ship.aesthetics landing page. One web page is turned on its side and pulled apart into the six layers it is made of (grid, images, type, buttons, motion, code), then put back together. Below it: the work, the process and a booking form.

No WebGL. The exploded page is real HTML moved with CSS 3D transforms, so it stays sharp and runs on ordinary phones.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Needs Node 18.18 or newer.

## Edit the content

Everything specific to the business is in `site.config.js`:

| Setting | What it does |
| --- | --- |
| `site.url` | Your live address. Needed for link previews and the sitemap. |
| `site.email`, `site.instagram` | Shown in the contact section. |
| `site.formEndpoint` | Where the booking form posts (Formspree, Basin, your own API). While it is `null` the form opens the visitor's email app instead. |
| `site.price` | e.g. `'from $900'`. While it is `null` the page says the price is quoted on the call. |
| `layers` | The six layers and the three points shown when one is picked. |
| `projects` | The work grid. Set `url` on a project to make its card a link. |
| `steps` | The four process steps. |

Project screenshots live in `public/work/`. The link preview image is `public/og.jpg` (1200 × 630).

## How it is put together

```
app/                  layout, page, 404, robots, sitemap, icon
components/
  Exploded.jsx        the pinned scroll section: tilt, pull apart, wireframe, reassemble
  Sheet.jsx           the page that gets taken apart, as six stacked sheets
  Sections.jsx        work, process, contact, footer
  BookingForm.jsx     the form
lib/useScroll.js      smooth scrolling and scroll progress through a section
site.config.js        all content and settings
```

`Exploded.jsx` reads how far the visitor has scrolled through its section and writes three CSS variables: `--tilt`, `--e` (how far apart the sheets are) and `--p`. `sheet.css` does the rest.

Visitors who ask their device for reduced motion get native scrolling and no transitions.

## Deploy

Push to GitHub and import the repo at vercel.com, or run `npm run build` and `npm start` on any Node host. Set `site.url` first.
