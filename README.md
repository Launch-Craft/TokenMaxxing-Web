# TokenMaxxing Website

The marketing **landing page** — a single page whose job is "Download the
application". Standalone repo (deploy on its own, e.g. Vercel/Netlify).

## Stack
Next.js 14 (App Router) · React 18 · Tailwind CSS · TypeScript

## Run
```bash
cp .env.example .env.local   # point at the backend
npm install
npm run dev                  # http://localhost:3000
# or
npm run build && npm start
```

## Config
| Var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Backend base URL (default `http://localhost:8787`) |
| `NEXT_PUBLIC_DOWNLOAD_FALLBACK` | Download link used if the backend is unreachable |

The page calls the backend's `GET /v1/releases/latest` (OS-aware download button)
and `GET /v1/stats/public` (live hero stats), and falls back gracefully when the
backend is down — so the landing page always renders.

> Note: `next@14.2.18` has 2 transitive `npm audit` advisories. Bump Next
> deliberately when convenient (avoid `npm audit fix --force`).
