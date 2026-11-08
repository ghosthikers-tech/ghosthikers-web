import type { Hike, Photo, Settings } from "./schemas";

/**
 * A provider returns validated raw content. It knows where data lives.
 * It does NOT apply site rules (consent, "next hike", sorting).
 * Those rules live once, in index.ts.
 *
 * To add a source (CMS, database), implement this and register it in index.ts.
 */
export interface ContentProvider {
  getHikes(): Promise<Hike[]>;
  getPhotos(): Promise<Photo[]>;
  getSettings(): Promise<Settings>;
}
