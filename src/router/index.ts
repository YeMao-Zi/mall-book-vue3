import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/preview",
    name: "preview",
    component: () => import("@/pages/preview/index.vue"),
    meta: {
      title: "预览",
    },
  },
  {
    // 不识别的路由自动跳首页
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes,
});

export default router;
