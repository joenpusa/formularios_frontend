<template>
  <div :class="['sidebar', { active: isActive }]">
    <button class="btn btn-dark w-100 mb-3 mt-3" @click="toggleSidebar">
      <i :class="isActive ? 'bi bi-chevron-left' : 'bi bi-chevron-right'"></i>
      <span v-if="!isActive">Menú</span>
    </button>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">Usuarios</a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">Configuración</a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">Reportes</a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">Ayuda</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

<style scoped>
.sidebar {
  min-width: 250px;
  max-width: 250px;
  background-color: #343a40;
  color: #fff;
  position: fixed;
  top: 56px; /* Ajusta según la altura del navbar */
  height: calc(100% - 56px);
  transition: margin-left 0.3s;
  overflow: auto;
}

.sidebar.active {
  margin-left: -250px;
}

@media (max-width: 768px) {
  .sidebar {
    margin-left: -250px;
  }
  .sidebar.active {
    margin-left: 0;
  }
}
</style>
