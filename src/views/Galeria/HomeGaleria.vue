<template>
  <div class="pb-5">
    <div class="row g-2">
      <div class="mb-1">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-3">
            <li class="breadcrumb-item">
              <router-link to="/home">Inicio</router-link>
            </li>
            <li class="breadcrumb-item">Galeria</li>
          </ol>
        </nav>
        <h2>Galeria</h2>
        <hr />
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <input
          v-model="searchQuery"
          @input="fetchMedia"
          type="text"
          class="form-control"
          placeholder="Buscar medios"
        />
      </div>

      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Componente</th>
            <th>Formato</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(m, index) in medios" :key="m.id">
            <td>
              {{
                index + 1 + (pagination.current_page - 1) * pagination.per_page
              }}
            </td>
            <td>{{ m.name }}</td>
            <td>{{ m.email }}</td>
            <td>{{ m.role }}</td>
            <td>
              <button class="btn btn-sm btn-warning me-2">Editar</button>
              <button class="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
          <tr v-if="medios.length === 0">
            <td colspan="5" class="text-center">No se encontraron medios</td>
          </tr>
        </tbody>
      </table>

      <!-- Componente de paginación -->
      <Pagination
        v-if="pagination"
        :pagination="pagination"
        @page-changed="fetchMediaByUrl"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "@/components/PaginationBasic.vue";

export default {
  name: "HomeGaleria",
  components: { Pagination },
  data() {
    return {
      medios: [], // Usuarios obtenidos de la API
      pagination: null, // Datos de la paginación
      searchQuery: "", // Término de búsqueda
    };
  },
  methods: {
    async fetchMedia() {
      try {
        const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/medios`;
        const response = await axios.get(apiUrl, {
          params: { search: this.searchQuery },
        });
        this.medios = response.data.data;
        this.pagination = response.data;
      } catch (error) {
        console.error("Error al cargar medios:", error);
      }
    },
    async fetchMediaByUrl(url) {
      try {
        const response = await axios.get(url);
        this.medios = response.data.data;
        this.pagination = response.data;
      } catch (error) {
        console.error("Error al cambiar de página:", error);
      }
    },
  },
  created() {
    this.fetchMedia();
  },
};
</script>
