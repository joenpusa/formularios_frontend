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
                Formulario de verificación de materia prima CCT
              </li>
            </ol>
          </nav>
          <h2>VERIFICACIÓN DE MATERIA PRIMA CCT</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- Header Information -->
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="etc" class="form-label">ETC:</label>
              <input
                type="text"
                class="form-control"
                id="etc"
                v-model="form.etc"
                value="Norte de Santander"
                readonly
              />
            </div>
            <div class="col-md-4">
              <label for="fechaVisita" class="form-label"
                >Fecha de la visita:</label
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
              <label for="municipio" class="form-label">Municipio:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="institucionEducativa" class="form-label"
                >Institución Educativa:</label
              >
              <input
                type="text"
                class="form-control"
                id="institucionEducativa"
                v-model="form.institucionEducativa"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="sedeEducativa" class="form-label"
                >Sede Educativa:</label
              >
              <input
                type="text"
                class="form-control"
                id="sedeEducativa"
                v-model="form.sedeEducativa"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <label for="horaInicial" class="form-label">Hora Inicial:</label>
              <input
                type="time"
                class="form-control"
                id="horaInicial"
                v-model="form.horaInicial"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="horaFinal" class="form-label">Hora Final:</label>
              <input
                type="time"
                class="form-control"
                id="horaFinal"
                v-model="form.horaFinal"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                class="form-control"
                id="operador"
                v-model="form.operador"
                value="Unión Temporal Suministros PAE 2024"
                readonly
              />
            </div>
            <div class="col-md-3">
              <label for="numeroContrato" class="form-label"
                >N° Contrato:</label
              >
              <input
                type="text"
                class="form-control"
                id="numeroContrato"
                v-model="form.numeroContrato"
                value="LP-SEG-3030-2023 del 12 de enero del 2024"
                readonly
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <label for="tipoVisita" class="form-label">Tipo de visita:</label>
              <select
                class="form-select"
                id="tipoVisita"
                v-model="form.tipoVisita"
                required
              >
                <option value="tecnica">Técnica</option>
                <option value="verificacionETA">Verificación ETA</option>
                <option value="spqr">SPQR</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="numeroVisita" class="form-label"
                >Número de visita:</label
              >
              <select
                class="form-select"
                id="numeroVisita"
                v-model="form.numeroVisita"
                required
              >
                <option value="1">1ra</option>
                <option value="2">2da</option>
                <option value="3">3ra</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="numeroBeneficiarios" class="form-label"
                >N° Beneficiarios:</label
              >
              <input
                type="number"
                class="form-control"
                id="numeroBeneficiarios"
                v-model="form.numeroBeneficiarios"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="descripcionMenu" class="form-label"
                >Descripción del Menú:</label
              >
              <input
                type="text"
                class="form-control"
                id="descripcionMenu"
                v-model="form.descripcionMenu"
                required
              />
            </div>
            <div class="col-md-12">
              Nota 1: La ETC determina validar todas las materias primas
              suministradas por el operador para la ejecucion de la semana
              comprendida entre el:
              <input type="text" class="form-control" v-model="form.nota1" />
            </div>
            <div class="col-md-12">
              Nota 2: Para evaluar la temperatura y características
              organolépticas se debe tener en cuenta las fichas técnicas
              determinadas en el anexo de calidad e inocuidad de la Resolución
              00335 de 2021.
            </div>
          </div>

          <!-- Raw Material Verification Table -->
          <div class="table-responsive mb-3">
            <table class="table table-bordered">
              <thead class="table-primary text-center">
                <tr>
                  <th colspan="12" class="text-center">
                    Verificación de materia prima
                  </th>
                </tr>
                <tr>
                  <th rowspan="2">Materia Prima</th>
                  <th rowspan="2">Lote</th>
                  <th rowspan="2">Fecha vencimiento</th>
                  <th rowspan="2">Unidad de medida</th>
                  <th rowspan="2">Temperatura (productos cárnicos)</th>
                  <th rowspan="2">Cantidad total según kardex</th>
                  <th rowspan="2">Cantidad encontrada</th>
                  <th rowspan="2">Cantidad faltante</th>
                  <th colspan="3">Características Organolépticas</th>
                  <th rowspan="2">Cumplimiento (Cumple / No cumple)</th>
                </tr>
                <tr>
                  <th>Color</th>
                  <th>Olor</th>
                  <th>Textura</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in rawMaterials" :key="index">
                  <td class="text-center">
                    {{ item.nombre }}
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="item.lote"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control"
                      v-model="item.fechaVencimiento"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="item.unidadMedida"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="item.temperatura"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="item.cantidadKardex"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="item.cantidadEncontrada"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="item.cantidadFaltante"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="item.caracteristicas.color"
                      placeholder="Color"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="item.caracteristicas.olor"
                      placeholder="Olor"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="item.caracteristicas.textura"
                      placeholder="Textura"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="item.cumplimiento">
                      <option value="cumple">Cumple</option>
                      <option value="noCumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    INDICADOR: No de materias primas que cumplen los criterios
                    de calidad de aceptación / Número de materias verificadas
                  </td>
                  <td colspan="3">Porcentaje de cumplimiento:</td>
                  <td colspan="3">
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.porcentaje_cumplimiento"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Observations -->
          <div class="mb-3">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              class="form-control"
              id="observaciones"
              v-model="form.observaciones"
              rows="3"
            ></textarea>
          </div>

          <!-- Compliance Percentage -->
          <div class="mb-3">
            <label for="porcentajeCumplimiento" class="form-label"
              >Porcentaje de cumplimiento:</label
            >
            <input
              type="number"
              class="form-control"
              id="porcentajeCumplimiento"
              v-model="form.porcentajeCumplimiento"
              readonly
            />
          </div>

          <!-- Signatures -->
          <div class="row mb-3">
            <div class="col-md-6">
              <h4>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h4>
              <div class="mb-2">
                <SignaturePad
                  ref="firstSignaturePad"
                  @signatureSaved="handleFirstSignature"
                  @signatureCleared="handleFirstSignatureCleared"
                />
              </div>
              <div class="mb-2">
                <label for="nombreEquipoPAE" class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombreEquipoPAE"
                  v-model="form.firmaEquipoPAE.nombre"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoEquipoPAE" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="documentoEquipoPAE"
                  v-model="form.firmaEquipoPAE.documento"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoEquipoPAE" class="form-label">Cargo:</label>
                <input
                  type="text"
                  class="form-control"
                  id="cargoEquipoPAE"
                  v-model="form.firmaEquipoPAE.cargo"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoEquipoPAE" class="form-label"
                  >Teléfono:</label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="telefonoEquipoPAE"
                  v-model="form.firmaEquipoPAE.telefono"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <h4>FIRMA QUIEN ATIENDE LA VISITA</h4>
              <div class="mb-2">
                <SignaturePad
                  ref="secondSignaturePad"
                  @signatureSaved="handleFSecondSignature"
                  @signatureCleared="handleSecondSignatureCleared"
                />
              </div>
              <div class="mb-2">
                <label for="nombreAtiendeVisita" class="form-label"
                  >Nombre:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="nombreAtiendeVisita"
                  v-model="form.firmaAtiendeVisita.nombre"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoAtiendeVisita" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="documentoAtiendeVisita"
                  v-model="form.firmaAtiendeVisita.documento"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoAtiendeVisita" class="form-label"
                  >Cargo:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="cargoAtiendeVisita"
                  v-model="form.firmaAtiendeVisita.cargo"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoAtiendeVisita" class="form-label"
                  >Teléfono:</label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="telefonoAtiendeVisita"
                  v-model="form.firmaAtiendeVisita.telefono"
                  required
                />
              </div>
            </div>
          </div>
          <!-- Componente de carga de archivos -->
          <FileUploader :files="form.files" @files-updated="updateFiles" />
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
import SignaturePad from "@/components/SignaturePad.vue";
import MunicipioSelect from "@/components/MunicipioSelect.vue";
import FileUploader from "@/components/FileUploader.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    SignaturePad,
    MunicipioSelect,
    FileUploader,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      form: {
        etc: "Norte de Santander",
        fechaVisita: "",
        municipio: "",
        institucionEducativa: "",
        sedeEducativa: "",
        horaInicial: "",
        horaFinal: "",
        operador: "Unión Temporal Suministros PAE 2024",
        numeroContrato: "LP-SEG-3030-2023 del 12 de enero del 2024",
        tipoVisita: "",
        numeroVisita: "",
        numeroBeneficiarios: "",
        descripcionMenu: "",
        observaciones: "",
        porcentajeCumplimiento: 0,
        files: [],
        firmaEquipoPAE: {
          nombre: "",
          documento: "",
          cargo: "",
          telefono: "",
        },
        firmaAtiendeVisita: {
          nombre: "",
          documento: "",
          cargo: "",
          telefono: "",
        },
      },
      rawMaterials: [
        {
          nombre: "Arroz",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Azúcar",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Leche en polvo",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Pechuga (pollo)",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Huevo",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Aceite",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Leguminosas",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Carne (res-cerdo)",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Cebolla cabezona",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Papa-yuca",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Plátano",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Pepino",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Remolacha",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Zanahoria",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Ahuyama",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Fruta 1",
          editable: true,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Fruta 2",
          editable: true,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Limón-naranja",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
        {
          nombre: "Tomate",
          editable: false,
          lote: "",
          fechaVencimiento: "",
          unidadMedida: "",
          temperatura: null,
          cantidadKardex: null,
          cantidadEncontrada: null,
          cantidadFaltante: null,
          caracteristicas: { color: "", olor: "", textura: "" },
          cumplimiento: "",
        },
      ],
      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
    updateFiles(files) {
      // Actualiza la lista de archivos en el formulario
      this.form.files = files;
    },
    handleFirstSignature(signature) {
      this.form.firstSignature = signature;
      this.signatures.firstSignature = true; // La firma ha sido realizada
    },
    handleSecondSignature(signature) {
      this.form.secondSignature = signature;
      this.signatures.secondSignature = true; // La firma ha sido realizada
    },
    handleFirstSignatureCleared() {
      this.signatures.firstSignature = false; // Marca como no firmada
    },
    handleSecondSignatureCleared() {
      this.signatures.secondSignature = false; // Marca como no firmada
    },
    saveSignatures() {
      // Llamamos a los métodos saveSignature de ambos componentes
      this.$refs.firstSignaturePad.saveSignature();
      this.$refs.secondSignaturePad.saveSignature();
    },
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
