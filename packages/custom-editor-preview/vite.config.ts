import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
// import { vitePluginForMcEditor } from "@mobilecustom/editor";
// console.log(vitePluginForMcEditor,'vitePluginForMcEditor')
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    vitePluginForArco({
      style: "css",
    }),
    // vitePluginForMcEditor(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
