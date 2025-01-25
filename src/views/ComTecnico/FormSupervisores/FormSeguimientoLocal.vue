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
                Formato de Reporte Diario de Visitas
              </li>
            </ol>
          </nav>
          <h2>FORMATO DE REPORTE DIARIO DE VISITAS DE SEGUIMIENTO LOCAL</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">Fecha de la visita:</label>
              <input type="date" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Municipio:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">ETC:</label>
              <input
                type="text"
                class="form-control"
                value="Norte de Santander"
                readonly
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Operador:</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">N° Contrato:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Supervisor:</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">Institución Educativa:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Sede Educativa:</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">N° Beneficiarios atendidos:</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">Hora de la visita Inicial:</label>
              <input type="time" class="form-control" />
            </div>
            <div class="col-md-4">
              <label class="form-label">Hora de la visita Final:</label>
              <input type="time" class="form-control" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="modalidad1"
                />
                <label class="form-check-label" for="modalidad1"
                  >Modalidad preparada en sitio</label
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="modalidad2"
                />
                <label class="form-check-label" for="modalidad2"
                  >Comida caliente transportada</label
                >
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="modalidad3"
                />
                <label class="form-check-label" for="modalidad3"
                  >Ración Industrializada</label
                >
              </div>
            </div>
          </div>

          <table class="table table-bordered">
            <thead>
              <tr>
                <th>N°</th>
                <th>ASPECTOS TÉCNICOS A EVALUAR</th>
                <th>SÍ</th>
                <th>NO</th>
                <th>NO APLICA</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in 14" :key="n">
                <td class="text-center">{{ n }}</td>
                <td>
                  <label>{{ getAspectText(n) }}</label>
                </td>
                <td class="text-center">
                  <input type="radio" :name="'aspect' + n" value="si" />
                </td>
                <td class="text-center">
                  <input type="radio" :name="'aspect' + n" value="no" />
                </td>
                <td class="text-center">
                  <input type="radio" :name="'aspect' + n" value="na" />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="mb-3">
            <label class="form-label">Observaciones Generales:</label>
            <textarea class="form-control" rows="4"></textarea>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <h5>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h5>
              <SignaturePad
                ref="firstSignaturePad"
                @signatureSaved="handleFirstSignature"
                @signatureCleared="handleFirstSignatureCleared"
              />
              <div class="mb-2">
                <label class="form-label">Nombre:</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="form-label">Cédula:</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="form-label">Cargo:</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="form-label">Teléfono:</label>
                <input type="tel" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <h5>FIRMA QUIEN ATIENDE LA VISITA</h5>
              <SignaturePad
                ref="secondSignaturePad"
                @signatureSaved="handleSecondSignature"
                @signatureCleared="handleSecondSignatureCleared"
              />
              <div class="mb-2">
                <label class="form-label">Nombre:</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="form-label">Cédula:</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="form-label">Cargo:</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-2">
                <label class="form-label">Teléfono:</label>
                <input type="tel" class="form-control" />
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Enviar Reporte</button>
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
    getAspectText(n) {
      const aspects = [
        "El personal manipulador usa la indumentaria mínima requerida para manipular los alimentos.",
        "El personal manipulador se lava las manos después de cada cambio de actividad durante la operación del programa.",
        "La presentación del personal manipulador es adecuada (no se observa esmalte en las uñas, no usa joyas u otros accesorios).",
        "El personal manipulador mantiene el cabello recogido y cubierto totalmente mediante un gorro.",
        "El personal manipulador mantiene estricta limpieza e higiene en todas las actividades de operación del programa.",
        "El personal manipulador utiliza el tapabocas cubriendo totalmente la nariz, boca y menton durante todos los procesos de manipulación de alimentos.",
        "Los alimentos almacenados cumplen con los requisitos de rotulado según la Resolución 5109/2005.",
        "Los alimentos se almacenan correctamente y se mantienen las características del alimento (congelación, refrigeración,ambiente).",
        "Se evidencia que los alimentos almacenados y/o distribuidos a los beneficiarios presentan condiciones de calidad aptas para el consumo.",
        "Los alimentos se entregan completamente a los beneficiarios sin que se genere desperdicio por alimentos sobrantes.",
        "Los alimentos son consumidos únicamente por los estudiantes beneficiarios del programa.",
        "La distribución de los alimentos se realiza de manera ordenada y se cuenta con el apoyo por parte de la institución educativa.",
        "Se evidencia que los equipos suministrados por la ETC se les está dando uso exclusivo para la ejecución y operación del Programa de Alimentación Escolar PAE.",
        "Se tiene conocimiento de los canales de atención al ciudadano que dispone la Entidad Territorial Certificada para la recepción de Sugerencias, Peticiones, Quejas o Reclamos.",
      ];
      return aspects[n - 1] || "";
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
