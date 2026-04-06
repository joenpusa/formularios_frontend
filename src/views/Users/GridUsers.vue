<template>
  <!-- Modal de confirmación -->
  <div v-if="modal.visible" class="modal-overlay" @click.self="cancelModal">
    <div class="modal-box">
      <div class="modal-header-custom">
        <span class="modal-icon" :class="modal.icon"></span>
        <h5 class="mb-0">{{ modal.title }}</h5>
      </div>
      <p class="modal-body-text">{{ modal.message }}</p>
      <div class="modal-actions">
        <button class="btn btn-secondary btn-sm" @click="cancelModal">
          No, cancelar
        </button>
        <button
          class="btn btn-sm"
          :class="modal.confirmClass"
          @click="confirmModal"
        >
          Sí, continuar
        </button>
      </div>
    </div>
  </div>

  <!-- Panel de nueva contraseña -->
  <div v-if="nuevaContrasena" class="password-panel">
    <div class="d-flex align-items-center justify-content-between gap-3">
      <div>
        <small class="text-muted d-block mb-1"
          >Nueva contraseña generada:</small
        >
        <code class="password-code">{{ nuevaContrasena }}</code>
      </div>
      <div class="d-flex gap-2">
        <button
          class="btn btn-sm btn-outline-primary"
          @click="copiarContrasena"
          title="Copiar"
        >
          <span :class="copiado ? 'bi bi-check-lg' : 'bi bi-clipboard'"></span>
          {{ copiado ? "Copiado" : "Copiar" }}
        </button>
        <button
          class="btn btn-sm btn-outline-secondary"
          @click="nuevaContrasena = ''"
          title="Cerrar"
        >
          <span class="bi bi-x-lg"></span>
        </button>
      </div>
    </div>
  </div>

  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />

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
        <div class="input-group w-50">
          <input
            v-model="searchQuery"
            @keyup.enter="fetchUsers"
            type="text"
            class="form-control"
            placeholder="Buscar usuarios"
          />
          <button class="btn btn-secondary" @click="fetchUsers">Buscar</button>
        </div>
        <button class="btn btn-primary" @click="registerUser">
          Registrar Usuario
        </button>
      </div>

      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Tipo Documento</th>
            <th>Documento</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.tipo_documento }}</td>
            <td>{{ user.num_documento }}</td>
            <td>
              <span
                class="badge"
                :class="user.is_active ? 'bg-success' : 'bg-secondary'"
              >
                {{ user.is_active ? "Activo" : "Inactivo" }}
              </span>
            </td>
            <td>
              <div class="d-flex flex-wrap gap-1">
                <!-- Editar -->
                <button
                  class="btn btn-sm btn-warning"
                  @click="editUser(user.id)"
                  title="Editar"
                >
                  <span class="bi bi-pencil"></span>
                </button>
                <!-- Activar -->
                <button
                  v-if="!user.is_active"
                  class="btn btn-sm btn-success"
                  @click="pedirActivar(user)"
                  title="Activar usuario"
                >
                  <span class="bi bi-person-check"></span>
                </button>
                <!-- Desactivar -->
                <button
                  v-if="user.is_active"
                  class="btn btn-sm btn-danger"
                  @click="pedirDesactivar(user)"
                  title="Desactivar usuario"
                >
                  <span class="bi bi-person-x"></span>
                </button>
                <!-- Restablecer contraseña -->
                <button
                  class="btn btn-sm btn-secondary"
                  @click="pedirRestablecerContrasena(user)"
                  title="Restablecer contraseña"
                >
                  <span class="bi bi-key"></span>
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="users.length === 0">
            <td colspan="6" class="text-center">No se encontraron usuarios</td>
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
import axios from "@/axios";
import Pagination from "@/components/PaginationBasic.vue";
import ToastNotification from "@/components/ToastNotification.vue";

