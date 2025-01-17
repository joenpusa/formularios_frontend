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
                Formato de seguimiento rotulado y/o etiquetado de los alimentos
              </li>
            </ol>
          </nav>
          <h2>
            FORMATO DE SEGUIMIENTO ROTULADO Y/O ETIQUETADO DE LOS ALIMENTOS
          </h2>
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
            <div class="col-md-4">
              <label for="horaInicial" class="form-label">Hora Inicial:</label>
              <input
                type="time"
                class="form-control"
                id="horaInicial"
                v-model="form.horaInicial"
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
            <div class="col-md-4">
              <label for="modalidad" class="form-label">Modalidad:</label>
              <select
                class="form-select"
                id="modalidad"
                v-model="form.modalidad"
                required
              >
                <option value="racionPreparadaEnSitio">
                  Ración preparada en sitio
                </option>
                <option value="comidaCalienteTransportada">
                  Comida Caliente Transportada
                </option>
                <option value="racionIndustrializada">
                  Ración Industrializada
                </option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
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
            <div class="col-md-4">
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
            <div class="col-md-4">
              <label for="supervisor" class="form-label">Supervisor:</label>
              <input
                type="text"
                class="form-control"
                id="supervisor"
                v-model="form.supervisor"
                required
              />
            </div>
          </div>

          <!-- Prepared on-site / Hot Transported Food Section -->
          <div v-if="form.modalidad !== 'racionIndustrializada'">
            <h3 class="mt-4 mb-3">
              Verificación de materia prima de ración para preparar en sitio /
              Comida caliente transportada
            </h3>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr class="table-primary text-center">
                    <th>Alimento</th>
                    <th>Marca</th>
                    <th>Lote</th>
                    <th>Fecha de vencimiento</th>
                    <th>Registro, permiso, notificación sanitaria</th>
                    <th>Contenido neto</th>
                    <th>Nombre o dirección del fabricante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in preparedFoodItems" :key="index">
                    <td class="text-center">
                      <label>{{ item.alimento }}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.marca"
                      />
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
                        v-model="item.registroSanitario"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.contenidoNeto"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.fabricante"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Industrialized Ration Section -->
          <div v-if="form.modalidad === 'racionIndustrializada'">
            <h3 class="mt-4 mb-3">
              Verificación de componentes de ración industrializada
            </h3>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Alimento</th>
                    <th>Marca</th>
                    <th>Lote</th>
                    <th>Fecha de vencimiento</th>
                    <th>Registro, permiso, notificación sanitaria</th>
                    <th>Contenido neto</th>
                    <th>Nombre o dirección del fabricante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in industrializedFoodItems"
                    :key="index"
                  >
                    <td>
                      <label>{{ item.alimento }}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.marca"
                      />
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
                        v-model="item.registroSanitario"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.contenidoNeto"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="item.fabricante"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

          <!-- Signatures -->
          <div class="row mb-3">
            <div class="col-md-6">
              <h4>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h4>
              <SignaturePad
                ref="firstSignaturePad"
                @signatureSaved="handleFirstSignature"
                @signatureCleared="handleFirstSignatureCleared"
              />
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
              <SignaturePad
                ref="secondSignaturePad"
                @signatureSaved="handleSecondSignature"
                @signatureCleared="handleSecondSignatureCleared"
              />
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
      form: {
        etc: "Norte de Santander",
        fechaVisita: "",
        municipio: "",
        institucionEducativa: "",
        sedeEducativa: "",
        horaInicial: "",
        horaFinal: "",
        modalidad: "",
        operador: "Unión Temporal Suministros PAE 2024",
        numeroContrato: "LP-SEG-3030-2023 del 12 de enero del 2024",
        supervisor: "",
        observaciones: "",
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
      preparedFoodItems: [
        {
          alimento: "Sal",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Carne de Res",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Espaguetis",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Azúcar",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Leche en polvo",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Pechuga",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Carne de Cerdo",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Aceite",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Arroz",
          editable: false,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Leguminosa 1",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Leguminosa 2",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Leguminosa 3",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Otro",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Otro",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
      ],
      industrializedFoodItems: [
        {
          alimento: "Cereal 1",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Cereal 2",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Lácteo 1",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Lácteo 2",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
        {
          alimento: "Dulce",
          editable: true,
          marca: "",
          lote: "",
          fechaVencimiento: "",
          registroSanitario: "",
          contenidoNeto: "",
          fabricante: "",
        },
      ],
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
