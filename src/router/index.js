import { createRouter, createWebHashHistory } from "vue-router";
import AuthLayout from "@/components/layouts/AuthLayout.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Login from "@/views/LoginView.vue";
import Home from "@/views/HomeView.vue";

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
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      // Otras rutas de tu aplicación
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
