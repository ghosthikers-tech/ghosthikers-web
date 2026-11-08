import "server-only";
import { fileProvider } from "./providers/file";
import { sheetProvider } from "./providers/sheet";
import type { Hike, Photo, Settings } from "./schemas";
import type { ContentProvider } from "./types";

/**
 * The only module pages import for content.
 * Switch source with CONTENT_SOURCE=file|sheet. Default is file.
 */

export type { Hike, Photo, Settings } from "./schemas";

const TIME_ZONE = "Africa/Nairobi";

function pickProvider(): ContentProvider {
  const source = process.env.CONTENT_SOURCE ?? "file";
  if (source === "file") return fileProvider;
  if (source === "sheet") return sheetProvider;
  throw new Error(`Unknown CONTENT_SOURCE "${source}". Use "file" or "sheet".`);
}

/** Today as YYYY-MM-DD in the group's time zone. ISO dates compare as plain strings. */
function today(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date());
}

export async function getSiteSettings(): Promise<Settings> {
  return pickProvider().getSettings();
}

/** All hikes, soonest first. */
export async function getAllHikes(): Promise<Hike[]> {
  const hikes = await pickProvider().getHikes();
  return hikes.toSorted((a, b) => a.date.localeCompare(b.date));
}

/** The soonest hike that has not happened and is not marked done. */
export async function getNextHike(): Promise<Hike | null> {
  const now = today();
  const hikes = await getAllHikes();
  return hikes.find((h) => h.status !== "done" && h.date >= now) ?? null;
}

/** Upcoming hikes after the next one, soonest first. */
export async function getUpcomingHikes(): Promise<Hike[]> {
  const next = await getNextHike();
  const now = today();
  const hikes = await getAllHikes();
  return hikes.filter((h) => h.status !== "done" && h.date >= now && h.slug !== next?.slug);
}

/** Finished hikes, newest first. Pass `limit` for a short list. */
export async function getPastHikes(opts: { limit?: number } = {}): Promise<Hike[]> {
  const now = today();
  const hikes = await getAllHikes();
  const past = hikes.filter((h) => h.status === "done" || h.date < now).toReversed();
  return opts.limit ? past.slice(0, opts.limit) : past;
}

export async function getHike(slug: string): Promise<Hike | null> {
  const hikes = await getAllHikes();
  return hikes.find((h) => h.slug === slug) ?? null;
}

/**
 * Photos for one hike. Only photos with consent come out.
 * This is the one gate. No page can show a photo that skips it.
 */
export async function getAlbum(hikeSlug: string): Promise<Photo[]> {
  const photos = await pickProvider().getPhotos();
  return photos.filter((p) => p.hikeSlug === hikeSlug && p.consent);
}
