<template>
  <nav class="navbar navbar-vertical navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <div class="navbar-vertical-content">
        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <a
                class="nav-link label-1"
                href="#"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-house"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Inicio</span></span
                  >
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/comsocial"
                class="nav-link label-1"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-person-rolodex"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Componente social</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/comtecnico"
                class="nav-link label-1"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-check-circle"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Componente tecnico</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/reportes"
                class="nav-link label-1"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-file-earmark-bar-graph"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Reportes</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/usuarios"
                class="nav-link label-1"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-person-circle"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Usuarios</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/galeria"
                class="nav-link label-1"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-images"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Galeria</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-vertical-footer">
      <button
        class="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"
        @click="logout"
      >
        <span class="navbar-vertical-footer-text ms-2">Salir</span>
      </button>
    </div>
  </nav>
</template>

<script>
import axios from "@/axios";

export default {
  name: "SidebarMenu",
  methods: {
    async logout() {
      try {
        await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") ||
                localStorage.getItem("authToken")
              }`,
            },
          }
        );
      } catch (error) {
        console.error(
          "Error en la solicitud de cierre de sesión (probablemente el token ya expiró):",
          error
        );
      } finally {
        // Siempre eliminar los tokens locales, independientemente de si el backend falla (ej. por 401)
        localStorage.removeItem("authToken");
        localStorage.removeItem("token");
        sessionStorage.removeItem("authToken");
        console.log("Sesión cerrada localmente");
        // Redirigir siempre a la pantalla de inicio de sesión
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style></style>
