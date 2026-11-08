# ghosthikers-web

Website for Ghost Hikers, a monthly hiking group. Hike on the last Saturday of each month. Everyone welcome.

Stack: Next.js (App Router), TypeScript, Tailwind CSS, Zod, pnpm.

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

If `pnpm dev` fails on CSS with a Turbopack error, run `pnpm exec next dev --webpack`.

## How content works

Pages never read files or sheets. They call functions from `lib/content`:

| Function | Returns |
|---|---|
| `getSiteSettings()` | WhatsApp link, socials, contact email |
| `getNextHike()` | Soonest hike that is not done |
| `getUpcomingHikes()` | Later planned hikes |
| `getPastHikes({ limit })` | Done hikes, newest first |
| `getHike(slug)` | One hike |
| `getAlbum(slug)` | Photos for a hike. **Only photos with `consent: true`.** |

Behind these sits a provider. Pick one with `CONTENT_SOURCE` in `.env.local`:

- `file` (default): reads `content/*.json`. Values today are dummy data.
- `sheet`: reads a Google Sheet.

Every record is checked by Zod (`lib/content/schemas.ts`). A bad row fails the build and names the row and field.

### Use a Google Sheet

1. Make a sheet with three tabs: `hikes`, `photos`, `settings`.
2. Use the same column names as the JSON fields (`slug, title, date, ...`). Separate list values with `|`, for example `Water 2L | Snacks`. The `settings` tab has two columns: `key`, `value`.
3. For each tab: File > Share > Publish to web > pick the tab > CSV. Copy the link.
4. Copy `.env.example` to `.env.local`, set `CONTENT_SOURCE=sheet`, and paste the three links.

Edits show up within 5 minutes.

### Add a new source later (CMS, database)

Implement `ContentProvider` from `lib/content/types.ts`, then register it in `lib/content/index.ts`. No page changes.

## Folders

```
app/                 routes and pages
lib/content/         content layer (schemas, providers, public functions)
content/             dummy JSON data
public/photos/       placeholder image
```

## Next steps

See the road map: layout and nav, home, next hike, hike list and detail, join form, gallery, SEO, analytics, go live.
