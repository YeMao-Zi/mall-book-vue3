import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginForArco({
      style: "css",
    }),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      dirs: ["src/custom-platform", "src/custom-schema-template/**/index.vue"],
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    dts({
      // 输出目录
      outDir: ["types"],
      // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
      staticImport: true,
      // 将所有的类型合并到一个文件中
      rollupTypes: true,
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
        silenceDeprecations: ["legacy-js-api", "color-functions"],
        api: "modern-compiler",
      },
    },
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      output: [
        {
          // 打包成 es module
          format: "es",
          // 重命名
          entryFileNames: "[name].js",
          // 打包目录和开发目录对应
          preserveModules: true,
          // 输出目录
          dir: "es",
          // 指定保留模块结构的根目录
          preserveModulesRoot: "src",
        },
        {
          // 打包成 commonjs
          format: "cjs",
          // 重命名
          entryFileNames: "[name].js",
          // 打包目录和开发目录对应
          preserveModules: true,
          // 输出目录
          dir: "lib",
          // 指定保留模块结构的根目录
          preserveModulesRoot: "src",
        },
      ],
    },
    lib: {
      entry: "./src/index.ts",
    },
  },
});
