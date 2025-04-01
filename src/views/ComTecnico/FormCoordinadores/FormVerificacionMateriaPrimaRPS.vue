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
                Formato de verificación de materia prima ración para preparar en
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
          <!-- Header Information -->
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">ETC:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Fecha de la visita:</label>
              <input
                type="date"
                class="form-control"
                id="fechaVisita"
                v-model="form.fecha_visita"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="municipio" class="form-label">Municipio:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="institucionEducativa" class="form-label"
                >Institución Educativa:</label
              >
              <InstitucionSelect
                v-model="form.institucion"
                :municipio-id="form.municipio"
              />
            </div>
            <div class="col-md-6">
              <label for="sedeEducativa" class="form-label"
                >Sede Educativa:</label
              >
              <SedeSelect
                v-model="form.sede"
                :institucion-id="form.institucion"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <label for="horaInicial" class="form-label">Hora Inicial:</label>
              <input
                type="time"
                class="form-control"
                id="horaInicial"
                v-model="form.hora_inicial"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="horaFinal" class="form-label">Hora Final:</label>
              <input
                type="time"
                class="form-control"
                id="horaFinal"
                v-model="form.hora_final"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                class="form-control"
                id="operador"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="numeroContrato" class="form-label"
                >N° Contrato:</label
              >
              <input
                type="text"
                class="form-control"
                id="numeroContrato"
                v-model="form.contrato"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3">
              <label for="tipoVisita" class="form-label">Tipo de visita:</label>
              <select
                class="form-select"
                id="tipoVisita"
                v-model="form.tipo_visita"
                required
              >
                <option value="Técnica">Técnica</option>
                <option value="Verificación ETA">Verificación ETA</option>
                <option value="SPQR">SPQR</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="numeroVisita" class="form-label"
                >Número de visita:</label
              >
              <select
                class="form-select"
                id="numeroVisita"
                v-model="form.numero_visita"
                required
              >
                <option value="1ra">1ra</option>
                <option value="2da">2da</option>
                <option value="3ra">3ra</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="numeroBeneficiarios" class="form-label"
                >N° Beneficiarios:</label
              >
              <input
                type="number"
                class="form-control"
                id="numeroBeneficiarios"
                v-model="form.num_beneficiarios"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="descripcionMenu" class="form-label"
                >Descripción del Menú:</label
              >
              <input
                type="text"
                class="form-control"
                id="descripcionMenu"
                v-model="form.descripcion_menu"
                required
              />
            </div>
            <div class="col-md-12">
              Nota 1: La ETC determina validar todas las materias primas
              suministradas por el operador para la ejecucion de la semana
              comprendida entre el:
              <input
                type="text"
                class="form-control"
                v-model="form.nota1"
                required
              />
            </div>
            <div class="col-md-12">
              Nota 2: Para evaluar la temperatura y características
              organolépticas se debe tener en cuenta las fichas técnicas
              determinadas en el anexo de calidad e inocuidad de la Resolución
              00335 de 2021.
            </div>
          </div>
          <div class="border rounded p-3 mb-3">
            <h5>Agregar fila en verificación de materia prima</h5>
            <div class="row">
              <div class="col-md-3">
                <label class="form-label">Materia prima</label>
                <select class="form-select" v-model="material">
                  <option
                    v-for="(i, index) in alimentos"
                    :key="index"
                    :value="i"
                  >
                    {{ i }}
                  </option>
                </select>
                <!-- Mostrar input si el usuario selecciona "Otro" -->
                <input
                  v-if="material === 'Otro'"
                  type="text"
                  class="form-control mt-2"
                  placeholder="Especificar materia prima"
                  v-model="materialOtro"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote</label>
                <input type="text" class="form-control" v-model="lote" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha</label>
                <input type="date" class="form-control" v-model="fecha" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Unidad</label>
                <input type="text" class="form-control" v-model="unidad" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Temperatura</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="temperatura"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Cantidad kardex</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="cantidadKardex"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Cantidad encontrada</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="cantidadEncontrada"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Cantidad faltante</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="cantidadFaltante"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Color</label>
                <input type="text" class="form-control" v-model="color" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Olor</label>
                <input type="text" class="form-control" v-model="olor" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Textura</label>
                <input type="text" class="form-control" v-model="textura" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Cumplimiento</label>
                <select class="form-select" v-model="cumplimiento">
                  <option value="cumple">Cumple</option>
                  <option value="noCumple">No cumple</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3">
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
          <!-- Raw Material Verification Table -->
          <div class="table-responsive mb-3">
            <table class="table table-bordered">
              <thead class="table-primary text-center">
                <tr>
                  <th colspan="12" class="text-center">
                    Verificación de materia prima
                  </th>
                </tr>
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
              <tbody class="text-center">
                <tr v-for="(item, index) in form.filas" :key="index">
                  <td>
                    {{ item.nombre }}
                  </td>
                  <td>
                    {{ item.lote }}
                  </td>
                  <td>
                    {{ item.fecha }}
                  </td>
                  <td>
                    {{ item.unidadMedida }}
                  </td>
                  <td>
                    {{ item.temperatura }}
                  </td>
                  <td>
                    {{ item.cantidadKardex }}
                  </td>
                  <td>
                    {{ item.cantidadEncontrada }}
                  </td>
                  <td>
                    {{ item.cantidadFaltante }}
                  </td>
                  <td>
                    {{ item.color }}
                  </td>
                  <td>
                    {{ item.olor }}
                  </td>
                  <td>
                    {{ item.textura }}
                  </td>
                  <td>
                    {{ item.cumplimiento }}
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    INDICADOR: No de materias primas que cumplen los criterios
                    de calidad de aceptación / Número de materias verificadas
                  </td>
                  <td colspan="3">Porcentaje de cumplimiento:</td>
                  <td colspan="3">
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      v-model="form.porcentajeCumplimiento"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Observations -->
          <div class="mb-3">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              class="form-control"
              id="observaciones"
              v-model="form.observaciones"
              required
              rows="3"
            ></textarea>
          </div>

          <!-- Signatures -->
          <div class="row mb-3">
            <div class="col-md-6">
              <h5>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h5>
              <div>
                <SignaturePad
                  idFirma="firma1"
                  :varFirma="form.firma1"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div>
                <label class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombreEquioPAE"
                  v-model="form.nombre_apoyo"
                  required
                />
              </div>
              <div>
                <label class="form-label">Documento:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cedula_apoyo"
                  required
                />
              </div>
              <div>
                <label class="form-label">Cargo:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cargo_apoyo"
                  required
                />
              </div>
              <div>
                <label class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  class="form-control"
                  v-model="form.telefono_apoyo"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <h5>FIRMA QUIEN ATIENDE LA VISITA</h5>
              <div>
                <SignaturePad
                  idFirma="firma2"
                  :varFirma="form.firma2"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div>
                <label class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.nombre_atiende"
                  required
                />
              </div>
              <div>
                <label class="form-label">Documento:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cedula_atiende"
                  required
                />
              </div>
              <div>
                <label class="form-label">Cargo:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.cargo_atiende"
                  required
                />
              </div>
              <div>
                <label class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  class="form-control"
                  v-model="form.telefono_atiende"
                  required
                />
              </div>
            </div>
          </div>
          <!-- Componente de carga de archivos -->
          <FileUploader :files="form.files" @files-updated="updateFiles" />
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
import FileUploader from "@/components/FileUploader.vue";
import InstitucionSelect from "@/components/InstitucionSelect.vue";
import SedeSelect from "@/components/SedeSelect.vue";

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
      // Input para tabla temporal
      material: "",
      materialOtro: "",
      lote: "",
      fecha: "",
      unidad: "",
      temperatura: "",
      cantidadKardex: "",
      cantidadEncontrada: "",
      cantidadFaltante: "",
      color: "",
      olor: "",
      textura: "",
      cumplimiento: "",

      form: {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        hora_inicial: "",
        hora_final: "",
        operador: "",
        contrato: "",
        tipo_visita: "",
        numero_visita: "",
        num_beneficiarios: 0,
        descripcion_menu: "",
        observaciones: "",
        porcentajeCumplimiento: 0,
        files: [],
        filas: [],
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
        nota1: "",
      },
      alimentos: [
        "Pechuga (pollo)",
        "Carne (res-cerdo)",
        "Huevo",
        "Leguminosas",
        "Arroz",
        "Azúcar",
        "Aceite",
        "Leche en polvo",
        "Cebolla cabezona",
        "Tomate",
        "Papa-yuca",
        "Remolacha",
        "Zanahoria",
        "Ahuyama",
        "Limón-naranja",
        "Otro",
      ],
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
      // Agregar una nueva fila con los valores ingresados
      if (this.materialOtro) {
        this.material = this.materialOtro;
      }
      this.form.filas.push({
        nombre: this.material,
        lote: this.lote || "N/A",
        fecha: this.fecha || "N/A",
        unidadMedida: this.unidad || "N/A",
        temperatura: this.temperatura || "N/A",
        cantidadKardex: this.cantidadKardex || "N/A",
        cantidadEncontrada: this.cantidadEncontrada || "N/A",
        cantidadFaltante: this.cantidadFaltante || "N/A",
        color: this.color || "N/A",
        olor: this.olor || "N/A",
        textura: this.textura || "N/A",
        cumplimiento: this.cumplimiento,
      });
      // Limpiar los campos después de agregar
      this.material = "";
      this.materialOtro = "";
      this.lote = "";
      this.fecha = "";
      this.unidad = "";
      this.temperatura = "";
      this.cantidadKardex = "";
      this.cantidadEncontrada = "";
      this.cantidadFaltante = "";
      this.color = "";
      this.olor = "";
      this.textura = "";
      this.cumplimiento = "";
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
      // validar que haya seleccionado archivos
      if (this.form.files.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan archivos. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      if (
        this.form.nombre_apoyo == "" ||
        this.form.cedula_apoyo == "" ||
        this.form.telefono_apoyo == "" ||
        this.form.cargo_apoyo == "" ||
        this.form.nombre_atiende == "" ||
        this.form.cedula_atiende == "" ||
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
      if (
        this.form.municipio == "" ||
        this.form.institucion == "" ||
        this.form.sede == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Faltan datos de municipio, institucion o sede. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      if (this.form.filas.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan diligenciar materias primas. Por favor, complete los campos.",
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
          `${apiUrl}/ct_verificacion_materia_prima_ps`,
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
            "Formulario de verificación de materia prima guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente tecnico, verificación de materia prima",
          "danger"
        );
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
        hora_inicial: "",
        hora_final: "",
        operador: "",
        contrato: "",
        tipo_visita: "",
        numero_visita: "",
        num_beneficiarios: 0,
        descripcion_menu: "",
        observaciones: "",
        porcentajeCumplimiento: 0,
        files: [],
        filas: [],
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
        nota1: "",
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
