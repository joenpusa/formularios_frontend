<template>
  <LoadingSpinner :isLoading="isLoading" />
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
  <div class="pb-5">
    <div class="row g-2">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="mb-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3">
              <li class="breadcrumb-item">
                <router-link to="/home">Inicio</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/usuarios">Usuarios</router-link>
              </li>
              <li class="breadcrumb-item">
                {{ esNuevoUsuario ? "Registrar Usuario" : "Editar Usuario" }}
              </li>
            </ol>
          </nav>
          <h2>{{ esNuevoUsuario ? "Registrar Usuario" : "Editar Usuario" }}</h2>
          <hr />
        </div>
      </div>
      <form @submit.prevent="guardarFormulario" novalidate>
        <div class="row">
          <!-- Nombre -->
          <div class="col-sm-6 col-md-6 col-lg-6 mb-2">
            <label class="form-label fw-semibold"
              >Nombre <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              :class="{ 'is-invalid': errores.name }"
              type="text"
              v-model.trim="form.name"
              @input="limpiarError('name')"
              placeholder="Nombre completo"
            />
            <div class="invalid-feedback">{{ errores.name }}</div>
          </div>

          <!-- Correo -->
          <div class="col-sm-6 col-md-6 col-lg-6 mb-2">
            <label class="form-label fw-semibold"
              >Correo electrónico <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              :class="{ 'is-invalid': errores.email }"
              type="email"
              v-model.trim="form.email"
              @input="limpiarError('email')"
              placeholder="usuario@ejemplo.com"
            />
            <div class="invalid-feedback">{{ errores.email }}</div>
          </div>

          <!-- Tipo documento -->
          <div class="col-sm-6 col-md-6 col-lg-6 mb-2">
            <label class="form-label fw-semibold"
              >Tipo de documento <span class="text-danger">*</span></label
            >
            <select
              class="form-select"
              :class="{ 'is-invalid': errores.tipo_documento }"
              v-model="form.tipo_documento"
              @change="limpiarError('tipo_documento')"
            >
              <option value="" disabled>-- Seleccione --</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="PAS">Pasaporte</option>
              <option value="PEP">PEP</option>
              <option value="DE">Documento extranjero</option>
              <option value="CE">Cédula de extranjería</option>
            </select>
            <div class="invalid-feedback">{{ errores.tipo_documento }}</div>
          </div>

          <!-- Número de documento -->
          <div class="col-sm-6 col-md-6 col-lg-6 mb-2">
            <label class="form-label fw-semibold"
              >Número de documento <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              :class="{ 'is-invalid': errores.num_documento }"
              type="text"
              v-model.trim="form.num_documento"
              @input="limpiarError('num_documento')"
              placeholder="Ej: 1234567890"
              inputmode="numeric"
            />
            <div class="invalid-feedback">{{ errores.num_documento }}</div>
          </div>

          <!-- Permisos -->
          <div class="col-12 mt-3 mb-1">
            <p class="fw-semibold mb-2">Permisos de acceso</p>
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    id="chk_social"
                    type="checkbox"
                    v-model="form.chk_social"
                  />
                  <label class="form-check-label" for="chk_social"
                    >Componente social</label
                  >
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    id="chk_tecnico"
                    type="checkbox"
                    v-model="form.chk_tecnico"
                  />
                  <label class="form-check-label" for="chk_tecnico"
                    >Componente técnico</label
                  >
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    id="chk_reportes"
                    type="checkbox"
                    v-model="form.chk_reportes"
                  />
                  <label class="form-check-label" for="chk_reportes"
                    >Reportes</label
                  >
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    id="chk_galeria"
                    type="checkbox"
                    v-model="form.chk_galeria"
                  />
                  <label class="form-check-label" for="chk_galeria"
                    >Galería</label
                  >
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    id="chk_usuarios"
                    type="checkbox"
                    v-model="form.chk_usuarios"
                  />
                  <label class="form-check-label" for="chk_usuarios"
                    >Usuarios</label
                  >
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    id="chk_diagnosticos"
                    type="checkbox"
                    v-model="form.chk_diagnosticos"
                  />
                  <label class="form-check-label" for="chk_diagnosticos"
                    >Diagnósticos</label
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Botón -->
          <div class="col-sm-12 col-md-12 col-lg-12 mt-4 mb-1">
            <button type="submit" class="btn btn-primary" :disabled="isLoading">
              <span v-if="isLoading" class="bi bi-hourglass-split me-1"></span>
              Guardar
            </button>
            <router-link to="/usuarios" class="btn btn-outline-secondary ms-2"
              >Cancelar</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import axios from "@/axios";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  components: { LoadingSpinner, ToastNotification },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      errores: {},
      form: {
        tipo_documento: "",
        num_documento: "",
        name: "",
        email: "",
        chk_social: false,
        chk_tecnico: false,
        chk_reportes: false,
        chk_usuarios: false,
        chk_galeria: false,
        chk_diagnosticos: false,
        is_active: true,
      },
    };
  },
  computed: {
    esNuevoUsuario() {
      return this.$route.params.id === "0";
    },
  },
  methods: {
    limpiarError(campo) {
      if (this.errores[campo]) {
        const rest = { ...this.errores };
        delete rest[campo];
        this.errores = rest;
      }
    },
    validar() {
      const e = {};
      if (!this.form.name) {
        e.name = "El nombre es obligatorio.";
      }
      if (!this.form.email) {
        e.email = "El correo es obligatorio.";
      } else if (!emailRegex.test(this.form.email)) {
        e.email = "Ingrese un correo electrónico válido.";
      }
      if (!this.form.tipo_documento) {
        e.tipo_documento = "Seleccione el tipo de documento.";
      }
      if (!this.form.num_documento) {
        e.num_documento = "El número de documento es obligatorio.";
      } else if (!/^\d+$/.test(String(this.form.num_documento))) {
        e.num_documento = "Solo se permiten dígitos numéricos.";
      }
      this.errores = e;
      return Object.keys(e).length === 0;
    },
    async cargarUsuario() {
      if (!this.esNuevoUsuario) {
        this.isLoading = true;
        try {
          const response = await axios.get(`/users/${this.$route.params.id}`);
          this.form = response.data.data;
          this.form.chk_social = response.data.data.chk_social === 1;
          this.form.chk_tecnico = response.data.data.chk_tecnico === 1;
          this.form.chk_reportes = response.data.data.chk_reportes === 1;
          this.form.chk_usuarios = response.data.data.chk_usuarios === 1;
          this.form.chk_galeria = response.data.data.chk_galeria === 1;
          this.form.chk_diagnosticos =
            response.data.data.chk_diagnosticos === 1;
        } catch (error) {
          this.toastMessage = "Error al cargar el usuario.";
          this.toastType = "danger";
        } finally {
          this.isLoading = false;
        }
      }
    },
    async guardarFormulario() {
      if (!this.validar()) {
        this.toastMessage = "Corrija los errores antes de continuar.";
        this.toastType = "danger";
        setTimeout(() => (this.toastMessage = ""), 4000);
        return;
      }
      try {
        this.isLoading = true;
        this.form.num_documento = String(this.form.num_documento);
        if (this.esNuevoUsuario) {
          await axios.post("/users", this.form);
          this.toastMessage = "Usuario registrado exitosamente.";
        } else {
          await axios.put(`/users/${this.$route.params.id}`, this.form);
          this.toastMessage = "Usuario actualizado exitosamente.";
        }
        this.toastType = "success";
        setTimeout(() => this.$router.push("/usuarios"), 1500);
      } catch (error) {
        // Si el backend retorna errores de validación (422), mostrarlos por campo
        if (error?.response?.status === 422 && error.response.data?.errors) {
          const apiErrors = error.response.data.errors;
          const mapped = {};
          Object.keys(apiErrors).forEach((field) => {
            mapped[field] = apiErrors[field][0];
          });
          this.errores = mapped;
          this.toastMessage = "Corrija los errores indicados en el formulario.";
        } else {
          const msg =
            error?.response?.data?.message || "Error al guardar el usuario.";
          this.toastMessage = msg;
        }
        this.toastType = "danger";
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.cargarUsuario();
  },
};
</script>
