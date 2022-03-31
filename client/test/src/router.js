import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    name: "homepage",
    component: () => import("./App")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("./components/SignIn")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("./components/SignUp")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("./components/Profile-component")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;