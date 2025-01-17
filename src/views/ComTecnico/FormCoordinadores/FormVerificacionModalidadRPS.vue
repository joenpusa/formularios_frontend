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
                Formato de verificación modalidad RPS
              </li>
            </ol>
          </nav>
          <h2>FORMATO DE VERIFICACIÓN MODALIDAD RPS</h2>
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
                <option value="1">1ra</option>
                <option value="2">2da</option>
                <option value="3">3ra</option>
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

          <!-- Verificación Condiciones de Operación -->
          <h2 class="mt-4 mb-3">VERIFICACIÓN CONDICIONES DE OPERACIÓN</h2>
          <div
            v-for="(section, sectionIndex) in formData.condicionesOperacion"
            :key="sectionIndex"
          >
            <h3>{{ section.title }}</h3>
            <div
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              class="mb-3"
            >
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="`condicion-${sectionIndex}-${itemIndex}`"
                  :id="`condicion-${sectionIndex}-${itemIndex}-a`"
                  v-model="item.value"
                  value="A"
                />
                <label
                  class="form-check-label"
                  :for="`condicion-${sectionIndex}-${itemIndex}-a`"
                  >A</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="`condicion-${sectionIndex}-${itemIndex}`"
                  :id="`condicion-${sectionIndex}-${itemIndex}-ar`"
                  v-model="item.value"
                  value="AR"
                />
                <label
                  class="form-check-label"
                  :for="`condicion-${sectionIndex}-${itemIndex}-ar`"
                  >AR</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="`condicion-${sectionIndex}-${itemIndex}`"
                  :id="`condicion-${sectionIndex}-${itemIndex}-i`"
                  v-model="item.value"
                  value="I"
                />
                <label
                  class="form-check-label"
                  :for="`condicion-${sectionIndex}-${itemIndex}-i`"
                  >I</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  :name="`condicion-${sectionIndex}-${itemIndex}`"
                  :id="`condicion-${sectionIndex}-${itemIndex}-na`"
                  v-model="item.value"
                  value="NA"
                />
                <label
                  class="form-check-label"
                  :for="`condicion-${sectionIndex}-${itemIndex}-na`"
                  >NA</label
                >
              </div>
              <label class="form-label">{{ item.label }}</label>
              <input
                type="text"
                v-model="item.observacion"
                class="form-control"
                :placeholder="'Observaciones'"
              />
            </div>
          </div>

          <!-- Verificación de Requerimientos Alimentarios y Nutricionales -->
          <h2 class="mt-4 mb-3">
            VERIFICACIÓN DE REQUERIMIENTOS ALIMENTARIOS Y NUTRICIONALES
          </h2>
          <div
            v-for="(item, index) in formData.requerimientosAlimentarios"
            :key="index"
            class="mb-3"
          >
            <div class="row">
              <div class="col-md-2">
                <label :for="`componente-${index}`" class="form-label"
                  >Componente:</label
                >
                <input
                  type="text"
                  :id="`componente-${index}`"
                  v-model="item.componente"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`grupoEscolar-${index}`" class="form-label"
                  >Grupo escolar verificado:</label
                >
                <input
                  type="text"
                  :id="`grupoEscolar-${index}`"
                  v-model="item.grupoEscolar"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`cantidadPorcion-${index}`" class="form-label"
                  >Cantidad Porción Servida:</label
                >
                <input
                  type="number"
                  :id="`cantidadPorcion-${index}`"
                  v-model="item.cantidadPorcion"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`muestra1-${index}`" class="form-label"
                  >Muestra N° 1:</label
                >
                <input
                  type="number"
                  :id="`muestra1-${index}`"
                  v-model="item.muestra1"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`muestra2-${index}`" class="form-label"
                  >Muestra N° 2:</label
                >
                <input
                  type="number"
                  :id="`muestra2-${index}`"
                  v-model="item.muestra2"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`muestra3-${index}`" class="form-label"
                  >Muestra N° 3:</label
                >
                <input
                  type="number"
                  :id="`muestra3-${index}`"
                  v-model="item.muestra3"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Verificación Temperaturas y Características Organolépticas -->
          <h2 class="mt-4 mb-3">
            VERIFICACIÓN TEMPERATURAS Y CARACTERÍSTICAS ORGANOLÉPTICAS
          </h2>
          <div
            v-for="(item, index) in formData.verificacionTemperaturas"
            :key="index"
            class="mb-3"
          >
            <div class="row">
              <div class="col-md-2">
                <label :for="`preparacion-${index}`" class="form-label"
                  >Preparación:</label
                >
                <input
                  type="text"
                  :id="`preparacion-${index}`"
                  v-model="item.preparacion"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`tempCoccion-${index}`" class="form-label"
                  >Temperatura final de cocción:</label
                >
                <input
                  type="number"
                  :id="`tempCoccion-${index}`"
                  v-model="item.tempCoccion"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`tempDistInicial-${index}`" class="form-label"
                  >Temperatura distribución inicial:</label
                >
                <input
                  type="number"
                  :id="`tempDistInicial-${index}`"
                  v-model="item.tempDistInicial"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-md-2">
                <label :for="`tempDistFinal-${index}`" class="form-label"
                  >Temperatura distribución final:</label
                >
                <input
                  type="number"
                  :id="`tempDistFinal-${index}`"
                  v-model="item.tempDistFinal"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`apariencia-${index}`"
                    v-model="item.apariencia"
                  />
                  <label class="form-check-label" :for="`apariencia-${index}`"
                    >Apariencia</label
                  >
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`color-${index}`"
                    v-model="item.color"
                  />
                  <label class="form-check-label" :for="`color-${index}`"
                    >Color</label
                  >
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`olor-${index}`"
                    v-model="item.olor"
                  />
                  <label class="form-check-label" :for="`olor-${index}`"
                    >Olor</label
                  >
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`sabor-${index}`"
                    v-model="item.sabor"
                  />
                  <label class="form-check-label" :for="`sabor-${index}`"
                    >Sabor</label
                  >
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`textura-${index}`"
                    v-model="item.textura"
                  />
                  <label class="form-check-label" :for="`textura-${index}`"
                    >Textura</label
                  >
                </div>
              </div>
            </div>
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
                label:
                  "El área de almacenamiento de los alimentos se encuentra limpia y se garantizan condiciones higiénico-sanitarias.",
                value: "",
                observacion: "",
              },
              {
                label:
                  "El área de preparación de los alimentos se encuentra limpia y se garantizan condiciones higiénico-sanitarias.",
                value: "",
                observacion: "",
              },
              {
                label:
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
          },
          // Add more items as needed
        ],
        verificacionTemperaturas: [
          {
            preparacion: "",
            tempCoccion: "",
            tempDistInicial: "",
            tempDistFinal: "",
            apariencia: false,
            color: false,
            olor: false,
            sabor: false,
            textura: false,
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
