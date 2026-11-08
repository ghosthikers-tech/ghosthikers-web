import { getAlbum, getNextHike, getPastHikes, getSiteSettings } from "@/lib/content";

/**
 * Temporary page. It proves pages can read content only through the layer.
 * Replace it with the real home page in week 3.
 */
export default async function Home() {
  const [settings, next, past] = await Promise.all([getSiteSettings(), getNextHike(), getPastHikes()]);
  const albums = await Promise.all(past.map(async (h) => ({ slug: h.slug, photos: await getAlbum(h.slug) })));

  return (
    <main className="mx-auto w-full max-w-2xl space-y-8 p-6">
      <header>
        <h1 className="text-3xl font-semibold">{settings.siteName}</h1>
        <p className="text-zinc-600">{settings.tagline}</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Next hike</h2>
        {next ? (
          <p>
            {next.title} on {next.date} at {next.venue} ({next.intensity}, {next.paceOptions.join(" / ")}).{" "}
            {next.cost} {next.currency}.
          </p>
        ) : (
          <p>No hike planned yet.</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold">Past hikes</h2>
        <ul className="list-disc pl-5">
          {past.map((h) => (
            <li key={h.slug}>
              {h.title} ({h.date}), {albums.find((a) => a.slug === h.slug)?.photos.length ?? 0} consented photos
            </li>
          ))}
        </ul>
      </section>

      <a className="inline-block rounded-full bg-green-700 px-5 py-2 text-white" href={settings.whatsappInviteUrl}>
        Join on WhatsApp
      </a>
    </main>
  );
}
