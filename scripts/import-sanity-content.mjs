import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "Set SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local before importing content.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-02-19",
  token,
  useCdn: false,
});

for (const [locale, filename] of [
  ["en", "en.json"],
  ["cs", "cz.json"],
]) {
  const json = await readFile(resolve("locales", filename), "utf8");
  const content = JSON.parse(json);

  await client.createOrReplace({
    _id: `siteContent-${locale}`,
    _type: "siteContent",
    locale,
    content,
  });
  console.log(`Imported ${locale} website content.`);
}
