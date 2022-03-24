import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/fight",
    name: "fight",
    component: () => import("./components/Fight-component")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;