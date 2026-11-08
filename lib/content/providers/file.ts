import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { hikeSchema, photoSchema, settingsSchema } from "../schemas";
import type { ContentProvider } from "../types";
import { parseOne, parseRows } from "../validate";

const CONTENT_DIR = path.join(process.cwd(), "content");

async function readJson(file: string): Promise<unknown> {
  const raw = await readFile(path.join(CONTENT_DIR, file), "utf8");
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`content/${file} is not valid JSON`);
  }
}

export const fileProvider: ContentProvider = {
  async getHikes() {
    return parseRows(hikeSchema, (await readJson("hikes.json")) as unknown[], "hike");
  },
  async getPhotos() {
    return parseRows(photoSchema, (await readJson("photos.json")) as unknown[], "photo");
  },
  async getSettings() {
    return parseOne(settingsSchema, await readJson("settings.json"), "settings");
  },
};
