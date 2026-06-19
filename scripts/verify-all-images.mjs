import { images } from "../src/lib/images.ts";

const entries = Object.entries(images);

for (const [name, url] of entries) {
  const r = await fetch(url, { method: "HEAD" });
  console.log(`${r.status}\t${name}`);
}
