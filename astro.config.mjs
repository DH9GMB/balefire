// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightLinksValidator()],
      title: "Balefire: Censorship Research",
      social: {
        github: "https://github.com/DH9GMB/balefire",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en", // lang is required for root locales
        },
        "ru-RU": {
          label: "Русский",
        },
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
