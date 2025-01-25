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
                Formato de verificación modalidad RI
              </li>
            </ol>
          </nav>
          <h2>FORMATO DE VERIFICACIÓN MODALIDAD RI</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- Header Information -->
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
              <input
                type="text"
                id="institucionEducativa"
                v-model="formData.institucionEducativa"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="row mb-3">
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
            <div class="col-md-2">
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
            <div class="col-md-2">
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
            <div class="col-md-2">
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

          <!-- VERIFICACIÓN CONDICIONES DE OPERACIÓN -->
          <h3 class="mt-4 mb-3">VERIFICACIÓN CONDICIONES DE OPERACIÓN</h3>
          <div
            v-for="(section, sectionIndex) in formData.condicionesOperacion"
            :key="sectionIndex"
            class="mb-4"
          >
            <h4>{{ section.title }}</h4>
            <div
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              class="mb-3"
            >
              <div class="row">
                <div class="col-md-8">
                  <p>{{ item.description }}</p>
                </div>
                <div class="col-md-4">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      :id="`item-${sectionIndex}-${itemIndex}-a`"
                      v-model="item.value"
                      value="A"
                    />
                    <label
                      class="form-check-label"
                      :for="`item-${sectionIndex}-${itemIndex}-a`"
                      >A</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      :id="`item-${sectionIndex}-${itemIndex}-ar`"
                      v-model="item.value"
                      value="AR"
                    />
                    <label
                      class="form-check-label"
                      :for="`item-${sectionIndex}-${itemIndex}-ar`"
                      >AR</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      :id="`item-${sectionIndex}-${itemIndex}-i`"
                      v-model="item.value"
                      value="I"
                    />
                    <label
                      class="form-check-label"
                      :for="`item-${sectionIndex}-${itemIndex}-i`"
                      >I</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      :id="`item-${sectionIndex}-${itemIndex}-na`"
                      v-model="item.value"
                      value="NA"
                    />
                    <label
                      class="form-check-label"
                      :for="`item-${sectionIndex}-${itemIndex}-na`"
                      >NA</label
                    >
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-12">
                  <label
                    :for="`observacion-${sectionIndex}-${itemIndex}`"
                    class="form-label"
                    >Observaciones:</label
                  >
                  <textarea
                    :id="`observacion-${sectionIndex}-${itemIndex}`"
                    v-model="item.observacion"
                    class="form-control"
                    rows="2"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- VERIFICACIÓN DE REQUERIMIENTOS ALIMENTARIOS Y NUTRICIONALES -->
          <h3 class="mt-4 mb-3">
            VERIFICACIÓN DE REQUERIMIENTOS ALIMENTARIOS Y NUTRICIONALES -
            CUMPLIMIENTO MINUTA PATRÓN
          </h3>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Componente Preparación</th>
                  <th>Grupo escolar verificado</th>
                  <th>Cantidad Porción Servida según Minuta Patrón</th>
                  <th>Muestra N° 1</th>
                  <th>Muestra N° 2</th>
                  <th>Muestra N° 3</th>
                  <th>Unidad de Medida (g o ml)</th>
                  <th>Cumple/No cumple</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in formData.requerimientosAlimentarios"
                  :key="index"
                >
                  <td>
                    <input
                      type="text"
                      v-model="item.componente"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      v-model="item.grupoEscolar"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.cantidadPorcion"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.muestra1"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.muestra2"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.muestra3"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <select
                      v-model="item.unidadMedida"
                      class="form-select"
                      required
                    >
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select
                      v-model="item.cumplimiento"
                      class="form-select"
                      required
                    >
                      <option value="Cumple">Cumple</option>
                      <option value="No cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- VERIFICACIÓN TEMPERATURAS Y CARACTERÍSTICAS ORGANOLÉPTICAS -->
          <h3 class="mt-4 mb-3">
            VERIFICACIÓN TEMPERATURAS Y CARACTERÍSTICAS ORGANOLÉPTICAS ALIMENTOS
            PREPARADOS Y DISTRIBUIDOS
          </h3>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Preparación</th>
                  <th>Temperatura final de cocción</th>
                  <th>Temperatura distribución inicial</th>
                  <th>Temperatura distribución final</th>
                  <th>Apariencia</th>
                  <th>Color</th>
                  <th>Olor</th>
                  <th>Sabor</th>
                  <th>Textura</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in formData.verificacionTemperaturas"
                  :key="index"
                >
                  <td>
                    <input
                      type="text"
                      v-model="item.preparacion"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.tempFinalCoccion"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.tempDistInicial"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.tempDistFinal"
                      class="form-control"
                      required
                    />
                  </td>
                  <td>
                    <select
                      v-model="item.apariencia"
                      class="form-select"
                      required
                    >
                      <option value="Cumple">Cumple</option>
                      <option value="No cumple">No cumple</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="item.color" class="form-select" required>
                      <option value="Cumple">Cumple</option>
                      <option value="No cumple">No cumple</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="item.olor" class="form-select" required>
                      <option value="Cumple">Cumple</option>
                      <option value="No cumple">No cumple</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="item.sabor" class="form-select" required>
                      <option value="Cumple">Cumple</option>
                      <option value="No cumple">No cumple</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="item.textura" class="form-select" required>
                      <option value="Cumple">Cumple</option>
                      <option value="No cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
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
              <h4>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h4>
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
                <label for="cedulaEquipo" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaEquipo"
                  v-model="formData.firmaEquipo.cedula"
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
              <h4>FIRMA QUIEN ATIENDE LA VISITA</h4>
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
                <label for="cedulaVisita" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaVisita"
                  v-model="formData.firmaVisita.cedula"
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
        numeroVisita: "",
        tipoVisita: "",
        numeroBeneficiarios: "",
        operador: "UT Suministros PAE 2024 del 12/01/2024",
        numeroContrato: "LP-SEG-3030-2023 del 12 de enero  del 2024",
        condicionesOperacion: [
          {
            title: "Plan de saneamiento",
            items: [
              {
                description:
                  "El área de almacenamiento de los alimentos se encuentra limpia y se garantizan condiciones higiénico-sanitarias.",
                value: "",
                observacion: "",
              },
              {
                description:
                  "El área de preparación de los alimentos se encuentra limpia y se garantizan condiciones higiénico-sanitarias.",
                value: "",
                observacion: "",
              },
              {
                description:
                  "El área de consumo de los alimentos se encuentra limpia y se garantizan condiciones higiénico-sanitarias.",
                value: "",
                observacion: "",
              },
              // Add more items as needed
            ],
          },
          // Add more sections as needed
        ],
        requerimientosAlimentarios: [
          {
            componente: "",
            grupoEscolar: "",
            cantidadPorcion: "",
            muestra1: "",
            muestra2: "",
            muestra3: "",
            unidadMedida: "",
            cumplimiento: "",
          },
          // Add more items as needed
        ],
        verificacionTemperaturas: [
          {
            preparacion: "",
            tempFinalCoccion: "",
            tempDistInicial: "",
            tempDistFinal: "",
            apariencia: "",
            color: "",
            olor: "",
            sabor: "",
            textura: "",
          },
          // Add more items as needed
        ],
        observaciones: "",
        firmaEquipo: { nombre: "", cedula: "", cargo: "", telefono: "" },
        firmaVisita: { nombre: "", cedula: "", cargo: "", telefono: "" },
      },
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
