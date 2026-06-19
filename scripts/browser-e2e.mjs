#!/usr/bin/env node
/**
 * Browser E2E: visit all routes, collect console errors, test navigation.
 */
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3001";
const LOCALES = ["it", "en", "fr", "es"];
const ROUTES = ["", "/chi-siamo", "/creazioni", "/galleria", "/contatti", "/prenotazioni"];

const errors = [];
const failedRequests = [];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const text = msg.text();
      if (!text.includes("favicon")) {
        errors.push({ url: page.url(), text });
      }
    }
  });

  page.on("requestfailed", (req) => {
    const url = req.url();
    if (!url.includes("favicon")) {
      failedRequests.push({ page: page.url(), url, failure: req.failure()?.errorText });
    }
  });

  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      const path = `/${locale}${route}`;
      const url = `${BASE}${path}`;
      process.stdout.write(`→ ${path} ... `);
      try {
        const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
        const status = resp?.status() ?? 0;
        if (status >= 400) {
          console.log(`FAIL HTTP ${status}`);
          errors.push({ url, text: `HTTP ${status}` });
        } else {
          await page.waitForTimeout(1500);
          console.log("OK");
        }
      } catch (e) {
        console.log(`FAIL ${e.message}`);
        errors.push({ url, text: e.message });
      }
    }
  }

  // Test client navigation it homepage → creazioni → galleria
  process.stdout.write("→ client nav /it → /it/creazioni → /it/galleria ... ");
  try {
    await page.goto(`${BASE}/it`, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
    await page.click('a[href="/it/creazioni"]');
    await page.waitForURL("**/it/creazioni**", { timeout: 10000 });
    await page.waitForTimeout(1000);
    await page.click('a[href="/it/galleria"]');
    await page.waitForURL("**/it/galleria**", { timeout: 10000 });
    await page.waitForTimeout(1000);
    console.log("OK");
  } catch (e) {
    console.log(`FAIL ${e.message}`);
    errors.push({ url: "client-nav", text: e.message });
  }

  // Test 404
  process.stdout.write("→ 404 /it/nonexistent ... ");
  try {
    const resp = await page.goto(`${BASE}/it/nonexistent-page-xyz`, { waitUntil: "networkidle" });
    const status = resp?.status() ?? 0;
    console.log(status === 404 ? "OK (404)" : `WARN HTTP ${status}`);
  } catch (e) {
    console.log(`FAIL ${e.message}`);
  }

  await browser.close();

  console.log("\n--- Console errors ---");
  if (errors.length === 0) {
    console.log("None");
  } else {
    for (const e of errors) {
      console.log(`[${e.url}] ${e.text}`);
    }
  }

  console.log("\n--- Failed requests ---");
  if (failedRequests.length === 0) {
    console.log("None");
  } else {
    for (const r of failedRequests) {
      console.log(`[${r.page}] ${r.url} — ${r.failure}`);
    }
  }

  process.exit(errors.length > 0 || failedRequests.length > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
