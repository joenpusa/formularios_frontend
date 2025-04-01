<template>
  <LoadingSpinner :isLoading="isLoading" />
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
  <div class="pb-5">
    <div class="row g-4">
      <div class="col-12 col-xxl-12">
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
                Formato verificación de rotulado ración industrializada - I
              </li>
            </ol>
          </nav>
          <h2>FORMATO VERIFICACIÓN DE ROTULADO RACIÓN INDUSTRIALIZADA - I</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="etc" class="form-label">ETC:</label>
              <input
                type="text"
                id="etc"
                v-model="form.etc"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fecha" class="form-label">Fecha de la visita:</label>
              <input
                type="date"
                id="fecha"
                v-model="form.fecha_visita"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="municipio" class="form-label">Municipio:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="horaInicial" class="form-label">Hora Inicial:</label>
              <input
                type="time"
                id="horaInicial"
                v-model="form.hora_inicial"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="horaFinal" class="form-label">Hora Final:</label>
              <input
                type="time"
                id="horaFinal"
                v-model="form.hora_final"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="institucionEducativa" class="form-label"
                >Institución Educativa:</label
              >
              <InstitucionSelect
                v-model="form.institucion"
                :municipio-id="form.municipio"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="sedeEducativa" class="form-label"
                >Sede Educativa:</label
              >
              <SedeSelect
                v-model="form.sede"
                :institucion-id="form.institucion"
              />
            </div>
            <div class="col-md-3">
              <label for="numeroVisita" class="form-label"
                >Número de visita:</label
              >
              <select
                id="numeroVisita"
                v-model="form.numero_visita"
                class="form-select"
                required
              >
                <option value="1ra">1ra</option>
                <option value="2da">2da</option>
                <option value="3ra">3ra</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="tipoVisita" class="form-label">Tipo de visita:</label>
              <select
                id="tipoVisita"
                v-model="form.tipo_visita"
                class="form-select"
                required
              >
                <option value="Técnica">Técnica</option>
                <option value="Verificación ETA">Verificación ETA</option>
                <option value="SPQR">SPQR</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="numeroBeneficiarios" class="form-label"
                >N° Beneficiarios:</label
              >
              <input
                type="number"
                id="numeroBeneficiarios"
                v-model="form.num_beneficiarios"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                id="operador"
                v-model="form.operador"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="numeroContrato" class="form-label"
                >N° Contrato:</label
              >
              <input
                type="text"
                id="numeroContrato"
                v-model="form.contrato"
                class="form-control"
                required
              />
            </div>
          </div>

          <!-- Verificación Res. 5109/2005 -->
          <h3 class="mt-4 mb-3">Verificación Res. 5109/2005</h3>
          <div class="mb-4 p-3 border rounded">
            <div class="row mb-3">
              <div class="col-md-3">
                <label class="form-label">Producto:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="producto5109"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Fabricación:</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="fabricacion5109"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Vencimiento:</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="vencimiento5109"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote:</label>
                <input type="text" class="form-control" v-model="lote5109" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Nombre del alimento</label>
                <select class="form-select" v-model="nombre5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Lista de ingredientes</label>
                <select class="form-select" v-model="ingredientes5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote</label>
                <select class="form-select" v-model="lotedos5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Contenido neto</label>
                <select class="form-select" v-model="contenido5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Nombre y dirección del fabricante</label
                >
                <select class="form-select" v-model="fabricante5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Instrucciones de conservación</label>
                <select class="form-select" v-model="instrucciones_cons5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha de Vencimiento</label>
                <select class="form-select" v-model="fe_ven5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Instrucciones de uso</label>
                <select class="form-select" v-model="instituciones_uso5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Registro sanitario</label>
                <select class="form-select" v-model="registro5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Condiciones de empaque primario</label
                >
                <select class="form-select" v-model="condiciones5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Declaración de tabla nutricional</label
                >
                <select class="form-select" v-model="declaracion5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"><strong>Cumplimieto</strong></label>
                <select class="form-select" v-model="cumplimiento5109">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              @click="addProduct5109()"
              class="btn btn-secondary mb-3"
            >
              Agregar Producto
            </button>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead class="table-primary text-center">
                <tr>
                  <th colspan="16">
                    Criterios para evaluar: Cumple (C), No cumple (NC), No
                    observado (NO), No aplica (NA)
                  </th>
                </tr>
                <tr>
                  <th rowspan="2">Producto</th>
                  <th rowspan="2">Fecha Fabricación</th>
                  <th rowspan="2">Fecha Vencimiento</th>
                  <th rowspan="2">Lote</th>
                  <th colspan="11">Verificación Res. 5109/2005</th>
                  <th rowspan="2">Cumplimiento (Cumple / No cumple)</th>
                </tr>
                <tr>
                  <th>Nombre del alimento</th>
                  <th>Lista ingredientes</th>
                  <th>Lote</th>
                  <th>Contenido neto</th>
                  <th>Nombre y dirección del fabricante</th>
                  <th>Instrucciones conservación</th>
                  <th>Fecha Vencimiento</th>
                  <th>Instrucción de uso</th>
                  <th>Registro sanitario</th>
                  <th>Condiciones empaque primario</th>
                  <th>Declaración de tabla nutricional</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fila, index) in form.filas_5109" :key="index">
                  <td>{{ fila.producto }}</td>
                  <td>{{ fila.fabricacion }}</td>
                  <td>{{ fila.vencimiento }}</td>
                  <td>{{ fila.lote }}</td>
                  <td>{{ fila.nombre }}</td>
                  <td>{{ fila.lista_ingredientes }}</td>
                  <td>{{ fila.lote2 }}</td>
                  <td>{{ fila.contenido_neto }}</td>
                  <td>{{ fila.fabricante }}</td>
                  <td>{{ fila.conservacion }}</td>
                  <td>{{ fila.vencimiento2 }}</td>
                  <td>{{ fila.uso }}</td>
                  <td>{{ fila.registro }}</td>
                  <td>{{ fila.contabla_nutricionaldiciones }}</td>
                  <td>{{ fila.declaracion }}</td>
                  <td>{{ fila.cumplimiento }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Verificación Res. 810 de 2021 y Res 2492 de 2022 -->
          <h3 class="mt-4 mb-3">
            Verificación Res. 810 de 2021 y Res 2492 de 2022
          </h3>
          <div class="mb-4 p-3 border rounded">
            <div class="row mb-3">
              <div class="col-md-3">
                <label class="form-label">Producto:</label>
                <input type="text" class="form-control" v-model="producto810" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Fabricación:</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="fabricacion810"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Fecha Vencimiento:</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="vencimiento810"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label">Lote:</label>
                <input type="text" class="form-control" v-model="lote810" />
              </div>

              <div class="col-md-3">
                <label class="form-label"
                  >Declaración de tabla nutricional</label
                >
                <select class="form-select" v-model="nutrientes810">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Tamaño y caracteristicas de las porciones</label
                >
                <select class="form-select" v-model="tamanos810">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"
                  >Declaración de las medidas caseras</label
                >
                <select class="form-select" v-model="medidas810">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Número de porciones por envase</label>

                <select class="form-select" v-model="porciones810">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Equivalencia a medidas caseras</label>
                <select class="form-select" v-model="equivalencias810">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label"><strong>Cumplimieto</strong></label>
                <select class="form-select" v-model="cumplimento810">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              @click="addProduct810()"
              class="btn btn-secondary mb-3"
            >
              Agregar Producto
            </button>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead class="table-primary text-center">
                <tr>
                  <th colspan="16">
                    Criterios para evaluar: Cumple (C), No cumple (NC), No
                    observado (NO), No aplica (NA)
                  </th>
                </tr>
                <tr>
                  <th rowspan="2">Producto</th>
                  <th rowspan="2">Fecha Fabricación</th>
                  <th rowspan="2">Fecha Vencimiento</th>
                  <th rowspan="2">Lote</th>
                  <th colspan="5">
                    Verificación Res. 810 de 2021 y Res 2492 de 2022
                  </th>
                  <th rowspan="2">Cumplimiento (Cumple / No cumple)</th>
                </tr>
                <tr>
                  <th>Declaración de nutrientes</th>
                  <th>Tamaños y características de las porciones</th>
                  <th>Declaración de las medidas caseras</th>
                  <th>Número de porciones por envase</th>
                  <th>Equivalencias de medidas caseras comunes</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fila, index) in form.filas_810" :key="index">
                  <td>{{ fila.producto }}</td>
                  <td>{{ fila.fabricacion }}</td>
                  <td>{{ fila.vencimiento }}</td>
                  <td>{{ fila.lote }}</td>
                  <td>{{ fila.nutrientes }}</td>
                  <td>{{ fila.tamanos }}</td>
                  <td>{{ fila.medidas }}</td>
                  <td>{{ fila.porciones }}</td>
                  <td>{{ fila.equivalencia }}</td>
                  <td>{{ fila.cumplimiento }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mb-3">
            <label for="nombreVisita" class="form-label"
              >Porcentaje de cumplimiento:</label
            >
            <input
              type="number"
              step="any"
              id="porcentajeCumplimiento"
              v-model="form.porcentaje"
              class="form-control"
              disabled
            />
          </div>
          <!-- Observaciones -->
          <div class="mb-3">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              id="observaciones"
              v-model="form.observaciones"
              class="form-control"
              rows="3"
              required
            ></textarea>
          </div>

          <!-- Firmas -->
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label"
                >FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</label
              >
              <div class="mb-2">
                <SignaturePad
                  idFirma="firma1"
                  :varFirma="form.firma1"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div class="mb-2">
                <label for="nombreEquipo" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreEquipo"
                  v-model="form.nombre_apoyo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoEquipo" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  id="documentoEquipo"
                  v-model="form.cedula_apoyo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoEquipo" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoEquipo"
                  v-model="form.cargo_apoyo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoEquipo" class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  id="telefonoEquipo"
                  v-model="form.telefono_apoyo"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <label class="form-label">FIRMA QUIEN ATIENDE LA VISITA</label>
              <div class="mb-2">
                <SignaturePad
                  idFirma="firma2"
                  :varFirma="form.firma2"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div class="mb-2">
                <label for="nombreVisita" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreVisita"
                  v-model="form.nombre_atiende"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="documentoVisita" class="form-label"
                  >Documento:</label
                >
                <input
                  type="text"
                  id="documentoVisita"
                  v-model="form.cedula_atiende"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="cargoVisita" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoVisita"
                  v-model="form.cargo_atiende"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="telefonoVisita" class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  id="telefonoVisita"
                  v-model="form.telefono_atiende"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <!-- Componente de carga de archivos -->
          <FileUploader :files="form.files" @files-updated="updateFiles" />
          <button type="submit" class="btn btn-primary">
            Enviar Formulario
          </button>
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
    FileUploader,
    InstitucionSelect,
    SedeSelect,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      //zona 5109
      producto5109: "",
      fabricacion5109: "",
      vencimiento5109: "",
      lote5109: "",
      nombre5109: "",
      ingredientes5109: "",
      lotedos5109: "",
      contenido5109: "",
      fabricante5109: "",
      instrucciones_cons5109: "",
      fe_ven5109: "",
      instituciones_uso5109: "",
      registro5109: "",
      condiciones5109: "",
      declaracion5109: "",
      cumplimiento5109: "",
      //zona 810
      producto810: "",
      fabricacion810: "",
      vencimiento810: "",
      lote810: "",
      nutrientes810: "",
      tamanos810: "",
      medidas810: "",
      porciones810: "",
      equivalencias810: "",
      cumplimento810: "",
      form: {
        etc: "Norte de Santander",
        files: [],
        fecha_visita: "",
        municipio: "",
        hora_inicial: "",
        hora_final: "",
        institucion: "",
        sede: "",
        numero_visita: "",
        tipo_visita: "",
        num_beneficiarios: "",
        operador: "",
        contrato: "",
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
        filas_5109: [],
        filas_810: [],
      },
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
    addProduct5109() {
      // Agregar fila a la lista de filas
      this.form.filas_5109.push({
        producto: this.producto5109,
        fabricacion: this.fabricacion5109 || "N/A",
        vencimiento: this.vencimiento5109 || "N/A",
        lote: this.lote5109 || "N/A",
        nombre: this.nombre5109,
        lista_ingredientes: this.ingredientes5109,
        lote2: this.lotedos5109,
        contenido_neto: this.contenido5109,
        fabricante: this.fabricante5109,
        conservacion: this.instrucciones_cons5109,
        vencimiento2: this.fe_ven5109,
        uso: this.instituciones_uso5109,
        registro: this.registro5109,
        contabla_nutricionaldiciones: this.condiciones5109,
        declaracion: this.declaracion5109,
        cumplimiento: this.cumplimiento5109,
      });
      this.producto5109 = "";
      this.fabricacion5109 = "";
      this.vencimiento5109 = "";
      this.lote5109 = "";
      this.nombre5109 = "";
      this.ingredientes5109 = "";
      this.lotedos5109 = "";
      this.contenido5109 = "";
      this.fabricante5109 = "";
      this.instrucciones_cons5109 = "";
      this.fe_ven5109 = "";
      this.instituciones_uso5109 = "";
      this.registro5109 = "";
      this.condiciones5109 = "";
      this.declaracion5109 = "";
      this.cumplimiento5109 = "";
      this.recalcularPorcentaje();
    },
    addProduct810() {
      // Agregar fila a la lista de filas
      this.form.filas_810.push({
        producto: this.producto810,
        fabricacion: this.fabricacion810 || "N/A",
        vencimiento: this.vencimiento810 || "N/A",
        lote: this.lote810 || "N/A",
        nutrientes: this.nutrientes810,
        tamanos: this.tamanos810,
        medidas: this.medidas810,
        porciones: this.porciones810,
        equivalencia: this.equivalencias810,
        cumplimiento: this.cumplimento810,
      });
      this.producto810 = "";
      this.fabricacion810 = "";
      this.vencimiento810 = "";
      this.lote810 = "";
      this.nutrientes810 = "";
      this.tamanos810 = "";
      this.medidas810 = "";
      this.porciones810 = "";
      this.equivalencias810 = "";
      this.cumplimento810 = "";
      this.recalcularPorcentaje();
    },
    recalcularPorcentaje() {
      // Recalcular el porcentaje de cumplimiento
      const totalFilas =
        this.form.filas_810.length + this.form.filas_5109.length;
      let cumpleFilas = this.form.filas_810.filter(
        (fila) => fila.cumplimiento === "Cumple"
      ).length;
      cumpleFilas += this.form.filas_5109.filter(
        (fila) => fila.cumplimiento === "Cumple"
      ).length;

      this.form.porcentaje =
        (totalFilas > 0 ? cumpleFilas / totalFilas : 0) * 100;
    },
    guardarFormulario() {
      this.isLoading = true;
      // validar municipio, institucion y sede
      if (
        this.form.municipio === "" ||
        this.form.institucion === "" ||
        this.form.sede === ""
      ) {
        this.showToast(
          "Debe seleccionar un municipio, institución y sede",
          "danger"
        );
        this.isLoading = false;
        return;
      }
      // firmar formulario
      if (this.form.firma1 === "" || this.form.firma2 === "") {
        this.showToast("Debe firmar el formulario", "danger");
        this.isLoading = false;
        return;
      }
      // validar archivos
      if (this.form.files.length === 0) {
        this.showToast("Debe subir al menos un archivo", "danger");
        this.isLoading = false;
        return;
      }
      // Validar filas de resolución 5109
      if (this.form.filas_5109.length === 0) {
        this.showToast(
          "Debe agregar al menos una fila de resolución 5109",
          "danger"
        );
        this.isLoading = false;
        return;
      }
      // Validar filas de resolución 810
      if (this.form.filas_810.length === 0) {
        this.showToast(
          "Debe agregar al menos una fila de resolución 810",
          "danger"
        );
        this.isLoading = false;
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
            if (key === "filas_5109" || key === "filas_810") {
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
          `${apiUrl}/ct_verificacion_rotulado_ri`,
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
            "Formulario de verificación rotulado I guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente tecnico, verificación rotulado I",
          "danger"
        );
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      // Resetear formulario
      this.form = {
        etc: "Norte de Santander",
        files: [],
        fecha_visita: "",
        municipio: "",
        hora_inicial: "",
        hora_final: "",
        institucion: "",
        sede: "",
        numero_visita: "",
        tipo_visita: "",
        num_beneficiarios: "",
        operador: "",
        contrato: "",
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
        filas_5109: [],
        filas_810: [],
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
