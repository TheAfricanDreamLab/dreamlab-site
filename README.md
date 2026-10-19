# dreamlab-site

The public site of The African Dream Lab, a learning management platform born from TADIS, the African Dream Network International
Summit. Built with Astro as static pages, sharing its design tokens and fonts with [dreamlab-web](../dreamlab-web).

| Page | What it covers |
| --- | --- |
| `/` | What the platform is, what's inside, who it's for, the TADIS story |
| `/programme` | The cohort programme: 100 credit hours over four phases, how courses work, the weekly rhythm |
| `/organisations` | Schools and academies, companies, content partners and sponsors |
| `/about` | TADIS, the Lab, and how we think about learning |
| `/apply` | How applications work; points to account creation until applications open |

Sign-in, sign-up and organisation set-up live in dreamlab-web. The site links to it through `PUBLIC_APP_URL`.

## Run locally

```bash
cp .env.example .env    # PUBLIC_APP_URL=http://localhost:3100 points at a local dreamlab-web
pnpm install
pnpm dev                # http://localhost:4321
pnpm build && pnpm preview
```

## Later

- Per-organisation public pages (`<slug>.theafricandreamlab.com`) and the online application flow arrive with admissions. They need
  server rendering and edge caching per tenant, which is when this site gains an adapter.
