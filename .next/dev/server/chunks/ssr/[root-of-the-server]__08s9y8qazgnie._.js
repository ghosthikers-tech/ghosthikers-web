module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@7.29.13_@types+node@20.19.43_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/index.ts [app-rsc] (ecmascript)");
;
;
async function Home() {
    const [settings, next, past] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteSettings"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextHike"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPastHikes"])()
    ]);
    const albums = await Promise.all(past.map(async (h)=>({
            slug: h.slug,
            photos: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAlbum"])(h.slug)
        })));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto w-full max-w-2xl space-y-8 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-semibold",
                        children: settings.siteName
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-600",
                        children: settings.tagline
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold",
                        children: "Next hike"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            next.title,
                            " on ",
                            next.date,
                            " at ",
                            next.venue,
                            " (",
                            next.intensity,
                            ", ",
                            next.paceOptions.join(" / "),
                            ").",
                            " ",
                            next.cost,
                            " ",
                            next.currency,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No hike planned yet."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold",
                        children: "Past hikes"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-5",
                        children: past.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    h.title,
                                    " (",
                                    h.date,
                                    "), ",
                                    albums.find((a)=>a.slug === h.slug)?.photos.length ?? 0,
                                    " consented photos"
                                ]
                            }, h.slug, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$7$2e$29$2e$13_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "inline-block rounded-full bg-green-700 px-5 py-2 text-white",
                href: settings.whatsappInviteUrl,
                children: "Join on WhatsApp"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/content/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlbum",
    ()=>getAlbum,
    "getAllHikes",
    ()=>getAllHikes,
    "getHike",
    ()=>getHike,
    "getNextHike",
    ()=>getNextHike,
    "getPastHikes",
    ()=>getPastHikes,
    "getSiteSettings",
    ()=>getSiteSettings,
    "getUpcomingHikes",
    ()=>getUpcomingHikes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$providers$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/providers/file.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$providers$2f$sheet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/providers/sheet.ts [app-rsc] (ecmascript)");
;
;
;
const TIME_ZONE = "Africa/Nairobi";
function pickProvider() {
    const source = process.env.CONTENT_SOURCE ?? "file";
    if (source === "file") return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$providers$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fileProvider"];
    if (source === "sheet") return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$providers$2f$sheet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sheetProvider"];
    throw new Error(`Unknown CONTENT_SOURCE "${source}". Use "file" or "sheet".`);
}
/** Today as YYYY-MM-DD in the group's time zone. ISO dates compare as plain strings. */ function today() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: TIME_ZONE
    }).format(new Date());
}
async function getSiteSettings() {
    return pickProvider().getSettings();
}
async function getAllHikes() {
    const hikes = await pickProvider().getHikes();
    return hikes.toSorted((a, b)=>a.date.localeCompare(b.date));
}
async function getNextHike() {
    const now = today();
    const hikes = await getAllHikes();
    return hikes.find((h)=>h.status !== "done" && h.date >= now) ?? null;
}
async function getUpcomingHikes() {
    const next = await getNextHike();
    const now = today();
    const hikes = await getAllHikes();
    return hikes.filter((h)=>h.status !== "done" && h.date >= now && h.slug !== next?.slug);
}
async function getPastHikes(opts = {}) {
    const now = today();
    const hikes = await getAllHikes();
    const past = hikes.filter((h)=>h.status === "done" || h.date < now).toReversed();
    return opts.limit ? past.slice(0, opts.limit) : past;
}
async function getHike(slug) {
    const hikes = await getAllHikes();
    return hikes.find((h)=>h.slug === slug) ?? null;
}
async function getAlbum(hikeSlug) {
    const photos = await pickProvider().getPhotos();
    return photos.filter((p)=>p.hikeSlug === hikeSlug && p.consent);
}
}),
"[project]/lib/content/providers/file.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileProvider",
    ()=>fileProvider
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/validate.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const CONTENT_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "content");
async function readJson(file) {
    const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, file), "utf8");
    try {
        return JSON.parse(raw);
    } catch  {
        throw new Error(`content/${file} is not valid JSON`);
    }
}
const fileProvider = {
    async getHikes () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hikeSchema"], await readJson("hikes.json"), "hike");
    },
    async getPhotos () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["photoSchema"], await readJson("photos.json"), "photo");
    },
    async getSettings () {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseOne"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["settingsSchema"], await readJson("settings.json"), "settings");
    }
};
}),
"[project]/lib/content/providers/sheet.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sheetProvider",
    ()=>sheetProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$7$2e$0$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/papaparse@5.7.0/node_modules/papaparse/papaparse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/validate.ts [app-rsc] (ecmascript)");
;
;
;
;
/**
 * Reads a Google Sheet that is published as CSV.
 * In Google Sheets: File > Share > Publish to web > pick a tab > CSV.
 * Use one tab per kind: hikes, photos, settings. Copy each link into .env.local.
 * No API key needed. Edits show up after REVALIDATE_SECONDS.
 */ const REVALIDATE_SECONDS = 300;
