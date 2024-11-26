<template>
  <main class="main" id="top">
    <SidebarMenu />
    <nav class="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
      <NavbarMenu />
    </nav>
    <div class="content">
      <router-view />
    </div>
  </main>
</template>

<script>
import SidebarMenu from "./SidebarMenu.vue";
import NavbarMenu from "./NavbarMenu.vue";

export default {
  name: "MainLayout",
  components: {
    SidebarMenu,
    NavbarMenu,
  },
};
</script>

<style scoped>
/* Puedes personalizar estilos adicionales aquí si es necesario */
</style>
