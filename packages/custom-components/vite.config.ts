import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api", "color-functions"],
        api: "modern-compiler",
      },
    },
  },
  build: {
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", /\.css/, /\.scss/],
      output: [
        {
          exports: "named",
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
          exports: "named",
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
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("swiper"),
        },
      },
    }),
    dts({
      // 输出目录
      outDir: ["types"],
      // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
      staticImport: true,
      // 将所有的类型合并到一个文件中
      rollupTypes: true,
    }),
    // dts({
    //   // 输出目录
    //   outDir: "lib",
    //   // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
    //   staticImport: true,
    // }),
    // dts({
    //   // 输出目录
    //   outDir: "es",
    //   // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
    //   staticImport: true,
    // }),
  ],
});
