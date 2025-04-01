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
                Formato de verificación modalidad RI
              </li>
            </ol>
          </nav>
          <h2>FORMATO DE VERIFICACIÓN MODALIDAD RACIÓN INDUSTRIALIZADA - RI</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <!-- Header Information -->
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
            <div class="col-md-2">
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
            <div class="col-md-2">
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
            <div class="col-md-2">
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
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                id="operador"
                v-model="form.operador"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
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
          <div class="mb-4">
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
              <tbody>
                <tr>
                  <th colspan="4">
                    VERIFICACIÓN DE CONDICIONES DE TRANSPORTE Y DISTRIBUCIÓN
                  </th>
                </tr>
                <tr>
                  <th colspan="4">Personal manipulador</th>
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
                    El personal que distribuye los complementos en las sedes
                    educativas presenta la documentación vigente para la
                    manipulación de alimentos.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_1" required>
                      <option value="6-A">Aceptable (A)</option>
                      <option value="3-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="6-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_1_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    El personal que distribuye los complementos en las sedes
                    educativas aplica las Buenas Practicas de Manufactura y
                    están dotados con los elementos de protección requeridos.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_2" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_2_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th colspan="4">Condiciones de transporte y Recepción</th>
                </tr>
                <tr>
                  <th>N°</th>
                  <th>Aspectos a evaluar</th>
                  <th>Criterios para evaluar</th>
                  <th>Observaciones</th>
                </tr>

                <tr>
                  <td>3</td>
                  <td>
                    Las canastillas utilizadas para el transporte de los
                    componentes se observan en buen estado de limpieza y
                    desinfección.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_3" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_3_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    El vehículo transportador de los complementos se encuentra
                    en buen estado, y cumple con las condiciones higiénicas
                    sanitarias establecidas por la normatividad vigente.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_4" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_4_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    El vehículo transportador de los complementos presenta
                    concepto sanitario favorable de acuerdo a los alimentos
                    transportados.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_5" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_5_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    El vehículo transportador es de uso exclusivo para el
                    transporte de los complementos alimentarios.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_6" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_6_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    El personal de transporte de alimentos cuenta con la
                    dotación mínima requerida.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_7" required>
                      <option value="6-A">Aceptable (A)</option>
                      <option value="3-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="6-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_7_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    El personal del transporte cumple con los horarios
                    establecidos de entrega de los complementos a las sedes
                    educativas, de acuerdo con 7 3,5 0 las necesidades de la
                    sede educativa.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_8" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_8_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    Durante la recepción de los componentes del complemento en
                    los establecimientos educativos cumplen con los rangos
                    establecidos de temperatura en la normatividad sanitaria
                    vigente; (Temperaturas de refrigeración no mayores 4°C +/-
                    2) (Bebidas y derivados lácteos). (Si aplica)
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_9" required>
                      <option value="6-A">Aceptable (A)</option>
                      <option value="3-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="6-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_9_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    Se evita el riesgo de contaminación cruzada durante la
                    entrega de los componentes del suministro, en las sedes
                    educativas.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_10" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_10_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    El operador entrega la cantidad total de complementos
                    alimentarios programados.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_11" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_11_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    El rotulado del empaque primario cumplen con las condiciones
                    estipuladas en la normatividad vigente.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_12" required>
                      <option value="6-A">Aceptable (A)</option>
                      <option value="3-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="6-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_12_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    El cierre de los empaques primarios y empaque secundario (si
                    aplica) se encuentran en perfecto estado.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_13" required>
                      <option value="6-A">Aceptable (A)</option>
                      <option value="3-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="6-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_13_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>
                    El operador realiza la entrega de todos los componentes del
                    complemento alimentario de acuerdo al menú programado.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_14" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_14_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    Los empaques plásticos de los alimentos entregados son
                    clasificados como residuos inorgánicos y son dispuestos en
                    canecas.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_15" required>
                      <option value="7-A">Aceptable (A)</option>
                      <option value="3.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="7-A-NA">Aceptable-No Aplica (A-NA)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_15_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    INDICADOR: Porcentaje de cumplimiento de condiciones de
                    despacho y suministro
                  </td>
                  <td>% de Cumplimiento</td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.indicador1"
                      step="any"
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <th colspan="4">
                    VERIFICACIÓN DE REQUERIMIENTOS ALIMENTARIOS Y NUTRICIONALES
                    - CUMPLIMIENTO MINUTA PATRÓN
                  </th>
                </tr>
                <tr>
                  <th>N°</th>
                  <th>Aspectos a evaluar</th>
                  <th>Criterios para evaluar</th>
                  <th>Observaciones</th>
                </tr>

                <tr>
                  <td>16</td>
                  <td>
                    El menu del dia es acorde a lo establecido en el ciclo de
                    menus y minuta patron adoptada y aprobada.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_16" required>
                      <option value="12-A">Aceptable (A)</option>
                      <option value="6-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="12-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_16_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>
                    En caso de presentarse intercambios, estos se realizan de
                    acuerdo al componente, a la frecuencia y cuentan con
                    documento soporte de aprobación.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_17" required>
                      <option value="11-A">Aceptable (A)</option>
                      <option value="5.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="11-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_17_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>
                    El menú entregado a los estudiantes tiene aspecto atractivo
                    y buena presentación.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_18" required>
                      <option value="14-A">Aceptable (A)</option>
                      <option value="7-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="14-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_18_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>
                    Se cumple con los horarios de distribución establecidos para
                    el servicio y no se generan retrasos durante el suministro.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_19" required>
                      <option value="12-A">Aceptable (A)</option>
                      <option value="6-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="12-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_19_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>
                    En el ciclo de menús se incluye alimentos propios del
                    territorio
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_20" required>
                      <option value="11-A">Aceptable (A)</option>
                      <option value="5.5-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="11-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_20_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>
                    En la sede de entrega, el operador promocionan practicas
                    adecuadas de habitos alimentarios en los estudiantes
                    beneficiarios.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_21" required>
                      <option value="12-A">Aceptable (A)</option>
                      <option value="6-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="12-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_21_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>La aceptabilidad de los alimentos es adecuada.</td>
                  <td>
                    <select class="form-select" v-model="form.pre_22" required>
                      <option value="14-A">Aceptable (A)</option>
                      <option value="7-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="14-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_22_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>
                    El desperdicio de alimentos es bajo, de conformidad a la
                    política para prevenir la pérdida y el desperdicio de
                    alimentos según la ley 1990 de 2019.
                  </td>
                  <td>
                    <select class="form-select" v-model="form.pre_23" required>
                      <option value="14-A">Aceptable (A)</option>
                      <option value="7-AR">
                        Aceptable con Requerimiento (AR)
                      </option>
                      <option value="0-I">Inaceptable (I)</option>
                      <option value="0-NA">No Aplica (NA)</option>
                      <option value="14-A-NA">
                        Aceptable-No Aplica (A-NA)
                      </option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.pre_23_obs"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    INDICADOR: Porcentaje de cumplimiento de Requerimientos
                    Alimentarios y Nutricionales
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
          </div>
          <!-- menu de fila dinámica -->

          <div class="mb-4 p-3 border rounded">
            <h4 class="mb-3">Agregar fila en tabla de verificación</h4>
            <div class="row mb-3">
              <div class="col-md-3">
                <label class="form-label">Componente:</label>
                <input type="text" class="form-control" v-model="componente" />
              </div>

              <div class="col-md-3">
                <label class="form-label">Color:</label>
                <input type="text" class="form-control" v-model="color" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Olor</label>
                <input type="text" class="form-control" v-model="olor" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Sabor</label>
                <input type="text" class="form-control" v-model="sabor" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Textura</label>
                <input type="text" class="form-control" v-model="textura" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Grupo escolar</label>
                <input type="text" class="form-control" v-model="grupo" />
              </div>

              <div class="col-md-3">
                <label class="form-label">Peso / Vol declarado</label>
                <input type="text" class="form-control" v-model="declarado" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Peso / Vol verificado</label>
                <input type="text" class="form-control" v-model="verificado" />
              </div>

              <div class="col-md-3">
                <label class="form-label">Temperatura</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="temperatura"
                  step="any"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label"><strong>Cumplimieto</strong></label>
                <select class="form-select" v-model="cumplimiento">
                  <option value="Cumple">Cumple</option>
                  <option value="No Cumple">No Cumple</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              @click="addFila()"
              class="btn btn-secondary mb-3"
            >
              Agregar Producto
            </button>
          </div>
          <!-- Tabla dinámica -->
          <div class="mt-4">
            <div class="table-responsive">
              <table class="table table-bordered text-center">
                <thead class="table-success">
                  <tr>
                    <th colspan="10">
                      VERIFICACIÓN DE CARACTERÍSTICAS ORGANOLÉPTICAS Y GRAMAJES
                    </th>
                  </tr>
                  <tr>
                    <th colspan="5">
                      Identificación y Características Organolépticas
                    </th>
                    <th colspan="5">Verificación Peso / Volumen</th>
                  </tr>
                  <tr>
                    <th>Componente</th>
                    <th>Color</th>
                    <th>Olor</th>
                    <th>Sabor</th>
                    <th>Textura</th>
                    <th>Grupo escolar verificado</th>
                    <th>Peso / Vol declarado</th>
                    <th>Peso / Vol verificado</th>
                    <th>Temp °C</th>
                    <th>Cumplim. Cumple/No cumple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fila, index) in form.filas" :key="index">
                    <td>{{ fila.componente }}</td>
                    <td>{{ fila.color }}</td>
                    <td>{{ fila.olor }}</td>
                    <td>{{ fila.sabor }}</td>
                    <td>{{ fila.textura }}</td>
                    <td>{{ fila.grupo }}</td>
                    <td>{{ fila.declarado }}</td>
                    <td>{{ fila.verificado }}</td>
                    <td>{{ fila.temperatura }}</td>
                    <td>{{ fila.cumplimiento }}</td>
                  </tr>
                  <tr>
                    <td colspan="10">
                      <label class="form-label"
                        >Nota: Para evaluar la temperatura y características
                        organolépticas se debe tener en cuenta las fichas
                        técnicas determinadas en el anexo de calidad e inocuidad
                        de la Resolución 00335 de 2021.</label
                      >
                    </td>
                  </tr>
                  <tr>
                    <td colspan="6">
                      INDICADOR: Número de productos que cumplen criterios de
                      calidad organolépticos y gramajes / Número de productos
                      verificados
                    </td>
                    <td colspan="2">% de Cumplimiento</td>
                    <td colspan="2">
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.indicador3"
                        step="any"
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Observaciones -->
          <div class="mb-3">
            <label for="observaciones" class="form-label">Observaciones:</label>
            <textarea
              id="observaciones"
              v-model="form.observaciones"
              required
              class="form-control"
              rows="3"
            ></textarea>
          </div>

          <!-- Firmas -->
          <div class="row mb-3">
            <div class="col-md-6">
              <h5>FIRMA EQUIPO PAE /APOYO A LA SUPERVISIÓN</h5>
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
                <label for="cedulaEquipo" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaEquipo"
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
              <h5>FIRMA QUIEN ATIENDE LA VISITA</h5>
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
                <label for="cedulaVisita" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaVisita"
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
      componente: "",
      color: "",
      olor: "",
      sabor: "",
      textura: "",
      grupo: "",
      declarado: "",
      verificado: "",
      temperatura: "",
      cumplimiento: "",
      form: {
        etc: "Norte de Santander",
        municipio: "",
        hora_inicial: "",
        fecha_visita: "",
        hora_final: "",
        institucion: "",
        sede: "",
        numero_visita: "",
        operador: "",
        contrato: "",
        num_beneficiarios: "",
        tipo_visita: "",
        //preguntas
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
        indicador1: "",
        indicador2: "",
        //pie formato
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
        files: [],
        filas: [],
      },
    };
  },
  methods: {
    addFila() {
      // Agregar fila a la lista de filas
      this.form.filas.push({
        componente: this.componente,
        color: this.color || "N/A",
        olor: this.olor || "N/A",
        sabor: this.sabor || "N/A",
        textura: this.textura || "N/A",
        grupo: this.grupo || "N/A",
        declarado: this.declarado || "N/A",
        verificado: this.verificado || "N/A",
        temperatura: this.temperatura || "N/A",
        cumplimiento: this.cumplimiento,
      });
      this.componente = "";
      this.color = "";
      this.olor = "";
      this.sabor = "";
      this.textura = "";
      this.grupo = "";
      this.declarado = "";
      this.verificado = "";
      this.temperatura = "";
      this.cumplimiento = "";
      // actualizar indicador de cumplimiento
      // Calcular el indicador3
      const totalFilas = this.form.filas.length;
      const cumpleFilas = this.form.filas.filter(
        (fila) => fila.cumplimiento === "Cumple"
      ).length;

      this.form.indicador3 =
        (totalFilas > 0 ? cumpleFilas / totalFilas : 0) * 100;
    },
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
        if (key.startsWith("pre_") && this.form[key]) {
          let numeroPregunta = parseInt(key.replace("pre_", "")); // Extraer número de la pregunta
          let valorNumerico = parseFloat(this.form[key].split("-")[0]);

          if (!isNaN(valorNumerico)) {
            if (numeroPregunta >= 1 && numeroPregunta <= 15) {
              totalIndicador1 += valorNumerico; // Sumar a indicador1
            } else if (numeroPregunta >= 16 && numeroPregunta <= 23) {
              totalIndicador2 += valorNumerico; // Sumar a indicador2
            }
          }
        }
      });

      // Asignar los valores calculados a los indicadores
      this.form.indicador1 = totalIndicador1.toFixed(2);
      this.form.indicador2 = totalIndicador2.toFixed(2);
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
      // Validar filas
      if (this.form.filas.length === 0) {
        this.showToast("Debe agregar al menos una fila", "danger");
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
          `${apiUrl}/ct_verificacion_modalidad_ri`,
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
            "Formulario de verificación midalidad I guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente tecnico, verificación modalidad I",
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
        filas: [],
        indicador1: "",
        indicador2: "",
        indicador3: "",
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