function requireEnv(name) {
    const value = process.env[name];
    if (!value) throw new Error(`Missing ${name}. Set it in .env.local (see .env.example).`);
    return value;
}
async function fetchRows(envName) {
    const url = requireEnv(envName);
    const res = await fetch(url, {
        next: {
            revalidate: REVALIDATE_SECONDS
        }
    });
    if (!res.ok) throw new Error(`Sheet request for ${envName} failed with status ${res.status}`);
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$7$2e$0$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].parse(await res.text(), {
        header: true,
        skipEmptyLines: true,
        transformHeader: (h)=>h.trim()
    });
    return parsed.data;
}
/** Empty cell becomes undefined, so optional fields work. */ const cell = (v)=>v === undefined || v.trim() === "" ? undefined : v.trim();
/** Lists use a pipe: "Water 2L | Snacks | Hat" */ const list = (v)=>(cell(v) ?? "").split("|").map((s)=>s.trim()).filter(Boolean);
const bool = (v)=>[
        "true",
        "yes",
        "y",
        "1"
    ].includes((cell(v) ?? "").toLowerCase());
const sheetProvider = {
    async getHikes () {
        const rows = await fetchRows("SHEET_HIKES_CSV_URL");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hikeSchema"], rows.map((r)=>({
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
                writeUp: cell(r.writeUp)
            })), "hike");
    },
    async getPhotos () {
        const rows = await fetchRows("SHEET_PHOTOS_CSV_URL");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRows"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["photoSchema"], rows.map((r)=>({
                id: cell(r.id),
                hikeSlug: cell(r.hikeSlug),
                url: cell(r.url),
                alt: cell(r.alt),
                consent: bool(r.consent)
            })), "photo");
    },
    /** The settings tab has two columns: key, value. */ async getSettings () {
        const rows = await fetchRows("SHEET_SETTINGS_CSV_URL");
        const kv = Object.fromEntries(rows.map((r)=>[
                cell(r.key) ?? "",
                cell(r.value)
            ]));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$validate$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseOne"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["settingsSchema"], {
            siteName: kv.siteName,
            tagline: kv.tagline,
            whatsappInviteUrl: kv.whatsappInviteUrl,
            contactEmail: kv.contactEmail,
            socials: {
                instagram: kv.instagram,
                facebook: kv.facebook,
                tiktok: kv.tiktok
            }
        }, "settings");
    }
};
}),
"[project]/lib/content/schemas.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HIKE_STATUSES",
    ()=>HIKE_STATUSES,
    "HIKE_TYPES",
    ()=>HIKE_TYPES,
    "INTENSITIES",
    ()=>INTENSITIES,
    "PACES",
    ()=>PACES,
    "hikeSchema",
    ()=>hikeSchema,
    "joinRequestSchema",
    ()=>joinRequestSchema,
    "photoSchema",
    ()=>photoSchema,
    "settingsSchema",
    ()=>settingsSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .iso>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .coerce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$url$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .url>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .email>");
;
const HIKE_TYPES = [
    "forest",
    "waterfall",
    "hill",
    "mountain"
];
const INTENSITIES = [
    "chill",
    "moderate",
    "intense"
];
const PACES = [
    "fast",
    "slow"
];
const HIKE_STATUSES = [
    "planned",
    "open",
    "done"
];
const slug = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "use lowercase words joined by hyphens");
const hikeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    slug,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    /** ISO date, e.g. 2026-11-28 */ date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.date(),
    venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    region: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(HIKE_TYPES),
    intensity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(INTENSITIES),
    paceOptions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(PACES)).min(1),
    distanceKm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().positive(),
    elevationGainM: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().min(0),
    /** Cost per person. 0 means free. */ cost: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$coerce$3e$__["z"].coerce.number().min(0),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().length(3).default("KES"),
    meetingPoint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    /** 24h time, e.g. 06:00 */ meetingTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^\d{2}:\d{2}$/, "use HH:MM"),
    gear: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string()).default([]),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(HIKE_STATUSES),
    coverImage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    /** Markdown write-up. Usually filled after the hike. */ writeUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().optional()
});
const photoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    hikeSlug: slug,
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    /** Everyone shown in the photo agreed. The content layer drops photos where this is false. */ consent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean()
});
const optionalUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$url$3e$__["z"].url().optional();
const settingsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    siteName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    tagline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1),
    whatsappInviteUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$url$3e$__["z"].url(),
    contactEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email(),
    socials: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        instagram: optionalUrl,
        facebook: optionalUrl,
        tiktok: optionalUrl
    }).default({})
});
const joinRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(80),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(7).max(20),
    pace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        ...PACES,
        "not-sure"
    ]),
    experience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        "first-time",
        "some",
        "regular"
    ]),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(80).optional(),
    photoConsent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
    /** Spam trap. Real people leave it empty. */ website: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(0).optional()
});
}),
"[project]/lib/content/validate.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseOne",
    ()=>parseOne,
    "parseRows",
    ()=>parseRows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$prettifyError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .prettifyError>");
;
function parseRows(schema, rows, label) {
    return rows.map((row, i)=>{
        const result = schema.safeParse(row);
        if (!result.success) {
            throw new Error(`Bad ${label} at row ${i + 1}:\n${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$prettifyError$3e$__["z"].prettifyError(result.error)}`);
        }
        return result.data;
    });
}
function parseOne(schema, value, label) {
    const result = schema.safeParse(value);
    if (!result.success) {
        throw new Error(`Bad ${label}:\n${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$prettifyError$3e$__["z"].prettifyError(result.error)}`);
    }
    return result.data;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08s9y8qazgnie._.js.map