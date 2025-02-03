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
                <router-link to="/comtecnico">Componente</router-link>
              </li>
              <li class="breadcrumb-item">Verificación y seguimiento a SPQR</li>
            </ol>
          </nav>
          <h2>VERIFICACIÓN Y SEGUIMIENTO A SPQR</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- ETC Section -->
          <div class="card mb-4">
            <div class="card-header">
              <h3>Datos generales</h3>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="municipio" class="form-label">Municipio:</label>
                  <MunicipioSelect v-model="form.municipio" />
                </div>
                <div class="col-md-6">
                  <label for="operador" class="form-label">Operador:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="operador"
                    v-model="form.operador"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="contrato" class="form-label">N° Contrato:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="contrato"
                    v-model="form.contrato"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="institucion" class="form-label"
                    >Institución o Centro Educativo:</label
                  >
                  <InstitucionSelect
                    v-model="form.institucion"
                    :municipio-id="form.municipio"
                  />
                </div>
                <div class="col-md-6">
                  <label for="sede" class="form-label">Sede Educativa:</label>
                  <SedeSelect
                    v-model="form.sede"
                    :institucion-id="form.institucion"
                  />
                </div>
                <div class="col-md-6">
                  <label for="direccion" class="form-label">Dirección:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="direccion"
                    v-model="form.direccion"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="telefono" class="form-label"
                    >Teléfono/Correo Electrónico:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="telefono"
                    v-model="form.telefono"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="fechaVisita" class="form-label"
                    >Fecha de la Visita:</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="fechaVisita"
                    v-model="form.fecha_visita"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="horaInicio" class="form-label"
                    >Hora inicio:</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    id="horaInicio"
                    v-model="form.hora_inicio"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="horaFinal" class="form-label">Hora Final:</label>
                  <input
                    type="time"
                    class="form-control"
                    id="horaFinal"
                    v-model="form.hora_final"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- SPQR Section -->
          <div class="card mb-4">
            <div class="card-header">
              <h3>SPQR</h3>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="tipoVisita" class="form-label"
                    >Tipo de visita:</label
                  >
                  <select
                    class="form-select"
                    id="tipoVisita"
                    v-model="form.tipo_visita"
                    required
                  >
                    <option value="Verificación">Verificación</option>
                    <option value="Seguimiento">Seguimiento</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="numeroVisita" class="form-label">N°:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="numeroVisita"
                    v-model="form.num_visita"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label for="programados" class="form-label"
                    >N° Estudiantes Beneficiarios programados:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="programados"
                    v-model="form.num_programados"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="atendidos" class="form-label"
                    >N° Estudiantes Beneficiarios atendidos:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="atendidos"
                    v-model="form.num_atendidos"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="modalidadAtencion" class="form-label"
                    >Modalidad de Atención:</label
                  >
                  <select
                    class="form-select"
                    id="modalidadAtencion"
                    v-model="form.modalidad"
                    required
                  >
                    <option value="PS">PS</option>
                    <option value="I">I</option>
                    <option value="CCT">CCT</option>
                  </select>
                </div>
                <div class="col-12">
                  <label for="descripcionSPQR" class="form-label"
                    >DESCRIPCIÓN DE LA SPQR:</label
                  >
                  <textarea
                    class="form-control"
                    id="descripcionSPQR"
                    v-model="form.descripcion"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-md-6">
                  <label for="fechaReporteSPQR" class="form-label"
                    >Fecha de Reporte SPQR:</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="fechaReporteSPQR"
                    v-model="form.fechaReporte"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="medioRecepcionSPQR" class="form-label"
                    >Medio de Recepción de la SPQR:</label
                  >
                  <select
                    class="form-select"
                    id="medioRecepcionSPQR"
                    v-model="form.medio_recepcion"
                    required
                  >
                    <option value="1">1. Oficio</option>
                    <option value="2">2. Llamada Telefónica</option>
                    <option value="3">3. Red Social</option>
                    <option value="4">4. Internet</option>
                    <option value="5">5. Correo Electrónico</option>
                    <option value="6">6. Registro Fotográfico</option>
                    <option value="7">7. Medio Comunicación Televisivo</option>
                    <option value="8">8. Medio Comunicación Radial</option>
                    <option value="9">9. Verbal - Presencial</option>
                  </select>
                </div>
                <div class="col-12">
                  <label for="situacionEncontrada" class="form-label"
                    >SITUACIÓN ENCONTRADA:</label
                  >
                  <textarea
                    class="form-control"
                    id="situacionEncontrada"
                    v-model="form.situacion"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <label for="compromisos" class="form-label"
                    >COMPROMISOS:</label
                  >
                  <textarea
                    class="form-control"
                    id="compromisos"
                    v-model="form.compromisos"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <label for="observaciones" class="form-label"
                    >OBSERVACIONES / RECOMENDACIONES / CONCLUSIONES:</label
                  >
                  <textarea
                    class="form-control"
                    id="observaciones"
                    v-model="form.recomendaciones"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="col-md-6">
                  <label for="estadoFinal" class="form-label"
                    >Estado Final de la SPQR:</label
                  >
                  <select
                    class="form-select"
                    id="estadoFinal"
                    v-model="form.estado_final"
                    required
                  >
                    <option value="abierto">Abierto</option>
                    <option value="cerrado">Cerrado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Signatures Section -->
          <div class="card mb-4">
            <div class="card-header">
              <h3>EN CONSTANCIA FIRMAN</h3>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <h4>Visita Realizada por</h4>
                  <SignaturePad
                    idFirma="firma1"
                    :varFirma="form.firma1"
                    @firmas-updated="actualizarFirmas"
                  />
                  <div class="mb-1">
                    <label class="form-label">Nombre:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_nombre1"
                      required
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'cargo' + index" class="form-label"
                      >Cargo:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cargo1"
                      required
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'identificacion' + index" class="form-label"
                      >N° de Identificación:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cedula1"
                      required
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'telefono' + index" class="form-label"
                      >Teléfono:</label
                    >
                    <input
                      type="tel"
                      class="form-control"
                      v-model="form.fir_telefono1"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <h4>Visita Realizada por</h4>
                  <SignaturePad
                    idFirma="firma2"
                    :varFirma="form.firma2"
                    @firmas-updated="actualizarFirmas"
                  />
                  <div class="mb-1">
                    <label class="form-label">Nombre:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_nombre2"
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'cargo' + index" class="form-label"
                      >Cargo:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cargo2"
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'identificacion' + index" class="form-label"
                      >N° de Identificación:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cedula2"
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'telefono' + index" class="form-label"
                      >Teléfono:</label
                    >
                    <input
                      type="tel"
                      class="form-control"
                      v-model="form.fir_telefono2"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <h4>Visita Atendida por</h4>
                  <SignaturePad
                    idFirma="firma3"
                    :varFirma="form.firma3"
                    @firmas-updated="actualizarFirmas"
                  />
                  <div class="mb-1">
                    <label class="form-label">Nombre:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_nombre3"
                      required
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'cargo' + index" class="form-label"
                      >Cargo:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cargo3"
                      required
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'identificacion' + index" class="form-label"
                      >N° de Identificación:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cedula3"
                      required
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'telefono' + index" class="form-label"
                      >Teléfono:</label
                    >
                    <input
                      type="tel"
                      class="form-control"
                      v-model="form.fir_telefono3"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <h4>Visita Atendida por</h4>
                  <SignaturePad
                    idFirma="firma4"
                    :varFirma="form.firma4"
                    @firmas-updated="actualizarFirmas"
                  />
                  <div class="mb-1">
                    <label class="form-label">Nombre:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_nombre4"
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'cargo' + index" class="form-label"
                      >Cargo:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cargo4"
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'identificacion' + index" class="form-label"
                      >N° de Identificación:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.fir_cedula4"
                    />
                  </div>
                  <div class="mb-1">
                    <label :for="'telefono' + index" class="form-label"
                      >Teléfono:</label
                    >
                    <input
                      type="tel"
                      class="form-control"
                      v-model="form.fir_telefono4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
            <!-- Componente de carga de archivos -->
            <FileUploader :files="form.files" @files-updated="updateFiles" />
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
import axios from "@/axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import SignaturePad from "@/components/SignaturePad.vue";
import MunicipioSelect from "@/components/MunicipioSelect.vue";
import InstitucionSelect from "@/components/InstitucionSelect.vue";
import SedeSelect from "@/components/SedeSelect.vue";
import FileUploader from "@/components/FileUploader.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    SignaturePad,
    MunicipioSelect,
    InstitucionSelect,
    SedeSelect,
    FileUploader,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      form: {
        municipio: "",
        operador: "",
        contrato: "",
        institucion: "",
        sede: "",
        direccion: "",
        telefono: "",
        fecha_visita: "",
        hora_inicio: "",
        hora_final: "",
        tipo_visita: "",
        num_visita: "",
        modalidad: "",
        num_programados: "",
        num_atendidos: "",
        descripcion: "",
        fechaReporte: "",
        medio_recepcion: "",
        situacion: "",
        compromisos: "",
        recomendaciones: "",
        estado_final: "",
        firma1: "",
        firma2: "",
        firma3: "",
        firma4: "",
        fir_cargo1: "",
        fir_cargo2: "",
        fir_cargo3: "",
        fir_cargo4: "",
        fir_telefono1: "",
        fir_telefono2: "",
        fir_telefono3: "",
        fir_telefono4: "",
        fir_cedula1: "",
        fir_cedula2: "",
        fir_cedula3: "",
        fir_cedula4: "",
        fir_nombre1: "",
        fir_nombre2: "",
        fir_nombre3: "",
        fir_nombre4: "",
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
    actualizarFirmas({ idFirma, firma }) {
      // Actualiza dinámicamente la firma en el formulario
      this.form[idFirma] = firma;
    },
    guardarFormulario() {
      this.isLoading = true;
      // Primero, guardamos las firmas
      if (this.form.firma1 == "" || this.form.firma3 == "") {
        this.isLoading = false;
        this.showToast(
          "Firmas no dilegenciadas. Por favor, complete y guarde las firmas.",
          "danger"
        );
        return;
      }
      //validar que haya llenado campos de firma apoyo y atendido
      if (
        this.form.fir_cargo1 == "" ||
        this.form.fir_cargo3 == "" ||
        this.form.fir_nombre1 == "" ||
        this.form.fir_nombre3 == "" ||
        this.form.fir_telefono1 == "" ||
        this.form.fir_telefono3 == "" ||
        this.form.fir_cedula1 == "" ||
        this.form.fir_cedula3 == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Debe diligenciar los campos de una firma de apoyo y otra firma de atendido.",
          "danger"
        );
        return;
      }
      //validar que haya beneficiarios
      if (
        this.form.municipio == "" ||
        this.form.institucion == "" ||
        this.form.sede == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Faltan datos de institucion. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      if (this.form.num_visita == "" || this.form.tipo_visita == "") {
        this.isLoading = false;
        this.showToast(
          "Faltan datos de visita. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
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
      this.resetForm();
    },
    async enviarFormularioAlServidor() {
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        // Convertir form a Multipart
        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          if (key !== "files") {
            formData.append(key, this.form[key]);
          }
        });
        this.form.files.forEach((fileObj, index) => {
          formData.append(`files[${index}]`, fileObj.file);
        });

        // Enviar datos con una solicitud POST
        const response = await axios.post(`${apiUrl}/pqrs`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        if (response.status === 201) {
          this.showToast(
            "Formulario de verificación de materia prima guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast("No se pudo enviar el formulario de PQRS", "danger");
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.form = {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        hora_inicio: "",
        hora_final: "",
        operador: "",
        contrato: "",
        tipo_visita: "",
        num_visita: "",
        modalidad: "",
        num_programados: "",
        num_atendidos: "",
        descripcion: "",
        fechaReporte: "",
        medio_recepcion: "",
        situacion: "",
        compromisos: "",
        recomendaciones: "",
        estado_final: "",
        firma1: "",
        firma2: "",
        firma3: "",
        firma4: "",
        fir_cargo1: "",
        fir_cargo2: "",
        fir_cargo3: "",
        fir_cargo4: "",
        fir_telefono1: "",
        fir_telefono2: "",
        fir_telefono3: "",
        fir_telefono4: "",
        fir_cedula1: "",
        fir_cedula2: "",
        fir_cedula3: "",
        fir_cedula4: "",
        fir_nombre1: "",
        fir_nombre2: "",
        fir_nombre3: "",
        fir_nombre4: "",
        files: [],
      };
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
