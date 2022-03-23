import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/Home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;