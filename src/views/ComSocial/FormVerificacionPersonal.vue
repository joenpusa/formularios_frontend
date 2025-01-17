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
              <li class="breadcrumb-item">
                Formulario de verificación personal manipulador de alimentos
              </li>
            </ol>
          </nav>
          <h2>
            FORMATO DE VERIFICACIÓN PERSONAL MANIPULADOR DE ALIMENTOS PADRES DE
            FAMILIA DE LOS BENEFICIARIOS PAE.
          </h2>
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
              <label class="form-label">Operador </label>
              <input class="form-control" type="text" v-model="form.operador" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">N° contrato </label>
              <input class="form-control" type="text" v-model="form.contrato" />
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <label class="form-label"
                >Digite cada uno de los campos con la información de cada una de
                las Sedes que conforman el Establecimiento Educativo Principal.
              </label>
            </div>
            <div class="mb-4 p-3 border rounded">
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <div class="row g-3">
                  <div class="col-sm-9">
                    <label class="form-label"
                      >Nombre de la sede educativa</label
                    >
                    <input
                      v-model="nombreSede"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-3">
                    <label class="form-label">Modalidad de atención</label>
                    <select class="form-select" v-model="modalidad">
                      <option value="PS">PS</option>
                      <option value="CCT">CCT</option>
                      <option value="I">I</option>
                    </select>
                  </div>
                  <div class="col-sm-4">
                    <label class="form-label"
                      >Num. total manipuladores PS</label
                    >
                    <input v-model="rps1" class="form-control" type="number" />
                  </div>
                  <div class="col-sm-4">
                    <label class="form-label"
                      >Num. total manipuladores CCT</label
                    >
                    <input v-model="cct1" class="form-control" type="number" />
                  </div>
                  <div class="col-sm-4">
                    <label class="form-label">Num. total manipuladores I</label>
                    <input v-model="ri1" class="form-control" type="number" />
                  </div>
                  <div class="col-sm-4">
                    <label class="form-label"
                      >Num. de manipuladores padres PS</label
                    >
                    <input v-model="rps2" class="form-control" type="number" />
                  </div>
                  <div class="col-sm-4">
                    <label class="form-label"
                      >Num. de manipuladores padres CCT</label
                    >
                    <input v-model="cct2" class="form-control" type="number" />
                  </div>
                  <div class="col-sm-4">
                    <label class="form-label"
                      >Num. de manipuladores padres I</label
                    >
                    <input v-model="ri2" class="form-control" type="number" />
                  </div>
                  <div class="col-sm-12">
                    <button
                      type="button"
                      class="btn btn-secondary mb-3"
                      @click="agregarFila"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <table class="table table-bordered table-striped">
                <thead class="text-center bg-primary-lighter">
                  <tr>
                    <th scope="col" rowspan="2">Nombre de la sede educativa</th>
                    <th scope="col" rowspan="2">Modalidad de Atención</th>
                    <th scope="col" colspan="3">
                      Número total de manipuladores
                    </th>
                    <th scope="col" colspan="3">
                      Número de manipuladores padres de familia
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">PS</th>
                    <th scope="col">CCT</th>
                    <th scope="col">I</th>
                    <th scope="col">PS</th>
                    <th scope="col">CCT</th>
                    <th scope="col">I</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(fila, index) in filas"
                    :key="index"
                    class="text-center"
                  >
                    <td>{{ fila.nombreSede }}</td>
                    <td>{{ fila.modalidad }}</td>
                    <td>{{ fila.rps1 }}</td>
                    <td>{{ fila.cct1 }}</td>
                    <td>{{ fila.ri1 }}</td>
                    <td>{{ fila.rps2 }}</td>
                    <td>{{ fila.cct2 }}</td>
                    <td>{{ fila.ri2 }}</td>
                  </tr>
                  <tr class="text-center fw-bold">
                    <td colspan="2">Totales</td>
                    <td>{{ totalRps1 }}</td>
                    <td>{{ totalCct1 }}</td>
                    <td>{{ totalRi1 }}</td>
                    <td>{{ totalRps2 }}</td>
                    <td>{{ totalCct2 }}</td>
                    <td>{{ totalRi2 }}</td>
                  </tr>
                  <tr>
                    <td colspan="8" class="small-text-row">
                      I: Modalidad Industrializada<br />
                      CCT: Modalidad Comida Caliente Transportada<br />
                      PS: Modalidad Preparada en Sitio
                    </td>
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
      // Input para tabla temporal
      nombreSede: "",
      modalidad: "",
      rps1: "0",
      cct1: "0",
      ri1: "0",
      rps2: "0",
      cct2: "0",
      ri2: "0",
      // fin tabla temporal
      filas: [], //filas de la tabla
      form: {
        fechaVisita: "",
        municipio: "",
        institucion: "",
        sede: "",
        operador: "",
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
      if (this.nombreSede && this.modalidad) {
        // Agregar una nueva fila con los valores ingresados
        this.filas.push({
          nombreSede: this.nombreSede,
          modalidad: this.modalidad,
          rps1: this.rps1,
          cct1: this.cct1,
          ri1: this.ri1,
          rps2: this.rps2,
          cct2: this.cct2,
          ri2: this.ri2,
        });

        // Limpiar los campos después de agregar
        this.nombreSede = "";
        this.modalidad = "";
        this.rps1 = "0";
        this.cct1 = "0";
        this.ri1 = "0";
        this.rps2 = "0";
        this.cct2 = "0";
        this.ri2 = "0";
      } else {
        this.showToast(
          "Por favor, complete todos los campos antes de agregar sede.",
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
  computed: {
    totalRps1() {
      return this.filas.reduce(
        (total, fila) => total + Number(fila.rps1 || 0),
        0
      );
    },
    totalCct1() {
      return this.filas.reduce(
        (total, fila) => total + Number(fila.cct1 || 0),
        0
      );
    },
    totalRi1() {
      return this.filas.reduce(
        (total, fila) => total + Number(fila.ri1 || 0),
        0
      );
    },
    totalRps2() {
      return this.filas.reduce(
        (total, fila) => total + Number(fila.rps2 || 0),
        0
      );
    },
    totalCct2() {
      return this.filas.reduce(
        (total, fila) => total + Number(fila.cct2 || 0),
        0
      );
    },
    totalRi2() {
      return this.filas.reduce(
        (total, fila) => total + Number(fila.ri2 || 0),
        0
      );
    },
  },
};
</script>
<style scoped>
.small-text-row {
  font-size: 10pt;
}
</style>
