import { createRouter, createWebHashHistory } from "vue-router";
import AuthLayout from "@/components/layouts/AuthLayout.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Login from "@/views/LoginView.vue";
import Home from "@/views/HomeView.vue";
// area de componente social
import HomeSocial from "@/views/ComSocial/HomeSocialView.vue";
import FormVisita from "@/views/ComSocial/FormVisita.vue";
import FormAsistencia from "@/views/ComSocial/FormAsistencia.vue";
import FormVerificacionPersonal from "@/views/ComSocial/FormVerificacionPersonal.vue";
// area de componente tecnico
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
      // inicio componente social
      {
        path: "/comsocial",
        name: "HomeSocial",
        component: HomeSocial,
      },
      {
        path: "/comsocial/formvisita",
        name: "FormVisita",
        component: FormVisita,
      },
      {
        path: "/comsocial/formasistencia",
        name: "FormAsistencia",
        component: FormAsistencia,
      },
      {
        path: "/comsocial/form-verificacion-personal",
        name: "FormVerificacionPersonal",
        component: FormVerificacionPersonal,
      },
      // inicio componente tecnico
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
