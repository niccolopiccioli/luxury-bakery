#!/usr/bin/env node
/**
 * Full-site smoke test: routes + image optimizer
 */
const BASE = process.env.BASE_URL || "http://localhost:3001";

const routes = [
  "/",
  "/it",
  "/en",
  "/fr",
  "/es",
  "/it/chi-siamo",
  "/it/creazioni",
  "/it/creazioni/saint-honore",
  "/it/galleria",
  "/it/contatti",
  "/it/prenotazioni",
  "/it/faq",
  "/en/chi-siamo",
  "/en/creazioni",
  "/en/galleria",
  "/en/contatti",
  "/en/prenotazioni",
  "/en/faq",
];

const { images } = await import("../src/lib/images.ts");
const imageUrls = Object.values(images);

let failed = false;

console.log("=== Route checks ===");
for (const path of routes) {
  const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
  const ok = res.status === 200 || (path === "/" && res.status === 307);
  if (!ok) {
    failed = true;
    console.log(`FAIL ${res.status} ${path}`);
  } else {
    console.log(`OK   ${res.status} ${path}`);
  }
}

console.log("\n=== Direct image checks ===");
for (const url of imageUrls) {
  const res = await fetch(url, { method: "HEAD" });
  if (res.status !== 200) {
    failed = true;
    console.log(`FAIL ${res.status} ${url}`);
  }
}

console.log("\n=== Next.js image optimizer checks ===");
for (const url of imageUrls.slice(0, 8)) {
  const encoded = encodeURIComponent(url);
  const res = await fetch(`${BASE}/_next/image?url=${encoded}&w=640&q=75`);
  if (res.status !== 200) {
    failed = true;
    console.log(`FAIL ${res.status} optimizer ${url.slice(0, 60)}...`);
  }
}
console.log(`Checked ${Math.min(8, imageUrls.length)} optimizer URLs`);

console.log("\n=== SEO endpoints ===");
for (const path of ["/sitemap.xml", "/robots.txt"]) {
  const res = await fetch(`${BASE}${path}`);
  if (res.status !== 200) {
    failed = true;
    console.log(`FAIL ${res.status} ${path}`);
  } else {
    console.log(`OK   ${res.status} ${path}`);
  }
}

if (failed) {
  console.error("\nSome checks FAILED");
  process.exit(1);
}
console.log("\nAll checks passed");
