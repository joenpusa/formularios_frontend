<template>
  <LoadingSpinner :isLoading="isLoading" />
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
  <div class="pb-5">
    <div class="row g-4">
      <div class="col-12 col-xxl-12">
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
                Formato de verificación rotulado RI
              </li>
            </ol>
          </nav>
          <h2>FORMATO DE VERIFICACIÓN ROTULADO RI</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="etc" class="form-label">ETC:</label>
              <input
                type="text"
                id="etc"
                v-model="formData.etc"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fecha" class="form-label">Fecha de la visita:</label>
              <input
                type="date"
                id="fecha"
                v-model="formData.fecha"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="municipio" class="form-label">Municipio:</label>
              <MunicipioSelect v-model="formData.municipio" />
            </div>
          </div>
          <div class="row mb-3">
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
            <div class="col-md-6">
              <label for="institucionEducativa" class="form-label"
                >Institución Educativa:</label
              >
              <InstitucionSelect
                v-model="form.institucion"
                :municipio-id="form.municipio"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="sedeEducativa" class="form-label"
                >Sede Educativa:</label
              >
              <SedeSelect
                v-model="form.sede"
                :institucion-id="form.institucion"
              />
            </div>
            <div class="col-md-3">
              <label for="numeroVisita" class="form-label"
                >Número de visita:</label
              >
              <select
                id="numeroVisita"
                v-model="formData.numeroVisita"
                class="form-select"
                required
              >
                <option value="1ra">1ra</option>
                <option value="2da">2da</option>
                <option value="3ra">3ra</option>
              </select>
            </div>
            <div class="col-md-3">
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
          </div>
          <div class="row mb-3">
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
            <div class="col-md-4">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                id="operador"
                v-model="formData.operador"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
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

          <!-- Verificación Res. 5109/2005 -->
          <h3 class="mt-4 mb-3">Verificación Res. 5109/2005</h3>
          <div class="mb-4 p-3 border rounded">
            <div class="row mb-3">
              <div class="col-md-3">
                <label class="form-label">Nombre del alimento:</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Fabricación:</label>
                <input type="date" class="form-control" required />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Vencimiento:</label>
                <input type="date" class="form-control" required />
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote:</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="col-md-3">
                <label class="form-label">Nombre del alistamiento</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Lista de ingredientes</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Contenido neto</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Nombre y dirección del fabricante</label
                >
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Instrucciones de conservación</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha de Vencimiento</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Instrucciones de uso</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Registro sanitario</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Condiciones de empaque primario</label
                >
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Declaración de tabla nutricional</label
                >
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"><strong>Cumplimieto</strong></label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              @click="addProduct5109()"
              class="btn btn-secondary mb-3"
            >
              Agregar Producto
            </button>
          </div>

          <!-- Verificación Res. 810 de 2021 y Res 2492 de 2022 -->
          <h3 class="mt-4 mb-3">
            Verificación Res. 810 de 2021 y Res 2492 de 2022
          </h3>
          <div class="mb-4 p-3 border rounded">
            <div class="row mb-3">
              <div class="col-md-3">
                <label class="form-label">Producto:</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Fabricación:</label>
                <input type="date" class="form-control" required />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Vencimiento:</label>
                <input type="date" class="form-control" required />
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote:</label>
                <input type="text" class="form-control" required />
              </div>

              <div class="col-md-3">
                <label class="form-label"
                  >Declaración de tabla nutricional</label
                >
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Tamaño y caracteristicas de las porciones</label
                >
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Declaración de las medidas caseras</label
                >
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Número de porciones por envase</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Equivalencia a medidas caseras</label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                  <option value="NO">No Observado</option>
                  <option value="NA">No Aplica</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"><strong>Cumplimieto</strong></label>
                <select class="form-select">
                  <option value="C">Cumple</option>
                  <option value="NC">No Cumple</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              @click="addProduct810()"
              class="btn btn-secondary mb-3"
            >
              Agregar Producto
            </button>
          </div>
          <div class="mb-3">
            <label for="nombreVisita" class="form-label"
              >Porcentaje de cumplimiento:</label
            >
            <input
              type="number"
              id="nombreVisita"
              v-model="formData.firmaVisita.nombre"
              class="form-control"
              required
            />
          </div>
          <!-- Observaciones -->
          <div class="mb-3">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              id="observaciones"
              v-model="formData.observaciones"
              class="form-control"
              rows="3"
            ></textarea>
          </div>

          <!-- Firmas -->
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label"
                >FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</label
              >
              <div class="mb-2">
                <SignaturePad
                  ref="firstSignaturePad"
                  @signatureSaved="handleFirstSignature"
                  @signatureCleared="handleFirstSignatureCleared"
                />
              </div>
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
              <label class="form-label">FIRMA QUIEN ATIENDE LA VISITA</label>
              <div class="mb-2">
                <SignaturePad
                  ref="secondSignaturePad"
                  @signatureSaved="handleSecondSignature"
                  @signatureCleared="handleSecondSignatureCleared"
                />
              </div>
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
          <!-- Componente de carga de archivos -->
          <FileUploader :files="form.files" @files-updated="updateFiles" />
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
import SignaturePad from "@/components/SignaturePad.vue";
import MunicipioSelect from "@/components/MunicipioSelect.vue";
import FileUploader from "@/components/FileUploader.vue";
import InstitucionSelect from "@/components/InstitucionSelect.vue";
import SedeSelect from "@/components/SedeSelect.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    SignaturePad,
    MunicipioSelect,
    FileUploader,
    InstitucionSelect,
    SedeSelect,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      form: {
        etc: "Norte de Santander",
        files: [],
        municipio: "",
        hora_inicial: "",
        hora_final: "",
        institucion: "",
        sede: "",
        numero_visita: "",
      },
      formData: {
        etc: "Norte de Santander",
        fecha: "",
        files: [],
        municipio: "",
        horaInicial: "",
        horaFinal: "",
        institucionEducativa: "",
        sedeEducativa: "",
        numeroVisita: "",
        tipoVisita: "",
        numeroBeneficiarios: "",
        operador: "UT Suministros PAE 2024 del 12/01/2024",
        numeroContrato: "LP-SEG-3030-2023 del 12 de enero  del 2024",
        products5109: [],
        products810: [],
        observaciones: "",
        firmaEquipo: { nombre: "", documento: "", cargo: "", telefono: "" },
        firmaVisita: { nombre: "", documento: "", cargo: "", telefono: "" },
        criterios810: [
          "declaracionNutrientes",
          "equivalenciasMedidasCaseras",
          "numeroPorcionesPorEnvase",
          "declaracionMedidasCaseras",
          "tamanosCaracteristicasPorciones",
        ],
        criterios5109: [
          "listaIngredientes",
          "contenidoNeto",
          "nombreDireccionFabricante",
          "paisOrigen",
          "identificacionLote",
          "fechaVencimiento",
          "instruccionesConservacion",
          "instruccionesUso",
          "registroSanitario",
        ],
      },
    };
  },
  methods: {
    updateFiles(files) {
      // Actualiza la lista de archivos en el formulario
      this.form.files = files;
    },
    actualizarFirmas({ idFirma, firma }) {
      // Actualiza dinámicamente la firma en el formulario
      this.form[idFirma] = firma;
    },
    guardarFormulario() {
      // Verificar si hay conexión a Internet
      if (navigator.onLine) {
        // Enviar formulario al servidor
        this.enviarFormularioAlServidor();
      } else {
        // Guardar formulario en localStorage
        this.guardarOffline();
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
