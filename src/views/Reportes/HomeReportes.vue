<template>
  <LoadingSpinner :isLoading="isLoading" />
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
            <li class="breadcrumb-item">Reportes</li>
          </ol>
        </nav>
        <h2>Reportes</h2>
        <hr />
        <form @submit.prevent="generarReporte">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
              <label class="form-label">Formato a consutar:</label>
              <select class="form-select">
                <option value="1">REPORTE DIARIO DE VISITAS</option>
                <option value="2">
                  CONSOLIDADO VISITAS DE VERIFICACIÓN A COMEDORES ESCOLARES CCT
                </option>
                <option value="3">
                  CONSOLIDADO VISITAS DE VERIFICACIÓN A COMEDORES ESCOLARES RPS
                </option>
                <option value="4">
                  CONSOLIDADO VISITAS DE VERIFICACIÓN A COMEDORES ESCOLARES RI
                </option>
                <option value="5">CONSOLIDADO DE RESUMEN DE VISITAS</option>
                <option value="6">SOCIALIZACIÓN DE HALLAZGOS</option>
              </select>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              <label class="form-label">Fecha Inicial:</label>
              <input type="date" class="form-control" />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              <label class="form-label">Fecha Final:</label>
              <input type="date" class="form-control" />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              <label class="form-label">Municipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              <label class="form-label">Usuario:</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "@/axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import MunicipioSelect from "@/components/MunicipioSelect.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    MunicipioSelect,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      form: {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
      },
    };
  },
  methods: {
    generarReporte() {},
    showToast(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      setTimeout(() => {
        this.toastMessage = "";
      }, 5000);
    },
  },
  name: "HomeReportes",
};
</script>
