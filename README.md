# Tyler Buccilli · Aqua Portfolio

An early-2000s Frutiger Aqua / Aero personal portfolio. Buildless HTML, CSS and JavaScript, ready for GitHub Pages.

## Run locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No npm install or build step is required.

## GitHub Pages

Recommended repository name: **tylerbuccilli44.github.io**. Create it as a public repository, upload this project to the `main` branch, then open **Settings → Pages → Build and deployment → Source → GitHub Actions**. The included workflow publishes pushes to main. The resulting user-site URL is https://tylerbuccilli44.github.io/.

Alternatively use **Deploy from a branch → main → /(root)**; the site has no build requirements. Use one deployment method.

## Custom domain (later)

The requested domain is `tylerbuccili.net` (one `l` after `bucci`). Confirm the spelling before purchasing or configuring DNS; Tyler's surname in the portfolio is Buccilli.

1. Buy or use a domain you own. Verify it in your GitHub account before attaching it.
2. Add the exact domain under repository **Settings → Pages → Custom domain**.
3. Follow GitHub's current DNS instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
4. For `www`, point a CNAME to `tylerbuccilli44.github.io`, not a repository path. For the apex, use the current GitHub Pages A/AAAA values from the documentation, or your DNS provider's supported ALIAS/ANAME setup.
5. Allow DNS and the certificate to finish provisioning, then enable **Enforce HTTPS**.

No CNAME file is enabled yet, so the GitHub Pages address works before your domain is ready. For the Actions deployment method, add a root `CNAME` file containing your chosen domain when you configure it.

## Hidden page

Visit https://tylerbuccilli44.github.io/gtg to open the restroom finder. There is no public navigation link or keyboard shortcut. Previous `/#/gtg` and `/secret/gtg.html` links redirect to `/gtg/`. The three themes and map remain available. This page is public and marked noindex,nofollow.

## Files and components

- `index.html`: semantic portfolio layout
- `css/main.css`: responsive glass desktop theme
- `css/aquarium.css`, `js/aquarium.js`: original interactive CGI-style tropical aquarium and YouTube soundtrack
- `js/app.js`: legacy link redirect and footer year
- `gtg/index.html`: restroom finder; `secret/`: styles, theme picker, map data and legacy redirect
- `assets/`: images extracted from the supplied HTML, plus the orb favicon

The aquarium has clownfish, yellow tangs, blue tangs and emperor angelfish. Click the water, use Enter/Space on the canvas, or press Feed fish. Minimize it to tuck it away. Music availability and autoplay depend on YouTube and browser settings; press Play if required. Map tiles and the embedded song need internet access. Images came from the supplied reference; check their usage rights before public release.

The restroom information is the original 2021 source data with approximate map locations. It has not been independently verified or updated. Research descriptions are works in progress, not published results. Add a professional contact email to the Connect section when ready; no address has been invented.
