// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://dh9gmb.github.io/",
  base: "/balefire/",
  integrations: [
    starlight({
      plugins: [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnRelativeLinks: false,
        }),
      ],
      title: "Balefire",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Detection tools",
          autogenerate: { directory: "censorship" },
        },
        {
          label: "Blocking types",
          autogenerate: { directory: "blocking" },
        },
      ],
    }),
  ],
});
