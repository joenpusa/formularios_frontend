<template>
  <LoadingSpinner :isLoading="isLoading" />
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
  <div class="pb-5">
    <div class="row g-4">
      <div class="col-12 col-xxl-9">
        <div class="mb-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3">
              <li class="breadcrumb-item">
                <router-link to="/home">Inicio</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/comtecnico">Componente tecnico</router-link>
              </li>
              <li class="breadcrumb-item">
                Formulario de verificación de materia prima RPS
              </li>
            </ol>
          </nav>
          <h2>VERIFICACIÓN DE MATERIA PRIMA RPS</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="etc" class="form-label">ETC:</label>
              <input
                type="text"
                id="etc"
                v-model="formData.etc"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="fecha" class="form-label">Fecha de la visita:</label>
              <input
                type="date"
                id="fecha"
                v-model="formData.fecha"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="municipio" class="form-label">Municipio:</label>
              <input
                type="text"
                id="municipio"
                v-model="formData.municipio"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="horaInicial" class="form-label">Hora Inicial:</label>
              <input
                type="time"
                id="horaInicial"
                v-model="formData.horaInicial"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="horaFinal" class="form-label">Hora Final:</label>
              <input
                type="time"
                id="horaFinal"
                v-model="formData.horaFinal"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="institucionEducativa" class="form-label"
                >Institución Educativa:</label
              >
              <input
                type="text"
                id="institucionEducativa"
                v-model="formData.institucionEducativa"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="sedeEducativa" class="form-label"
                >Sede Educativa:</label
              >
              <input
                type="text"
                id="sedeEducativa"
                v-model="formData.sedeEducativa"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                id="operador"
                v-model="formData.operador"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="numeroContrato" class="form-label"
                >N° Contrato:</label
              >
              <input
                type="text"
                id="numeroContrato"
                v-model="formData.numeroContrato"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <label for="numeroVisita" class="form-label"
                >Número de visita:</label
              >
              <select
                id="numeroVisita"
                v-model="formData.numeroVisita"
                class="form-select"
                required
              >
                <option value="1">1ra</option>
                <option value="2">2da</option>
                <option value="3">3ra</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="tipoVisita" class="form-label">Tipo de visita:</label>
              <select
                id="tipoVisita"
                v-model="formData.tipoVisita"
                class="form-select"
                required
              >
                <option value="Técnica">Técnica</option>
                <option value="Verificación ETA">Verificación ETA</option>
                <option value="SPQR">SPQR</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="numeroBeneficiarios" class="form-label"
                >N° Beneficiarios:</label
              >
              <input
                type="number"
                id="numeroBeneficiarios"
                v-model="formData.numeroBeneficiarios"
                class="form-control"
                required
              />
            </div>
          </div>

          <h2 class="mt-4 mb-3">Verificación de materia prima</h2>
          <div
            v-for="(item, index) in formData.materiasPrimas"
            :key="index"
            class="mb-4 p-3 border rounded"
          >
            <div class="row mb-3">
              <div class="col-md-4">
                <label :for="'materiaPrima' + index" class="form-label"
                  >Materia Prima:</label
                >
                <input
                  type="text"
                  :id="'materiaPrima' + index"
                  v-model="item.nombre"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-4">
                <label :for="'lote' + index" class="form-label">Lote:</label>
                <input
                  type="text"
                  :id="'lote' + index"
                  v-model="item.lote"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-4">
                <label :for="'fechaVencimiento' + index" class="form-label"
                  >Fecha vencimiento:</label
                >
                <input
                  type="date"
                  :id="'fechaVencimiento' + index"
                  v-model="item.fechaVencimiento"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3">
                <label :for="'unidadMedida' + index" class="form-label"
                  >Unidad de medida:</label
                >
                <input
                  type="text"
                  :id="'unidadMedida' + index"
                  v-model="item.unidadMedida"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-3">
                <label :for="'temperatura' + index" class="form-label"
                  >Temperatura:</label
                >
                <input
                  type="number"
                  :id="'temperatura' + index"
                  v-model="item.temperatura"
                  class="form-control"
                />
              </div>
              <div class="col-md-3">
                <label :for="'cantidadTotal' + index" class="form-label"
                  >Cantidad total según kardex:</label
                >
                <input
                  type="number"
                  :id="'cantidadTotal' + index"
                  v-model="item.cantidadTotal"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-3">
                <label :for="'cantidadEncontrada' + index" class="form-label"
                  >Cantidad encontrada:</label
                >
                <input
                  type="number"
                  :id="'cantidadEncontrada' + index"
                  v-model="item.cantidadEncontrada"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3">
                <label :for="'color' + index" class="form-label">Color:</label>
                <input
                  type="text"
                  :id="'color' + index"
                  v-model="item.color"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-3">
                <label :for="'olor' + index" class="form-label">Olor:</label>
                <input
                  type="text"
                  :id="'olor' + index"
                  v-model="item.olor"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-3">
                <label :for="'textura' + index" class="form-label"
                  >Textura:</label
                >
                <input
                  type="text"
                  :id="'textura' + index"
                  v-model="item.textura"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-3">
                <label :for="'cumplimiento' + index" class="form-label"
                  >Cumplimiento:</label
                >
                <select
                  :id="'cumplimiento' + index"
                  v-model="item.cumplimiento"
                  class="form-select"
                  required
                >
                  <option value="Cumple">Cumple</option>
                  <option value="No cumple">No cumple</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="button"
            @click="addMateriaPrima"
            class="btn btn-secondary mb-3"
          >
            Agregar Materia Prima
          </button>

          <div class="mb-3">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              id="observaciones"
              v-model="formData.observaciones"
              class="form-control"
              rows="3"
            ></textarea>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <h3>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h3>
              <div class="mb-2">
                <label for="nombreEquipo" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreEquipo"
                  v-model="formData.firmaEquipo.nombre"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoEquipo" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  id="documentoEquipo"
                  v-model="formData.firmaEquipo.documento"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoEquipo" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoEquipo"
                  v-model="formData.firmaEquipo.cargo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoEquipo" class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  id="telefonoEquipo"
                  v-model="formData.firmaEquipo.telefono"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <h3>FIRMA QUIEN ATIENDE LA VISITA</h3>
              <div class="mb-2">
                <label for="nombreVisita" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreVisita"
                  v-model="formData.firmaVisita.nombre"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoVisita" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  id="documentoVisita"
                  v-model="formData.firmaVisita.documento"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoVisita" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoVisita"
                  v-model="formData.firmaVisita.cargo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoVisita" class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  id="telefonoVisita"
                  v-model="formData.firmaVisita.telefono"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Enviar Formulario
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      formData: {
        etc: "Norte de Santander",
        fecha: "",
        municipio: "",
        horaInicial: "",
        horaFinal: "",
        institucionEducativa: "",
        sedeEducativa: "",
        operador: "Unión Temporal Suministros PAE 2024",
        numeroContrato: "LP-SEG-3030-2023 del 12 de enero  del 2024",
        numeroVisita: "",
        tipoVisita: "",
        numeroBeneficiarios: "",
        materiasPrimas: [
          {
            nombre: "",
            lote: "",
            fechaVencimiento: "",
            unidadMedida: "",
            temperatura: "",
            cantidadTotal: "",
            cantidadEncontrada: "",
            color: "",
            olor: "",
            textura: "",
            cumplimiento: "",
          },
        ],
        observaciones: "",
        firmaEquipo: { nombre: "", documento: "", cargo: "", telefono: "" },
        firmaVisita: { nombre: "", documento: "", cargo: "", telefono: "" },
      },

      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
    guardarFormulario() {
      // Verificar si hay conexión a Internet
      if (navigator.onLine) {
        // Enviar formulario al servidor
        this.enviarFormularioAlServidor();
      } else {
        // Guardar formulario en localStorage
        this.guardarOffline();
        alert("Sin conexión. El formulario se ha guardado localmente.");
      }
    },
    guardarOffline() {
      // Leer formularios previos de localStorage
      const guardados =
        JSON.parse(localStorage.getItem("formulariosOffline")) || [];
      guardados.push(this.form); // Añadir el formulario actual
      localStorage.setItem("formulariosOffline", JSON.stringify(guardados));
      this.resetFormulario();
    },
    addMateriaPrima() {
      // formData.value.materiasPrimas.push({
      //   nombre: "",
      //   lote: "",
      //   fechaVencimiento: "",
      //   unidadMedida: "",
      //   temperatura: "",
      //   cantidadTotal: "",
      //   cantidadEncontrada: "",
      //   color: "",
      //   olor: "",
      //   textura: "",
      //   cumplimiento: "",
      // });
    },
    async enviarFormularioAlServidor() {
      try {
        this.isLoading = true;
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        // Enviar datos con una solicitud POST
        const response = await axios.post(`${apiUrl}/visitas`, this.form);
        console.log(response); //quitar
        alert("Formulario enviado exitosamente.");
        this.resetFormulario();
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario" + error.response.data.message,
          "danger"
        );
        console.error("Error al enviar el formulario:", error);
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
};
</script>
