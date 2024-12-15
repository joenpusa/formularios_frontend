<template>
  <div class="pb-5">
    <div class="row g-4">
      <div class="mb-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-3">
            <li class="breadcrumb-item">
              <router-link to="/home">Inicio</router-link>
            </li>
            <li class="breadcrumb-item">Usuarios</li>
          </ol>
        </nav>
        <h2>Usuarios del sistema</h2>
        <hr />
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <input
          v-model="searchQuery"
          @input="fetchUsers"
          type="text"
          class="form-control w-50"
          placeholder="Buscar usuarios"
        />
        <button class="btn btn-primary" @click="registerUser">
          Registrar Usuario
        </button>
      </div>

      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>
              {{
                index + 1 + (pagination.current_page - 1) * pagination.per_page
              }}
            </td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button
                class="btn btn-sm btn-warning me-2"
                @click="editUser(user.id)"
              >
                Editar
              </button>
              <button
                class="btn btn-sm btn-danger"
                @click="deleteUser(user.id)"
              >
                Eliminar
              </button>
            </td>
          </tr>
          <tr v-if="users.length === 0">
            <td colspan="5" class="text-center">No se encontraron usuarios</td>
          </tr>
        </tbody>
      </table>

      <!-- Componente de paginación -->
      <Pagination
        v-if="pagination"
        :pagination="pagination"
        @page-changed="fetchUsersByUrl"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "@/components/PaginationBasic.vue";

export default {
  name: "GridUsers",
  components: { Pagination },
  data() {
    return {
      users: [], // Usuarios obtenidos de la API
      pagination: null, // Datos de la paginación
      searchQuery: "", // Término de búsqueda
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/users`;
        const response = await axios.get(apiUrl, {
          params: { search: this.searchQuery },
        });
        this.users = response.data.data;
        this.pagination = response.data;
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      }
    },
    async fetchUsersByUrl(url) {
      try {
        const response = await axios.get(url);
        this.users = response.data.data;
        this.pagination = response.data;
      } catch (error) {
        console.error("Error al cambiar de página:", error);
      }
    },
    registerUser() {
      this.$router.push("/ususarios/form");
    },
    editUser(userId) {
      this.$router.push(`/users/edit/${userId}`);
    },
    async deleteUser(userId) {
      if (!confirm("¿Estás seguro de que deseas eliminar este usuario?"))
        return;

      try {
        const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/users/${userId}`;
        await axios.delete(apiUrl);
        this.fetchUsers();
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
