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
                Formato de verificación modalidad CCT
              </li>
            </ol>
          </nav>
          <h2>FORMATO DE VERIFICACIÓN MODALIDAD CCT</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- Header Information -->
          <div class="card mb-4">
            <div class="card-header text-white">
              <h3 class="mb-0">Información General</h3>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-4">
                  <label for="etc" class="form-label">ETC:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="etc"
                    v-model="formData.etc"
                    value="Norte de Santander"
                    readonly
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
                    v-model="formData.fechaVisita"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="municipio" class="form-label">Municipio:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="municipio"
                    v-model="formData.municipio"
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="institucionEducativa" class="form-label"
                    >Institución Educativa:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="institucionEducativa"
                    v-model="formData.institucionEducativa"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="sedeEducativa" class="form-label"
                    >Sede Educativa:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="sedeEducativa"
                    v-model="formData.sedeEducativa"
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3">
                  <label for="horaInicial" class="form-label"
                    >Hora Inicial:</label
                  >
                  <input
                    type="time"
                    class="form-control"
                    id="horaInicial"
                    v-model="formData.horaInicial"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label for="horaFinal" class="form-label">Hora Final:</label>
                  <input
                    type="time"
                    class="form-control"
                    id="horaFinal"
                    v-model="formData.horaFinal"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label for="tipoVisita" class="form-label"
                    >Tipo de visita:</label
                  >
                  <select
                    class="form-select"
                    id="tipoVisita"
                    v-model="formData.tipoVisita"
                    required
                  >
                    <option value="tecnica">Técnica</option>
                    <option value="verificacionETA">Verificación ETA</option>
                    <option value="spqr">SPQR</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="numeroVisita" class="form-label"
                    >Número de visita:</label
                  >
                  <select
                    class="form-select"
                    id="numeroVisita"
                    v-model="formData.numeroVisita"
                    required
                  >
                    <option value="1">1ra</option>
                    <option value="2">2da</option>
                    <option value="3">3ra</option>
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
                    v-model="formData.operador"
                    value="Unión Temporal Suministros PAE 2024"
                    readonly
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
                    v-model="formData.numeroContrato"
                    value="LP-SEG-3030-2023 del 12 de enero del 2024"
                    readonly
                  />
                </div>
                <div class="col-md-4">
                  <label for="numeroBeneficiarios" class="form-label"
                    >N° Beneficiarios:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="numeroBeneficiarios"
                    v-model="formData.numeroBeneficiarios"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Verification of Operation Conditions -->
          <div class="card mb-4">
            <div class="card-header text-white">
              <h3 class="mb-0">Verificación Condiciones de Operación</h3>
            </div>
            <div class="card-body">
              <div
                v-for="(section, sectionIndex) in operationConditions"
                :key="sectionIndex"
                class="mb-4"
              >
                <h4>{{ section.title }}</h4>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Aspectos a evaluar</th>
                      <th>Criterios para evaluar</th>
                      <th>Observaciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, itemIndex) in section.items"
                      :key="itemIndex"
                    >
                      <td>{{ item.number }}</td>
                      <td>{{ item.aspect }}</td>
                      <td>
                        <select
                          class="form-select"
                          v-model="
                            formData.operationConditions[
                              `${sectionIndex}_${itemIndex}`
                            ]
                          "
                        >
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="
                            formData.operationConditions[
                              `${sectionIndex}_${itemIndex}_obs`
                            ]
                          "
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Verification of Food Preparation -->
          <div class="card mb-4">
            <div class="card-header text-white">
              <h3 class="mb-0">Verificación de Preparación de Alimentos</h3>
            </div>
            <div class="card-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Componente Preparación</th>
                    <th>Grupo escolar verificado</th>
                    <th>Unidad de Medida (g o ml)</th>
                    <th>Cantidad Porción Servida según Minuta Patrón</th>
                    <th>Muestra N° 1</th>
                    <th>Muestra N° 2</th>
                    <th>Muestra N° 3</th>
                    <th>Peso o volumen de muestras servidas</th>
                    <th>Temperatura final de cocción</th>
                    <th>Temperatura distribución inicial</th>
                    <th>Temperatura distribución final</th>
                    <th>Cumplimiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in foodPreparationItems"
                    :key="index"
                  >
                    <td>{{ item.component }}</td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="formData.foodPreparation[`${index}_grupo`]"
                      />
                    </td>
                    <td>{{ item.unit }}</td>
                    <td>{{ item.standardPortion }}</td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.foodPreparation[`${index}_muestra1`]"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.foodPreparation[`${index}_muestra2`]"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.foodPreparation[`${index}_muestra3`]"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.foodPreparation[`${index}_peso`]"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.foodPreparation[`${index}_tempFinal`]"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="
                          formData.foodPreparation[`${index}_tempInicial`]
                        "
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="
                          formData.foodPreparation[`${index}_tempFinalDist`]
                        "
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="
                          formData.foodPreparation[`${index}_cumplimiento`]
                        "
                      >
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Verification of Nutritional Requirements -->
          <div class="card mb-4">
            <div class="card-header text-white">
              <h3 class="mb-0">
                Verificación de Requerimientos Alimentarios y Nutricionales
              </h3>
            </div>
            <div class="card-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Aspectos a evaluar</th>
                    <th>Cumple/No cumple</th>
                    <th>Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in nutritionalRequirements"
                    :key="index"
                  >
                    <td>{{ item.number }}</td>
                    <td>{{ item.aspect }}</td>
                    <td>
                      <select
                        class="form-select"
                        v-model="
                          formData.nutritionalRequirements[
                            `${index}_cumplimiento`
                          ]
                        "
                      >
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="
                          formData.nutritionalRequirements[
                            `${index}_observaciones`
                          ]
                        "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Verification of Transport and Distribution Conditions -->
          <div class="card mb-4">
            <div class="card-header text-white">
              <h3 class="mb-0">
                Verificación Condiciones de Transporte y Distribución
              </h3>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-4">
                  <label for="cdp" class="form-label"
                    >Centro de Producción (CDP):</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="cdp"
                    v-model="formData.transportDistribution.cdp"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="placaVehiculo" class="form-label"
                    >Placa del vehículo:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="placaVehiculo"
                    v-model="formData.transportDistribution.placaVehiculo"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="numeroSedes" class="form-label"
                    >N° de sedes:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="numeroSedes"
                    v-model="formData.transportDistribution.numeroSedes"
                    required
                  />
                </div>
              </div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Aspectos a evaluar</th>
                    <th>Cumple/No cumple</th>
                    <th>Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in transportDistributionItems"
                    :key="index"
                  >
                    <td>{{ item.number }}</td>
                    <td>{{ item.aspect }}</td>
                    <td>
                      <select
                        class="form-select"
                        v-model="
                          formData.transportDistribution[
                            `${index}_cumplimiento`
                          ]
                        "
                      >
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="
                          formData.transportDistribution[
                            `${index}_observaciones`
                          ]
                        "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Signatures -->
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h3 class="mb-0">Firmas</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <h4>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h4>
                  <div class="mb-3">
                    <label for="nombreEquipoPAE" class="form-label"
                      >Nombre:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nombreEquipoPAE"
                      v-model="formData.firmas.equipoPAE.nombre"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="cedulaEquipoPAE" class="form-label"
                      >Cédula:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cedulaEquipoPAE"
                      v-model="formData.firmas.equipoPAE.cedula"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="cargoEquipoPAE" class="form-label"
                      >Cargo:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cargoEquipoPAE"
                      v-model="formData.firmas.equipoPAE.cargo"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="telefonoEquipoPAE" class="form-label"
                      >Teléfono:</label
                    >
                    <input
                      type="tel"
                      class="form-control"
                      id="telefonoEquipoPAE"
                      v-model="formData.firmas.equipoPAE.telefono"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <h4>FIRMA QUIEN ATIENDE LA VISITA</h4>
                  <div class="mb-3">
                    <label for="nombreAtiendeVisita" class="form-label"
                      >Nombre:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nombreAtiendeVisita"
                      v-model="formData.firmas.atiendeVisita.nombre"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="cedulaAtiendeVisita" class="form-label"
                      >Cédula:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cedulaAtiendeVisita"
                      v-model="formData.firmas.atiendeVisita.cedula"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="cargoAtiendeVisita" class="form-label"
                      >Cargo:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cargoAtiendeVisita"
                      v-model="formData.firmas.atiendeVisita.cargo"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="telefonoAtiendeVisita" class="form-label"
                      >Teléfono:</label
                    >
                    <input
                      type="tel"
                      class="form-control"
                      id="telefonoAtiendeVisita"
                      v-model="formData.firmas.atiendeVisita.telefono"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2 mt-4">
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
      formData: {
        etc: "Norte de Santander",
        fechaVisita: "",
        municipio: "",
        institucionEducativa: "",
        sedeEducativa: "",
        horaInicial: "",
        horaFinal: "",
        tipoVisita: "",
        numeroVisita: "",
        operador: "Unión Temporal Suministros PAE 2024",
        numeroContrato: "LP-SEG-3030-2023 del 12 de enero del 2024",
        numeroBeneficiarios: "",
        operationConditions: {},
        foodPreparation: {},
        nutritionalRequirements: {},
        transportDistribution: {
          cdp: "",
          placaVehiculo: "",
          numeroSedes: "",
        },
        firmas: {
          equipoPAE: {
            nombre: "",
            cedula: "",
            cargo: "",
            telefono: "",
          },
          atiendeVisita: {
            nombre: "",
            cedula: "",
            cargo: "",
            telefono: "",
          },
        },
      },
      operationConditions: [
        {
          title: "Plan de saneamiento",
          items: [
            {
              number: 1,
              aspect:
                "Las Instalaciones sanitarias se encuentran limpias y se cuenta con la dotación adecuada (jabón líquido, gel antibacterial, papel higiénico y papeleras con bolsa).",
            },
            {
              number: 2,
              aspect:
                "Existe el documento que soporte el programa de limpieza y desinfección, en su contenido se describen los procedimientos, operaciones y formatos de registros para la periodicidad de los mismos (áreas, equipos, superficies, utensilios, personal manipulador y alimentos).",
            },
          ],
        },
        {
          title: "Programa de Limpieza y Desinfección",
          items: [
            {
              number: 3,
              aspect:
                "Se llevan los registros actualizados que soportan el cumplimiento de las actividades del programa de limpieza y desinfección.",
            },
            {
              number: 4,
              aspect:
                "Los implementos (escobas, traperos, recogedores, guantes entre otros) que se utilizan para el aseo, permanecen en adecuadas condiciones de limpieza y en el lugar establecido.",
            },
          ],
        },
      ],
      foodPreparationItems: [
        { component: "Proteico", unit: "g", standardPortion: 100 },
        { component: "Cereal", unit: "g", standardPortion: 80 },
        {
          component: "Tubérculo, Plátano, Derivado del cereal",
          unit: "g",
          standardPortion: 80,
        },
        { component: "Verdura", unit: "g", standardPortion: 60 },
        { component: "Jugo de Fruta", unit: "ml", standardPortion: 200 },
      ],
      nutritionalRequirements: [
        {
          number: 1,
          aspect:
            "El menú del día es acorde a lo establecido en el ciclo de menús y minuta patrón adoptada y aprobada.",
        },
        {
          number: 2,
          aspect:
            "Se cuenta con la totalidad de la materia prima correspondientes al cálculo de las minutas aprobadas, multiplicadas por el número de servicios y tipo de menú.",
        },
        {
          number: 3,
          aspect:
            "El ciclo de menú se ejecuta bajo las especificaciones técnicas definidas (guías de preparación).",
        },
        {
          number: 4,
          aspect:
            "En caso de presentarse intercambios, estos se realizan de acuerdo al componente, a la frecuencia y cuentan con documento soporte de aprobación.",
        },
        {
          number: 5,
          aspect:
            "En el ciclo de minutas incluye alimentos y/o preparaciones propias del territorio",
        },
        // Add more items as needed
      ],

      transportDistributionItems: [
        {
          number: 1,
          aspect:
            "Los vehículos para el transporte de las canastillas que contienen los portacomidas cumplen con la normatividad sanitaria vigente (Resolución 2674 de 2013) y los lineamientos determinados para transporte de alimentos establecidos por el Ministerio de Transporte.",
        },
        {
          number: 2,
          aspect:
            "El vehículo cuenta con certificación sanitaria expedida por la autoridad competente con concepto favorable.",
        },
        {
          number: 3,
          aspect:
            "Las Canastillas y/o equipos donde son transportados los alimentos se encuentran limpias, en buen estado y son de material resistente.",
        },
        // Add more items as needed
      ],
      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
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
