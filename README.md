# Engineering Portfolio

Static portfolio site built with HTML, CSS, and vanilla JavaScript.

## Running locally

```bash
cd Engineering-Portfolio
python3 -m http.server 8000
```

Open `http://localhost:8000/about.html`.

## Architecture

The codebase is organized around canonical pages plus compatibility redirects.

### Top-level pages

- `about.html` - landing/about page
- `projects.html` - project listing + featured carousel
- `contact.html` - contact form page
- `index.html` - redirect to `about.html`

### Canonical project pages

Primary project detail pages live in:

- `pages/projects/teleoperation.html`
- `pages/projects/weather-prediction-system.html`
- `pages/projects/movie-recommender-system.html`
- `pages/projects/micromouse.html`
- `pages/projects/bionic-hand.html`
- `pages/projects/kfc-bucket.html`
- `pages/projects/search-and-rescue-drone.html`
- `pages/projects/ai-assisted-web-development.html`
- `pages/projects/project-five-placeholder.html`
- `pages/projects/project-six-placeholder.html`

### Legacy compatibility routes

Legacy root-level files (for old links/bookmarks) are kept as redirect wrappers:

- `project-one.html`, `project-two.html`, `project-three.html`, `project-four.html`, `project-five.html`, `project-six.html`
- `project-teleoperation.html`, `project-weather.html`, `project-movie-recommender.html`, `project-micromouse.html`

These redirect to canonical files in `pages/projects/`.

### Static assets

- `css/styles.css` - global styles, components, page sections, responsive rules
- `js/featured-carousel.js` - featured project carousel behavior
- `js/contact-form.js` - contact form client-side handling
- `assets/` - images, PDFs, and media assets

## Naming conventions

- Project pages use descriptive, kebab-case filenames.
- JavaScript behavior is extracted to dedicated files under `js/`.
- Root-level legacy filenames are retained only for backward compatibility.

## Editing guidelines

- Add new project detail pages in `pages/projects/`.
- Link project cards in `projects.html` to canonical pages, not legacy wrappers.
- Keep visual design changes centralized in `css/styles.css`.
- Keep page-specific behavior in `js/` files.
