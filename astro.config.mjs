import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: "https://dilewe.de",
  integrations: [react(), sitemap(), relativeLinks()]
});