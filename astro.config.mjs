import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile } from "node:fs/promises";
import { relative } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import relativeLinks from "astro-relative-links";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const lastmodCache = new Map();

function getRouteFile(pathname) {
  const route = pathname.replace(/^\/|\/$/g, "") || "index";
  const routeUrl = new URL(`./src/pages/${route}.astro`, import.meta.url);

  if (existsSync(routeUrl)) {
    return routeUrl;
  }

  if (pathname.startsWith("/referenzen/")) {
    return new URL("./src/pages/referenzen/[slug].astro", import.meta.url);
  }

  return undefined;
}

function getGitLastmod(fileUrl) {
  const filePath = fileURLToPath(fileUrl);
  const relativeFilePath = relative(rootDir, filePath);

  if (!lastmodCache.has(relativeFilePath)) {
    try {
      const lastmod = execFileSync(
        "git",
        ["log", "-1", "--format=%cI", "--", relativeFilePath],
        { cwd: rootDir, encoding: "utf8" }
      ).trim();

      lastmodCache.set(relativeFilePath, lastmod || undefined);
    } catch {
      lastmodCache.set(relativeFilePath, undefined);
    }
  }

  return lastmodCache.get(relativeFilePath);
}

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
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const routeFile = getRouteFile(new URL(item.url).pathname);
        const lastmod = routeFile && getGitLastmod(routeFile);

        if (lastmod) {
          item.lastmod = lastmod;
        }

        return item;
      }
    }),
    relativeLinks(),
    sitemapXmlAlias()
  ]
});
