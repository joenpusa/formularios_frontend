<template>
  <LoadingSpinner :isLoading="isLoading" />
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card shadow-lg">
          <div class="card-body">
            <h3 class="card-title text-center">Encuesta de Satisfacción</h3>
            <p class="text-muted text-center">
              Tu opinión es muy importante para nosotros.
            </p>
            <div class="row justify-content-center mb-4">
              <div class="col-md-8">
                <img
                  src="../../../public/img/icons/logo.png"
                  class="card-img-top img-fluid"
                  alt="Encuesta de satisfacción"
                />
                <hr />
              </div>
            </div>

            <form @submit.prevent="guardarFormulario">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Municipio *</label>
                  <MunicipioSelect v-model="form.municipio_id" />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Institución Educativa o Centro Educativo Principal *</label
                  >
                  <InstitucionSelect
                    v-model="form.institucion_id"
                    :municipio-id="form.municipio_id"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Sede Educativa *</label>
                  <SedeSelect
                    v-model="form.sede_id"
                    :institucion-id="form.institucion_id"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Grado Escolar *</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.grado"
                    required
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Tipo de complemento recibido *</label
                  >
                  <select
                    class="form-select"
                    v-model="form.complemento"
                    required
                  >
                    <option value="I">Industrializada (I)</option>
                    <option value="PS">Preparada en Sitio (PS)</option>
                    <option value="CCT">
                      Comida Caliente Transportada (CCT)
                    </option>
                  </select>
                </div>
                <div
                  class="col-md-6 mb-3"
                  v-for="(pregunta, index) in preguntas"
                  :key="index"
                >
                  <label class="form-label">{{ pregunta.texto }}</label>
                  <select
                    class="form-select"
                    v-model="form.respuestas[index]"
                    required
                  >
                    <option
                      v-for="opcion in pregunta.opciones"
                      :key="opcion"
                      :value="opcion"
                    >
                      {{ opcion }}
                    </option>
                  </select>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary m-2">
                    Enviar Encuesta
                  </button>
                  <router-link to="/login" class="btn btn-danger"
                    >Volver al Login</router-link
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import MunicipioSelect from "@/components/MunicipioSelect.vue";
import InstitucionSelect from "@/components/InstitucionSelect.vue";
import SedeSelect from "@/components/SedeSelect.vue";
import axios from "@/axios";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    MunicipioSelect,
    InstitucionSelect,
    SedeSelect,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      form: {
        municipio: "",
        institucion: "",
        sede: "",
        grado: "",
        complemento: "",
        respuestas: [],
      },
      preguntas: [
        {
          texto: "Cómo se siente con el complemento recibido *",
          opciones: ["Muy satisfecho", "Satisfecho", "Poco satisfecho"],
        },
        {
          texto: "Cómo califica el estado en que recibe el complemento *",
          opciones: ["Muy satisfecho", "Satisfecho", "Poco satisfecho"],
        },
        {
          texto: "Cómo califica los tiempos en que recibe el complemento *",
          opciones: ["Muy satisfecho", "Satisfecho", "Poco satisfecho"],
        },
        {
          texto: "El complemento recibido va de acuerdo a sus necesidades *",
          opciones: ["Sí", "No"],
        },
        {
          texto:
            "Cómo califica la calidad de los productos recibidos en el complemento *",
          opciones: ["Muy satisfecho", "Satisfecho", "Poco satisfecho"],
        },
        {
          texto:
            "Cómo califica la atención prestada por el personal manipulador encargado de entregar el complemento *",
          opciones: ["Muy satisfecho", "Satisfecho", "Poco satisfecho"],
        },
      ],
    };
  },
  methods: {
    async guardarFormulario() {
      try {
        this.isLoading = true;

        const payload = {
          municipio_id: this.form.municipio_id, // Enviar el ID, no el nombre
          institucion_id: this.form.institucion_id,
          sede_id: this.form.sede_id,
          grado: this.form.grado,
          complemento: this.form.complemento,
          satisfaccion_complemento: this.form.respuestas[0],
          estado_complemento: this.form.respuestas[1],
          tiempo_complemento: this.form.respuestas[2],
          necesidades_complemento: this.form.respuestas[3],
          calidad_productos: this.form.respuestas[4],
          atencion_personal: this.form.respuestas[5],
        };

        const response = await axios.post("/encuestas", payload);

        if (response.status === 201) {
          this.toastMessage = "Encuesta enviada exitosamente.";
          this.toastType = "success";
        } else {
          this.toastMessage = "Error al enviar la encuesta.";
          this.toastType = "error";
        }
      } catch (error) {
        this.toastMessage =
          "Error al enviar la encuesta: " +
          (error.response?.data?.message || error.message);
        this.toastType = "error";
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
