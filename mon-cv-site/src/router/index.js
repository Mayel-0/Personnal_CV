import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: () => import("../views/Presentation.vue") },
    { path: "/projet", name: "Projet", component: () => import("../views/Projet.vue") },
    { path: "/CV", name: "CV", component: () => import("../views/CV.vue") },
  ],
});

export default router;
