import { z } from "zod";

/**
 * Schemas are the single source of truth for content shape.
 * Every provider (JSON file, Google Sheet, later a database) must
 * produce data that passes these. Pages never see unvalidated data.
 */

export const HIKE_TYPES = ["forest", "waterfall", "hill", "mountain"] as const;
export const INTENSITIES = ["chill", "moderate", "intense"] as const;
export const PACES = ["fast", "slow"] as const;
export const HIKE_STATUSES = ["planned", "open", "done"] as const;

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "use lowercase words joined by hyphens");

export const hikeSchema = z.object({
  slug,
  title: z.string().min(1),
  /** ISO date, e.g. 2026-11-28 */
  date: z.iso.date(),
  venue: z.string().min(1),
  region: z.string().min(1),
  type: z.enum(HIKE_TYPES),
  intensity: z.enum(INTENSITIES),
  paceOptions: z.array(z.enum(PACES)).min(1),
  distanceKm: z.coerce.number().positive(),
  elevationGainM: z.coerce.number().min(0),
  /** Cost per person. 0 means free. */
  cost: z.coerce.number().min(0),
  currency: z.string().length(3).default("KES"),
  meetingPoint: z.string().min(1),
  /** 24h time, e.g. 06:00 */
  meetingTime: z.string().regex(/^\d{2}:\d{2}$/, "use HH:MM"),
  gear: z.array(z.string()).default([]),
  status: z.enum(HIKE_STATUSES),
  coverImage: z.string().min(1),
  summary: z.string().min(1),
  /** Markdown write-up. Usually filled after the hike. */
  writeUp: z.string().optional(),
});

export const photoSchema = z.object({
  id: z.string().min(1),
  hikeSlug: slug,
  url: z.string().min(1),
  alt: z.string().min(1),
  /** Everyone shown in the photo agreed. The content layer drops photos where this is false. */
  consent: z.boolean(),
});

const optionalUrl = z.url().optional();

export const settingsSchema = z.object({
  siteName: z.string().min(1),
  tagline: z.string().min(1),
  whatsappInviteUrl: z.url(),
  contactEmail: z.email(),
  socials: z
    .object({
      instagram: optionalUrl,
      facebook: optionalUrl,
      tiktok: optionalUrl,
    })
    .default({}),
});

/** What the join form sends. Not content, but it lives with the other shapes. */
export const joinRequestSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  pace: z.enum([...PACES, "not-sure"]),
  experience: z.enum(["first-time", "some", "regular"]),
  source: z.string().trim().max(80).optional(),
  photoConsent: z.boolean(),
  /** Spam trap. Real people leave it empty. */
  website: z.string().max(0).optional(),
});

export type Hike = z.infer<typeof hikeSchema>;
export type Photo = z.infer<typeof photoSchema>;
export type Settings = z.infer<typeof settingsSchema>;
export type JoinRequest = z.infer<typeof joinRequestSchema>;
export type HikeType = (typeof HIKE_TYPES)[number];
export type Intensity = (typeof INTENSITIES)[number];
export type Pace = (typeof PACES)[number];
