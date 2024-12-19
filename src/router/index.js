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
// #####################area de componente tecnico
// area de componente tecnico administrativos
import HomeTecnico from "@/views/ComTecnico/HomeTecnicoView.vue";
import FormEtapaAlistamiento from "@/views/ComTecnico/FormAdministrativos/FormEtapaAlistamiento.vue";
import FormEtapaOperacion from "@/views/ComTecnico/FormAdministrativos/FormEtapaOperacion.vue";
import FormSeguimientoEtiquetado from "@/views/ComTecnico/FormAdministrativos/FormSeguimientoEtiquetado.vue";
import FormCaracteristicasProductos from "@/views/ComTecnico/FormAdministrativos/FormCaracteristicasProductos.vue";
import FormMuestraPollo from "@/views/ComTecnico/FormAdministrativos/FormMuestraPollo.vue";
import FormMuestraRes from "@/views/ComTecnico/FormAdministrativos/FormMuestraRes.vue";
import FormMuestraCerdo from "@/views/ComTecnico/FormAdministrativos/FormMuestraCerdo.vue";
// area de componente tecnico supervisores
import FormSeguimientoLocal from "@/views/ComTecnico/FormSupervisores/FormSeguimientoLocal.vue";
import FormSeguimientoRotulado from "@/views/ComTecnico/FormSupervisores/FormSeguimientoRotulado.vue";
// area de componente tecnico general
import FormSPQR from "@/views/ComTecnico/FormGenerales/FormSPQR.vue";
// area de componente tecnico coordinadores
import FormVerificacionMateriaPrimaCCT from "@/views/ComTecnico/FormCoordinadores/FormVerificacionMateriaPrimaCCT.vue";
import FormVerificacionModalidadCCT from "@/views/ComTecnico/FormCoordinadores/FormVerificacionModalidadCCT.vue";
// ################################
// area de usuarios
import GridUsers from "@/views/Users/GridUsers.vue";
import FormUsers from "@/views/Users/FormUsers.vue";
// area de Reportes
import HomeReportes from "@/views/Reportes/HomeReportes.vue";
// area de galeria
import HomeGaleria from "@/views/Galeria/HomeGaleria.vue";

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
      {
        path: "/comtecnico/form-etapa-alistamiento",
        name: "FormEtapaAlistamiento",
        component: FormEtapaAlistamiento,
      },
      {
        path: "/comtecnico/form-etapa-operacion",
        name: "FormEtapaOperacion",
        component: FormEtapaOperacion,
      },
      {
        path: "/comtecnico/form-seguimiento-etiquetado",
        name: "FormSeguimientoEtiquetado",
        component: FormSeguimientoEtiquetado,
      },
      {
        path: "/comtecnico/form-seguimiento-rotulado",
        name: "FormSeguimientoRotulado",
        component: FormSeguimientoRotulado,
      },
      {
        path: "/comtecnico/form-caracteristicas-productos",
        name: "FormCaracteristicasProductos",
        component: FormCaracteristicasProductos,
      },
      {
        path: "/comtecnico/form-toma-muestra-pollo",
        name: "FormMuestraPollo",
        component: FormMuestraPollo,
      },
      {
        path: "/comtecnico/form-toma-muestra-res",
        name: "FormMuestraRes",
        component: FormMuestraRes,
      },
      {
        path: "/comtecnico/form-toma-muestra-cerdo",
        name: "FormMuestraCerdo",
        component: FormMuestraCerdo,
      },
      // area de componente tecnico coordinadores
      {
        path: "/comtecnico/form-verificacion-materia-prima-cct",
        name: "FormVerificacionMateriaPrimaCCT",
        component: FormVerificacionMateriaPrimaCCT,
      },
      {
        path: "/comtecnico/form-verificacion-modalidad-cct",
        name: "FormVerificacionModalidadCCT",
        component: FormVerificacionModalidadCCT,
      },
      // area de componente tecnico supervisores
      {
        path: "/comtecnico/form-seguimiento-local",
        name: "FormSeguimientoLocal",
        component: FormSeguimientoLocal,
      },
      {
        path: "/comtecnico/form-spqr",
        name: "FormSPQR",
        component: FormSPQR,
      },
      // Usuarios
      {
        path: "/usuarios",
        name: "GridUsers",
        component: GridUsers,
      },
      {
        path: "/ususarios/form",
        name: "FormUsers",
        component: FormUsers,
      },
      // Galeria
      {
        path: "/galeria",
        name: "HomeGaleria",
        component: HomeGaleria,
      },
      // Reportes
      {
        path: "/reportes",
        name: "HomeReportes",
        component: HomeReportes,
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
