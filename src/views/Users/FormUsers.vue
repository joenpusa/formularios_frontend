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
              <li class="breadcrumb-item">Formulario de usuario</li>
            </ol>
          </nav>
          <h2>Registre nuevo usuario</h2>
          <hr />
        </div>
      </div>
      <form @submit.prevent="guardarFormulario">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <label class="form-label">Nombre </label>
            <input class="form-control" type="text" v-model="form.nombre" />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <label class="form-label">correo </label>
            <input class="form-control" type="text" v-model="form.correo" />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <label class="form-label">Tipo Documento </label>
            <select class="form-select" v-model="form.tipoDocumento">
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
              v-model="form.numDocumento"
            />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="flexSwitchCheckDefault"
                type="checkbox"
                v-model="form.social"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Tiene acceso al componente social</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="flexSwitchCheckDefault"
                type="checkbox"
                v-model="form.tecnico"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Tiene acceso al componente tecnico</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="flexSwitchCheckDefault"
                type="checkbox"
                v-model="form.reportes"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Tiene acceso a reportes</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="flexSwitchCheckDefault"
                type="checkbox"
                v-model="form.galeria"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Tiene acceso a galeria</label
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                id="flexSwitchCheckDefault"
                type="checkbox"
                v-model="form.usuarios"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Tiene acceso a usuarios</label
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
// import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";

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
        tipoDocumento: "",
        numdocumento: "",
        nombre: "",
        correo: "",
      },
    };
  },
  methods: {
    guardarFormulario() {
      // Verificar si hay conexión a Internet
      // if (navigator.onLine) {
      //   // Enviar formulario al servidor
      //   this.enviarFormularioAlServidor();
      // } else {
      //   // Guardar formulario en localStorage
      //   this.guardarOffline();
      //   alert("Sin conexión. El formulario se ha guardado localmente.");
      // }
      alert("Formulario a guardar");
    },
  },
};
</script>
