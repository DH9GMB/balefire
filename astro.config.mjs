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
            { label: "DNS Hijacking", slug: "guides/dns-hijacking" },
            { label: "IP Blackhole", slug: "guides/ip-blackhole" },
            { label: "SNI Filtering", slug: "guides/sni-filtering" },
            { label: "Throttling", slug: "guides/throttling" },
            {
              label: "DPI Protocol Filtering",
              slug: "guides/dpi-protocol-filtering",
            },
            {
              label: "DPI Application Filtering",
              slug: "guides/dpi-application-filtering",
            },
            { label: "DPI Other", slug: "guides/dpi-other" },
            {
              label: "ISP Inner Filtering",
              slug: "guides/isp-inner-filtering",
            },
            {
              label: "ISP Incoming Traffic Filtering",
              slug: "guides/isp-incoming-traffic-filtering",
            },
            {
              label: "Transit ISP Filtering",
              slug: "guides/transit-isp-filtering",
            },
            {
              label: "State Level Incoming Traffic Filtering",
              slug: "guides/state-level-incoming-traffic-filtering",
            },
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
