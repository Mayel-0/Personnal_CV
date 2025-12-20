import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/projet",
      name: "Projet",
      component: () => import("../views/Projet.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      props: true,
    },
  ],
});

export default router;
