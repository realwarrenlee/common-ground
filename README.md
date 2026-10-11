# Common Ground Showcase

Explore a collection of Singapore heritage with playful interactions.

A WebGL showcase featuring **Puppet → Rattan → Rangoli**, with static website covers, project details, and links to each experience and its source code.

| Project | Experience | Source |
| --- | --- | --- |
| Puppet · Behind the Little Stage | [Website](https://chinese-puppet.vercel.app/) | [GitHub](https://github.com/realwarrenlee/puppet) |
| Rattan · Still Taking Shape | [Website](https://rattan-products.vercel.app/) | [GitHub](https://github.com/realwarrenlee/rattan) |
| Rangoli · A Welcome That Grows | [Website](https://indian-rangoli.vercel.app/) | [GitHub](https://github.com/realwarrenlee/rangoli) |

## Run locally

Requires Node.js 20+ and a browser with hardware-accelerated WebGL.

```sh
npm ci
npm run build
npm run dev
```

Open [localhost:4199](http://localhost:4199/). Stop the server with Ctrl+C.

## Edit

- [src/content.mjs](src/content.mjs): branding, project order, descriptions, and links.
- [src/assets/](src/assets/): covers, fonts, and model inputs. Cover sources and fingerprints are saved alongside the images.
- [scripts/build.mjs](scripts/build.mjs): adapts the saved Active Theory release into this website.
- [public/](public/): generated files and required runtime assets, included in the repository.

Run `npm run build` after editing source files, then refresh the browser. The dev server does not provide hot reload.

Existing project URLs remain `/work/gallery` (Puppet), `/work/star-ring` (Rattan), and `/work/dispersion` (Rangoli).

## Deploy to Vercel

Import this repository into Vercel with the repository root as the project directory. [vercel.json](vercel.json) selects the static-site setup, runs `npm ci` and `npm run build`, publishes `public/`, and routes `/work` and project deep links to `index.html`. No environment variables are required.

This deployment serves the showcase, project details, covers, and external links. The local search API and WebSocket room service remain available only through the Node.js server; they are not included in this static deployment.

## Checks

With the local server running, use `npm run check` for resource, content, rendering-baseline, and service checks.

For the full suite:

```sh
npx playwright install chromium
npm test
```

The suite starts a temporary server and closes it when finished. Browser tests require a supported GPU; the original runtime rejects SwiftShader. Reports and screenshots stay in the ignored `.artifacts/` directory. Browser simulation does not replace testing on real devices.

## Sources and limits

Based on [Active Theory](https://activetheory.net/)'s public Hydra/WebGL release `1780406240914`. Original scene motion, shaders, and optical materials are preserved. Private services are replaced by local search and WebSocket support; these require the Node.js server. The baseline's missing `lab.gif` and `damaged_road_normal.jpg` use the original renderer's fallback.

See [third-party notices](THIRD_PARTY_NOTICES.md) for sources and licensing and [the release record](vendor/activetheory/SOURCE.json) for baseline fingerprints. Third-party assets retain their own rights; this repository does not apply one blanket license.
