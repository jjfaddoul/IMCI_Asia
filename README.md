# IMCI Asia — GitHub Pages Site

This repository hosts the IMCI Asia website using GitHub Pages. The site is a simple, static build with a dark, modern theme suitable for a software company specializing in Critical Operational Software.

## Structure
- `docs/` — site root used by GitHub Pages
	- `index.html` — homepage
	- `projects/template.html` — project page template
	- `styles/main.css` — global styles
	- `scripts/main.js` — small JS for theme toggle and year
	- `assets/` — icons and placeholders

## Enable GitHub Pages
1. Push the `main` branch to GitHub.
2. In the repository settings, open “Pages”.
3. Under “Build and deployment” set:
	 - Source: `Deploy from a branch`
	 - Branch: `main`
	 - Folder: `/docs`
4. Save. Your site will be available at the repository’s Pages URL.

## Add a Project Page
1. Duplicate `docs/projects/template.html` and rename, e.g. `docs/projects/disaster-monitoring.html`.
2. Edit the content: title, description, outcomes, facts, and screenshots.
3. Add a card to the homepage grid in `docs/index.html`:
	 ```html
	 <a class="card project-card" href="./projects/disaster-monitoring.html">
		 <div class="card-media">
			 <img src="./assets/placeholder-1.svg" alt="Disaster Monitoring thumbnail" />
		 </div>
		 <div class="card-content">
			 <h3>Disaster Monitoring</h3>
			 <p>High-availability monitoring and alerting for critical events.</p>
			 <span class="chip">Reliability</span>
		 </div>
	 </a>
	 ```

## Local Preview
You can preview the site locally with a static server:

```zsh
python3 -m http.server -d "docs" 8000
# Open http://localhost:8000
```

## Notes
- The theme toggle stays in the dark palette, subtly changing accents.
- To customize branding, update the logo text in the header and `assets/favicon.svg`.
