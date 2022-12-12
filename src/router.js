import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "@/components/HomePage.vue";
// import AboutPage from "@/components/AboutPage.vue";
// import ContactPage from "@/components/ContactPage.vue";
const routes = [
  {
    path: "/",
    name: "",
    // component: HomePage,
    component: () => import("@/components/HomePage.vue"),
  },
  {
    path: "/about",
    name: "",
    // component: AboutPage,
    component: () => import("@/components/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "",
    // component: ContactPage,
    component: () => import("@/components/ContactPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
