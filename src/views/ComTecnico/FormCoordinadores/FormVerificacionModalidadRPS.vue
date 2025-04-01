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
                Formato verificación modalidad ración para preparar en sitio -
                PS
              </li>
            </ol>
          </nav>
          <h2>
            FORMATO VERIFICACIÓN MODALIDAD RACIÓN PARA PREPARAR EN SITIO - PS
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- Header Information -->
          <div class="row mb-1">
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
          <div class="row mb-1">
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
                <option value="2ra">2da</option>
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
              <label class="form-label">N° Contrato:</label>
              <input
                type="text"
                id="numeroContrato"
                v-model="form.contrato"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label"
                >Fecha de la última visita de la Autoridad Sanitaria:</label
              >
              <input
                type="date"
                id="fechaUltimaVisita"
                v-model="form.fecha_ultima_visita"
                class="form-control"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Concepto emitido:</label>
              <input
                type="text"
                id="conceptoEmitido"
                v-model="form.concepto_emitido"
                class="form-control"
              />
            </div>
          </div>

          <!-- Cuestionario -->
          <div class="mb-1">
            <table class="table table-bordered">
              <tr>
                <td colspan="4">Crterios de evaluación</td>
              </tr>
              <tr>
                <td colspan="2">Aceptable (A)</td>
                <td colspan="2">
                  Seleccione con un círculo cuando se cumplen la totalidad de
                  los requisitos descritos en el aspecto a evaluar
                </td>
              </tr>
              <tr>
                <td colspan="2">Aceptable con Requerimiento (AR)</td>
                <td colspan="2">
                  Seleccione con un círculo cuando se cumplen parcialmente los
                  requisitos descritos en el aspecto a evaluar
                </td>
              </tr>
              <tr>
                <td colspan="2">Inaceptable (I)</td>
                <td colspan="2">
                  Seleccione con un círculo cuando no cumple ninguno de los
                  requisitos descritos en el aspecto a evaluar
                </td>
              </tr>
              <tr>
                <td colspan="2">No Aplica (NA)</td>
                <td colspan="2">
                  Marque con una X la casilla "NA" en caso que el aspecto a
                  verificar no se realice y calificar como Aceptable (A).
                  Justificar la razón del no aplica en el espacio de
                  observaciones.
                </td>
              </tr>
            </table>
            <table class="table table-bordered">
              <thead class="table-info">
                <tr>
                  <td class="text-center table-info" colspan="4">
                    VERIFICACIÓN CONDICIONES DE OPERACIÓN
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">
                    Condiciones higiénico sanitarias
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">
                    Edificaciones e instalaciones
                  </td>
                </tr>
                <tr class="table-info">
                  <td>N°</td>
                  <td>Aspectos a evaluar</td>
                  <td>Criterio</td>
                  <td>Observaciones</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    El área de almacenamiento de los alimentos se encuentra
                    limpia y se garantizan condiciones higiénico-sanitarias.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_1" required>
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_1_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    El área de preparación de los alimentos se encuentra limpia
                    y se garantizan condiciones higiénico-sanitarias.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_2" required>
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_2_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    El área de consumo de los alimentos se encuentra limpia y se
                    garantizan condiciones higiénico-sanitarias.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_3" required>
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_3_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Se dispone de servicios sanitarios para el personal
                    manipulador de alimentos.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_4" required>
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_4_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Las Instalaciones sanitarias se encuentran limpias y se
                    cuenta con la dotación adecuada (jabón líquido, gel
                    antibacterial, papel higiénico y papeleras con bolsa).
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_5" required>
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_5_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">Plan de saneamiento</td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">
                    Programa de Limpieza y Desinfección
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Existe el documento que soporte el programa de limpieza y
                    desinfección, en su contenido se describen los
                    procedimientos, operaciones y formatos de registros para la
                    periodicidad de los mismos (áreas, equipos, superficies,
                    utensilios, personal manipulador y alimentos).
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_6" required>
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_6_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Los implementos (escobas, traperos, recogedores, guantes
                    entre otros) que se utilizan para el aseo, permanecen en
                    adecuadas condiciones de limpieza y en el lugar establecido.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_7" required>
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_7_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Los equipos, utensilios y menaje empleados se limpian y
                    desinfectan antes de cada uso y son de materiales
                    resistentes al uso y a la corrosión.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_8" required>
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_8_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    Se llevan los registros actualizados que soportan el
                    cumplimiento de las actividades del programa de limpieza y
                    desinfección.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.condi_9" required>
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_9_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">Control de plagas</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    No se evidencia indicio o presencia de plagas y las áreas
                    cuentan con barreras que minimicen el ingreso de vectores.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_10"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_10_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    Se realiza un control de plagas y se cuenta con los
                    siguientes documentos soportes: diagnóstico empresa
                    fumigadora, cronograma, formato de inspección interno,
                    documentación de empresa fumigadora, fichas técnicas. Se
                    encuentran diligenciadas de forma adecuada y oportuna.
                    <!-- Fecha de la ultima fumigación: -->
                    <!-- <input
                      type="hidden"
                      class="form-control"
                      v-model="form.fecha_ultima_fumiga"
                      value=""
                    /> -->
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_11"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_11_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    Se llevan los registros actualizados que soportan el
                    cumplimiento de las actividades del programa de control de
                    plagas.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_12"
                      required
                    >
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_12_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">
                    Manejo y disposición de residuos sólidos y líquidos
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    Existe al interior del servicio de alimentación, recipientes
                    de material sanitario, para la recolección de residuos
                    sólidos, en buen estado, en cantidad suficiente, bien
                    ubicados e identificados conforme a la norma sanitaria
                    vigente.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_13"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_13_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>
                    La clasificación y segregación de residuos sólidos se
                    realiza de acuerdo con lo establecido en el programa de
                    manejo de residuos. Adicionalmente, los residuos sólidos son
                    retirados con la frecuencia necesaria para evitar generación
                    de olores y/o proliferación de plagas.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_14"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_14_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    El manejo de los residuos líquidos y sólidos no representa
                    riesgo de contaminación para los alimentos ni para las
                    superficies en contacto con éstos.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_15"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_15_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>
                    Se cuenta y se cumple con protocolos para el manejo y
                    disposición de aceite vegetal usado.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_16"
                      required
                    >
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_16_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>
                    Se efectúa mantenimiento y limpieza a las trampas de grasas
                    ubicadas en las instalaciones del establecimiento.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_17"
                      required
                    >
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_17_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>
                    Se llevan los registros actualizados que soportan el
                    cumplimiento de las actividades del programa de residuos
                    sólidos y líquidos.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_18"
                      required
                    >
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_18_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">Abastecimiento de agua</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>
                    Disponen de un tanque de almacenamiento de agua potable y se
                    encuentra construido de material higiénico sanitario,
                    hermético y se encuentra en constante circulación, además
                    tiene la capacidad suficiente para un día de producción.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_19"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_19_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>
                    Se realiza la limpieza y desinfección periódica del tanque
                    de almacenamiento de agua potable.
                    <!-- Fecha de la última limpieza y desinfección realizada: -->
                    <input
                      type="hidden"
                      class="form-control"
                      v-model="form.fecha_ultima_limpieza"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_20"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_20_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">Personal manipulador</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>
                    El personal manipulador no presenta afecciones de la piel o
                    enfermedades infectocontagiosas.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_21"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_21_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>
                    Cuenta con la dotación completa, limpia, en buen estado y
                    hace uso adecuado de la misma de acuerdo a lo establecido en
                    la normatividad vigente.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_22"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_22_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>
                    Cumple con las buenas practicas de manufactura durante todas
                    las etapas del proceso de acuerdo a lo establecido en la
                    normatividad vigente.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_23"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_23_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>
                    Se evidencia por cada una de las manipuladoras certificado
                    médico (apto para manipular alimentos) con los respectivos
                    soportes de los exámenes médicos.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_24"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_24_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>
                    El personal manipulador acreditan formación en educación
                    sanitaria, principios básicos de buenas prácticas de
                    manufactura y practicas higiénicas en manipulación de
                    alimentos.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_25"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_25_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">
                    Operaciones de fabricación
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">
                    Condiciones de distribución y transporte en recepción de
                    materia prima
                  </td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>
                    Las condiciones sanitarias del vehículo transportador de
                    alimentos, cumple con lo establecido en la normatividad
                    sanitaria vigente. (Condiciones de higiene y limpieza
                    adecuadas pisos, paredes, techo, estibas, canastillas).
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_26"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1-5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_26_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>
                    El vehículo cuenta con concepto sanitario expedido por la
                    autoridad competente con concepto favorable.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_27"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1-5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_27_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>
                    Los conductores y auxiliares cumplen con los documentos
                    exigidos para manipular alimentos, portan la dotación de
                    acuerdo a lo establecido en la Resolución 2674 de 2013 e
                    implementan buenas practicas de manufactura.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_28"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1-5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_28_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>
                    Las materias primas, se reciben en un lugar limpio y en
                    condiciones físicas que minimicen el riesgo de contaminación
                    o alteración de las características propias de cada
                    producto.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_29"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_29_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>
                    Se da cumplimiento a los criterios de aceptación y rechazo
                    de la materia prima recibida y existen controles de este
                    proceso (fecha de vencimiento, lote, condiciones de empaque
                    y cumplimiento de la Resolución 5109 de 2005 y demás
                    normatividad vigente).
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_30"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_30_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>
                    El personal manipulador verifica la temperatura de las
                    materias primas que requieren refrigeración y congelación.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_31"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_31_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td class="table-info" colspan="4">Almacenamiento</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>
                    Se almacenan los alimentos de alto riesgo (lácteos y
                    cárnicos etc.) dentro de los rangos de temperatura exigidos
                    en la resolución 2674 de 2013 y normatividad sanitaria
                    vigente.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_32"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_32_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>
                    Se almacenan los productos de acuerdo con las
                    características de los mismos, en sitios adecuados
                    minimizando el riesgo de contaminación.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_33"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_33_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>
                    Los alimentos y materias primas se encuentran libres de
                    presencia de moho, abombamiento, pérdida del vacío, fecha
                    caducada u otro aspecto que incumpla con las características
                    de calidad o inocuidad de los productos.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_34"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_34_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>
                    El rotulado y etiquetado del empaque primario de los
                    alimentos cumple con lo estipulado en la Resolución 5109 de
                    2005 y demás normatividad vigente.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_35"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_35_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>
                    Los registros de control de temperatura de los alimentos en
                    refrigeración y congelación, son diligenciados correctamente
                    y se realizan de manera oportuna.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_36"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_36_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>
                    Se lleva un control de entradas y salidas, Kárdex y rotación
                    de productos - PEPS.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_37"
                      required
                    >
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Observaciones"
                      v-model="form.condi_37_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th colspan="4">Preparación, ensamble y distribución</th>
                </tr>
                <tr>
                  <td>38</td>
                  <td>
                    Los procesos de producción se realizan de manera secuencial
                    y continua de tal forma que se protegen los alimentos de
                    posibles riesgos de contaminación.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_38"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_38_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>
                    Se lavan y desinfectan los empaques, los alimentos o
                    materias primas crudas como frutas, verduras y hortalizas y
                    productos de pesca con agua potable, antes de su preparación
                    y en los tiempos establecidos de desinfección.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_39"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_39_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>
                    Los procedimientos de operación como: lavar, pelar, cortar,
                    clasificar, extraer, batir, entre otros, se realizan de
                    manera que se protejan los alimentos y materias primas de
                    posibles riesgos de contaminación.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_40"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_40_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>
                    Los tiempos de exposición de los alimentos se encuentran
                    dentro de lo establecido en la normatividad vigente y no
                    generan posibles riesgos de contaminación. Adicionalmente,
                    los procesos de descongelación requeridos se realizan de
                    forma controlada para evitar el desarrollo de
                    microorganismos.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_41"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_41_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>
                    Todos los complementos están libres de contaminación física,
                    biológica, química y cumplen con las características de
                    calidad o inocuidad.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_42"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_42_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>
                    Existen manuales y hoja de vida de los equipos, así como
                    formatos para el servicio de mantenimiento preventivo y
                    correctivo de equipos ajustados a las características del
                    establecimiento. Se llevan los registros actualizados que
                    soportan el cumplimiento de las actividades realizadas.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_43"
                      required
                    >
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_43_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>
                    Se realiza monitoreo de las temperaturas para los alimentos
                    fríos y calientes en las diferentes etapas de proceso.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_44"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_44_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>
                    Las temperaturas para los alimentos fríos y calientes en las
                    diferentes etapas de proceso se mantienen dentro del rango
                    de seguridad que garantiza inocuidad.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_45"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_45_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>
                    Se dispone del menaje suficiente de acuerdo al número de
                    raciones y se encuentra en buen estado.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_46"
                      required
                    >
                      <option value="1-A">Aceptable (A)</option>
                      <option value="0.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="1-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_46_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th colspan="4">Aseguramiento y control de la calidad</th>
                </tr>
                <tr>
                  <td>47</td>
                  <td>
                    Se cumple con las características de calidad de los
                    alimentos que conforman la ración servida de acuerdo con las
                    normas legales vigentes.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_47"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_47_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>
                    Se cuenta con instrumentos de medición con el fin de
                    realizar control en cada una de las etapas de producción y
                    se garantiza la confiabilidad de las mediciones realizadas.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_48"
                      required
                    >
                      <option value="2-A">Aceptable (A)</option>
                      <option value="1-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="2-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_48_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>
                    Se da cumplimiento a los gramajes servidos según grupo
                    escolar verificado en la siguiente tabla.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_49"
                      required
                    >
                      <option value="3-A">Aceptable (A)</option>
                      <option value="1.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="3-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_49_obs"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered text-center">
              <thead class="table-info">
                <tr>
                  <th rowspan="2">Componente</th>
                  <th rowspan="2">Preparación</th>
                  <th rowspan="2">Grupo escolar verificado</th>
                  <th rowspan="2">
                    Cantidad Porción Servida según Minuta Patrón
                  </th>
                  <th colspan="4">Peso o volumen de muestras servidas</th>
                  <th rowspan="2">Cumplimiento<br />(Cumple / No cumple)</th>
                </tr>
                <tr>
                  <th>Muestra N° 1</th>
                  <th>Muestra N° 2</th>
                  <th>Muestra N° 3</th>
                  <th>Unidad de Medida (g o ml)</th>
                </tr>
              </thead>
              <tbody>
                <!-- Filas de datos -->
                <tr>
                  <td>Proteico</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.proteico1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.proteico2"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.proteico3"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.proteico4"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.proteico5"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.proteico6"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.proteico7">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.proteico8">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Leguminosa</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.leguminosa1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.leguminosa2"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.leguminosa3"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.leguminosa4"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.leguminosa5"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.leguminosa6"
                    />
                  </td>

                  <td>
                    <select class="form-select" v-model="form.leguminosa7">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.leguminosa8"
                      required
                    >
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Cereal</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.cereal1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.cereal2"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.cereal3"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.cereal4"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.cereal5"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.cereal6"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.cereal7">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.cereal8">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Tubérculo, Plátano, Derivado del cereal</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.tuberculo1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.tuberculo2"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.tuberculo3"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.tuberculo4"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.tuberculo5"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.tuberculo6"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.tuberculo7">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.tuberculo8">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Verdura</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.verdura1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.verdura2"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.verdura3"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.verdura4"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.verdura5"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.verdura6"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.verdura7">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.verdura8">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Jugo de Fruta</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.jugo1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.jugo2"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.jugo3"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.jugo4"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.jugo5"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.jugo6"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.jugo7">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.jugo8">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No cumple</option>
                    </select>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" class="text-start">
                    <strong>INDICADOR:</strong> Porcentaje de cumplimiento de
                    condiciones operativas
                  </td>
                  <td colspan="4">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="%"
                      v-model="form.porcentaje1"
                      disabled
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
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
                <tr>
                  <td>50</td>
                  <td>
                    Se cuenta con la totalidad de la materia prima
                    correspondientes al cálculo de las minutas aprobadas,
                    multiplicadas por el número de servicios y tipo de menú.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_50"
                      required
                    >
                      <option value="10-A">Aceptable (A)</option>
                      <option value="5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="10-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_50_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>
                    El menu del día es acorde a lo establecido en el ciclo de
                    menus y minuta patron adoptada y aprobada.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_51"
                      required
                    >
                      <option value="10-A">Aceptable (A)</option>
                      <option value="5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="10-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_51_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>
                    Se encuentran estandarizadas los tamaños de las porciones en
                    las preparaciones y se cuenta con elementos de
                    estandarización para el servido.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_52"
                      required
                    >
                      <option value="8-A">Aceptable (A)</option>
                      <option value="4-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="8-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_52_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>
                    El ciclo de menú se ejecuta bajo las especificaciones
                    técnicas definidas (guías de preparación).
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_53"
                      required
                    >
                      <option value="8-A">Aceptable (A)</option>
                      <option value="4-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="8-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_53_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>
                    En caso de presentarse intercambios, estos se realizan de
                    acuerdo al componente, a la frecuencia y cuentan con
                    documento soporte de aprobación.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_54"
                      required
                    >
                      <option value="8-A">Aceptable (A)</option>
                      <option value="4-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="8-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_54_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>
                    El menú entregado a los estudiantes tiene aspecto atractivo
                    y buena presentación.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_55"
                      required
                    >
                      <option value="10-A">Aceptable (A)</option>
                      <option value="5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="10-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_55_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>
                    Se cumple con los tiempos de ensamble para la entrega
                    oportuna de los complementos alimentarios al vehículo
                    transportador.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_56"
                      required
                    >
                      <option value="10-A">Aceptable (A)</option>
                      <option value="5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="10-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_56_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>
                    En el ciclo de minutas incluye alimentos y/o preparaciones
                    propias del territorio
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_57"
                      required
                    >
                      <option value="8-A">Aceptable (A)</option>
                      <option value="4-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="8-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_57_obs"
                    />
                  </td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>
                    En el lugar de consumo se promocionan practicas adecuadas de
                    hábitos alimentarios en los estudiantes beneficiarios.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_58"
                      required
                    >
                      <option value="8-A">Aceptable (A)</option>
                      <option value="4-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="8-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_58_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>
                    La aceptabilidad de los alimentos preparados es adecuada.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_59"
                      required
                    >
                      <option value="10-A">Aceptable (A)</option>
                      <option value="5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="10-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_59_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>
                    El desperdicio de alimentos en la etapa de descomide es
                    bajo, de conformidad a la política para prevenir la pérdida
                    y el desperdicio de alimentos según la ley 1990 de 2019.
                  </td>
                  <td>
                    <select
                      class="form-select"
                      v-model="form.condi_60"
                      required
                    >
                      <option value="10-A">Aceptable (A)</option>
                      <option value="5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="10-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.condi_60_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    INDICADOR: Porcentaje de cumplimiento de requerimientos
                    alimentarios y nutricionales
                  </td>
                  <td>% de Cumplimiento</td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.porcentaje2"
                      disabled
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table table-bordered">
              <tbody>
                <tr class="table-primary">
                  <th colspan="9">
                    Verificación temperaturas y características organolépticas
                    alimentos preparados y distribuidos
                  </th>
                </tr>
                <tr class="table-primary">
                  <th>Preparación</th>
                  <th>Apariencia</th>
                  <th>Sabor</th>
                  <th>Olor</th>
                  <th>Textura</th>
                  <th>Temperatura final de cocción</th>
                  <th>Temperatura distribución inicial</th>
                  <th>Temperatura distribución final</th>
                  <th>Cumplimiento</th>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Preparación"
                      v-model="form.alimento1_1"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento1_2">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento1_3">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento1_4">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento1_5">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento1_6"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento1_7"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento1_8"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento1_9">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Preparación"
                      v-model="form.alimento2_1"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento2_2">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento2_3">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento2_4">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento2_5">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento2_6"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento2_7"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento2_8"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento2_9">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Preparación"
                      v-model="form.alimento3_1"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento3_2">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento3_3">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento3_4">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento3_5">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento3_6"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento3_7"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento3_8"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento3_9">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Preparación"
                      v-model="form.alimento4_1"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento4_2">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento4_3">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento4_4">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento4_5">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento4_6"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento4_7"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento4_8"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento4_9">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Preparación"
                      v-model="form.alimento5_1"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento5_2">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento5_3">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento5_4">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento5_5">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento5_6"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento5_7"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="°C"
                      v-model="form.alimento5_8"
                    />
                  </td>
                  <td>
                    <select class="form-select" v-model="form.alimento5_9">
                      <option value="Cumple">Cumple</option>
                      <option value="No Cumple">No Cumple</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td colspan="7">
                    INDICADOR: Número de preparaciones que cumplen criterios de
                    calidad y organolépticos / Número de preparaciones
                    verificadas
                  </td>
                  <td colspan="3">
                    <input
                      type="number"
                      step="any"
                      class="form-control"
                      placeholder="%"
                      v-model="form.porcentaje3"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Observaciones -->
          <div class="mb-1">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              id="observaciones"
              v-model="form.observaciones"
              class="form-control"
              rows="3"
            ></textarea>
          </div>

          <!-- Firmas -->
          <div class="row mb-1">
            <div class="col-md-6">
              <label class="form-label"
                >FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</label
              >
              <div class="mb-1">
                <SignaturePad
                  idFirma="firma1"
                  :varFirma="form.firma1"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div class="mb-1">
                <label for="nombreEquipo" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreEquipo"
                  v-model="form.nombre_apoyo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cedulaEquipo" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaEquipo"
                  v-model="form.cedula_apoyo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cargoEquipo" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoEquipo"
                  v-model="form.cargo_apoyo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
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
              <div class="mb-1">
                <SignaturePad
                  idFirma="firma2"
                  :varFirma="form.firma2"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div class="mb-1">
                <label for="nombreVisita" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreVisita"
                  v-model="form.nombre_atiende"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cedulaVisita" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaVisita"
                  v-model="form.cedula_atiende"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cargoVisita" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoVisita"
                  v-model="form.cargo_atiende"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
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
import InstitucionSelect from "@/components/InstitucionSelect.vue";
import SedeSelect from "@/components/SedeSelect.vue";
import FileUploader from "@/components/FileUploader.vue";

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
      form: {
        etc: "Norte de Santander",
        files: [],
        fecha_visita: "",
        hora_inicial: "",
        hora_final: "",
        institucion: "",
        municipio: "",
        sede: "",
        numero_visita: "",
        tipo_visita: "",
        num_beneficiarios: "",
        operador: "",
        contrato: "",
        observaciones: "",
        condi_1: "",
        condi_2: "",
        condi_3: "",
        condi_4: "",
        condi_5: "",
        condi_6: "",
        condi_7: "",
        condi_8: "",
        condi_9: "",
        condi_10: "",
        condi_11: "",
        condi_12: "",
        condi_13: "",
        condi_14: "",
        condi_15: "",
        condi_16: "",
        condi_17: "",
        condi_18: "",
        condi_19: "",
        condi_20: "",
        condi_21: "",
        condi_22: "",
        condi_23: "",
        condi_24: "",
        condi_25: "",
        condi_26: "",
        condi_27: "",
        condi_28: "",
        condi_29: "",
        condi_30: "",
        condi_31: "",
        condi_32: "",
        condi_33: "",
        condi_34: "",
        condi_35: "",
        condi_36: "",
        condi_37: "",
        condi_38: "",
        condi_39: "",
        condi_40: "",
        condi_41: "",
        condi_42: "",
        condi_43: "",
        condi_44: "",
        condi_45: "",
        condi_46: "",
        condi_47: "",
        condi_48: "",
        condi_49: "",
        condi_50: "",
        condi_51: "",
        condi_52: "",
        condi_53: "",
        condi_54: "",
        condi_55: "",
        condi_56: "",
        condi_57: "",
        condi_58: "",
        condi_59: "",
        condi_60: "",
        condi_1_obs: "",
        condi_2_obs: "",
        condi_3_obs: "",
        condi_4_obs: "",
        condi_5_obs: "",
        condi_6_obs: "",
        condi_7_obs: "",
        condi_8_obs: "",
        condi_9_obs: "",
        condi_10_obs: "",
        condi_11_obs: "",
        condi_12_obs: "",
        condi_13_obs: "",
        condi_14_obs: "",
        condi_15_obs: "",
        condi_16_obs: "",
        condi_17_obs: "",
        condi_18_obs: "",
        condi_19_obs: "",
        condi_20_obs: "",
        condi_21_obs: "",
        condi_22_obs: "",
        condi_23_obs: "",
        condi_24_obs: "",
        condi_25_obs: "",
        condi_26_obs: "",
        condi_27_obs: "",
        condi_28_obs: "",
        condi_29_obs: "",
        condi_30_obs: "",
        condi_31_obs: "",
        condi_32_obs: "",
        condi_33_obs: "",
        condi_34_obs: "",
        condi_35_obs: "",
        condi_36_obs: "",
        condi_37_obs: "",
        condi_38_obs: "",
        condi_39_obs: "",
        condi_40_obs: "",
        condi_41_obs: "",
        condi_42_obs: "",
        condi_43_obs: "",
        condi_44_obs: "",
        condi_45_obs: "",
        condi_46_obs: "",
        condi_47_obs: "",
        condi_48_obs: "",
        condi_49_obs: "",
        condi_50_obs: "",
        condi_51_obs: "",
        condi_52_obs: "",
        condi_53_obs: "",
        condi_54_obs: "",
        condi_55_obs: "",
        condi_56_obs: "",
        condi_57_obs: "",
        condi_58_obs: "",
        condi_59_obs: "",
        condi_60_obs: "",
        alimento1_1: "",
        alimento1_2: "",
        alimento1_3: "",
        alimento1_4: "",
        alimento1_5: "",
        alimento1_6: "",
        alimento1_7: "",
        alimento1_8: "",
        alimento1_9: "",
        alimento2_1: "",
        alimento2_2: "",
        alimento2_3: "",
        alimento2_4: "",
        alimento2_5: "",
        alimento2_6: "",
        alimento2_7: "",
        alimento2_8: "",
        alimento2_9: "",
        alimento3_1: "",
        alimento3_2: "",
        alimento3_3: "",
        alimento3_4: "",
        alimento3_5: "",
        alimento3_6: "",
        alimento3_7: "",
        alimento3_8: "",
        alimento3_9: "",
        alimento4_1: "",
        alimento4_2: "",
        alimento4_3: "",
        alimento4_4: "",
        alimento4_5: "",
        alimento4_6: "",
        alimento4_7: "",
        alimento4_8: "",
        alimento4_9: "",
        alimento5_1: "",
        alimento5_2: "",
        alimento5_3: "",
        alimento5_4: "",
        alimento5_5: "",
        alimento5_6: "",
        alimento5_7: "",
        alimento5_8: "",
        alimento5_9: "",
        porcentaje1: "",
        porcentaje2: "",
        porcentaje3: "",
        proteico1: "",
        proteico2: "",
        proteico3: "",
        proteico4: "",
        proteico5: "",
        proteico6: "",
        proteico7: "",
        proteico8: "",
        leguminosa1: "",
        leguminosa2: "",
        leguminosa3: "",
        leguminosa4: "",
        leguminosa5: "",
        leguminosa6: "",
        leguminosa7: "",
        leguminosa8: "",
        cereal1: "",
        cereal2: "",
        cereal3: "",
        cereal4: "",
        cereal5: "",
        cereal6: "",
        cereal7: "",
        cereal8: "",
        tuberculo1: "",
        tuberculo2: "",
        tuberculo3: "",
        tuberculo4: "",
        tuberculo5: "",
        tuberculo6: "",
        tuberculo7: "",
        tuberculo8: "",
        verdura1: "",
        verdura2: "",
        verdura3: "",
        verdura4: "",
        verdura5: "",
        verdura6: "",
        verdura7: "",
        verdura8: "",
        jugo1: "",
        jugo2: "",
        jugo3: "",
        jugo4: "",
        jugo5: "",
        jugo6: "",
        jugo7: "",
        jugo8: "",
        fecha_ultima_fumiga: "",
        fecha_ultima_limpieza: "",
        fecha_ultima_visita: "",
        concepto_emitido: "",
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
    calcularIndicadores() {
      let totalIndicador1 = 0;
      let totalIndicador2 = 0;

      Object.keys(this.form).forEach((key) => {
        if (key.startsWith("condi_") && this.form[key]) {
          let numeroPregunta = parseInt(key.replace("condi_", "")); // Extraer número de la pregunta
          let valorNumerico = parseFloat(this.form[key].split("-")[0]);

          if (!isNaN(valorNumerico)) {
            if (numeroPregunta >= 1 && numeroPregunta <= 49) {
              totalIndicador1 += valorNumerico; // Sumar a indicador1
            } else if (numeroPregunta >= 50 && numeroPregunta <= 60) {
              totalIndicador2 += valorNumerico; // Sumar a indicador2
            }
          }
        }
      });

      // Asignar los valores calculados a los indicadores
      this.form.porcentaje1 = totalIndicador1.toFixed(2);
      this.form.porcentaje2 = totalIndicador2.toFixed(2);
    },
    guardarFormulario() {
      this.isLoading = true;
      this.calcularIndicadores();
      // validar municipio, sede e institucion
      if (
        this.form.municipio === "" ||
        this.form.sede === "" ||
        this.form.institucion === ""
      ) {
        this.showToast(
          "Debe seleccionar un municipio, institución y sede",
          "danger"
        );
        this.isLoading = false;
        return;
      }
      //validar archivos
      if (this.form.files.length === 0) {
        this.showToast("Debe seleccionar al menos un archivo", "danger");
        this.isLoading = false;
        return;
      }
      //validar firmas
      if (this.form.firma1 === "" || this.form.firma2 === "") {
        this.showToast("Debe diligenciar y guardar las firmas", "danger");
        this.isLoading = false;
        return;
      }
      //validar datos de las firmas
      if (
        this.form.nombre_apoyo === "" ||
        this.form.cedula_apoyo === "" ||
        this.form.cargo_apoyo === "" ||
        this.form.telefono_apoyo === "" ||
        this.form.nombre_atiende === "" ||
        this.form.cedula_atiende === "" ||
        this.form.cargo_atiende === "" ||
        this.form.telefono_atiende === ""
      ) {
        this.showToast("Debe diligenciar y guardar las firmas", "danger");
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
          `${apiUrl}/ct_verificacion_modalidad_rps`,
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
            "Formulario de verificación modalidad PS guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente tecnico, verificación modalidad PS",
          "danger"
        );
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.form = {
        etc: "Norte de Santander",
        files: [],
        fecha_visita: "",
        hora_inicial: "",
        hora_final: "",
        municipio: "",
        institucion: "",
        sede: "",
        numero_visita: "",
        tipo_visita: "",
        num_beneficiarios: "",
        operador: "",
        contrato: "",
        observaciones: "",
        condi_1: "",
        condi_2: "",
        condi_3: "",
        condi_4: "",
        condi_5: "",
        condi_6: "",
        condi_7: "",
        condi_8: "",
        condi_9: "",
        condi_10: "",
        condi_11: "",
        condi_12: "",
        condi_13: "",
        condi_14: "",
        condi_15: "",
        condi_16: "",
        condi_17: "",
        condi_18: "",
        condi_19: "",
        condi_20: "",
        condi_21: "",
        condi_22: "",
        condi_23: "",
        condi_24: "",
        condi_25: "",
        condi_26: "",
        condi_27: "",
        condi_28: "",
        condi_29: "",
        condi_30: "",
        condi_31: "",
        condi_32: "",
        condi_33: "",
        condi_34: "",
        condi_35: "",
        condi_36: "",
        condi_37: "",
        condi_38: "",
        condi_39: "",
        condi_40: "",
        condi_41: "",
        condi_42: "",
        condi_43: "",
        condi_44: "",
        condi_45: "",
        condi_46: "",
        condi_47: "",
        condi_48: "",
        condi_49: "",
        condi_50: "",
        condi_51: "",
        condi_52: "",
        condi_53: "",
        condi_54: "",
        condi_55: "",
        condi_56: "",
        condi_57: "",
        condi_58: "",
        condi_59: "",
        condi_60: "",
        condi_1_obs: "",
        condi_2_obs: "",
        condi_3_obs: "",
        condi_4_obs: "",
        condi_5_obs: "",
        condi_6_obs: "",
        condi_7_obs: "",
        condi_8_obs: "",
        condi_9_obs: "",
        condi_10_obs: "",
        condi_11_obs: "",
        condi_12_obs: "",
        condi_13_obs: "",
        condi_14_obs: "",
        condi_15_obs: "",
        condi_16_obs: "",
        condi_17_obs: "",
        condi_18_obs: "",
        condi_19_obs: "",
        condi_20_obs: "",
        condi_21_obs: "",
        condi_22_obs: "",
        condi_23_obs: "",
        condi_24_obs: "",
        condi_25_obs: "",
        condi_26_obs: "",
        condi_27_obs: "",
        condi_28_obs: "",
        condi_29_obs: "",
        condi_30_obs: "",
        condi_31_obs: "",
        condi_32_obs: "",
        condi_33_obs: "",
        condi_34_obs: "",
        condi_35_obs: "",
        condi_36_obs: "",
        condi_37_obs: "",
        condi_38_obs: "",
        condi_39_obs: "",
        condi_40_obs: "",
        condi_41_obs: "",
        condi_42_obs: "",
        condi_43_obs: "",
        condi_44_obs: "",
        condi_45_obs: "",
        condi_46_obs: "",
        condi_47_obs: "",
        condi_48_obs: "",
        condi_49_obs: "",
        condi_50_obs: "",
        condi_51_obs: "",
        condi_52_obs: "",
        condi_53_obs: "",
        condi_54_obs: "",
        condi_55_obs: "",
        condi_56_obs: "",
        condi_57_obs: "",
        condi_58_obs: "",
        condi_59_obs: "",
        condi_60_obs: "",
        alimento1_1: "",
        alimento1_2: "",
        alimento1_3: "",
        alimento1_4: "",
        alimento1_5: "",
        alimento1_6: "",
        alimento1_7: "",
        alimento1_8: "",
        alimento1_9: "",
        alimento2_1: "",
        alimento2_2: "",
        alimento2_3: "",
        alimento2_4: "",
        alimento2_5: "",
        alimento2_6: "",
        alimento2_7: "",
        alimento2_8: "",
        alimento2_9: "",
        alimento3_1: "",
        alimento3_2: "",
        alimento3_3: "",
        alimento3_4: "",
        alimento3_5: "",
        alimento3_6: "",
        alimento3_7: "",
        alimento3_8: "",
        alimento3_9: "",
        alimento4_1: "",
        alimento4_2: "",
        alimento4_3: "",
        alimento4_4: "",
        alimento4_5: "",
        alimento4_6: "",
        alimento4_7: "",
        alimento4_8: "",
        alimento4_9: "",
        alimento5_1: "",
        alimento5_2: "",
        alimento5_3: "",
        alimento5_4: "",
        alimento5_5: "",
        alimento5_6: "",
        alimento5_7: "",
        alimento5_8: "",
        alimento5_9: "",
        porcentaje1: "",
        porcentaje2: "",
        porcentaje3: "",
        proteico1: "",
        proteico2: "",
        proteico3: "",
        proteico4: "",
        proteico5: "",
        proteico6: "",
        proteico7: "",
        proteico8: "",
        leguminosa1: "",
        leguminosa2: "",
        leguminosa3: "",
        leguminosa4: "",
        leguminosa5: "",
        leguminosa6: "",
        leguminosa7: "",
        leguminosa8: "",
        cereal1: "",
        cereal2: "",
        cereal3: "",
        cereal4: "",
        cereal5: "",
        cereal6: "",
        cereal7: "",
        cereal8: "",
        tuberculo1: "",
        tuberculo2: "",
        tuberculo3: "",
        tuberculo4: "",
        tuberculo5: "",
        tuberculo6: "",
        tuberculo7: "",
        tuberculo8: "",
        verdura1: "",
        verdura2: "",
        verdura3: "",
        verdura4: "",
        verdura5: "",
        verdura6: "",
        verdura7: "",
        verdura8: "",
        jugo1: "",
        jugo2: "",
        jugo3: "",
        jugo4: "",
        jugo5: "",
        jugo6: "",
        jugo7: "",
        jugo8: "",
        fecha_ultima_fumiga: "",
        fecha_ultima_limpieza: "",
        fecha_ultima_visita: "",
        concepto_emitido: "",
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
