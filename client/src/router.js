import { createWebHistory, createRouter } from "vue-router";
import UserService from "./services/user"

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
    path: "/fight",
    name: "fight",
    component: () => import("./components/Fight-component")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("./components/Profile-component")
  },
  {
    path: "/enemies",
    name: "enemies",
    component: () => import("./components/Enemies-component")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/signin', '/signup', '/'];
  const userPages = ['/profile', '/fight'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  const adminRequired = !userPages.includes(to.path);
  let isAdmin

  UserService.getAdminBoard().then( () => {
    isAdmin = true
    if (authRequired) {
      if (!loggedIn) {
        next('/signin')
      } else {
        if (adminRequired && !isAdmin) {
          next('/')
        } else {
          next()
        }
      }
    } else {
      next()
    }
  }, () => {
    isAdmin = false
    if (authRequired) {
      if (!loggedIn) {
        next('/signin')
      } else {
        if (adminRequired && !isAdmin) {
          next('/')
        } else {
          next()
        }
      }
    } else {
      next()
    }
  })
});

export default router;