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

Open [http://localhost:3000](http://localhost:3000) and spot-check `/`, `/results`, `/terms`, and `/privacy`.

## Option A: Git deploy (recommended)

1. Push this repo to your Git provider.
2. In Netlify: **Add new site** → **Import an existing project** → select the repo.
3. Confirm Netlify reads settings from `netlify.toml`:

   | Setting | Value |
   | --- | --- |
   | Base directory | *(leave empty — repo root)* |
   | Build command | `npm run build` |
   | Publish directory | `.next` |
   | Plugin | `@netlify/plugin-nextjs` |

4. Optional: set **Environment variable** `NODE_VERSION` = `20` (Netlify also reads `.nvmrc`).
5. Deploy. Production URL appears when the build succeeds.

### Custom domain

1. Site settings → **Domain management** → **Add a domain** (e.g. `medisight.ai`).
2. Update DNS at your registrar per Netlify’s instructions.
3. Enable HTTPS (automatic once DNS propagates).

### Preview deploys

Netlify builds preview URLs for pull requests by default. No extra config required.

## Option B: Netlify CLI

```bash
npm install -g netlify-cli
cd /path/to/medisight-website_v2
netlify login
netlify init
netlify deploy --build --prod
```

Use `netlify deploy --build` (without `--prod`) for a draft URL first.

## Migrating from the old static site

If an existing Netlify site published the legacy `dist/` HTML build:

- Replace its build settings with the table above, **or**
- Create a new site and point `medisight.ai` DNS to it.

Legacy URL redirects are configured in `netlify.toml`:

- `/index.html` → `/`
- `/terms.html` → `/terms`
- `/privacy.html` → `/privacy`

## Environment variables

The marketing site does not require secrets to build or run. Add variables later if you integrate analytics, feature flags, or other services.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| Build fails on Node version | Set `NODE_VERSION=20` in Netlify env vars; confirm `.nvmrc` exists at repo root. |
| Wrong site or 404 on routes | Ensure `@netlify/plugin-nextjs` is enabled (declared in `netlify.toml`). |
| Stale assets after deploy | Hard refresh; check cache headers for `/_next/static/*`. |
| Old HTML still showing | Confirm DNS points to the new Netlify site and the old `dist` deploy is retired. |

## Useful links

- [Netlify Next.js docs](https://docs.netlify.com/frameworks/next-js/overview/)
- Demo / sign-in URLs: [`src/lib/links.ts`](./src/lib/links.ts)
