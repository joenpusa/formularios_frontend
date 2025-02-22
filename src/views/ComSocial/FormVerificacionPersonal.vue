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
                    v-for="(fila, index) in form.filas"
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
import FileUploader from "@/components/FileUploader.vue";
export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    SignaturePad,
    MunicipioSelect,
    InstitucionSelect,
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
      form: {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        operador: "",
        contrato: "",
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
      if (this.nombreSede && this.modalidad) {
        // Agregar una nueva fila con los valores ingresados
        this.form.filas.push({
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
      if (this.form.filas.length <= 0) {
        this.isLoading = false;
        this.showToast("Faltan las sedes. Por favor, digitelas.", "danger");
        return;
      }
      // validar que haya seleccionado archivos
      /*
      if (this.form.files.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan archivos. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      */
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
          `${apiUrl}/social_verificacion`,
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
            "Formulario social de verificacion de personal guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente social verificación de personal",
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
        operador: "",
        contrato: "",
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
      };
    },
  },
  computed: {
    totalRps1() {
      return this.form.filas.reduce(
        (total, fila) => total + Number(fila.rps1 || 0),
        0
      );
    },
    totalCct1() {
      return this.form.filas.reduce(
        (total, fila) => total + Number(fila.cct1 || 0),
        0
      );
    },
    totalRi1() {
      return this.form.filas.reduce(
        (total, fila) => total + Number(fila.ri1 || 0),
        0
      );
    },
    totalRps2() {
      return this.form.filas.reduce(
        (total, fila) => total + Number(fila.rps2 || 0),
        0
      );
    },
    totalCct2() {
      return this.form.filas.reduce(
        (total, fila) => total + Number(fila.cct2 || 0),
        0
      );
    },
    totalRi2() {
      return this.form.filas.reduce(
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
