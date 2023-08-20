import { vitePreprocess } from "@sveltejs/kit/vite";

import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      paths: {
        base: "/"
      },
    }),
  },

  preprocess: [
    vitePreprocess({
      babel: {
        plugins: ['@babel/plugin-proposal-decorators', { legacy: true }]
      }
    })
  ],
};

export default config;
