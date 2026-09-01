# Deploying Medisight on Netlify

The marketing site is a **Next.js 14** app at the repo root. Netlify settings live in [`netlify.toml`](./netlify.toml).

## Prerequisites

- Git repo on GitHub, GitLab, or Bitbucket
- [Netlify account](https://app.netlify.com)
- Node **20** (see [`.nvmrc`](./.nvmrc))

## Local check before deploy

From the repo root:

```bash
npm install
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) and spot-check `/`, `/evidence`, `/terms`, and `/privacy`. Verify `/results` redirects to `/evidence` in the Netlify redirect rules.

## Option A: Git deploy (recommended)

1. Push this repo to your Git provider.
2. In Netlify: **Add new site** → **Import an existing project** → select the repo.
3. Confirm Netlify reads settings from `netlify.toml`:

   | Setting | Value |
   | --- | --- |
   | Base directory | *(leave empty — repo root)* |
   | Build command | `npm run build` |
   | Publish directory | `out` |

   The site builds as a static export (`output: "export"` in `next.config.mjs`), so no
   `@netlify/plugin-nextjs` plugin is needed.

4. Optional: set **Environment variable** `NODE_VERSION` = `20` (Netlify also reads `.nvmrc`).
5. Deploy. Production URL appears when the build succeeds.

### Custom domain

1. Site settings → **Domain management** → **Add a domain** (e.g. `medisight.ai`).
2. Update DNS at your registrar per Netlify’s instructions.
3. Enable HTTPS (automatic once DNS propagates).

### Preview deploys

Netlify builds preview URLs for pull requests by default. No extra config required.

## Option B: Manual drag-and-drop (small sites only)

Netlify recommends drag-and-drop only when the **uncompressed site is under 50 MB** and **no single file exceeds 10 MB**. This site is ~70 MB with three video files over 10 MB, so manual upload often fails silently (404 on every route). **Use Option C instead.**

If you still use drag-and-drop: upload the **contents** of the `out/` folder (or a zip of those contents with `index.html` at the root), not the source repo zip.

## Option C: Netlify CLI (recommended for this site)

Handles large assets reliably. From the repo root:

```bash
npm install -g netlify-cli
netlify login
netlify link          # once — select the Medisight site
npm run build
netlify deploy --prod --dir=out
```

Use `netlify deploy --dir=out` (without `--prod`) for a draft URL first.

**Current production URL (Medisight AI team):** https://wondrous-salmiakki-c1830b.netlify.app

## Migrating from the old static site

If an existing Netlify site published the legacy `dist/` HTML build:

- Replace its build settings with the table above, **or**
- Create a new site and point `medisight.ai` DNS to it.

Legacy URL redirects are configured in `netlify.toml`:

- `/index.html` → `/`
- `/terms.html` → `/terms`
- `/privacy.html` → `/privacy`
- `/results` → `/evidence`

## Environment variables

The marketing site does not require secrets to build or run. Add variables later if you integrate analytics, feature flags, or other services.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| Build fails on Node version | Set `NODE_VERSION=20` in Netlify env vars; confirm `.nvmrc` exists at repo root. |
| Every route 404 after drag-and-drop | Site is too large for manual upload (~70 MB, videos >10 MB each). Use **Option C** (Netlify CLI). |
| Wrong site or 404 on `/solutions/*` | Confirm `trailingSlash: true` in `next.config.mjs` and publish directory is `out`. |
| Stale assets after deploy | Hard refresh; check cache headers for `/_next/static/*`. |
| Old HTML still showing | Confirm DNS points to the new Netlify site and the old `dist` deploy is retired. |

## Useful links

- [Netlify Next.js docs](https://docs.netlify.com/frameworks/next-js/overview/)
- Demo / sign-in URLs: [`src/lib/links.ts`](./src/lib/links.ts)
