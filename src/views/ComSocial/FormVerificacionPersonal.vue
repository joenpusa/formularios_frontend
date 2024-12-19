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
          <h2>Formulario de verificación personal manipulador de alimentos</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">ETC </label>
              <input
                class="form-control"
                type="text"
                value="Norte de Santander"
                disabled
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Fecha visita </label>
              <input
                class="form-control"
                type="date"
                v-model="form.fechaVisita"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Minicipio </label>
              <select class="form-select" v-model="form.municipio">
                <option value="">Abrego</option>
                <option value="">Arboledas</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Instutción educativa </label>
              <input
                class="form-control"
                type="text"
                v-model="form.institucion"
              />
            </div>

            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Operador </label>
              <input class="form-control" type="text" v-model="form.operador" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">N° contrato </label>
              <input class="form-control" type="text" v-model="form.contrato" />
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <label class="form-label"
                >Digite cada uno de los campos con la información de cada una de
                las Sedes que conforman el Establecimiento Educativo Principal.
              </label>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <div class="row g-3">
                <div class="col-sm-9">
                  <label class="form-label">Nombre de la sede educativa</label>
                  <input
                    v-model="nombreSede"
                    class="form-control"
                    type="text"
                  />
                </div>
                <div class="col-sm-3">
                  <label class="form-label">Modalidad de atención</label>
                  <select class="form-select" v-model="modalidad">
                    <option value="RPS">RPS</option>
                    <option value="CCT">CCT</option>
                    <option value="RI">RI</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <label class="form-label">Num. total manipuladores RPS</label>
                  <input v-model="rps1" class="form-control" type="number" />
                </div>
                <div class="col-sm-4">
                  <label class="form-label">Num. total manipuladores CCT</label>
                  <input v-model="cct1" class="form-control" type="number" />
                </div>
                <div class="col-sm-4">
                  <label class="form-label">Num. total manipuladores RI</label>
                  <input v-model="ri1" class="form-control" type="number" />
                </div>
                <div class="col-sm-4">
                  <label class="form-label"
                    >Num. de manipuladores padres RPS</label
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
                    >Num. de manipuladores padres RI</label
                  >
                  <input v-model="ri2" class="form-control" type="number" />
                </div>
                <div class="col-sm-12">
                  <button
                    type="button"
                    class="btn btn-success"
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
                    <th scope="col">RPS</th>
                    <th scope="col">CCT</th>
                    <th scope="col">RI</th>
                    <th scope="col">RPS</th>
                    <th scope="col">CCT</th>
                    <th scope="col">RI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fila, index) in filas" :key="index">
                    <td>{{ fila.nombreSede }}</td>
                    <td>{{ fila.modalidad }}</td>
                    <td>{{ fila.rps1 }}</td>
                    <td>{{ fila.cct1 }}</td>
                    <td>{{ fila.ri1 }}</td>
                    <td>{{ fila.rps2 }}</td>
                    <td>{{ fila.cct2 }}</td>
                    <td>{{ fila.ri2 }}</td>
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
                  <input class="form-control" type="text" placeholder="Firma" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" />
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
                  <input class="form-control" type="text" placeholder="Firma" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>

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
import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      // Input para tabla temporal
      nombreSede: "",
      modalidad: "",
      rps1: "",
      cct1: "",
      ri1: "",
      rps2: "",
      cct2: "",
      ri2: "",
      // fin tabla temporal
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
    agregarFila() {
      if (
        this.nombreSede &&
        this.modalidad &&
        this.rps1 &&
        this.cct1 &&
        this.ri1 &&
        this.rps2 &&
        this.cct2 &&
        this.ri2
      ) {
        // Agregar una nueva fila con los valores ingresados
        this.filas.push({
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
        this.rps1 = "";
        this.cct1 = "";
        this.ri1 = "";
        this.rps2 = "";
        this.cct2 = "";
        this.ri2 = "";
      } else {
        this.showToast(
          "Por favor, complete ambos campos antes de agregar sede.",
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
