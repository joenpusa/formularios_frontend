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
                Seguimiento rotulado y/o etiquetado de alimentos
              </li>
            </ol>
          </nav>
          <h2>
            SEGUIMIENTO ROTULADO Y/O ETIQUETADO DE ALIMENTOS BODEGA DE
            ALMACENAMIENTO
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-4">
            <div class="col-md-4 mb-1">
              <label for="etc" class="form-label">ETC:</label>
              <input type="text" id="etc" class="form-control" />
            </div>
            <div class="col-md-4 mb-1">
              <label for="municipio" class="form-label">MUNICIPIO:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-md-4 mb-1">
              <label for="direccion" class="form-label"
                >DIRECCIÓN BODEGA:</label
              >
              <input type="text" id="direccion" class="form-control" />
            </div>
            <div class="col-md-4 mb-1">
              <label for="operador" class="form-label">OPERADOR:</label>
              <input type="text" id="operador" class="form-control" />
            </div>
            <div class="col-md-4 mb-1">
              <label for="contrato" class="form-label">N° CONTRATO:</label>
              <input type="text" id="contrato" class="form-control" />
            </div>
            <div class="col-md-4 mb-1">
              <label for="fecha" class="form-label">FECHA DE LA VISITA:</label>
              <input type="date" id="fecha" class="form-control" />
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead class="table-light">
                <tr class="text-center">
                  <th colspan="8" class="text-center">
                    ALIMENTOS MODALIDADES RACIÓN PREPARADA EN SITIO - RPS Y
                    COMIDA CALIENTE TRANSPORTADA
                  </th>
                </tr>
                <tr>
                  <th class="text-center">ALIMENTO</th>
                  <th class="text-center">MARCA</th>
                  <th class="text-center">CONTENIDO NETO</th>
                  <th class="text-center">PAIS DE ORIGEN</th>
                  <th class="text-center">NOMBRE O DIRECCIÓN DEL FABRICANTE</th>
                  <th class="text-center">LOTE</th>
                  <th class="text-center">FECHA DE VENCIMIENTO</th>
                  <th class="text-center">
                    N° DEL REGISTRO, PERMISO, NOTIFICACION SANITARIA
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A.Leguminosa:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>B.Leguminosa:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>C.Leguminosa:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Arroz:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Azucar:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Sal:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Aceite:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Leche en polvo:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Spaghetti:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Cereal: Pan de Leche:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>B. Cereal: Pan Mantequilla</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>C. Cereal: Pan Sal:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>D. Cereal: Pan Dulce:</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>E. Cereal: Pan Maiz</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>F. Cereal: Glleta Casera</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>A. Lácteo: Leche Entera</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>B. Lácteo: Avena</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>B. Lácteo: Avena Sabor a Maracuya</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
                <tr>
                  <td>B. Dulce: Bocadillo de Guayaba</td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="date" class="form-control form-control-sm" />
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mb-4">
            <label for="observaciones" class="form-label"
              >OBSERVACIONES GENERALES</label
            >
            <textarea
              id="observaciones"
              class="form-control"
              rows="4"
            ></textarea>
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <h4>Visita Atendida por:</h4>
              <div class="mb-2">
                <SignaturePad
                  ref="firstSignaturePad"
                  @signatureSaved="handleFirstSignature"
                  @signatureCleared="handleFirstSignatureCleared"
                />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Cargo" />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                />
              </div>
              <div class="mb-2">
                <input type="tel" class="form-control" placeholder="Teléfono" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <h4>Visita Realizada por:</h4>
              <div class="mb-2">
                <SignaturePad
                  ref="secondSignaturePad"
                  @signatureSaved="handleSecondSignature"
                  @signatureCleared="handleSecondSignatureCleared"
                />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Cargo" />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                />
              </div>
              <div class="mb-2">
                <input type="tel" class="form-control" placeholder="Teléfono" />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <h4>Visita Realizada por:</h4>
              <div class="mb-2">
                <SignaturePad
                  ref="firstSignaturePad"
                  @signatureSaved="handleThreeSignature"
                  @signatureCleared="handleThreeSignatureCleared"
                />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Cargo" />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                />
              </div>
              <div class="mb-2">
                <input type="tel" class="form-control" placeholder="Teléfono" />
              </div>
            </div>
          </div>
          <div class="col-12 mt-2">
            <button type="submit" class="btn btn-primary">Guardar</button>
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

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    SignaturePad,
    MunicipioSelect,
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
        contrato: "",
        numVisita: "",
        modalidad: "",
        numBeneficiarios: "",
        horaInicio: "",
        horaFin: "",
      },
      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
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
