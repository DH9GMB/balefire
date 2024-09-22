// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/DH9GMB/balefire",
  integrations: [
    starlight({
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
          label: "Censorship detection",
          autogenerate: { directory: "censorship" },
        },
      ],
    }),
  ],
});
