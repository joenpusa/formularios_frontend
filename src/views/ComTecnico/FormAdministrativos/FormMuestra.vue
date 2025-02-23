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
                Toma de muestra carne de {{ form.tipo }}
              </li>
            </ol>
          </nav>
          <h2 class="text-uppercase">
            TOMA DE MUESTRA PRODUCTO CARNE DE {{ form.tipo }}
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-1">
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
              <label class="form-label">Operador:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.operador"
                required
              />
            </div>

            <div class="col-md-4">
              <label class="form-label">N° Contrato:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contrato"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Municipio:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>

            <div class="col-md-4">
              <label class="form-label">Dirección:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.direccion"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Fecha:</label>
              <input
                type="date"
                class="form-control"
                v-model="form.fecha_visita"
                required
              />
            </div>

            <div class="col-md-4">
              <label class="form-label">Producto:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.producto"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label"
                >Establecimiento Educativo al que pertenece la Muestra:</label
              >
              <input
                type="text"
                class="form-control"
                v-model="form.institucion"
                required
              />
            </div>

            <div class="col-md-4">
              <label class="form-label">Hora Toma de Muestra:</label>
              <input
                type="time"
                class="form-control"
                v-model="form.hora"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Cantidad según Kardex:</label>
              <input
                type="number"
                class="form-control"
                v-model="form.cantidad_kardex"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label"
                >Cantidad de Toma de Muestra en Sitio:</label
              >
              <input
                type="number"
                class="form-control"
                v-model="form.cantidad_muestra"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Nombre del operador:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.nombre_operador"
                required
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">
            PROPIEDADES ORGANOLEPTICAS CARNE DE {{ form.tipo }}
          </h5>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">OLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.olor"
                />
                <label class="form-check-label"
                  >Caracteristico propio de la Especie</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.olor"
                />
                <label class="form-check-label" v-if="form.tipo === 'pollo'">
                  fuerte, hedor agrio o similar al azufre
                </label>
                <label class="form-check-label" v-else-if="form.tipo === 'res'">
                  No Caracteristico, fuerte, fetido, amoniaco
                </label>
                <label
                  class="form-check-label"
                  v-else-if="form.tipo === 'cerdo'"
                >
                  No Caracteristico, fuerte, fetido, amoniaco
                </label>
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_olor"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">COLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.color"
                />
                <label class="form-check-label" v-if="form.tipo === 'pollo'">
                  Rosado blanquesino, tonalidad amarillenta
                </label>
                <label class="form-check-label" v-else-if="form.tipo === 'res'">
                  Caracteristico rojo cerezo brillante
                </label>
                <label
                  class="form-check-label"
                  v-else-if="form.tipo === 'cerdo'"
                >
                  Porcion de carne rosado blanquesino
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.color"
                />
                <label class="form-check-label" v-if="form.tipo === 'pollo'">
                  tonalidades gris verdoso
                </label>
                <label class="form-check-label" v-else-if="form.tipo === 'res'">
                  tonalidades oscuras, verdosas, azuladas
                </label>
                <label
                  class="form-check-label"
                  v-else-if="form.tipo === 'cerdo'"
                >
                  tonalidades gris verdoso o azulado
                </label>
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_color"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">TEXTURA:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="firme"
                  v-model="form.textura"
                />
                <label class="form-check-label" v-if="form.tipo === 'pollo'">
                  Firme al tacto, piel adherida al musculo
                </label>
                <label class="form-check-label" v-else-if="form.tipo === 'res'">
                  Firme al tacto
                </label>
                <label
                  class="form-check-label"
                  v-else-if="form.tipo === 'cerdo'"
                >
                  Firme al tacto, ligeramente humeda
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="pegajosa"
                  v-model="form.textura"
                />
                <label class="form-check-label"
                  >Textura pegajosa, viscosa o babosa</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_textura"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">
            ALMACENAMIENTO - TEMPERATURAS DE CONSERVACIÓN (CARNE DE
            {{ form.tipo }})
          </h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label class="form-label">Cuarto Frio:</label>
              <input type="text" class="form-control" v-model="form.cuarto" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Tanque:</label>
              <input type="text" class="form-control" v-model="form.tanque" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Nevera:</label>
              <input type="text" class="form-control" v-model="form.nevera" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Caba:</label>
              <input type="text" class="form-control" v-model="form.caba" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">T° Refrigeración:</label>
              <input
                type="number"
                step="any"
                class="form-control"
                v-model="form.temp_ref"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">T° Congelación:</label>
              <input
                type="number"
                step="any"
                class="form-control"
                v-model="form.temp_con"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Cantidad Producto Almacenado:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cantidad_alm"
              />
            </div>
          </div>
          <div class="border rounded p-3 mb-3">
            <h5 class="mt-3 mb-2">
              Agregar fila Rotulado/Etiquetado carne de {{ form.tipo }}
            </h5>
            <div class="row mb-3">
              <div class="col-md-3">
                <label class="form-label">MARCA</label>
                <input type="text" class="form-control" v-model="marca" />
              </div>
              <div class="col-md-3">
                <label class="form-label">CONTENIDO NETO</label>
                <input type="text" class="form-control" v-model="contenido" />
              </div>
              <div class="col-md-3">
                <label class="form-label">DIRECCION / LUGAR PROCEDENCIA</label>
                <input type="text" class="form-control" v-model="direccion" />
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
                >
                <input type="text" class="form-control" v-model="lote" />
              </div>
              <div class="col-md-3">
                <label class="form-label">FECHA DE VENCIMIENTO</label>
                <input type="date" class="form-control" v-model="fecha" />
              </div>
              <div class="col-md-9">
                <label class="form-label">OBSERVACION</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="observaciones"
                />
              </div>
              <div class="col-md-12 mt-3">
                <button
                  type="button"
                  class="btn btn-secondary mb-2"
                  @click="agregarFila"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div class="row mb-2">
            <table class="table table-bordered text-center">
              <thead class="bg-primary-lighter">
                <tr>
                  <th colspan="6">ROTULADO Y/O ETIQUETADO</th>
                </tr>
                <tr class="bg-light">
                  <th>MARCA</th>
                  <th>CONTENIDO NETO</th>
                  <th>DIRECCIÓN / LUGAR PROCEDENCIA</th>
                  <th>LOTE - FECHA EMPACADO - FECHA DE DESPACHO</th>
                  <th>FECHA DE VENCIMIENTO</th>
                  <th>OBSERVACIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fila, index) in form.filas" :key="index">
                  <td>{{ fila.marca }}</td>
                  <td>{{ fila.contenido }}</td>
                  <td>{{ fila.direccion }}</td>
                  <td>{{ fila.lote }}</td>
                  <td>{{ fila.fecha }}</td>
                  <td>{{ fila.observaciones }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mb-1">
            <label class="form-label">OBSERVACIONES GENERALES</label>
            <textarea
              class="form-control"
              rows="4"
              v-model="form.observaciones"
            ></textarea>
          </div>

          <div class="row mb-1">
            <div class="col-6 mb-1">
              <h4>Visita atendida por:</h4>
              <SignaturePad
                idFirma="firma1"
                :varFirma="form.firma1"
                @firmas-updated="actualizarFirmas"
              />
              <label class="form-label">Nombre:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.nombre_atiende"
                required
              />

              <label class="form-label">Cargo:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cargo_atiende"
                required
              />

              <label class="form-label">N° de Identificación:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cedula_atiende"
                required
              />

              <label class="form-label">Telefono:</label>
              <input
                type="tel"
                class="form-control"
                v-model="form.telefono_atiende"
                required
              />
            </div>
            <div class="col-6 mb-1">
              <h4>Visita realizada por:</h4>
              <SignaturePad
                idFirma="firma2"
                :varFirma="form.firma2"
                @firmas-updated="actualizarFirmas"
              />
              <label class="form-label">Nombre:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.nombre_apoyo"
                required
              />

              <label class="form-label">Cargo:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cargo_apoyo"
                required
              />

              <label class="form-label">N° de Identificación:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cedula_apoyo"
                required
              />

              <label class="form-label">Telefono:</label>
              <input
                type="tel"
                class="form-control"
                v-model="form.telefono_apoyo"
                required
              />
            </div>
          </div>
          <!-- Componente de carga de archivos -->
          <FileUploader :files="form.files" @files-updated="updateFiles" />
          <div class="col-12 mt-2">
            <button type="submit" class="btn btn-primary">Guardar</button>
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

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    SignaturePad,
    MunicipioSelect,
    FileUploader,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      // Input para tabla temporal
      marca: "",
      contenido: "",
      direccion: "",
      lote: "",
      fecha: "",
      observaciones: "",
      filas: [], //filas de la tabla
      form: {
        tipo: this.$route.params.tipo,
        etc: "Norte de Santander",
        operador: "",
        contrato: "",
        municipio: "",
        direccion: "",
        fecha_visita: "",
        producto: "",
        institucion: "",
        hora: "",
        cantidad_kardex: "",
        cantidad_muestra: "",
        nombre_operador: "",
        olor: "",
        color: "",
        textura: "",
        obs_olor: "",
        obs_color: "",
        obs_textura: "",
        cuarto: "",
        tanque: "",
        nevera: "",
        caba: "",
        temp_ref: "",
        temp_con: "",
        cantidad_alm: "",
        observaciones: "",
        firma1: "",
        firma2: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        files: [],
        filas: [],
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
      if (
        this.marca &&
        this.contenido &&
        this.direccion &&
        this.lote &&
        this.fecha
      ) {
        // Agregar una nueva fila con los valores ingresados
        this.form.filas.push({
          marca: this.marca,
          contenido: this.contenido,
          direccion: this.direccion,
          lote: this.lote,
          fecha: this.fecha,
          observaciones: this.observaciones,
        });

        // Limpiar los campos después de agregar
        this.marca = "";
        this.contenido = "";
        this.direccion = "";
        this.lote = "";
        this.fecha = "";
        this.observaciones = "";
      } else {
        this.showToast(
          "Por favor, complete todos los campos antes de agregar.",
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
      // validar que haya seleccionado archivos
      if (this.form.files.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan archivos. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      if (this.form.filas.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Debe registrar al menos un rotulado. Por favor, complete los campos.",
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
        this.isLoading = true;
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
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
          `${apiUrl}/ct_toma_muestras`,
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
            "Formulario de toma de muestra guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast("No se pudo enviar el formulario" + error, "danger");
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.form = {
        tipo: this.$route.params.tipo,
        etc: "Norte de Santander",
        operador: "",
        contrato: "",
        municipio: "",
        direccion: "",
        fecha_visita: "",
        producto: "",
        institucion: "",
        hora: "",
        cantidad_kardex: "",
        cantidad_muestra: "",
        nombre_operador: "",
        olor: "",
        color: "",
        textura: "",
        obs_olor: "",
        obs_color: "",
        obs_textura: "",
        cuarto: "",
        tanque: "",
        nevera: "",
        caba: "",
        temp_ref: "",
        temp_con: "",
        cantidad_alm: "",
        observaciones: "",
        firma1: "",
        firma2: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        files: [],
        filas: [],
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
