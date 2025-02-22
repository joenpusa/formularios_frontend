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
            <div class="col-sm-12 col-md-12 col-lg-12">
              <label class="form-label">Formato a consutar:</label>
              <select class="form-select" v-model="form.tipo_reporte" required>
                <option value="1">REPORTE DILIGENCIAMENTO PLATAFORMA</option>
                <!-- <option value="2">REPORTE DIARIO DE VISITAS</option>
                <option value="3">
                  CONSOLIDADO VISITAS DE VERIFICACIÓN A COMEDORES ESCOLARES CCT
                </option>
                <option value="4">
                  CONSOLIDADO VISITAS DE VERIFICACIÓN A COMEDORES ESCOLARES RPS
                </option>
                <option value="5">
                  CONSOLIDADO VISITAS DE VERIFICACIÓN A COMEDORES ESCOLARES RI
                </option>
                <option value="6">CONSOLIDADO DE RESUMEN DE VISITAS</option>
                <option value="7">SOCIALIZACIÓN DE HALLAZGOS</option> -->
              </select>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <label class="form-label">Fecha Inicial:</label>
              <input
                type="date"
                class="form-control"
                v-model="form.fecha_inicio"
                required
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <label class="form-label">Fecha Final:</label>
              <input
                type="date"
                class="form-control"
                v-model="form.fecha_fin"
                required
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <label class="form-label">Municipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <label class="form-label">Institución educativa </label>
              <InstitucionSelect
                v-model="form.institucion"
                :municipio-id="form.municipio"
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
              <label class="form-label">Usuario:</label>
              <UserSearch v-model="form.usuario" />
            </div>
            <div class="col-12 mt-3">
              <button type="submit" class="btn btn-primary">
                Generar reporte
              </button>
            </div>
          </div>
        </form>
        <div v-if="table_reportes.length > 0">
          <div class="row">
            <div class="col-12 mt-3">
              <table class="table table-bordered table-hover">
                <thead class="thead-primary">
                  <tr class="text-center bg-primary-light">
                    <th scope="col">Municipio</th>
                    <th scope="col">Quien realiza la visita</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Institución</th>
                    <th scope="col">Tipo reporte</th>
                    <th scope="col">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in table_reportes" :key="item.id">
                    <td>{{ item.municipio }}</td>
                    <td>{{ item.creado_por }}</td>
                    <td>{{ item.fecha_visita }}</td>
                    <td>{{ item.institucion }}</td>
                    <td>{{ item.tipo_reporte }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="mostrarDetalle(item.tipo_reporte, item.id)"
                      >
                        Detalle
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import MunicipioSelect from "@/components/MunicipioSelect.vue";
import InstitucionSelect from "@/components/InstitucionSelect.vue";
import UserSearch from "@/components/UserSearch.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    MunicipioSelect,
    InstitucionSelect,
    UserSearch,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      table_reportes: [],
      form: {
        municipio: "",
        usuario: "",
        tipo_reporte: "",
        fecha_inicio: "",
        fecha_fin: "",
        institucion: "",
      },
    };
  },
  methods: {
    async solicitudReporte() {
      this.isLoading = true;
      // Validar que las fechas sean correctas
      if (this.form.fecha_incial > this.form.fecha_final) {
        this.isLoading = false;
        this.showToast(
          "La fecha inicial no puede ser mayor a la final",
          "danger"
        );
        return;
      }
      if (this.tipo_reporte === "1") {
        this.generarReporte();
      } else {
        this.generarReporteExcel();
      }
    },
    async generarReporte() {
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;

        const response = await axios.post(
          `${apiUrl}/reporte/datos`,
          this.form,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          this.showToast("Reporte generado correctamente", "success");
          this.table_reportes = response.data;
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast("No se pudo generar reporte", "danger");
      } finally {
        this.isLoading = false;
      }
    },
    async generarReporteExcel() {
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        // Convertir form a Multipart
        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          if (key !== "files") {
            formData.append(key, JSON.stringify(this.form[key] || [])); // Convierte a JSON
          }
        });

        // Enviar datos con una solicitud POST
        const response = await axios.post(`${apiUrl}/reporte/excel`, formData);
        console.log(response);
        if (response.status === 200) {
          this.showToast("Reporte generado correctamente", "success");
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast("No se pudo generar reporte", "danger");
      } finally {
        this.isLoading = false;
      }
    },
    async mostrarDetalle(tipo_rep, id) {
      this.isLoading = true;
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        const formData = new FormData();
        formData.append("tipo_reporte", tipo_rep);
        formData.append("id", id);
        const response = await axios.post(
          `${apiUrl}/reporte/individual`,
          formData,
          {
            responseType: "blob", //Importante: Indica que se recibe un archivo
          }
        );
        console.log(response);
        if (response.status === 200) {
          const url = window.URL.createObjectURL(
            new Blob([response.data], { type: "application/pdf" })
          );
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "reporte.pdf"); // Nombre del archivo
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error("Error al generar el PDF:", error);
        this.showToast("No se pudo obtener detalle", "danger");
      } finally {
        this.isLoading = false;
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
  name: "HomeReportes",
};
</script>
