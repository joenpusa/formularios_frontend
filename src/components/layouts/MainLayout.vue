<template>
  <main class="main" id="top">
    <nav class="navbar navbar-vertical navbar-expand-lg">
      <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
        <!-- scrollbar removed-->
        <div class="navbar-vertical-content">
          <ul class="navbar-nav flex-column" id="navbarVerticalNav">
            <li class="nav-item">
              <!-- parent pages-->
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
                      ><span data-feather="pie-chart"></span></span
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
                      <a class="nav-link" href="index.html">
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text">E commerce</span>
                        </div>
                      </a>
                      <!-- more inner pages-->
                    </li>
                  </ul>
                </div>
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
    <nav class="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
      <div class="collapse navbar-collapse justify-content-between">
        <div class="navbar-logo">
          <button
            class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarVerticalCollapse"
            aria-controls="navbarVerticalCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggle-icon"
              ><span class="toggle-line"></span
            ></span>
          </button>
          <a class="navbar-brand me-1 me-sm-3" href="#">
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center">
                <img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                <h5 class="logo-text ms-2 d-none d-sm-block">phoenix</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style scoped>
/* Puedes personalizar estilos adicionales aquí si es necesario */
</style>
