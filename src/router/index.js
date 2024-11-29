import { createRouter, createWebHashHistory } from "vue-router";
import AuthLayout from "@/components/layouts/AuthLayout.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Login from "@/views/LoginView.vue";
import Home from "@/views/HomeView.vue";
import HomeSocial from "@/views/ComSocial/HomeSocialView.vue";
import HomeTecnico from "@/views/ComTecnico/HomeTecnicoView.vue";

const routes = [
  {
    path: "/login",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/home",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/comsocial",
        name: "HomeSocial",
        component: HomeSocial,
      },
      {
        path: "/comtecnico",
        name: "HomeTecnico",
        component: HomeTecnico,
      },
    ],
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  if (!token && to.path !== "/login") {
    next("/login");
    console.log("No hay token, redirigiendo al login");
  } else {
    next();
  }
});

export default router;
