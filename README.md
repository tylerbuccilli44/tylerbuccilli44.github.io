# Tyler Buccilli · Aqua Portfolio

Buildless HTML, CSS and JavaScript. Hosted on Cloudflare Pages, deployed using Wrangler.

- Portfolio: https://tylerbuccilli.net/
- Restroom finder: https://tylerbuccilli.net/gtg
- Cloudflare Pages: https://tylerbuccilli.pages.dev/
- Pages project: tylerbuccilli, production branch: main

## Publish an update

Install Node.js and run:

```sh
npm install
npx wrangler login
npm run deploy
```

The build script copies only public website assets into dist/. Wrangler publishes that folder to Cloudflare Pages. GitHub stores source; GitHub Pages is no longer the hosting provider. Direct Upload deployments are made with Wrangler; pushes to GitHub alone do not deploy.

## GTG and music

/gtg opens the restroom finder directly. Its theme picker offers Frutiger Aurora, Aqua and Dark Aero and saves the choice in the browser. Legacy /#/gtg links redirect to /gtg/. There is no keyboard shortcut. GTG is public and discoverable, not access-controlled, and is marked noindex,nofollow.

The aquarium uses native HTML audio with the three supplied MP3 files, a visible song title, and working next/previous controls. Playback starts with a user action. The images and music were supplied for this project.

## Local preview

Serve the repository with a local static HTTP server. There is no application compilation step. External map tiles require internet access; restroom information is original 2021 source data with approximate locations.
