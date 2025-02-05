<template>
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
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
            <th>Formato</th>
            <th>Nombre archivo</th>
            <th>Usuario responsable</th>
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
            <td>{{ m.form_name }}</td>
            <td>{{ m.original_name }}</td>
            <td>{{ m.created_by_name }}</td>
            <td>{{ m.file_type }}</td>
            <td>
              <button
                class="btn btn-sm btn-warning me-2"
                @click="downloadFile(m.id)"
              >
                Descargar
              </button>
              <!-- <button class="btn btn-sm btn-danger">Eliminar</button> -->
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
import axios from "@/axios";
import Pagination from "@/components/PaginationBasic.vue";
import ToastNotification from "@/components/ToastNotification.vue";

export default {
  name: "HomeGaleria",
  components: {
    Pagination,
    ToastNotification,
  },
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
        const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/attachments`;
        const response = await axios.get(apiUrl, {
          params: { search: this.searchQuery },
        });
        this.medios = response.data.data;
        this.pagination = response.data;
      } catch (error) {
        console.error("Error al cargar medios:", error);
        this.showToast("Error al cargar galeria", "danger");
      }
    },
    async fetchMediaByUrl(url) {
      try {
        const response = await axios.get(url);
        this.medios = response.data.data;
        this.pagination = response.data;
      } catch (error) {
        console.error("Error al cambiar de página:", error);
        this.showToast("Error al cargar galeria", "danger");
      }
    },
    async downloadFile(id) {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_API_BASE_URL}/attachments/download/${id}`
        );

        const { file_name, file_content, mime_type } = response.data;

        if (!file_content) {
          console.error("Error: No se recibió el archivo");
          this.showToast("Error: No se recibió el archivo");
          return;
        }

        // Decodificar el archivo Base64 y crear un Blob
        const byteCharacters = atob(file_content);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mime_type });

        // Crear un enlace de descarga y simular clic
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = file_name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error al descargar archivo:", error);
        this.showToast("Error al descargar archivo");
      }
    },
    showToast(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      setTimeout(() => {
        this.toastMessage = "";
      }, 5000);
    },
  },

  created() {
    this.fetchMedia();
  },
};
</script>
