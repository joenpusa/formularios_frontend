<template>
  <div>
    <h3 class="mb-3">Cargar Archivos</h3>

    <!-- Required Files Section -->
    <div
      v-if="requiredDocs && requiredDocs.length"
      class="mb-4 p-3 border rounded bg-light"
    >
      <h5 class="text-danger">
        <i class="bi bi-exclamation-triangle-fill"></i> Evidencias Requeridas:
      </h5>
      <ul class="list-group mb-3">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="doc in requiredDocs"
          :key="doc"
        >
          {{ doc }}
          <span v-if="hasFileFor(doc)" class="badge bg-success rounded-pill"
            ><i class="bi bi-check-circle"></i> Cargado</span
          >
          <span v-else class="badge bg-warning text-dark rounded-pill"
            ><i class="bi bi-clock"></i> Pendiente</span
          >
        </li>
      </ul>
      <div v-if="missingDocs.length > 0" class="mb-3">
        <p class="text-muted small">
          Haz clic en los siguientes botones para subir directamente la
          evidencia requerida:
        </p>
        <div class="row g-2">
          <div class="col-md-6" v-for="doc in missingDocs" :key="doc">
            <button
              type="button"
              class="btn btn-outline-danger w-100"
              @click="triggerSpecificInput(doc)"
            >
              <i class="bi bi-camera"></i> Subir {{ doc }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <button
        type="button"
        class="btn btn-outline-primary me-2"
        @click="triggerFileInput"
      >
        <i class="bi bi-plus-circle"></i> Agregar Otros Documentos
      </button>

      <!-- General input -->
      <input
        type="file"
        ref="fileInput"
        multiple
        style="display: none"
        @change="handleFileChange"
      />
      <!-- Specific requirement input -->
      <input
        type="file"
        ref="specificInput"
        style="display: none"
        @change="handleSpecificChange"
        accept="image/*"
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

    <table v-if="files.length" class="table table-striped table-bordered mt-3">
      <thead class="table-dark">
        <tr>
          <th>Nombre del Archivo</th>
          <th>Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(file, index) in files" :key="index">
          <td>
            {{ file.nombre_archivo }}
            <span
              v-if="isRequiredDoc(file.nombre_archivo)"
              class="badge bg-info text-dark ms-2"
              >Requerido</span
            >
          </td>
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
    requiredDocs: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["files-updated"],
  data() {
    return {
      error: "",
      currentSpecificDoc: null,
    };
  },
  computed: {
    missingDocs() {
      if (!this.requiredDocs) return [];
      return this.requiredDocs.filter((doc) => !this.hasFileFor(doc));
    },
  },
  methods: {
    hasFileFor(doc) {
      return this.files.some((f) => f.nombre_archivo.startsWith(doc));
    },
    isRequiredDoc(filename) {
      if (!this.requiredDocs) return false;
      return this.requiredDocs.some((doc) => filename.startsWith(doc));
    },
    triggerSpecificInput(doc) {
      this.currentSpecificDoc = doc;
      this.$refs.specificInput.click();
    },
    handleSpecificChange(event) {
      this.error = "";
      const maxSize = 5 * 1024 * 1024; // Aumenté a 5MB por si toman fotos pesadas del celular
      const file = event.target.files[0];
      if (!file) return;

      if (file.size > maxSize) {
        this.error = `El archivo excede 5 MB.`;
        event.target.value = "";
        return;
      }

      // Renombrar el archivo para que incluya la etiqueta requerida
      const extension = file.name.split(".").pop() || "jpg";
      let originalClean = file.name
        .replace(`.${extension}`, "")
        .substring(0, 10);
      const newName = `${this.currentSpecificDoc} - ${originalClean}.${extension}`;
      const renamedFile = new File([file], newName, { type: file.type });

      const fileObj = {
        file: renamedFile,
        nombre_archivo: renamedFile.name,
        ruta_archivo: URL.createObjectURL(renamedFile),
        tipo: renamedFile.type.split("/")[1] || "Desconocido", // e.g. "jpeg"
      };

      const updatedFiles = [...this.files, fileObj];
      this.$emit("files-updated", updatedFiles);
      event.target.value = "";
      this.currentSpecificDoc = null;
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.error = "";
      const maxSize = 5 * 1024 * 1024;
      const newFiles = Array.from(event.target.files)
        .filter((file) => {
          if (file.size > maxSize) {
            this.error = `El archivo "${file.name}" excede el tamaño máximo de 5 MB.`;
            return false;
          }
          return true;
        })
        .map((file) => ({
          file,
          nombre_archivo: file.name,
          ruta_archivo: URL.createObjectURL(file),
          tipo: file.type.split("/")[1] || "Desconocido",
        }));

      const updatedFiles = [...this.files, ...newFiles];
      this.$emit("files-updated", updatedFiles);
      event.target.value = "";
    },
    removeFile(index) {
      const updatedFiles = [...this.files];
      updatedFiles.splice(index, 1);
      this.$emit("files-updated", updatedFiles);
    },
  },
};
</script>
