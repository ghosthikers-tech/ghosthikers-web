import "server-only";
import Papa from "papaparse";
import { hikeSchema, photoSchema, settingsSchema } from "../schemas";
import type { ContentProvider } from "../types";
import { parseOne, parseRows } from "../validate";

/**
 * Reads a Google Sheet that is published as CSV.
 * In Google Sheets: File > Share > Publish to web > pick a tab > CSV.
 * Use one tab per kind: hikes, photos, settings. Copy each link into .env.local.
 * No API key needed. Edits show up after REVALIDATE_SECONDS.
 */
const REVALIDATE_SECONDS = 300;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}. Set it in .env.local (see .env.example).`);
  return value;
}

async function fetchRows(envName: string): Promise<Record<string, string>[]> {
  const url = requireEnv(envName);
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error(`Sheet request for ${envName} failed with status ${res.status}`);
  const parsed = Papa.parse<Record<string, string>>(await res.text(), {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim(),
  });
  return parsed.data;
}

/** Empty cell becomes undefined, so optional fields work. */
const cell = (v: string | undefined) => (v === undefined || v.trim() === "" ? undefined : v.trim());
/** Lists use a pipe: "Water 2L | Snacks | Hat" */
const list = (v: string | undefined) =>
  (cell(v) ?? "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
const bool = (v: string | undefined) => ["true", "yes", "y", "1"].includes((cell(v) ?? "").toLowerCase());

export const sheetProvider: ContentProvider = {
  async getHikes() {
    const rows = await fetchRows("SHEET_HIKES_CSV_URL");
    return parseRows(
      hikeSchema,
      rows.map((r) => ({
        slug: cell(r.slug),
        title: cell(r.title),
        date: cell(r.date),
        venue: cell(r.venue),
        region: cell(r.region),
        type: cell(r.type),
        intensity: cell(r.intensity),
        paceOptions: list(r.paceOptions),
        distanceKm: cell(r.distanceKm),
        elevationGainM: cell(r.elevationGainM),
        cost: cell(r.cost),
        currency: cell(r.currency),
        meetingPoint: cell(r.meetingPoint),
        meetingTime: cell(r.meetingTime),
        gear: list(r.gear),
        status: cell(r.status),
        coverImage: cell(r.coverImage),
        summary: cell(r.summary),
        writeUp: cell(r.writeUp),
      })),
      "hike",
    );
  },

  async getPhotos() {
    const rows = await fetchRows("SHEET_PHOTOS_CSV_URL");
    return parseRows(
      photoSchema,
      rows.map((r) => ({
        id: cell(r.id),
        hikeSlug: cell(r.hikeSlug),
        url: cell(r.url),
        alt: cell(r.alt),
        consent: bool(r.consent),
      })),
      "photo",
    );
  },

  /** The settings tab has two columns: key, value. */
  async getSettings() {
    const rows = await fetchRows("SHEET_SETTINGS_CSV_URL");
    const kv = Object.fromEntries(rows.map((r) => [cell(r.key) ?? "", cell(r.value)]));
    return parseOne(
      settingsSchema,
      {
        siteName: kv.siteName,
        tagline: kv.tagline,
        whatsappInviteUrl: kv.whatsappInviteUrl,
        contactEmail: kv.contactEmail,
        socials: {
          instagram: kv.instagram,
          facebook: kv.facebook,
          tiktok: kv.tiktok,
        },
      },
      "settings",
    );
  },
};
