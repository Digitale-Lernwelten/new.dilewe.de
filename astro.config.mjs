import { copyFile } from "node:fs/promises";
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import relativeLinks from "astro-relative-links";

function sitemapXmlAlias() {
  return {
    name: "sitemap-xml-alias",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        await copyFile(
          new URL("sitemap-0.xml", dir),
          new URL("sitemap.xml", dir)
        );
        logger.info("`sitemap.xml` created from `sitemap-0.xml`");
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://dilewe.de",
  integrations: [react(), sitemap(), relativeLinks(), sitemapXmlAlias()]
});
