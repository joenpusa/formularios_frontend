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
                Formato de verificación modalidad comida caliente transportada -
                CCT
              </li>
            </ol>
          </nav>
          <h2>
            FORMATO VERIFICACIÓN MODALIDAD COMIDA CALIENTE TRANSPORTADA - CCT
          </h2>
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
                    v-model="form.etc"
                    value="Norte de Santander"
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
                <div class="col-md-3">
                  <label for="horaInicial" class="form-label"
                    >Hora Inicial:</label
                  >
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
                  <label for="tipoVisita" class="form-label"
                    >Tipo de visita:</label
                  >
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
            </div>
          </div>

          <!-- Verification of Operation Conditions -->
          <div class="card mb-4">
            <div class="card-header text-white">
              <h3 class="mb-0">Verificación Condiciones de Operación</h3>
            </div>
            <div class="card-body">
              <div class="mb-4">
                <table class="table table-bordered">
                  <tr>
                    <td colspan="4">Crterios de evaluación</td>
                  </tr>
                  <tr>
                    <td colspan="2">Aceptable (A)</td>
                    <td colspan="2">
                      Seleccione con un círculo cuando se cumplen la totalidad
                      de los requisitos descritos en el aspecto a evaluar
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">Aceptable con Requerimiento (AR)</td>
                    <td colspan="2">
                      Seleccione con un círculo cuando se cumplen parcialmente
                      los requisitos descritos en el aspecto a evaluar
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
                  <tbody>
                    <tr>
                      <th colspan="4">Condiciones higiénico sanitarias</th>
                    </tr>
                    <tr>
                      <th colspan="4">Edificaciones e instalaciones</th>
                    </tr>
                    <tr>
                      <th>N°</th>
                      <th>Aspectos a evaluar</th>
                      <th>Criterios para evaluar</th>
                      <th>Observaciones</th>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>
                        El área de almacenamiento de los alimentos se encuentra
                        limpia y se garantizan condiciones higiénico-sanitarias.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_1"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_1_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        El área de preparación de los alimentos se encuentra
                        limpia y se garantizan condiciones higiénico-sanitarias.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_2"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_2_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        El área de ensamble de los alimentos se encuentra limpia
                        y se garantizan condiciones higiénico-sanitarias.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_3"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_3_obs"
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
                        <select
                          class="form-select"
                          v-model="form.pre_4"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_4_obs"
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
                        <select
                          class="form-select"
                          v-model="form.pre_5"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_5_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">Plan de saneamiento</th>
                    </tr>
                    <tr>
                      <th colspan="4">Programa de Limpieza y Desinfección</th>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        Existe el documento que soporte el programa de limpieza
                        y desinfección, en su contenido se describen los
                        procedimientos, 6 operaciones y formatos de registros
                        para la periodicidad de los mismos (áreas, equipos,
                        superficies, utensilios, personal manipulador y
                        alimentos).
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_6"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_6_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        Los implementos (escobas, traperos, recogedores, guantes
                        entre otros) que se utilizan para el aseo, permanecen en
                        adecuadas condiciones de limpieza y en el lugar
                        establecido.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_7"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_7_obs"
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
                        <select
                          class="form-select"
                          v-model="form.pre_8"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_8_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        Se llevan los registros actualizados que soportan el
                        cumplimiento de las actividades del programa de limpieza
                        y desinfección.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_9"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_9_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">Control de plagas</th>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>
                        No se evidencia indicio o presencia de plagas y las
                        áreas cuentan con barreras que minimicen el ingreso de
                        vectores.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_10"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_10_obs"
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
                        <input
                          type="hidden"
                          class="form-control"
                          v-model="form.fecha_fumigacion"
                          value=""
                        />
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_11"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_11_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>
                        Se llevan los registros actualizados que soportan el
                        cumplimiento de las actividades del programa de control
                        de plagas.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_12"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_12_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">
                        Manejo y disposición de residuos sólidos y líquidos
                      </th>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>
                        Existe al interior del servicio de alimentación,
                        recipientes de material sanitario, para la recolección
                        de residuos sólidos, en buen estado, en cantidad
                        suficiente, bien ubicados e identificados conforme a la
                        norma sanitaria vigente.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_13"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_13_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>
                        La clasificación y segregación de residuos sólidos se
                        realiza de acuerdo con lo establecido en el programa de
                        manejo de residuos. Adicionalmente, los residuos sólidos
                        son retirados con la frecuencia necesaria para evitar
                        generación de olores y/o proliferación de plagas.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_14"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_14_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>
                        El manejo de los residuos líquidos y sólidos no
                        representa riesgo de contaminación para los alimentos ni
                        para las superficies en contacto con éstos.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_15"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_15_obs"
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
                          v-model="form.pre_16"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_16_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>
                        Se efectúa mantenimiento y limpieza a las trampas de
                        grasas ubicadas en las instalaciones del
                        establecimiento.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_17"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_17_obs"
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
                          v-model="form.pre_18"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_18_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">Abastecimiento de agua</th>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>
                        Disponen de un tanque de almacenamiento de agua potable
                        y se encuentra construido de material higiénico
                        sanitario, hermético y se encuentra en constante
                        circulación, además tiene la capacidad suficiente para
                        un día de producción.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_19"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_19_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>
                        Se realiza la limpieza y desinfección periódica del
                        tanque de almacenamiento de agua potable.
                        <!-- Fecha de la última limpieza y desinfección realizada: -->
                        <input
                          type="hidden"
                          class="form-control"
                          v-model="form.fecha_limpieza_tanque"
                        />
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_20"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_20_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">Personal manipulador</th>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>
                        El personal manipulador no presenta afecciones de la
                        piel o enfermedades infectocontagiosas.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_21"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_21_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>
                        Cuenta con la dotación completa, limpia, en buen estado
                        y hace uso adecuado de la misma de acuerdo a lo
                        establecido en la normatividad vigente.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_22"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_22_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td>
                        Cumple con las buenas practicas de manufactura durante
                        todas las etapas del proceso de acuerdo a lo establecido
                        en la normatividad vigente.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_23"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_23_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>
                        Se evidencia por cada una de las manipuladoras
                        certificado médico (apto para manipular alimentos) con
                        los respectivos soportes de los exámenes médicos.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_24"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_24_obs"
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
                          v-model="form.pre_25"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_25_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">Operaciones de fabricación</th>
                    </tr>
                    <tr>
                      <th colspan="4">
                        Condiciones de distribución y transporte en recepción de
                        materia prima
                      </th>
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
                          v-model="form.pre_26"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_26_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>
                        El vehículo cuenta con concepto sanitario expedido por
                        la autoridad competente con concepto favorable.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_27"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_27_obs"
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
                          v-model="form.pre_28"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_28_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>
                        Las materias primas, se reciben en un lugar limpio y en
                        condiciones físicas que minimicen el riesgo de
                        contaminación o alteración de las características
                        propias de cada producto.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_29"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_29_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>
                        Se da cumplimiento a los criterios de aceptación y
                        rechazo de la materia prima recibida y existen controles
                        de este proceso (fecha de vencimiento, lote, condiciones
                        de empaque y cumplimiento de la Resolución 5109 de 2005
                        y demás normatividad vigente).
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_30"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_30_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>
                        El personal manipulador verifica la temperatura de las
                        materias primas que requieren refrigeración y
                        congelación.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_31"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_31_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">Almacenamiento</th>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>
                        Se almacenan los alimentos de alto riesgo (lácteos y
                        cárnicos etc.) dentro de los rangos de temperatura
                        exigidos en la resolución 2674 de 2013 y normatividad
                        sanitaria vigente.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_32"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_32_obs"
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
                          v-model="form.pre_33"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_33_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>34</td>
                      <td>
                        Los alimentos y materias primas se encuentran libres de
                        presencia de moho, abombamiento, pérdida del vacío,
                        fecha caducada u otro aspecto que incumpla con las
                        características de calidad o inocuidad de los productos.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_34"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_34_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>35</td>
                      <td>
                        El rotulado y etiquetado del empaque primario de los
                        alimentos cumple con lo estipulado en la Resolución 5109
                        de 2005 y demás normatividad vigente.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_35"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_35_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>36</td>
                      <td>
                        Los registros de control de temperatura de los alimentos
                        en refrigeración y congelación, son diligenciados
                        correctamente y se realizan de manera oportuna.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_36"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_36_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>37</td>
                      <td>
                        Se lleva un control de entradas y salidas, Kárdex y
                        rotación de productos - PEPS.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_37"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_37_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="4">Preparación, ensamble y distribución</th>
                    </tr>
                    <tr>
                      <td>38</td>
                      <td>
                        Los procesos de producción se realizan de manera
                        secuencial y continua de tal forma que se protegen los
                        alimentos de posibles riesgos de contaminación.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_38"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_38_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>39</td>
                      <td>
                        Se lavan y desinfectan los empaques, los alimentos o
                        materias primas crudas como frutas, verduras y
                        hortalizas y productos de pesca con agua potable, antes
                        de su preparación y en los tiempos establecidos de
                        desinfección.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_39"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_39_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>40</td>
                      <td>
                        Los procedimientos de operación como: lavar, pelar,
                        cortar, clasificar, extraer, batir, entre otros, se
                        realizan de manera que se protejan los alimentos y
                        materias primas de posibles riesgos de contaminación.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_40"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_40_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>41</td>
                      <td>
                        Los tiempos de exposición de los alimentos se encuentran
                        dentro de lo establecido en la normatividad vigente y no
                        generan posibles riesgos de contaminación.
                        Adicionalmente, los procesos de descongelación
                        requeridos se realizan de forma controlada para evitar
                        el desarrollo de microorganismos.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_41"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_41_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>42</td>
                      <td>
                        Todos los complementos están libres de contaminación
                        física, biológica, química y cumplen con las
                        características de calidad o inocuidad.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_42"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_42_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>43</td>
                      <td>
                        Existen manuales y hoja de vida de los equipos, así como
                        formatos para el servicio de mantenimiento preventivo y
                        correctivo de equipos ajustados a las características
                        del establecimiento. Se llevan los registros
                        actualizados que soportan el cumplimiento de las
                        actividades realizadas.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_43"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_43_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>44</td>
                      <td>
                        Se realiza monitoreo de las temperaturas para los
                        alimentos fríos y calientes en las diferentes etapas de
                        proceso.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_44"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_44_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>45</td>
                      <td>
                        Las temperaturas para los alimentos fríos y calientes en
                        las diferentes etapas de proceso se mantienen dentro del
                        rango de seguridad que garantiza inocuidad.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_45"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_45_obs"
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
                          v-model="form.pre_46"
                          required
                        >
                          <option value="1-A">Aceptable (A)</option>
                          <option value="0.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="1-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_46_obs"
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
                        alimentos que conforman la ración servida de acuerdo con
                        las normas legales vigentes.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_47"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_47_obs"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>48</td>
                      <td>
                        Se cuenta con instrumentos de medición con el fin de
                        realizar control en cada una de las etapas de producción
                        y se garantiza la confiabilidad de las mediciones
                        realizadas.
                      </td>
                      <td>
                        <select
                          class="form-select"
                          v-model="form.pre_48"
                          required
                        >
                          <option value="2-A">Aceptable (A)</option>
                          <option value="1-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="2-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_48_obs"
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
                          v-model="form.pre_49"
                          required
                        >
                          <option value="3-A">Aceptable (A)</option>
                          <option value="1.5-AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="0-I">Inaceptable (I)</option>
                          <option value="0-NA">No Aplica (NA)</option>
                          <option value="3-A-NA">
                            Aceptable-No Aplica (A-NA)
                          </option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.pre_49_obs"
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
                <thead class="table-primary text-center">
                  <tr>
                    <th rowspan="2">Componente</th>
                    <th rowspan="2">Preparación</th>
                    <th rowspan="2">Grupo escolar verificado</th>
                    <th rowspan="2">
                      Cantidad Porción Servida según Minuta Patrón
                    </th>
                    <th colspan="4">Peso o volumen de muestras servidas</th>

                    <th>Cumplimiento</th>
                  </tr>
                  <tr>
                    <th>Muestra N° 1</th>
                    <th>Muestra N° 2</th>
                    <th>Muestra N° 3</th>
                    <th>Unidad de Medida (g o ml)</th>
                    <th>Cumple / No cumple</th>
                  </tr>
                </thead>
                <tbody>
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
                        type="number"
                        class="form-control"
                        v-model="form.proteico4"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.proteico5"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.proteico6"
                      />
                    </td>
                    <td>
                      <select class="form-select" v-model="form.proteico7">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select" v-model="form.proteico8">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
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
                        type="number"
                        class="form-control"
                        v-model="form.leguminosa4"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.leguminosa5"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.leguminosa6"
                      />
                    </td>
                    <td>
                      <select class="form-select" v-model="form.leguminosa7">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select" v-model="form.leguminosa8">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
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
                        type="number"
                        class="form-control"
                        v-model="form.cereal4"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.cereal5"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.cereal6"
                      />
                    </td>
                    <td>
                      <select class="form-select" v-model="form.cereal7">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select" v-model="form.cereal8">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Tuberculos, platanos, derivados del cereal</td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.tuberculos1"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.tuberculos2"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.tuberculos3"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.tuberculos4"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.tuberculos5"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.tuberculos6"
                      />
                    </td>
                    <td>
                      <select class="form-select" v-model="form.tuberculos7">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select" v-model="form.tuberculos8">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
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
                        type="number"
                        class="form-control"
                        v-model="form.verdura4"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.verdura5"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.verdura6"
                      />
                    </td>
                    <td>
                      <select class="form-select" v-model="form.verdura7">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select" v-model="form.verdura8">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Jugo de fruta</td>
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
                        type="number"
                        class="form-control"
                        v-model="form.jugo4"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.jugo5"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.jugo6"
                      />
                    </td>
                    <td>
                      <select class="form-select" v-model="form.jugo7">
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select" v-model="form.jugo8">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5">
                      INDICADOR: Porcentaje de cumplimiento de condiciones
                      operativas
                    </td>
                    <td colspan="2">% de Cumplimiento</td>
                    <td colspan="2">
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.indicador1"
                        step="any"
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Verification of Nutritional Requirements -->
          <div class="card mb-4">
            <div class="card-header text-white">
              <h4 class="mb-0">
                VERIFICACIÓN DE REQUERIMIENTOS ALIMENTARIOS Y NUTRICIONALES -
                CUMPLIMIENTO MINUTA PATRÓN
              </h4>
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
                        v-model="form.pre_50"
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
                        v-model="form.pre_50_obs"
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
                        v-model="form.pre_51"
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
                        v-model="form.pre_51_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>52</td>
                    <td>
                      Se encuentran estandarizadas los tamaños de las porciones
                      en las preparaciones y se cuenta con elementos de
                      estandarización para el servido.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_52"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_52_obs"
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
                        v-model="form.pre_53"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_53_obs"
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
                        v-model="form.pre_54"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_54_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>
                      El menú entregado a los estudiantes tiene aspecto
                      atractivo y buena presentación.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_55"
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
                        v-model="form.pre_55_obs"
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
                        v-model="form.pre_56"
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
                        v-model="form.pre_56_obs"
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
                        v-model="form.pre_57"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_57_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>58</td>
                    <td>
                      En el lugar de consumo se promocionan practicas adecuadas
                      de hábitos alimentarios en los estudiantes beneficiarios.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_58"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_58_obs"
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
                        v-model="form.pre_59"
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
                        v-model="form.pre_59_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>
                      El desperdicio de alimentos en la etapa de descomide es
                      bajo, de conformidad a la política para prevenir la
                      pérdida y el desperdicio de alimentos según la ley 1990 de
                      2019.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_60"
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
                        v-model="form.pre_60_obs"
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
                        v-model="form.indicador2"
                        step="any"
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
                        v-model="form.tb_verificacion1_1"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion1_2"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion1_3"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion1_4"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion1_5"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                        step="any"
                        v-model="form.tb_verificacion1_6"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        step="any"
                        placeholder="°C"
                        v-model="form.tb_verificacion1_7"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion1_8"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion1_9"
                      >
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
                        v-model="form.tb_verificacion2_1"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion2_2"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion2_3"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion2_4"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion2_5"
                      >
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
                        v-model="form.tb_verificacion2_6"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion2_7"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion2_8"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion2_9"
                      >
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
                        v-model="form.tb_verificacion3_1"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion3_2"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion3_3"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion3_4"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion3_5"
                      >
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
                        v-model="form.tb_verificacion3_6"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion3_7"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion3_8"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion3_9"
                      >
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
                        v-model="form.tb_verificacion4_1"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion4_2"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion4_3"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion4_4"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion4_5"
                      >
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
                        v-model="form.tb_verificacion4_6"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion4_7"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion4_8"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion4_9"
                      >
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
                        v-model="form.tb_verificacion5_1"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion5_2"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion5_3"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion5_4"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion5_5"
                      >
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
                        v-model="form.tb_verificacion5_6"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion5_7"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="°C"
                        v-model="form.tb_verificacion5_8"
                      />
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.tb_verificacion5_9"
                      >
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="7">
                      INDICADOR: Número de preparaciones que cumplen criterios
                      de calidad y organolépticos / Número de preparaciones
                      verificadas
                    </td>
                    <td colspan="3">
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="%"
                        v-model="form.indicador3"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-bordered">
                <tbody>
                  <tr class="table-primary text-center">
                    <td colspan="6">
                      VERIFICACIÓN CONDICIONES DE TRANSPORTE Y DISTRIBUCIÓN
                    </td>
                  </tr>
                  <tr class="table-primary">
                    <td colspan="6">Datos de distribución</td>
                  </tr>
                  <tr>
                    <td>Centro de Producción (CDP):</td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.cdp"
                        required
                      />
                    </td>
                    <td>Placa del vehículo:</td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.placa_vehiculo"
                        required
                      />
                    </td>
                    <td>N° de sedes:</td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.numero_sedes"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="text-center table-primary">
                      Nombre del establecimiento educativo
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.nombre1"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.nombre2"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.nombre3"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.nombre4"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">Hora de salida del CDP.</td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_salida1"
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_salida2"
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_salida3"
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_salida4"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">Temperatura de salida del complemento.</td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_salida1"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_salida2"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_salida3"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_salida4"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      Hora de llegada al establecimiento educativo.
                    </td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_llegada1"
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_llegada2"
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_llegada3"
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        class="form-control"
                        v-model="form.hora_llegada4"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      Temperatura del complemento para consumo.
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_llegada1"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_llegada2"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_llegada3"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        v-model="form.temperatura_llegada4"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">Cantidad de raciones entregadas.</td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.cantidad_raciones1"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.cantidad_raciones2"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.cantidad_raciones3"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.cantidad_raciones4"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="6">
                      Nota: Se realizará verificación de las condiciones de
                      distribución a uno de los establecimientos educativos, a
                      razón de los tiempos y desplazamientos por parte del
                      equipo de apoyo a la supervisión.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td>61</td>
                    <td>
                      El personal manipulador y transportador cuenta con la
                      documentación exigida para manipular alimentos de acuerdo
                      a lo establecido en la Resolución 2674 de 2013 y ésta se
                      encuentra vigente.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_61"
                        required
                      >
                        <option value="7-A">Aceptable (A)</option>
                        <option value="3.5-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="7-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_61_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>62</td>
                    <td>
                      Cuenta con la dotación completa, limpia, en buen estado y
                      hace uso adecuado de la misma de acuerdo a lo establecido
                      en la normatividad vigente.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_62"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_62_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>63</td>
                    <td>
                      El personal manipulador y transportador cumple con las
                      buenas prácticas de manufactura en las diferentes etapas
                      del proceso, según lo establecido en la normatividad legal
                      vigente.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_63"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_63_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>64</td>
                    <td>
                      Los vehículos para el transporte de las canastillas que
                      contienen los portacomidas cumplen con la normatividad
                      sanitaria vigente (Resolución 2674 de 2013) y los
                      lineamientos determinados para transporte de alimentos
                      establecidos por el Ministerio de Transporte.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_64"
                        required
                      >
                        <option value="7-A">Aceptable (A)</option>
                        <option value="3.5-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="7-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_64_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>65</td>
                    <td>
                      El vehículo cuenta con certificación sanitaria expedida
                      por la autoridad competente con concepto favorable.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_65"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_65_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>66</td>
                    <td>
                      Las Canastillas y/o equipos donde son transportados los
                      alimentos se encuentran limpias, en buen estado y son de
                      material resistente.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_66"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_66_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>67</td>
                    <td>
                      La cantidad de complementos alimentarios entregados se
                      ajusta a las cantidades definidas para la sede educativa.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_67"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_67_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>68</td>
                    <td>
                      Durante el descargue y entrega de los complementos
                      alimentarios en la sede educativa se evidencia adecuadas
                      practicas de manufactura.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_68"
                        required
                      >
                        <option value="7-A">Aceptable (A)</option>
                        <option value="3.5-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="7-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_68_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>69</td>
                    <td>
                      Los complementos alimentarios son entregados a las sedes
                      educativas cumpliendo con los horarios establecidos para
                      el consumo.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_69"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_69_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>
                      Los portacomidas y vasos herméticos donde vienen
                      ensamblados o contenidos los complementos alimentarios se
                      encuentran en buen estado.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_70"
                        required
                      >
                        <option value="7-A">Aceptable (A)</option>
                        <option value="3.5-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="7-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_70_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>71</td>
                    <td>
                      Las áreas para la distribución y consumo de los
                      complementos alimentarios se encuentran en adecuadas
                      condiciones higiénicas y físicas.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_71"
                        required
                      >
                        <option value="7-A">Aceptable (A)</option>
                        <option value="3.5-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="7-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_71_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>72</td>
                    <td>
                      Se dispone del menaje suficiente de acuerdo al número de
                      beneficiarios establecidos y se encuentran en adecuadas
                      condiciones físicas e higiénicas.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_72"
                        required
                      >
                        <option value="8-A">Aceptable (A)</option>
                        <option value="4-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="8-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_72_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>73</td>
                    <td>
                      Durante el consumo de los complementos alimentarios no se
                      presentan novedades relacionadas con la calidad
                      (sensorial, inocuidad, entre otros) y cantidad de los
                      complementos alimentarios.
                    </td>
                    <td>
                      <select
                        class="form-select"
                        v-model="form.pre_73"
                        required
                      >
                        <option value="9-A">Aceptable (A)</option>
                        <option value="4.5-AR">
                          Aceptable con Requerimiento (AR)
                        </option>
                        <option value="0-I">Inaceptable (I)</option>
                        <option value="0-NA">No Aplica (NA)</option>
                        <option value="9-A-NA">
                          Aceptable-No Aplica (A-NA)
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.pre_73_obs"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      INDICADOR: Número de preparaciones que cumplen criterios
                      de calidad y organolépticos / Número de preparaciones
                      verificadas
                    </td>
                    <td colspan="2">
                      <input
                        type="number"
                        step="any"
                        class="form-control"
                        placeholder="%"
                        v-model="form.indicador4"
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <label class="form-label"
                  >OBSERVACIONES DE QUIEN RECIBE LA VISITA</label
                >
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="form.observaciones_recibe"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Signatures -->
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="mb-0">Firmas</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <h4>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h4>
                  <div class="mb-2">
                    <SignaturePad
                      idFirma="firma1"
                      :varFirma="form.firma1"
                      @firmas-updated="actualizarFirmas"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="nombreEquipoPAE" class="form-label"
                      >Nombre:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nombreEquipoPAE"
                      v-model="form.nombre_apoyo"
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
                      v-model="form.cedula_apoyo"
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
                      v-model="form.cargo_apoyo"
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
                      v-model="form.telefono_apoyo"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <h4>FIRMA QUIEN ATIENDE LA VISITA</h4>
                  <div class="mb-2">
                    <SignaturePad
                      idFirma="firma2"
                      :varFirma="form.firma2"
                      @firmas-updated="actualizarFirmas"
                    />
                  </div>
                  <div class="mb-3">
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
                  <div class="mb-3">
                    <label for="cedulaAtiendeVisita" class="form-label"
                      >Cédula:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cedulaAtiendeVisita"
                      v-model="form.cedula_atiende"
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
                      v-model="form.cargo_atiende"
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
                      v-model="form.telefono_atiende"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
            <!-- Componente de carga de archivos -->
            <FileUploader :files="form.files" @files-updated="updateFiles" />
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
      form: {
        etc: "Norte de Santander",
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        hora_inicial: "",
        hora_final: "",
        tipo_visita: "",
        numero_visita: "",
        operador: "",
        contrato: "",
        num_beneficiarios: "",
        fecha_ultima_visita: "",
        concepto_emitido: "",
        pre_1: "",
        pre_1_obs: "",
        pre_2: "",
        pre_2_obs: "",
        pre_3: "",
        pre_3_obs: "",
        pre_4: "",
        pre_4_obs: "",
        pre_5: "",
        pre_5_obs: "",
        pre_6: "",
        pre_6_obs: "",
        pre_7: "",
        pre_7_obs: "",
        pre_8: "",
        pre_8_obs: "",
        pre_9: "",
        pre_9_obs: "",
        pre_10: "",
        pre_10_obs: "",
        pre_11: "",
        pre_11_obs: "",
        pre_12: "",
        pre_12_obs: "",
        pre_13: "",
        pre_13_obs: "",
        pre_14: "",
        pre_14_obs: "",
        pre_15: "",
        pre_15_obs: "",
        pre_16: "",
        pre_16_obs: "",
        pre_17: "",
        pre_17_obs: "",
        pre_18: "",
        pre_18_obs: "",
        pre_19: "",
        pre_19_obs: "",
        pre_20: "",
        pre_20_obs: "",
        pre_21: "",
        pre_21_obs: "",
        pre_22: "",
        pre_22_obs: "",
        pre_23: "",
        pre_23_obs: "",
        pre_24: "",
        pre_24_obs: "",
        pre_25: "",
        pre_25_obs: "",
        pre_26: "",
        pre_26_obs: "",
        pre_27: "",
        pre_27_obs: "",
        pre_28: "",
        pre_28_obs: "",
        pre_29: "",
        pre_29_obs: "",
        pre_30: "",
        pre_30_obs: "",
        pre_31: "",
        pre_31_obs: "",
        pre_32: "",
        pre_32_obs: "",
        pre_33: "",
        pre_33_obs: "",
        pre_34: "",
        pre_34_obs: "",
        pre_35: "",
        pre_35_obs: "",
        pre_36: "",
        pre_36_obs: "",
        pre_37: "",
        pre_37_obs: "",
        pre_38: "",
        pre_38_obs: "",
        pre_39: "",
        pre_39_obs: "",
        pre_40: "",
        pre_40_obs: "",
        pre_41: "",
        pre_41_obs: "",
        pre_42: "",
        pre_42_obs: "",
        pre_43: "",
        pre_43_obs: "",
        pre_44: "",
        pre_44_obs: "",
        pre_45: "",
        pre_45_obs: "",
        pre_46: "",
        pre_46_obs: "",
        pre_47: "",
        pre_47_obs: "",
        pre_48: "",
        pre_48_obs: "",
        pre_49: "",
        pre_49_obs: "",
        pre_50: "",
        pre_50_obs: "",
        pre_51: "",
        pre_51_obs: "",
        pre_52: "",
        pre_52_obs: "",
        pre_53: "",
        pre_53_obs: "",
        pre_54: "",
        pre_54_obs: "",
        pre_55: "",
        pre_55_obs: "",
        pre_56: "",
        pre_56_obs: "",
        pre_57: "",
        pre_57_obs: "",
        pre_58: "",
        pre_58_obs: "",
        pre_59: "",
        pre_59_obs: "",
        pre_60: "",
        pre_60_obs: "",
        pre_61: "",
        pre_61_obs: "",
        pre_62: "",
        pre_62_obs: "",
        pre_63: "",
        pre_63_obs: "",
        pre_64: "",
        pre_64_obs: "",
        pre_65: "",
        pre_65_obs: "",
        pre_66: "",
        pre_66_obs: "",
        pre_67: "",
        pre_67_obs: "",
        pre_68: "",
        pre_68_obs: "",
        pre_69: "",
        pre_69_obs: "",
        pre_70: "",
        pre_70_obs: "",
        pre_71: "",
        pre_71_obs: "",
        pre_72: "",
        pre_72_obs: "",
        pre_73: "",
        pre_73_obs: "",
        tb_verificacion1_1: "",
        tb_verificacion1_2: "",
        tb_verificacion1_3: "",
        tb_verificacion1_4: "",
        tb_verificacion1_5: "",
        tb_verificacion1_6: "",
        tb_verificacion1_7: "",
        tb_verificacion1_8: "",
        tb_verificacion1_9: "",
        tb_verificacion2_1: "",
        tb_verificacion2_2: "",
        tb_verificacion2_3: "",
        tb_verificacion2_4: "",
        tb_verificacion2_5: "",
        tb_verificacion2_6: "",
        tb_verificacion2_7: "",
        tb_verificacion2_8: "",
        tb_verificacion2_9: "",
        tb_verificacion3_1: "",
        tb_verificacion3_2: "",
        tb_verificacion3_3: "",
        tb_verificacion3_4: "",
        tb_verificacion3_5: "",
        tb_verificacion3_6: "",
        tb_verificacion3_7: "",
        tb_verificacion3_8: "",
        tb_verificacion3_9: "",
        tb_verificacion4_1: "",
        tb_verificacion4_2: "",
        tb_verificacion4_3: "",
        tb_verificacion4_4: "",
        tb_verificacion4_5: "",
        tb_verificacion4_6: "",
        tb_verificacion4_7: "",
        tb_verificacion4_8: "",
        tb_verificacion4_9: "",
        tb_verificacion5_1: "",
        tb_verificacion5_2: "",
        tb_verificacion5_3: "",
        tb_verificacion5_4: "",
        tb_verificacion5_5: "",
        tb_verificacion5_6: "",
        tb_verificacion5_7: "",
        tb_verificacion5_8: "",
        tb_verificacion5_9: "",
        indicador1: "",
        indicador2: "",
        indicador3: "",
        indicador4: "",
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
        tuberculos1: "",
        tuberculos2: "",
        tuberculos3: "",
        tuberculos4: "",
        tuberculos5: "",
        tuberculos6: "",
        tuberculos7: "",
        tuberculos8: "",
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
        cdp: "",
        placa_vehiculo: "",
        numero_sedes: "",
        nombre1: "",
        nombre2: "",
        nombre3: "",
        nombre4: "",
        hora_salida1: "",
        hora_salida2: "",
        hora_salida3: "",
        hora_salida4: "",
        temperatura_salida1: "",
        temperatura_salida2: "",
        temperatura_salida3: "",
        temperatura_salida4: "",
        hora_llegada1: "",
        hora_llegada2: "",
        hora_llegada3: "",
        hora_llegada4: "",
        temperatura_llegada1: "",
        temperatura_llegada2: "",
        temperatura_llegada3: "",
        temperatura_llegada4: "",
        cantidad_raciones1: "",
        cantidad_raciones2: "",
        cantidad_raciones3: "",
        cantidad_raciones4: "",
        observaciones_recibe: "",
        fecha_fumigacion: "",
        fecha_limpieza_tanque: "",
        files: [],
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
    calcularIndicadores() {
      let totalIndicador1 = 0;
      let totalIndicador2 = 0;
      let totalIndicador4 = 0;

      Object.keys(this.form).forEach((key) => {
        if (key.startsWith("pre_") && this.form[key]) {
          let numeroPregunta = parseInt(key.replace("pre_", "")); // Extraer número de la pregunta
          let valorNumerico = parseFloat(this.form[key].split("-")[0]);

          if (!isNaN(valorNumerico)) {
            if (numeroPregunta >= 1 && numeroPregunta <= 49) {
              totalIndicador1 += valorNumerico; // Sumar a indicador1
            } else if (numeroPregunta >= 50 && numeroPregunta <= 60) {
              totalIndicador2 += valorNumerico; // Sumar a indicador2
            } else if (numeroPregunta >= 61 && numeroPregunta <= 73) {
              totalIndicador4 += valorNumerico; // Sumar a indicador4
            }
          }
        }
      });

      // Asignar los valores calculados a los indicadores
      this.form.indicador1 = totalIndicador1.toFixed(2);
      this.form.indicador2 = totalIndicador2.toFixed(2);
      this.form.indicador4 = totalIndicador4.toFixed(2);
    },
    guardarFormulario() {
      this.isLoading = true;
      this.calcularIndicadores();
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
          `${apiUrl}/ct_verificacion_cct`,
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
            "Formulario de verificación CCT guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente tecnico, verificación CCT",
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
        tipo_visita: "",
        numero_visita: "",
        operador: "",
        contrato: "",
        num_beneficiarios: "",
        fecha_ultima_visita: "",
        concepto_emitido: "",
        pre_1: "",
        pre_1_obs: "",
        pre_2: "",
        pre_2_obs: "",
        pre_3: "",
        pre_3_obs: "",
        pre_4: "",
        pre_4_obs: "",
        pre_5: "",
        pre_5_obs: "",
        pre_6: "",
        pre_6_obs: "",
        pre_7: "",
        pre_7_obs: "",
        pre_8: "",
        pre_8_obs: "",
        pre_9: "",
        pre_9_obs: "",
        pre_10: "",
        pre_10_obs: "",
        pre_11: "",
        pre_11_obs: "",
        pre_12: "",
        pre_12_obs: "",
        pre_13: "",
        pre_13_obs: "",
        pre_14: "",
        pre_14_obs: "",
        pre_15: "",
        pre_15_obs: "",
        pre_16: "",
        pre_16_obs: "",
        pre_17: "",
        pre_17_obs: "",
        pre_18: "",
        pre_18_obs: "",
        pre_19: "",
        pre_19_obs: "",
        pre_20: "",
        pre_20_obs: "",
        pre_21: "",
        pre_21_obs: "",
        pre_22: "",
        pre_22_obs: "",
        pre_23: "",
        pre_23_obs: "",
        pre_24: "",
        pre_24_obs: "",
        pre_25: "",
        pre_25_obs: "",
        pre_26: "",
        pre_26_obs: "",
        pre_27: "",
        pre_27_obs: "",
        pre_28: "",
        pre_28_obs: "",
        pre_29: "",
        pre_29_obs: "",
        pre_30: "",
        pre_30_obs: "",
        pre_31: "",
        pre_31_obs: "",
        pre_32: "",
        pre_32_obs: "",
        pre_33: "",
        pre_33_obs: "",
        pre_34: "",
        pre_34_obs: "",
        pre_35: "",
        pre_35_obs: "",
        pre_36: "",
        pre_36_obs: "",
        pre_37: "",
        pre_37_obs: "",
        pre_38: "",
        pre_38_obs: "",
        pre_39: "",
        pre_39_obs: "",
        pre_40: "",
        pre_40_obs: "",
        pre_41: "",
        pre_41_obs: "",
        pre_42: "",
        pre_42_obs: "",
        pre_43: "",
        pre_43_obs: "",
        pre_44: "",
        pre_44_obs: "",
        pre_45: "",
        pre_45_obs: "",
        pre_46: "",
        pre_46_obs: "",
        pre_47: "",
        pre_47_obs: "",
        pre_48: "",
        pre_48_obs: "",
        pre_49: "",
        pre_49_obs: "",
        pre_50: "",
        pre_50_obs: "",
        pre_51: "",
        pre_51_obs: "",
        pre_52: "",
        pre_52_obs: "",
        pre_53: "",
        pre_53_obs: "",
        pre_54: "",
        pre_54_obs: "",
        pre_55: "",
        pre_55_obs: "",
        pre_56: "",
        pre_56_obs: "",
        pre_57: "",
        pre_57_obs: "",
        pre_58: "",
        pre_58_obs: "",
        pre_59: "",
        pre_59_obs: "",
        pre_60: "",
        pre_60_obs: "",
        pre_61: "",
        pre_61_obs: "",
        pre_62: "",
        pre_62_obs: "",
        pre_63: "",
        pre_63_obs: "",
        pre_64: "",
        pre_64_obs: "",
        pre_65: "",
        pre_65_obs: "",
        pre_66: "",
        pre_66_obs: "",
        pre_67: "",
        pre_67_obs: "",
        pre_68: "",
        pre_68_obs: "",
        pre_69: "",
        pre_69_obs: "",
        pre_70: "",
        pre_70_obs: "",
        pre_71: "",
        pre_71_obs: "",
        pre_72: "",
        pre_72_obs: "",
        pre_73: "",
        pre_73_obs: "",
        tb_verificacion1_1: "",
        tb_verificacion1_2: "",
        tb_verificacion1_3: "",
        tb_verificacion1_4: "",
        tb_verificacion1_5: "",
        tb_verificacion1_6: "",
        tb_verificacion1_7: "",
        tb_verificacion1_8: "",
        tb_verificacion1_9: "",
        tb_verificacion2_1: "",
        tb_verificacion2_2: "",
        tb_verificacion2_3: "",
        tb_verificacion2_4: "",
        tb_verificacion2_5: "",
        tb_verificacion2_6: "",
        tb_verificacion2_7: "",
        tb_verificacion2_8: "",
        tb_verificacion2_9: "",
        tb_verificacion3_1: "",
        tb_verificacion3_2: "",
        tb_verificacion3_3: "",
        tb_verificacion3_4: "",
        tb_verificacion3_5: "",
        tb_verificacion3_6: "",
        tb_verificacion3_7: "",
        tb_verificacion3_8: "",
        tb_verificacion3_9: "",
        tb_verificacion4_1: "",
        tb_verificacion4_2: "",
        tb_verificacion4_3: "",
        tb_verificacion4_4: "",
        tb_verificacion4_5: "",
        tb_verificacion4_6: "",
        tb_verificacion4_7: "",
        tb_verificacion4_8: "",
        tb_verificacion4_9: "",
        tb_verificacion5_1: "",
        tb_verificacion5_2: "",
        tb_verificacion5_3: "",
        tb_verificacion5_4: "",
        tb_verificacion5_5: "",
        tb_verificacion5_6: "",
        tb_verificacion5_7: "",
        tb_verificacion5_8: "",
        tb_verificacion5_9: "",
        indicador1: "",
        indicador2: "",
        indicador3: "",
        indicador4: "",
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
        tuberculos1: "",
        tuberculos2: "",
        tuberculos3: "",
        tuberculos4: "",
        tuberculos5: "",
        tuberculos6: "",
        tuberculos7: "",
        tuberculos8: "",
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
        cdp: "",
        placa_vehiculo: "",
        numero_sedes: "",
        nombre1: "",
        nombre2: "",
        nombre3: "",
        nombre4: "",
        hora_salida1: "",
        hora_salida2: "",
        hora_salida3: "",
        hora_salida4: "",
        temperatura_salida1: "",
        temperatura_salida2: "",
        temperatura_salida3: "",
        temperatura_salida4: "",
        hora_llegada1: "",
        hora_llegada2: "",
        hora_llegada3: "",
        hora_llegada4: "",
        temperatura_llegada1: "",
        temperatura_llegada2: "",
        temperatura_llegada3: "",
        temperatura_llegada4: "",
        cantidad_raciones1: "",
        cantidad_raciones2: "",
        cantidad_raciones3: "",
        cantidad_raciones4: "",
        observaciones_recibe: "",
        fecha_fumigacion: "",
        fecha_limpieza_tanque: "",
        files: [],
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
