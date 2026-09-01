# Medisight Website

Marketing site for Medisight — an agentic clinical platform for healthcare.

## Requirements

- **Node.js 20** (see `.nvmrc`)
- npm (comes with Node)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. If port 3000 is busy, Next.js will pick the next available port and print the URL in the terminal.

## Production build

```bash
npm run build
npm run start
```

## Pages to spot-check

| Route | Description |
| --- | --- |
| `/` | Home |
| `/solutions/diagnostics` | Diagnostics solution |
| `/solutions/operations` | Operations solution |
| `/evidence` | Research publications, benchmarks & case studies |
| `/contact` | Contact / demo request |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Project structure

```
medisight-website_v2/
├── public/          Static assets (images, videos, logos, favicons)
├── src/
│   ├── app/         Next.js App Router pages
│   ├── components/  React components
│   └── lib/         Shared data and config
├── package.json
└── next.config.mjs
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) for Netlify deployment instructions.

## External links

Demo booking and sign-in URLs are configured in `src/lib/links.ts`.
