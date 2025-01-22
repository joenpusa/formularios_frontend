<template>
  <div>
    <h3 class="mb-3">Cargar Archivos</h3>
    <div class="mb-3">
      <button
        type="button"
        class="btn btn-outline-primary me-2"
        @click="triggerFileInput"
      >
        <i class="bi bi-plus-circle"></i> Agregar Documentos
      </button>
      <input
        type="file"
        ref="fileInput"
        multiple
        style="display: none"
        @change="handleFileChange"
      />
    </div>

    <!-- Mensaje de error con botón de cerrar -->
    <div
      v-if="error"
      class="alert alert-danger alert-dismissible fade show mt-3"
      role="alert"
    >
      {{ error }}
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="error = ''"
      ></button>
    </div>

    <table v-if="files.length" class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Nombre del Archivo</th>
          <th>Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(file, index) in files" :key="index">
          <td>{{ file.nombre_archivo }}</td>
          <td>{{ file.tipo }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger btn-sm"
              @click="removeFile(index)"
            >
              <i class="bi bi-trash"></i> Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    files: {
      type: Array,
      required: true,
    },
  },
  emits: ["files-updated"],
  data() {
    return {
      error: "", // Variable para mostrar errores
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.error = ""; // Limpiar mensajes de error
      const maxSize = 2 * 1024 * 1024; // Tamaño máximo de archivo en bytes (2 MB)
      const newFiles = Array.from(event.target.files)
        .filter((file) => {
          if (file.size > maxSize) {
            this.error = `El archivo "${file.name}" excede el tamaño máximo de 2 MB.`;
            return false;
          }
          return true;
        })
        .map((file) => ({
          nombre_archivo: file.name,
          ruta_archivo: URL.createObjectURL(file),
          tipo: file.type.split("/")[1] || "Desconocido",
        }));

      const updatedFiles = [...this.files, ...newFiles];
      this.$emit("files-updated", updatedFiles);
      event.target.value = ""; // Reiniciar input de archivos
    },
    removeFile(index) {
      const updatedFiles = [...this.files];
      updatedFiles.splice(index, 1);
      this.$emit("files-updated", updatedFiles);
    },
  },
};
</script>
