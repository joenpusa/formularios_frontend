<template>
  <nav class="navbar navbar-vertical navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <div class="navbar-vertical-content">
        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
          <!-- Inicio -->
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <a class="nav-link label-1" href="#" role="button">
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-house"></span
                  ></span>
                  <span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Inicio</span></span
                  >
                </div>
              </a>
            </div>
          </li>
          <!-- Componente social -->
          <li v-if="permisos.chk_social" class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/comsocial"
                class="nav-link label-1"
                role="button"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-person-rolodex"></span
                  ></span>
                  <span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Componente social</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <!-- Componente técnico -->
          <li v-if="permisos.chk_tecnico" class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/comtecnico"
                class="nav-link label-1"
                role="button"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-check-circle"></span
                  ></span>
                  <span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Componente tecnico</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <!-- Diagnóstico -->
          <li v-if="permisos.chk_diagnosticos" class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/diagnostico"
                class="nav-link label-1"
                role="button"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-clipboard2-pulse"></span
                  ></span>
                  <span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Diagnóstico</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <!-- Reportes -->
          <li v-if="permisos.chk_reportes" class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/reportes"
                class="nav-link label-1"
                role="button"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-file-earmark-bar-graph"></span
                  ></span>
                  <span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Reportes</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <!-- Usuarios -->
          <li v-if="permisos.chk_usuarios" class="nav-item">
            <div class="nav-item-wrapper">
              <router-link
                to="/usuarios"
                class="nav-link label-1"
                role="button"
              >
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-person-circle"></span
                  ></span>
                  <span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Usuarios</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
          <!-- Galería -->
          <li v-if="permisos.chk_galeria" class="nav-item">
            <div class="nav-item-wrapper">
              <router-link to="/galeria" class="nav-link label-1" role="button">
                <div class="d-flex align-items-center">
                  <span class="nav-link-icon"
                    ><span class="bi bi-images"></span
                  ></span>
                  <span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Galeria</span></span
                  >
                </div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Footer: nombre de usuario (arriba) y botón salir (abajo), separados -->
    <div
      class="navbar-vertical-footer align-items-center pt-1"
      style="flex-direction: column; align-items: stretch; padding: 0"
    >
      <!-- Nombre del usuario — sólo informativo, sin clic -->
      <div class="nav-item-wrapper">
        <div class="nav-link label-1 pe-none" style="cursor: default">
          <div class="d-flex align-items-center gap-2">
            <div
              class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white flex-shrink-0"
              style="width: 28px; height: 28px; font-size: 13px"
            >
              {{ userInitial }}
            </div>
            <span
              class="fw-semibold text-truncate"
              style="font-size: 0.875rem"
              >{{ userName }}</span
            >
          </div>
        </div>
      </div>
      <!-- Botón Salir -->
      <div class="nav-item-wrapper">
        <button
          class="btn nav-link label-1 border-0 w-100 text-start p-0"
          style="background: none"
          @click="logout"
        >
          <div class="d-flex align-items-center gap-2">
            <span
              class="bi bi-box-arrow-left flex-shrink-0"
              style="font-size: 1.1rem; width: 28px; text-align: center"
            ></span>
            <span style="font-size: 0.875rem">Salir</span>
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "@/axios";
import { getPermisos } from "@/utils/permisos";

export default {
  name: "SidebarMenu",
  data() {
    return {
      userName: localStorage.getItem("userName") || "Usuario",
      permisos: {},
    };
  },
  computed: {
    userInitial() {
      return this.userName.charAt(0).toUpperCase();
    },
  },
  created() {
    this.permisos = getPermisos();
  },
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
        localStorage.removeItem("authToken");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userPermisos");
        sessionStorage.removeItem("authToken");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style></style>
