<template>
  <nav class="navbar navbar-vertical navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <!-- scrollbar removed-->
      <div class="navbar-vertical-content">
        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
          <!-- <li class="nav-item">
            <div class="nav-item-wrapper">
              <a
                class="nav-link dropdown-indicator label-1"
                href="#nv-home"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="nv-home"
              >
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon-wrapper">
                    <span
                      class="fas fa-caret-right dropdown-indicator-icon"
                    ></span>
                  </div>
                  <span class="nav-link-icon"
                    ><span class="bi bi-1-square"></span></span
                  ><span class="nav-link-text">Home</span>
                </div>
              </a>
              <div class="parent-wrapper label-1">
                <ul
                  class="nav collapse parent show"
                  data-bs-parent="#navbarVerticalCollapse"
                  id="nv-home"
                >
                  <li class="collapsed-nav-item-title d-none">Home</li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <div class="d-flex align-items-center">
                        <span class="nav-link-text">Formato 1</span>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <div class="d-flex align-items-center">
                        <span class="nav-link-text">Formato 2</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li> -->
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
              <a
                class="nav-link label-1"
                href="#"
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
              </a>
            </div>
          </li>
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
                    ><span class="bi bi-person-circle"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Usuarios</span></span
                  >
                </div>
              </a>
            </div>
          </li>
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
                    ><span class="bi bi-images"></span></span
                  ><span class="nav-link-text-wrapper"
                    ><span class="nav-link-text">Galeria</span></span
                  >
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-vertical-footer">
      <button
        class="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"
      >
        <span class="navbar-vertical-footer-text ms-2">Salir</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SidebarMenu",
};
</script>

<style></style>
