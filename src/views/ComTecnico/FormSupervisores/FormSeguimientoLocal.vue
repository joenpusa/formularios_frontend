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
                Formato de reporte diario de visitas de seguimiento local al
                programa de alimentación escolar
              </li>
            </ol>
          </nav>
          <h2>
            FORMATO DE REPORTE DIARIO DE VISITAS DE SEGUIMIENTO LOCAL AL
            PROGRAMA DE ALIMENTACION ESCOLAR
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">Fecha de la visita:</label>
              <input
                type="date"
                class="form-control"
                v-model="form.fecha_visita"
                required
              />
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
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Operador:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.operador"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">N° Contrato:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contrato"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Supervisor:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.supervisor"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">Institución Educativa:</label>
              <InstitucionSelect
                v-model="form.institucion"
                :municipio-id="form.municipio"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Sede Educativa:</label>
              <SedeSelect
                v-model="form.sede"
                :institucion-id="form.institucion"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">N° Beneficiarios atendidos:</label>
              <input
                type="number"
                class="form-control"
                v-model="form.num_beneficiarios"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Hora de la visita Inicial:</label>
              <input
                type="time"
                class="form-control"
                v-model="form.hora_inicio"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Hora de la visita Final:</label>
              <input
                type="time"
                class="form-control"
                v-model="form.hora_fin"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="modalidad1"
                  v-model="form.chk_ps"
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
                  v-model="form.chk_cct"
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
                  v-model="form.chk_i"
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
              <tr>
                <td class="text-center">1</td>
                <td>
                  <label
                    >El personal manipulador usa la indumentaria mínima
                    requerida para manipular los alimentos.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_1" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_1" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_1" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td>
                  <label
                    >El personal manipulador se lava las manos después de cada
                    cambio de actividad durante la operación del
                    programa.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_2" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_2" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_2" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td>
                  <label
                    >La presentación del personal manipulador es adecuada (no se
                    observa esmalte en las uñas, no usa joyas u otros
                    accesorios).</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_3" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_3" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_3" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td>
                  <label
                    >El personal manipulador mantiene el cabello recogido y
                    cubierto totalmente mediante un gorro.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_4" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_4" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_4" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td>
                  <label
                    >El personal manipulador mantiene estricta limpieza e
                    higiene en todas las actividades de operación del
                    programa.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_5" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_5" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_5" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">6</td>
                <td>
                  <label
                    >El personal manipulador utiliza el tapabocas cubriendo
                    totalmente la nariz, boca y menton durante todos los
                    procesos de manipulación de alimentos.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_6" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_6" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_6" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">7</td>
                <td>
                  <label
                    >Los alimentos almacenados cumplen con los requisitos de
                    rotulado según la Resolución 5109/2005.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_7" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_7" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_7" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">8</td>
                <td>
                  <label
                    >Los alimentos se almacenan correctamente y se mantienen las
                    características del alimento (congelación, refrigeración,
                    ambiente).</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_8" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_8" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_8" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">9</td>
                <td>
                  <label
                    >Se evidencia que los alimentos almacenados y/o distribuidos
                    a los beneficiarios presentan condiciones de calidad aptas
                    para el consumo.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_9" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_9" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_9" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">10</td>
                <td>
                  <label
                    >Los alimentos se entregan completamente a los beneficiarios
                    sin que se genere desperdicio por alimentos
                    sobrantes.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_10" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_10" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_10" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">11</td>
                <td>
                  <label
                    >Los alimentos son consumidos únicamente por los estudiantes
                    beneficiarios del programa.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_11" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_11" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_11" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">12</td>
                <td>
                  <label
                    >La distribución de los alimentos se realiza de manera
                    ordenada y se cuenta con el apoyo por parte de la
                    institución educativa.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_12" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_12" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_12" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">13</td>
                <td>
                  <label
                    >Se tiene conocimiento de los canales de atención al
                    ciudadano que dispone la Entidad Territorial Certificada
                    para la recepción de Sugerencias, Peticiones, Quejas o
                    Reclamos.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_13" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_13" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_13" value="No aplica" />
                </td>
              </tr>
              <tr>
                <td class="text-center">14</td>
                <td>
                  <label
                    >Se evidencia que los equipos suministrados por la ETC se
                    les está dando uso exclusivo para la ejecución y operación
                    del Programa de Alimentación Escolar PAE.</label
                  >
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_14" value="Si" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_14" value="No" />
                </td>
                <td class="text-center">
                  <input type="radio" v-model="form.pre_14" value="No aplica" />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="mb-3">
            <label class="form-label">Observaciones Generales:</label>
            <textarea
              class="form-control"
              rows="4"
              v-model="form.observaciones"
            ></textarea>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <h5>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h5>
              <SignaturePad
                idFirma="firma1"
                :varFirma="form.firma1"
                @firmas-updated="actualizarFirmas"
              />
              <div class="mb-2">
                <label class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.nombre_apoyo"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Cédula:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cedula_apoyo"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Cargo:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cargo_apoyo"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  class="form-control"
                  v-model="form.telefono_apoyo"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h5>FIRMA QUIEN ATIENDE LA VISITA</h5>
              <SignaturePad
                idFirma="firma2"
                :varFirma="form.firma2"
                @firmas-updated="actualizarFirmas"
              />
              <div class="mb-2">
                <label class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.nombre_atiende"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Cédula:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cedula_atiende"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Cargo:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cargo_atiende"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  class="form-control"
                  v-model="form.telefono_atiende"
                />
              </div>
            </div>
          </div>
          <!-- Componente de carga de archivos -->
          <FileUploader :files="form.files" @files-updated="updateFiles" />
          <button type="submit" class="btn btn-primary">Enviar Reporte</button>
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
      nuevoNombre: "", // Input para el nombre
      nuevoGrado: "", // Input para el grado
      filas: [], //filas de la tabla
      form: {
        pre_1: "",
        pre_2: "",
        pre_3: "",
        pre_4: "",
        pre_5: "",
        pre_6: "",
        pre_7: "",
        pre_8: "",
        pre_9: "",
        pre_10: "",
        pre_11: "",
        pre_12: "",
        pre_13: "",
        pre_14: "",
        observaciones: "",
        files: [],
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        etc: "Norte de Santander",
        operador: "",
        contrato: "",
        supervisor: "",
        num_beneficiarios: "",
        hora_inicio: "",
        hora_fin: "",
        chk_ps: "",
        chk_i: "",
        chk_cct: "",
        firma1: "",
        firma2: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
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
      if (this.form.firma1 == "" || this.form.firma2 == "") {
        this.isLoading = false;
        this.showToast(
          "Firmas no dilegenciadas. Por favor, complete y guarde las firmas.",
          "danger"
        );
        return;
      }
      //validar que haya llenado campos de firma apoyo y atendido
      if (
        this.form.cedula_apoyo == "" ||
        this.form.nombre_apoyo == "" ||
        this.form.telefono_apoyo == "" ||
        this.form.cargo_apoyo == "" ||
        this.form.cedula_atiende == "" ||
        this.form.nombre_atiende == "" ||
        this.form.telefono_atiende == "" ||
        this.form.cargo_atiende == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Faltan datos de las firmas. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      //validar que haya beneficiarios
      if (this.form.num_beneficiarios == 0) {
        this.isLoading = false;
        this.showToast("Faltan beneficiarios. Por favor, digitelos.", "danger");
        return;
      }
      //validar que haya seleccionado archivos
      if (this.form.files.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan archivos. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
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
      if (
        this.form.chk_ps == "" &&
        this.form.chk_i == "" &&
        this.form.chk_cct == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Faltan modalidades. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      if (
        this.form.pre_1 == "" ||
        this.form.pre_2 == "" ||
        this.form.pre_3 == "" ||
        this.form.pre_4 == "" ||
        this.form.pre_5 == "" ||
        this.form.pre_6 == "" ||
        this.form.pre_7 == "" ||
        this.form.pre_8 == "" ||
        this.form.pre_9 == "" ||
        this.form.pre_10 == "" ||
        this.form.pre_11 == "" ||
        this.form.pre_12 == "" ||
        this.form.pre_13 == "" ||
        this.form.pre_14 == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Faltan aspectos por evaluar. Por favor, complete los campos.",
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
        const response = await axios.post(
          `${apiUrl}/ct_seguimientos_locales`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          this.showToast("Formulario guardado correctamente", "success");
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario seguimiento local",
          "danger"
        );
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.form = {
        pre_1: "",
        pre_2: "",
        pre_3: "",
        pre_4: "",
        pre_5: "",
        pre_6: "",
        pre_7: "",
        pre_8: "",
        pre_9: "",
        pre_10: "",
        pre_11: "",
        pre_12: "",
        pre_13: "",
        pre_14: "",
        files: [],
        observaciones: "",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        etc: "Norte de Santander",
        operador: "",
        contrato: "",
        supervisor: "",
        num_beneficiarios: "",
        hora_inicio: "",
        hora_fin: "",
        chk_ps: "",
        chk_i: "",
        chk_cct: "",
        firma1: "",
        firma2: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
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
