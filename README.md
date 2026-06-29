# Stackly Smart Home — Smart Home Website

A hand-built, static smart home website made with plain HTML, CSS, and JavaScript
(no frameworks, no build step). All imagery is original artwork generated
specifically for this project and saved in WEBP format.

## Pages

| Page         | File                      | Notes                                              |
|--------------|---------------------------|-----------------------------------------------------|
| Home         | `index.html`              | Hero, feature grid, gallery teaser, why-us teaser   |
| Gallery      | `pages/gallery.html`      | Filterable device gallery (6 categories)            |
| Blog         | `pages/blog.html`         | Featured post + post grid + newsletter form         |
| Blog post    | `pages/blog-post.html`    | Single article template                            |
| Why Us       | `pages/why-us.html`       | Positioning, comparison table, testimonials         |
| Sign up      | `pages/signup.html`       | Account creation form with live validation          |
| Log in       | `pages/login.html`        | Login form with live validation                     |

## How to view it

This is a static site — no server-side code, no database, no build tools.
Just open `index.html` in a browser, or for the best experience (so relative
paths and fonts load cleanly), serve the folder locally, e.g.:

```bash
cd smarthome
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
smarthome/
├── index.html
├── pages/
│   ├── gallery.html
│   ├── blog.html
│   ├── blog-post.html
│   ├── why-us.html
│   ├── signup.html
│   └── login.html
├── css/
│   ├── variables.css   (design tokens: color, type, spacing)
│   ├── base.css        (reset, header, footer, shared components)
│   ├── home.css
│   ├── gallery.css
│   ├── blog.css
│   ├── why-us.css
│   └── auth.css
├── js/
│   ├── main.js          (nav toggle, scroll reveal)
│   ├── gallery.js        (category filter)
│   ├── blog.js           (newsletter form)
│   └── auth.js           (signup/login validation, password strength)
└── images/
    *.webp  — all original generated artwork
```

## Notes on the sign up / log in forms

These are front-end only: there is no real backend or database. The
JavaScript performs genuine field validation (email format, password
strength, matching confirmation, required checkboxes) and shows a realistic
success state, but no account data is actually stored or transmitted
anywhere. Wire it up to your own backend (or a service like Firebase Auth)
to make it functional end-to-end.

## Fonts

Loaded from Google Fonts at runtime: **Fraunces** (display), **Inter** (body),
**JetBrains Mono** (labels/data). Requires an internet connection to load;
swap in self-hosted font files if you need a fully offline build.
