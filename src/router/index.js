import { createRouter, createWebHashHistory } from "vue-router";
import Draw from "@/views/draw.vue";

const routes = [
  {
    path: "/draw",
    name: "Draw",
    component: Draw,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
