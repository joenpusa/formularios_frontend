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
                <router-link to="/comtecnico">Componente</router-link>
              </li>
              <li class="breadcrumb-item">Verificación y seguimiento a SPQR</li>
            </ol>
          </nav>
          <h2>VERIFICACIÓN Y SEGUIMIENTO A SPQR</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- ETC Section -->
          <div class="card mb-4">
            <div class="card-header">
              <h3>Datos generales</h3>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="municipio" class="form-label">Municipio:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="municipio"
                    v-model="form.municipio"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="operador" class="form-label">Operador:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="operador"
                    v-model="form.operador"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="contrato" class="form-label">N° Contrato:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="contrato"
                    v-model="form.contrato"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="institucion" class="form-label"
                    >Institución o Centro Educativo:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="institucion"
                    v-model="form.institucion"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="sede" class="form-label">Sede Educativa:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="sede"
                    v-model="form.sede"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="direccion" class="form-label">Dirección:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="direccion"
                    v-model="form.direccion"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="telefono" class="form-label"
                    >Teléfono/Correo Electrónico:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="telefono"
                    v-model="form.telefono"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="fechaVisita" class="form-label"
                    >Fecha de la Visita:</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="fechaVisita"
                    v-model="form.fechaVisita"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="horaInicio" class="form-label"
                    >Hora inicio:</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    id="horaInicio"
                    v-model="form.horaInicio"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="horaFinal" class="form-label">Hora Final:</label>
                  <input
                    type="time"
                    class="form-control"
                    id="horaFinal"
                    v-model="form.horaFinal"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- SPQR Section -->
          <div class="card mb-4">
            <div class="card-header">
              <h3>SPQR</h3>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="tipoVisita" class="form-label"
                    >Tipo de visita:</label
                  >
                  <select
                    class="form-select"
                    id="tipoVisita"
                    v-model="form.tipoVisita"
                    required
                  >
                    <option value="verificacion">Verificación</option>
                    <option value="seguimiento">Seguimiento</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="numeroVisita" class="form-label">N°:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="numeroVisita"
                    v-model="form.numeroVisita"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label for="programados" class="form-label"
                    >N° Estudiantes Beneficiarios programados:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="programados"
                    v-model="form.programados"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="atendidos" class="form-label"
                    >N° Estudiantes Beneficiarios atendidos:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="atendidos"
                    v-model="form.atendidos"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="modalidadAtencion" class="form-label"
                    >Modalidad de Atención:</label
                  >
                  <select
                    class="form-select"
                    id="modalidadAtencion"
                    v-model="form.modalidadAtencion"
                    required
                  >
                    <option value="1">RPS</option>
                    <option value="2">RI</option>
                    <option value="3">CCT</option>
                  </select>
                </div>
                <div class="col-12">
                  <label for="descripcionSPQR" class="form-label"
                    >DESCRIPCIÓN DE LA SPQR:</label
                  >
                  <textarea
                    class="form-control"
                    id="descripcionSPQR"
                    v-model="form.descripcionSPQR"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-md-6">
                  <label for="fechaReporteSPQR" class="form-label"
                    >Fecha de Reporte SPQR:</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="fechaReporteSPQR"
                    v-model="form.fechaReporteSPQR"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="medioRecepcionSPQR" class="form-label"
                    >Medio de Recepción de la SPQR:</label
                  >
                  <select
                    class="form-select"
                    id="medioRecepcionSPQR"
                    v-model="form.medioRecepcionSPQR"
                    required
                  >
                    <option value="1">1. Oficio</option>
                    <option value="2">2. Llamada Telefónica</option>
                    <option value="3">3. Red Social</option>
                    <option value="4">4. Internet</option>
                    <option value="5">5. Correo Electrónico</option>
                    <option value="6">6. Registro Fotográfico</option>
                    <option value="7">7. Medio Comunicación Televisivo</option>
                    <option value="8">8. Medio Comunicación Radial</option>
                    <option value="9">9. Verbal - Presencial</option>
                  </select>
                </div>
                <div class="col-12">
                  <label for="situacionEncontrada" class="form-label"
                    >SITUACIÓN ENCONTRADA:</label
                  >
                  <textarea
                    class="form-control"
                    id="situacionEncontrada"
                    v-model="form.situacionEncontrada"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <label for="compromisos" class="form-label"
                    >COMPROMISOS:</label
                  >
                  <textarea
                    class="form-control"
                    id="compromisos"
                    v-model="form.compromisos"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <label for="observaciones" class="form-label"
                    >OBSERVACIONES / RECOMENDACIONES / CONCLUSIONES:</label
                  >
                  <textarea
                    class="form-control"
                    id="observaciones"
                    v-model="form.observaciones"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-md-6">
                  <label for="estadoFinal" class="form-label"
                    >Estado Final de la SPQR:</label
                  >
                  <select
                    class="form-select"
                    id="estadoFinal"
                    v-model="form.estadoFinal"
                    required
                  >
                    <option value="abierto">Abierto</option>
                    <option value="cerrado">Cerrado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Signatures Section -->
          <div class="card mb-4">
            <div class="card-header">
              <h3>EN CONSTANCIA FIRMAN</h3>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div
                  class="col-md-6"
                  v-for="(person, index) in form.signatures"
                  :key="index"
                >
                  <h4>
                    {{
                      index < 2
                        ? "Visita Atendida por:"
                        : "Visita Realizada por:"
                    }}
                  </h4>
                  <div class="mb-3">
                    <label :for="'nombre' + index" class="form-label"
                      >Nombre:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :id="'nombre' + index"
                      v-model="person.nombre"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label :for="'cargo' + index" class="form-label"
                      >Cargo:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :id="'cargo' + index"
                      v-model="person.cargo"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label :for="'identificacion' + index" class="form-label"
                      >N° de Identificación:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :id="'identificacion' + index"
                      v-model="person.identificacion"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label :for="'telefono' + index" class="form-label"
                      >Teléfono:</label
                    >
                    <input
                      type="tel"
                      class="form-control"
                      :id="'telefono' + index"
                      v-model="person.telefono"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label :for="'firma' + index" class="form-label"
                      >Firma:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :id="'firma' + index"
                      v-model="person.firma"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg">
              Enviar Formulario
            </button>
          </div>
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
      form: {
        municipio: "",
        operador: "",
        contrato: "",
        institucion: "",
        sede: "",
        direccion: "",
        telefono: "",
        fechaVisita: "",
        horaInicio: "",
        horaFinal: "",
        tipoVisita: "",
        numeroVisita: "",
        rps: "",
        ricct: "",
        beneficiarios: "",
        programados: "",
        atendidos: "",
        modalidadAtencion: "",
        descripcionSPQR: "",
        fechaReporteSPQR: "",
        medioRecepcionSPQR: "",
        situacionEncontrada: "",
        compromisos: "",
        observaciones: "",
        estadoFinal: "",
        signatures: [
          {
            nombre: "",
            cargo: "",
            identificacion: "",
            telefono: "",
            firma: "",
          },
          {
            nombre: "",
            cargo: "",
            identificacion: "",
            telefono: "",
            firma: "",
          },
          {
            nombre: "",
            cargo: "",
            identificacion: "",
            telefono: "",
            firma: "",
          },
          {
            nombre: "",
            cargo: "",
            identificacion: "",
            telefono: "",
            firma: "",
          },
        ],
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
