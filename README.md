# BOSE — Cyber Security Expert Portfolio

A dark, terminal-inspired one-page portfolio for a cyber security expert /
penetration tester, built with plain HTML, CSS and JavaScript (no build
step, no framework, no dependencies).

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
Replace `BOSE` throughout `index.html` (logo, hero heading, footer) and in
the `<title>` / meta description tags. Also update it in `js/main.js`
inside the terminal-window mock (`about@security`, `whoami` output).

### 2. Colors & fonts
Open `css/style.css` and edit the CSS variables at the top of the file
(`:root { ... }`):
- `--accent` / `--accent-2` — the neon green/cyan accent colors
- `--bg`, `--bg-alt`, `--bg-card` — background shades
- `--font-mono`, `--font-body` — typefaces (loaded from Google Fonts in
  `index.html`; swap the `<link>` there if you change fonts)

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
to point to a real PDF in `assets/`.

### 8. Social links
Update the `href="#"` placeholders on the social icons (GitHub, LinkedIn,
X, Email) in `index.html` (hero, contact section and footer).

## Notes

- Fully responsive (desktop / tablet / mobile with hamburger nav).
- Respects `prefers-reduced-motion` (disables the matrix rain, typing
  effect and other animations for users who request reduced motion).
- No external JS libraries — icons are inline SVG data URIs, animations
  are hand-rolled (IntersectionObserver for scroll reveals, canvas for the
  matrix rain effect).
