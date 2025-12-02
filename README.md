# IMCI ASIA — Website

A lightweight static website for IMCI ASIA, built for GitHub Pages.

## Pages
- `index.html`: Futuristic dark-mode homepage with centered logo, title, subtitle, and three buttons: `Projects`, `About`, `Contact`.
- `projects.html`: Two project cards with title, partner, description, screenshot, and a left-aligned `Learn more` button in a card footer. Partner logos appear right-aligned in the footer.
- `about.html`: Simple overview stating we are a value-driven software company founded in Singapore, with additional context. Includes a button to the founder’s website (placeholder URL).
- `contact.html`: Shows company address and an email link/button.

## Structure
```
assets/
	css/
		style.css          # Global styles and page layouts
	images/
		bg.jpg             # Site background image
		header_logo.png    # Header brand logo (if used)
		main_logo.png      # Homepage hero logo
	screenshots/
		1_main.png         # Project 1 screenshot
		2_main.png         # Project 2 screenshot
		1_logo.jpg         # Project 1 partner logo
		2_logo.png         # Project 2 partner logo
404.html               # Optional GitHub Pages 404 stub
index.html             # Homepage
projects.html          # Projects page
about.html             # About page
contact.html           # Contact page
```

## Design
- Dark, high-contrast UI with neon green accents, glass-like surfaces, soft shadows.
- Responsive layouts for mobile and desktop (cards become single-column on small screens).
- Background image (`assets/images/bg.jpg`) with cover sizing.

## Editing Content
- Homepage text: edit in `index.html`.
- Projects:
	- Update titles, partners, and descriptions in `projects.html`.
	- Replace screenshots/logos in `assets/screenshots/` and keep filenames or update paths.
	- Buttons currently point to `#`; set real links if available.
- About: update paragraphs and founder URL in `about.html` (replace `https://example.com`).
- Contact: replace address and `contact@example.com` in `contact.html`.

## Local Preview
Open `index.html` directly in your browser, or serve the folder:

```sh
# From the repository root
python3 -m http.server 8080
# Then visit http://localhost:8080/
```

## GitHub Pages
- Ensure the repository is public (or use GitHub Pages for private with a paid plan).
- In Settings → Pages, set Source to `main` and folder to `/ (root)`.
- Your site will be available at `https://<username>.github.io/<repo>/`.

## Notes
- Nav links are wired between pages (`Projects`, `About`, `Contact`).
- Images are referenced relative to the CSS/HTML locations; keep paths consistent if relocating assets.
