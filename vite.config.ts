import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import postCssPxToRem from "postcss-pxtorem";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("swiper"),
        },
      },
    }),
    vitePluginForArco({
      style: "css",
    }),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      dirs: [
        "src/components",
        "src/custom-components/**/index.vue",
        "src/custom-schema-template/**/index.vue",
      ],
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  server: { host: "0.0.0.0" },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ["*"],
        }),
        tailwindcss,
      ],
    },
  },
});
