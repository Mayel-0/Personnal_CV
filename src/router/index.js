import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Langage", component: () => import("../views/Langage.vue") },
    { path: "/projet", name: "Projet", component: () => import("../views/Projet.vue") },
    { path: "/contacts", name: "Contacts", component: () => import("../views/Contacts.vue") },
    {
      path: "/:lang/home",
      name: "Home",
      component: () => import("../views/Presentation.vue"),
      props: true,
    },
  ],
});

export default router;