export default {
  name: "GridUsers",
  components: { Pagination, ToastNotification },
  data() {
    return {
      users: [],
      pagination: null,
      searchQuery: "",
      toastMessage: "",
      toastType: "",
      nuevaContrasena: "",
      copiado: false,
      modal: {
        visible: false,
        title: "",
        message: "",
        icon: "",
        confirmClass: "btn-primary",
        onConfirm: null,
      },
    };
  },
  methods: {
    // ─── Modal helpers ─────────────────────────────────────────
    abrirModal({ title, message, icon, confirmClass, onConfirm }) {
      this.modal = {
        visible: true,
        title,
        message,
        icon,
        confirmClass,
        onConfirm,
      };
    },
    cancelModal() {
      this.modal.visible = false;
    },
    async confirmModal() {
      this.modal.visible = false;
      if (typeof this.modal.onConfirm === "function") {
        await this.modal.onConfirm();
      }
    },

    // ─── Carga de datos ────────────────────────────────────────
    async fetchUsers() {
      try {
        const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/users`;
        const response = await axios.get(apiUrl, {
          params: { search: this.searchQuery },
        });
        // response.data = { success, message, data: { data: [...], current_page, next_page_url, ... } }
        this.users = response.data.data.data;
        this.pagination = response.data.data;
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
        this.users = [];
      }
    },
    async fetchUsersByUrl(url) {
      try {
        // Conservar el parámetro search al navegar entre páginas
        const urlObj = new URL(url);
        if (this.searchQuery) {
          urlObj.searchParams.set("search", this.searchQuery);
        }
        const response = await axios.get(urlObj.toString());
        this.users = response.data.data.data;
        this.pagination = response.data.data;
      } catch (error) {
        console.error("Error al cambiar de página:", error);
      }
    },

    // ─── Navegación ────────────────────────────────────────────
    registerUser() {
      this.$router.push("/usuario/edit/0");
    },
    editUser(userId) {
      this.$router.push(`/usuario/edit/${userId}`);
    },

    // ─── Acciones con confirmación modal ───────────────────────
    pedirActivar(user) {
      this.abrirModal({
        title: "Activar usuario",
        message: `¿Deseas activar al usuario "${user.name}"?`,
        icon: "bi bi-person-check text-success",
        confirmClass: "btn-success",
        onConfirm: () => this.toggleUsuario(user),
      });
    },
    pedirDesactivar(user) {
      this.abrirModal({
        title: "Desactivar usuario",
        message: `¿Deseas desactivar al usuario "${user.name}"? Se cerrarán todas sus sesiones activas.`,
        icon: "bi bi-person-x text-danger",
        confirmClass: "btn-danger",
        onConfirm: () => this.toggleUsuario(user),
      });
    },
    pedirRestablecerContrasena(user) {
      this.abrirModal({
        title: "Restablecer contraseña",
        message: `¿Restablecer la contraseña de "${user.name}"? Se generará una nueva contraseña y se revocarán sus sesiones activas.`,
        icon: "bi bi-key text-secondary",
        confirmClass: "btn-secondary",
        onConfirm: () => this.ejecutarRestablecerContrasena(user),
      });
    },

    // ─── Operaciones reales ────────────────────────────────────
    async toggleUsuario(user) {
      try {
        await axios.patch(
          `${process.env.VUE_APP_API_BASE_URL}/users/${user.id}/toggle-active`
        );
        this.showToast(
          user.is_active
            ? `Usuario "${user.name}" desactivado.`
            : `Usuario "${user.name}" activado.`,
          "success"
        );
        await this.fetchUsers();
      } catch (error) {
        console.error("Error al cambiar estado:", error);
        this.showToast("No se pudo cambiar el estado del usuario.", "danger");
      }
    },
    async ejecutarRestablecerContrasena(user) {
      this.nuevaContrasena = "";
      this.copiado = false;
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}/users/${user.id}/reset-password`
        );
        const pwd = response.data.new_password;
        if (pwd) {
          this.nuevaContrasena = pwd;
        }
        this.showToast(
          `Contraseña de "${user.name}" restablecida. Sesiones cerradas.`,
          "success"
        );
      } catch (error) {
        console.error("Error al restablecer contraseña:", error);
        this.showToast("No se pudo restablecer la contraseña.", "danger");
      }
    },
    async copiarContrasena() {
      try {
        await navigator.clipboard.writeText(this.nuevaContrasena);
        this.copiado = true;
        setTimeout(() => (this.copiado = false), 2000);
      } catch {
        this.showToast("No se pudo copiar al portapapeles.", "danger");
      }
    },

    // ─── Toast ─────────────────────────────────────────────────
    showToast(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      setTimeout(() => {
        this.toastMessage = "";
      }, 5000);
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* ── Overlay modal ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1055;
}
.modal-box {
  background: #fff;
  border-radius: 12px;
  padding: 1.75rem 2rem;
  min-width: 340px;
  max-width: 480px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  animation: pop-in 0.18s ease;
}
@keyframes pop-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.modal-header-custom {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}
.modal-icon {
  font-size: 1.4rem;
}
.modal-body-text {
  color: #555;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

/* ── Panel contraseña ── */
.password-panel {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid #dee2e6;
  border-left: 4px solid #0d6efd;
  border-radius: 10px;
  padding: 0.85rem 1.2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 1060;
  min-width: 320px;
  animation: slide-down 0.2s ease;
}
@keyframes slide-down {
  from {
    transform: translateX(-50%) translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}
.password-code {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #0d6efd;
  background: #f0f4ff;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}
</style>
