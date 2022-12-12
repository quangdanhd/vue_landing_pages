import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "@/components/HomePage.vue";
// import AboutPage from "@/components/AboutPage.vue";
// import ContactPage from "@/components/ContactPage.vue";
const HomePage = () => import("@/components/HomePage.vue");
const AboutPage = () => import("@/components/AboutPage.vue");
const ContactPage = () => import("@/components/ContactPage.vue");
const routes = [
  {
    path: "/",
    name: "",
    component: HomePage,
  },
  {
    path: "/about",
    name: "",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "",
    component: ContactPage,
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
