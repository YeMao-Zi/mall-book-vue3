import type { Plugin } from "vite";
import tailwindcss from "tailwindcss";

export function vitePluginForMcEditor(): Plugin {
  return {
    name: "vitePluginForMcEditor",
    config(userConfig, env) {
      return {
        css: {
          postcss: {
            plugins: [
              tailwindcss, // 启用 Tailwind CSS 和 px to rem 转换
            ],
          },
        },
      };
    },
  };
}
