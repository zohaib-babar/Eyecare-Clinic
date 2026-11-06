# EyeCare Clinic website

React + Tailwind CSS + GSAP (ScrollTrigger). Pages: Home, About, Services, Contact.

## Run it

```bash
npm install
npm run dev        # opens at http://localhost:5173
npm run build      # production build in /dist
```

## Where to change things

| What                                      | File                              |
| ----------------------------------------- | --------------------------------- |
| Clinic name, phone, address, opening hours | `src/data/content.js` (`clinic`)  |
| Services, FAQs, team, testimonials, stats  | `src/data/content.js`             |
| Photographs                                | `src/data/images.js`              |
| Colours, fonts, animation keyframes        | `tailwind.config.js`              |
| Contact form submission                    | `src/pages/Contact.jsx` (`handleSubmit`) |

## Using your own photos

Copy your images into `public/images/` and set the path in `src/data/images.js`,
for example `hero: "/images/hero.jpg"`. If a photo cannot load, an illustrated iris is shown instead.

## How the animations work

Every page is wrapped in `<Page>`, which runs one GSAP hook (`src/hooks/useScrollAnimations.js`).
Add a data attribute to any element and it animates when scrolled into view:

| Attribute                              | Effect                                   |
| -------------------------------------- | ---------------------------------------- |
| `data-reveal="up/left/right/scale/fade"` | fades in, optionally moving             |
| `data-stagger`                         | children appear one after another        |
| `data-split` (via `<RevealText>`)      | headline words rise from behind a mask   |
| `data-image-reveal`, `data-parallax`   | image wipe and slow parallax             |
| `data-counter="1200" data-suffix="+"`  | number counts up                         |
| `data-line="x"` or `"y"`               | a line draws itself                      |

Visitors who set "reduce motion" on their device see the site without these animations.
