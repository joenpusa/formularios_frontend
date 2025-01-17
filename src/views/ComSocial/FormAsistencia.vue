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
                <router-link to="/comsocial">Componente social</router-link>
              </li>
              <li class="breadcrumb-item">Formulario de asitencia</li>
            </ol>
          </nav>
          <h2>FORMATO DE ASISTENCIA DE EDUCACIÓN ALIMENTARIA Y NUTRICIONAL</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">ETC </label>
              <input
                class="form-control"
                type="text"
                value="Norte de Santander"
                disabled
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Fecha visita </label>
              <input
                class="form-control"
                type="date"
                v-model="form.fechaVisita"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Minicipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Instutción educativa </label>
              <input
                class="form-control"
                type="text"
                v-model="form.institucion"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Sede educativa </label>
              <input class="form-control" type="text" v-model="form.sede" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Operador </label>
              <input class="form-control" type="text" v-model="form.operador" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">N° contrato </label>
              <input class="form-control" type="text" v-model="form.contrato" />
            </div>

            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora inicio</label>
              <input
                class="form-control"
                type="time"
                v-model="form.horaInicio"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora fin</label>
              <input class="form-control" type="time" v-model="form.horaFin" />
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <label class="form-label">Objetivo </label>
              <textarea class="form-control" rows="3" v-model="form.objetivo">
              </textarea>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <label class="form-label">Temática abordada </label>
              <select class="form-select" v-model="form.tematica">
                <option value="Mi plato Saludable">Mi plato Saludable</option>
                <option value="Importancia del consumo del agua">
                  Importancia del consumo del agua
                </option>
                <option
                  value="Efectos adversos del consumo del lavado de manos"
                >
                  Efectos adversos del consumo del lavado de manos
                </option>
                <option value="Lavado de manos">Lavado de manos</option>
                <option value="Consumo de frutas y verduras">
                  Consumo de frutas y verduras
                </option>
                <option value="Evita el desperdicio de alimentos">
                  Evita el desperdicio de alimentos
                </option>
              </select>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <label class="form-label"
                >Digite los datos de los beneficiarios</label
              >
              <div class="row g-3">
                <div class="col-sm-8">
                  <input
                    v-model="nuevoNombre"
                    class="form-control"
                    placeholder="Nombre y apellido"
                    type="text"
                  />
                </div>
                <div class="col-sm-2">
                  <input
                    v-model="nuevoGrado"
                    class="form-control"
                    placeholder="Grado"
                    type="number"
                  />
                </div>
                <div class="col-sm-2">
                  <button
                    type="button"
                    class="btn btn-success w-100"
                    @click="agregarFila"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <table class="table table-bordered">
                <thead class="text-center bg-primary-lighter">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombres y apellidos</th>
                    <th scope="col">Grado escolar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fila, index) in filas" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ fila.nombre }}</td>
                    <td>{{ fila.grado }}</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="text-end fw-bold">
                      Total de beneficiarios:
                    </td>
                    <td class="text-center fw-bold">{{ filas.length }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <div class="row">
                <div class="col-12 mb-1">
                  <label class="form-label"
                    >Firma equipo PAE/Apoyo a la supervisión</label
                  >
                </div>
                <div class="col-12 mb-1">
                  <SignaturePad
                    ref="firstSignaturePad"
                    @signatureSaved="handleFirstSignature"
                    @signatureCleared="handleFirstSignatureCleared"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <div class="row">
                <div class="col-12 mb-1">
                  <label class="form-label"
                    >Firma quien atiende la visita</label
                  >
                </div>
                <div class="col-12 mb-1">
                  <SignaturePad
                    ref="secondSignaturePad"
                    @signatureSaved="handleSecondSignature"
                    @signatureCleared="handleSecondSignatureCleared"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <!-- Componente de carga de archivos -->
            <FileUploader :files="form.files" @files-updated="updateFiles" />
            <div class="col-sm-12 col-md-12 col-lg-12 mt-3 mb-1">
              <button type="submit" class="btn btn-primary mr-2">
                Guardar
              </button>
            </div>
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
      nuevoNombre: "", // Input para el nombre
      nuevoGrado: "", // Input para el grado
      filas: [], //filas de la tabla
      form: {
        fechaVisita: "",
        municipio: "",
        institucion: "",
        sede: "",
        operador: "",
        objetivo:
          "Desarrollar estrategias psicopedagógicas que permitan el fortalecimiento de la cultura de alimentación saludable en la comunidad educativa a través del Programa de Alimentación Escolar.",
        contrato: "",
        numVisita: "",
        modalidad: "",
        numBeneficiarios: "",
        horaInicio: "",
        horaFin: "",
        firstSignature: "",
        secondSignature: "",
        files: [],
      },
      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
    updateFiles(files) {
      // Actualiza la lista de archivos en el formulario
      this.form.files = files;
    },
    agregarFila() {
      if (this.nuevoNombre && this.nuevoGrado) {
        // Agregar una nueva fila con los valores ingresados
        this.filas.push({
          nombre: this.nuevoNombre,
          grado: this.nuevoGrado,
        });

        // Limpiar los campos después de agregar
        this.nuevoNombre = "";
        this.nuevoGrado = "";
      } else {
        this.showToast(
          "Por favor, complete ambos campos antes de agregar.",
          "danger"
        );
      }
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
      // Primero, guardamos las firmas
      if (!this.signatures.firstSignature || !this.signatures.secondSignature) {
        return; // Evitamos el envío del formulario
      }
      // Primero, guardamos las firmas
      this.saveSignatures();
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
