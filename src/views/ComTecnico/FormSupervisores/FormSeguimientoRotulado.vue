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
                Formato de seguimiento rotulado y/o etiquetado de los alimentos
              </li>
            </ol>
          </nav>
          <h2>
            FORMATO DE SEGUIMIENTO ROTULADO Y/O ETIQUETADO DE LOS ALIMENTOS
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- Header Information -->
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="etc" class="form-label">ETC:</label>
              <input
                type="text"
                class="form-control"
                id="etc"
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fechaVisita" class="form-label"
                >Fecha de la visita:</label
              >
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
            <div class="col-md-4">
              <label for="horaInicial" class="form-label">Hora Inicial:</label>
              <input
                type="time"
                class="form-control"
                id="horaInicial"
                v-model="form.hora_inicial"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="horaFinal" class="form-label">Hora Final:</label>
              <input
                type="time"
                class="form-control"
                id="horaFinal"
                v-model="form.hora_final"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="modalidad" class="form-label">Modalidad:</label>
              <select
                class="form-select"
                id="modalidad"
                v-model="form.modalidad"
                required
              >
                <option value="Modalidad preparada en sitio">
                  Modalidad preparada en sitio
                </option>
                <option value="Comida Caliente Transportada">
                  Comida Caliente Transportada
                </option>
                <option value="Ración Industrializada">
                  Ración Industrializada
                </option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                class="form-control"
                id="operador"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-md-4">
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
            <div class="col-md-4">
              <label for="supervisor" class="form-label">Supervisor:</label>
              <input
                type="text"
                class="form-control"
                id="supervisor"
                v-model="form.supervisor"
                required
              />
            </div>
          </div>
          <div class="border rounded p-3 mb-3">
            <h5>Agregar fila en tabla de verificación de alimentos</h5>
            <div class="row">
              <div class="col-md-3">
                <label class="form-label">Tipo de alimento</label>
                <select class="form-select" v-model="tipo_alimento">
                  <option value="1">Comida caliente transportada</option>
                  <option value="2">Ración industrializada</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Alimento</label>
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
                  v-if="
                    material === 'Otro' ||
                    material === 'Leguminosas' ||
                    material === 'Cereal' ||
                    material === 'Dulce' ||
                    material === 'Lacteo'
                  "
                  type="text"
                  class="form-control mt-2"
                  placeholder="Especificar alimento"
                  v-model="materialOtro"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Marca</label>
                <input type="text" class="form-control" v-model="marca" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote</label>
                <input type="text" class="form-control" v-model="lote" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha de vencimiento</label>
                <input type="date" class="form-control" v-model="fecha" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Registro</label>
                <input type="text" class="form-control" v-model="registro" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Contenido</label>
                <input type="text" class="form-control" v-model="contenido" />
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Nombre o dirección del fabricante</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="dir_fabricante"
                />
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

          <div>
            <h3 class="mt-4 mb-3">
              Verificación de componentes de ración industrializada
            </h3>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr class="text-center bg-primary-light">
                    <th>Alimento</th>
                    <th>Marca</th>
                    <th>Lote</th>
                    <th>Fecha de vencimiento</th>
                    <th>Registro, permiso, notificación sanitaria</th>
                    <th>Contenido neto</th>
                    <th>Nombre o dirección del fabricante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="7" class="text-center bg-primary-light">
                      Verificación de materia prima de ración para preparar en
                      sitio / Comida caliente transportada
                    </td>
                  </tr>
                  <!-- Filas con tipo_alimento === 1 -->
                  <tr
                    v-for="(item, index) in form.filas.filter(
                      (f) => f.tipo_alimento === '1'
                    )"
                    :key="'tipo1-' + index"
                  >
                    <td>{{ item.material }}</td>
                    <td>{{ item.marca }}</td>
                    <td>{{ item.lote }}</td>
                    <td>{{ item.fecha }}</td>
                    <td>{{ item.registro }}</td>
                    <td>{{ item.contenido }}</td>
                    <td>{{ item.dir_fabricante }}</td>
                  </tr>

                  <!-- Fila con titulo  -->
                  <tr>
                    <td colspan="7" class="text-center bg-primary-light">
                      Verificación de componentes de ración industrializada
                    </td>
                  </tr>

                  <!-- Filas con tipo_alimento === 2 -->
                  <tr
                    v-for="(item, index) in form.filas.filter(
                      (f) => f.tipo_alimento === '2'
                    )"
                    :key="'tipo2-' + index"
                  >
                    <td>{{ item.material }}</td>
                    <td>{{ item.marca }}</td>
                    <td>{{ item.lote }}</td>
                    <td>{{ item.fecha }}</td>
                    <td>{{ item.registro }}</td>
                    <td>{{ item.contenido }}</td>
                    <td>{{ item.dir_fabricante }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Observations -->
          <div class="mb-3">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              class="form-control"
              id="observaciones"
              v-model="form.observaciones"
              rows="3"
            ></textarea>
          </div>

          <!-- Signatures -->
          <div class="row mb-3">
            <div class="col-md-6">
              <h5>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h5>
              <SignaturePad
                idFirma="firma1"
                :varFirma="form.firma1"
                @firmas-updated="actualizarFirmas"
              />
              <div class="mb-2">
                <label for="nombreEquipoPAE" class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombreEquipoPAE"
                  v-model="form.nombre_apoyo"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoEquipoPAE" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="documentoEquipoPAE"
                  v-model="form.cedula_apoyo"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoEquipoPAE" class="form-label">Cargo:</label>
                <input
                  type="text"
                  class="form-control"
                  id="cargoEquipoPAE"
                  v-model="form.cargo_apoyo"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoEquipoPAE" class="form-label"
                  >Teléfono:</label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="telefonoEquipoPAE"
                  v-model="form.telefono_apoyo"
                  required
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
                <label for="nombreAtiendeVisita" class="form-label"
                  >Nombre:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="nombreAtiendeVisita"
                  v-model="form.nombre_atiende"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoAtiendeVisita" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="documentoAtiendeVisita"
                  v-model="form.cedula_atiende"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoAtiendeVisita" class="form-label"
                  >Cargo:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="cargoAtiendeVisita"
                  v-model="form.cargo_atiende"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoAtiendeVisita" class="form-label"
                  >Teléfono:</label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="telefonoAtiendeVisita"
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
      tipo_alimento: "",
      materialOtro: "",
      marca: "",
      lote: "",
      fecha: "",
      registro: "",
      contenido: "",
      dir_fabricante: "",
      form: {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        hora_inicial: "",
        hora_final: "",
        modalidad: "",
        operador: "",
        contrato: "",
        supervisor: "",
        observaciones: "",
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
      },
      alimentos: [
        "Sal",
        "Carne de Res",
        "Espaguetis",
        "Azúcar",
        "Leche en polvo",
        "Pechuga",
        "Carne de Cerdo",
        "Aceite",
        "Arroz",
        "Leguminosas",
        "Cereal",
        "Dulce",
        "Lacteo",
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
        if (this.material !== "Otro") {
          this.material = `${this.material} - ${this.materialOtro}`;
        } else {
          this.material = this.materialOtro;
        }
      }
      this.form.filas.push({
        material: this.material || "N/A",
        tipo_alimento: this.tipo_alimento,
        nombre: this.material || "N/A",
        marca: this.marca || "N/A",
        lote: this.lote || "N/A",
        fecha: this.fecha || "N/A",
        registro: this.registro || "N/A",
        contenido: this.contenido || "N/A",
        dir_fabricante: this.dir_fabricante || "N/A",
      });
      // Limpiar los campos después de agregar
      this.material = "";
      this.materialOtro = "";
      this.lote = "";
      this.fecha = "";
      this.marca = "";
      this.temperatura = "";
      this.registro = "";
      this.contenido = "";
      this.dir_fabricante = "";
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
      //validar municipio, sede, institucion
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
      //verificar que haya seleccionado archivos
      if (this.form.files.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan archivos. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      //validar filas
      if (this.form.filas.length == 0) {
        this.isLoading = false;
        this.showToast(
          "Faltan filas de los alimentos. Por favor, complete los campos.",
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
          `${apiUrl}/ct_seguimiento_rotulado`,
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
            "Formulario de seguimiento rotulado y/o etiquetado de los alimentos guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente tecnico, seguimiento rotulado y/o etiquetado de los alimentos",
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
        modalidad: "",
        operador: "",
        contrato: "",
        supervisor: "",
        observaciones: "",
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
