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
      <form @submit.prevent="guardarFormulario">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <label class="form-label">Nombre </label>
            <input class="form-control" type="text" v-model="form.name" />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <label class="form-label">correo </label>
            <input class="form-control" type="text" v-model="form.email" />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <label class="form-label">Tipo Documento </label>
            <select class="form-select" v-model="form.tipo_documento">
              <option value="CC">Cedula de Ciudadania</option>
              <option value="PAS">Pasaporte</option>
              <option value="PEP">PEP</option>
              <option value="DE">Documento extranjero</option>
              <option value="CE">Cedula de extranjeria</option>
            </select>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <label class="form-label">Numero documento </label>
            <input
              class="form-control"
              type="number"
              v-model="form.num_documento"
            />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="chk_social"
                type="checkbox"
                v-model="form.chk_social"
              />
              <label class="form-check-label" for="chk_social"
                >Tiene acceso al componente social</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="chk_tecnico"
                type="checkbox"
                v-model="form.chk_tecnico"
              />
              <label class="form-check-label" for="chk_tecnico"
                >Tiene acceso al componente tecnico</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="chk_reportes"
                type="checkbox"
                v-model="form.chk_reportes"
              />
              <label class="form-check-label" for="chk_reportes"
                >Tiene acceso a reportes</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="chk_galeria"
                type="checkbox"
                v-model="form.chk_galeria"
              />
              <label class="form-check-label" for="chk_galeria"
                >Tiene acceso a galeria</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="chk_usuarios"
                type="checkbox"
                v-model="form.chk_usuarios"
              />
              <label class="form-check-label" for="chk_usuarios"
                >Tiene acceso a usuarios</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="chk_diagnosticos"
                type="checkbox"
                v-model="form.chk_diagnosticos"
              />
              <label class="form-check-label" for="chk_diagnosticos"
                >Tiene acceso a Diagnosticos</label
              >
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mt-3 mb-1">
            <button type="submit" class="btn btn-primary">Guardar</button>
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

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
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
          this.toastType = "error";
        } finally {
          this.isLoading = false;
        }
      }
    },
    async guardarFormulario() {
      try {
        this.isLoading = true;
        this.form.num_documento = String(this.form.num_documento);
        if (this.esNuevoUsuario) {
          // Crear nuevo usuario
          await axios.post("/users", this.form);
          this.toastMessage = "Usuario registrado exitosamente.";
        } else {
          // Actualizar usuario existente
          await axios.put(`/users/${this.$route.params.id}`, this.form);
          this.toastMessage = "Usuario actualizado exitosamente.";
        }
        this.toastType = "success";
      } catch (error) {
        this.toastMessage = "Error al guardar el usuario." + error;
        this.toastType = "error";
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
