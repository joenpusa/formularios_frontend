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
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Fecha visita </label>
              <input
                class="form-control"
                type="date"
                v-model="form.fecha_visita"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Minicipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Instutción educativa </label>
              <InstitucionSelect
                v-model="form.institucion"
                :municipio-id="form.municipio"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Sede educativa </label>
              <SedeSelect
                v-model="form.sede"
                :institucion-id="form.institucion"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Operador </label>
              <input
                class="form-control"
                type="text"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">N° contrato </label>
              <input
                class="form-control"
                type="text"
                v-model="form.contrato"
                required
              />
            </div>

            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora inicio</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_inicio"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora fin</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_fin"
                required
              />
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <label class="form-label">Objetivo </label>
              <textarea class="form-control" rows="3" v-model="form.objetivo">
              </textarea>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <label class="form-label">Temática abordada </label>
              <select class="form-select" v-model="form.tematica" required>
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
                  <tr v-for="(fila, index) in form.filas" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ fila.nombre }}</td>
                    <td>{{ fila.grado }}</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="text-end fw-bold">
                      Total de beneficiarios:
                    </td>
                    <td class="text-center fw-bold">{{ form.filas.length }}</td>
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
                    idFirma="firma1"
                    :varFirma="form.firma1"
                    @firmas-updated="actualizarFirmas"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.nombre_apoyo"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cedula_apoyo"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cargo_apoyo"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.telefono_apoyo"
                    required
                  />
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
                    idFirma="firma2"
                    :varFirma="form.firma2"
                    @firmas-updated="actualizarFirmas"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.nombre_atiende"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cedula_atiende"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cargo_atiende"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.telefono_atiende"
                    required
                  />
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

      form: {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        operador: "",
        objetivo:
          "Desarrollar estrategias psicopedagógicas que permitan el fortalecimiento de la cultura de alimentación saludable en la comunidad educativa a través del Programa de Alimentación Escolar.",
        contrato: "",
        num_beneficiarios: 0,
        hora_inicio: "",
        hora_fin: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
        firma1: "",
        firma2: "",
        files: [], //archivos adjuntos
        filas: [], //filas de la tabla
        tematica: "",
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
    agregarFila() {
      if (this.nuevoNombre && this.nuevoGrado) {
        // Agregar una nueva fila con los valores ingresados
        this.form.filas.push({
          nombre: this.nuevoNombre,
          grado: this.nuevoGrado,
        });
        this.form.num_beneficiarios++;

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
      // validar que haya seleccionado archivos
      if (this.form.files.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan archivos. Por favor, complete los campos.",
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
        alert("Sin conexión. El formulario se ha guardado localmente.");
      }
    },
    guardarOffline() {
      // Leer formularios previos de localStorage
      const guardados =
        JSON.parse(localStorage.getItem("formulariosOffline")) || [];
      guardados.push(this.form); // Añadir el formulario actual
      localStorage.setItem("formulariosOffline", JSON.stringify(guardados));
      this.resetForm();
      this.isLoading = false;
    },
    async enviarFormularioAlServidor() {
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        // Convertir form a Multipart
        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          if (key !== "files") {
            if (key === "filas") {
              formData.append(key, JSON.stringify(this.form[key] || [])); // Convierte a JSON
            } else {
              formData.append(key, this.form[key]);
            }
          }
        });
        this.form.files.forEach((fileObj, index) => {
          formData.append(`files[${index}]`, fileObj.file);
        });

        // Enviar datos con una solicitud POST
        const response = await axios.post(
          `${apiUrl}/social_asistencias`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        if (response.status === 201) {
          this.showToast(
            "Formulario de asistencia guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente social asistencia",
          "danger"
        );
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
    resetForm() {
      this.form = {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        operador: "",
        objetivo:
          "Desarrollar estrategias psicopedagógicas que permitan el fortalecimiento de la cultura de alimentación saludable en la comunidad educativa a través del Programa de Alimentación Escolar.",
        contrato: "",
        num_beneficiarios: 0,
        hora_inicio: "",
        hora_fin: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
        tematica: "",
        firma1: "",
        firma2: "",
        files: [], //archivos adjuntos
        filas: [], //filas de la tabla
      };
    },
  },
};
</script>
