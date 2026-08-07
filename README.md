# BOSE — Cyber Security Expert Portfolio

A one-page portfolio for a cyber security expert / penetration tester,
built with plain HTML, CSS and JavaScript (no build step, no framework,
no dependencies). The visual style is a bright, neo-brutalist "pixel lab"
look — thick black borders, hard offset shadows, bold monospace type and
a color-blocked palette on a grid-paper backdrop — paired with a dark
terminal panel for the hero and about sections.

## Structure

```
website/
├── index.html      # Page structure & static text (hero, about, contact, footer)
├── css/style.css   # All styling — colors/fonts as CSS variables at the top
├── js/main.js      # Interactions + SITE_DATA (services, skills, timeline, certs, projects)
└── assets/         # Put real images/CV here if you add any
```

## Running locally

No build tools needed — just serve the folder, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## How to customize

### 1. Name / brand
Replace `BOSE` throughout `index.html` (header/footer brand box, hero
heading) and in the `<title>` / meta description tags. Also update it in
`js/main.js` inside the terminal-window mock (`about@security`, `whoami`
output).

### 2. Colors & fonts
Open `css/style.css` and edit the CSS variables at the top of the file
(`:root { ... }`):
- `--ink` — the border/shadow/text color used everywhere
- `--yellow`, `--mint`, `--pink`, `--cyan`, `--orange`, `--lavender` — the
  accent color-blocking palette (cycled across service/certification cards)
- `--navy-panel` / `--navy-panel-2` — the dark panel background (hero,
  terminal window)
- `--cream` / `--cream-2` — the light card backgrounds
- `--font-mono` — the typeface (loaded from Google Fonts in `index.html`;
  swap the `<link>` there if you change fonts)

### 3. Content sections (services, skills, experience, certifications, projects)
All of these are generated from the `SITE_DATA` object at the top of
`js/main.js`. Edit the arrays there — no HTML editing required, e.g.:

```js
services: [
  { icon: "01", title: "Penetration Testing", desc: "...", tags: ["Web", "Network"] },
  ...
]
```

### 4. Hero roles (typing effect)
Edit `SITE_DATA.roles` in `js/main.js` — each string is typed/deleted in
sequence.

### 5. Static text (hero intro, about bio, contact info, footer tagline)
Edit directly in `index.html` — these are one-off blocks of copy, clearly
marked by section comments (`<!-- ============ HERO ============ -->`, etc).

### 6. Contact form
The form (`#contactForm` in `index.html`, wired in `js/main.js`) currently
only validates client-side and shows a confirmation message — it does not
send real emails. To make it functional, connect it to a form backend such
as [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/),
or your own API endpoint.

### 7. Real photo / CV
The About section uses a CSS/terminal mockup instead of a photo — replace
`.about__visual` in `index.html` with an `<img>` tag pointing to a real
photo in `assets/` if you'd like. Update the "Download CV" button's `href`
to point to a real PDF in `assets/`. The hero's pixel-art character
(`.hero__agent` inline SVG) can be swapped the same way.

### 8. Social links
Update the `href="#"` placeholders on the social icons (GitHub, LinkedIn,
X, Email) in `index.html` (hero, contact section and footer).

### 9. "Ask BOSE.AI" floating button
The floating pill button (bottom-right, `.ask-ai` in `index.html`) is a
decorative nod to the reference design and currently just links to the
contact section — wire it up to a real chat widget/assistant if desired,
or remove it.

## Notes

- Fully responsive (desktop / tablet / mobile with hamburger nav).
- Respects `prefers-reduced-motion` (disables the typing effect and other
  animations for users who request reduced motion).
- No external JS libraries — icons are inline SVG data URIs, animations
  are hand-rolled (IntersectionObserver for scroll reveals).
