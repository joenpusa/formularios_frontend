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
                Foramto de verificación de materia prima ración para preparar en
                sitio - PS
              </li>
            </ol>
          </nav>
          <h2>
            FORMATO DE VERIFICACIÓN DE MATERIA PRIMA RACIÓN PARA PREPARAR EN
            SITIO - PS
          </h2>
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
              <MunicipioSelect v-model="formData.municipio" />
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
            <div class="col-md-12">
              <label for="numeroBeneficiarios" class="form-label"
                >Descripción del Menú</label
              >
              <input
                type="text"
                id="numeroBeneficiarios"
                v-model="formData.descripcion_menu"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-12">
              <label for="numeroBeneficiarios" class="form-label"
                >Nota 1: La ETC determina validar todas las materias primas
                suministradas por el operador para la ejecucion de la semana
                comprendida entre el</label
              >
              <input
                type="text"
                id="numeroBeneficiarios"
                v-model="formData.descripcion_menu"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-12 mt-3">
              <label class="form-label"
                >Nota 2: Para evaluar la temperatura y características
                organolépticas se debe tener en cuenta las fichas técnicas
                determinadas en el anexo de calidad e inocuidad de la Resolución
                00335 de 2021.</label
              >
            </div>
            <div class="col-md-12 mt-3">
              <table class="table table-bordered text-center">
                <thead class="table-info">
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
                  <tr>
                    <td>Remolacha</td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Zanahoria</td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Ahuyama</td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Fruta 1</td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Fruta 2</td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Limón-naranja</td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                    <td><input type="date" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="number" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="9">
                      INDICADOR: No de materias primas que cumplen los criterios
                      de calidad de aceptación / Número de materias verificadas
                    </td>
                    <td colspan="3">
                      <input type="text" class="form-control" placeholder="%" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

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
                  @signatureSaved="handleFSecondSignature"
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
      formData: {
        etc: "Norte de Santander",
        fecha: "",
        municipio: "",
        horaInicial: "",
        horaFinal: "",
        institucionEducativa: "",
        sedeEducativa: "",
        operador: "",
        numeroContrato: "",
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
