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
                  <MunicipioSelect v-model="formData.municipio" />
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
              <div class="mb-4">
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        El área de preparación de los alimentos se encuentra
                        limpia y se garantizan condiciones higiénico-sanitarias.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        El área de ensamble de los alimentos se encuentra limpia
                        y se garantizan condiciones higiénico-sanitarias.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        Se dispone de servicios sanitarios para el personal
                        manipulador de alimentos.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        Fecha de la ultima fumigación:
                        <input type="text" class="form-control" />
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>
                        Se cuenta y se cumple con protocolos para el manejo y
                        disposición de aceite vegetal usado.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>
                        Se realiza la limpieza y desinfección periódica del
                        tanque de almacenamiento de agua potable. Fecha de la
                        última limpieza y desinfección realizada:
                        <input type="text" class="form-control" />
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>
                        El vehículo cuenta con concepto sanitario expedido por
                        la autoridad competente con concepto favorable.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>37</td>
                      <td>
                        Se lleva un control de entradas y salidas, Kárdex y
                        rotación de productos - PEPS.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>46</td>
                      <td>
                        Se dispone del menaje suficiente de acuerdo al número de
                        raciones y se encuentra en buen estado.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>49</td>
                      <td>
                        Se da cumplimiento a los gramajes servidos según grupo
                        escolar verificado en la siguiente tabla.
                      </td>
                      <td>
                        <select class="form-select">
                          <option value="A">Aceptable (A)</option>
                          <option value="AR">
                            Aceptable con Requerimiento (AR)
                          </option>
                          <option value="I">Inaceptable (I)</option>
                          <option value="NA">No Aplica (NA)</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>51</td>
                    <td>
                      El menu del día es acorde a lo establecido en el ciclo de
                      menus y minuta patron adoptada y aprobada.
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>
                      El ciclo de menú se ejecuta bajo las especificaciones
                      técnicas definidas (guías de preparación).
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>
                      El menú entregado a los estudiantes tiene aspecto
                      atractivo y buena presentación.
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>57</td>
                    <td>
                      En el ciclo de minutas incluye alimentos y/o preparaciones
                      propias del territorio
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>58</td>
                    <td>
                      En el lugar de consumo se promocionan practicas adecuadas
                      de hábitos alimentarios en los estudiantes beneficiarios.
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>59</td>
                    <td>
                      La aceptabilidad de los alimentos preparados es adecuada.
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      INDICADOR: Porcentaje de cumplimiento de requerimientos
                      alimentarios y nutricionales
                    </td>
                    <td>% de Cumplimiento</td>
                    <td><input type="number" class="form-control" /></td>
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
                      />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <select class="form-select">
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
                      />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <select class="form-select">
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
                      />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <select class="form-select">
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
                      />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <select class="form-select">
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
                      />
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="Cumple">Cumple</option>
                        <option value="No Cumple">No Cumple</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="°C"
                      />
                    </td>
                    <td>
                      <select class="form-select">
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
                        class="form-control"
                        placeholder="%"
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
                    <td><input type="text" class="form-control" /></td>
                    <td>Placa del vehículo:</td>
                    <td><input type="text" class="form-control" /></td>
                    <td>N° de sedes:</td>
                    <td><input type="number" class="form-control" /></td>
                  </tr>
                  <tr>
                    <td colspan="2" class="text-center table-primary">
                      Nombre del establecimiento educativo
                    </td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                  </tr>
                  <tr>
                    <td colspan="2">Hora de salida del CDP.</td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                  </tr>
                  <tr>
                    <td colspan="2">Temperatura de salida del complemento.</td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      Hora de llegada al establecimiento educativo.
                    </td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      Temperatura del complemento para consumo.
                    </td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                  </tr>
                  <tr>
                    <td colspan="2">Cantidad de raciones entregadas.</td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
                    <td><input type="text" class="form-control" /></td>
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>65</td>
                    <td>
                      El vehículo cuenta con certificación sanitaria expedida
                      por la autoridad competente con concepto favorable.
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>67</td>
                    <td>
                      La cantidad de complementos alimentarios entregados se
                      ajusta a las cantidades definidas para la sede educativa.
                    </td>
                    <td>
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                      <select class="form-select">
                        <option value="cumple">Cumple</option>
                        <option value="noCumple">No cumple</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" class="form-control" />
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
                        class="form-control"
                        placeholder="%"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <label class="form-label"
                  >OBSERVACIONES DE QUIEN RECIBE LA VISITA</label
                >
                <textarea class="form-control" rows="3"> </textarea>
              </div>
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
                  <div class="mb-2">
                    <SignaturePad
                      ref="firstSignaturePad"
                      @signatureSaved="handleFirstSignature"
                      @signatureCleared="handleFirstSignatureCleared"
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
                  <div class="mb-2">
                    <SignaturePad
                      ref="secondSignaturePad"
                      @signatureSaved="handleSecondSignature"
                      @signatureCleared="handleSecondSignatureCleared"
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
          <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
            <!-- Componente de carga de archivos -->
            <FileUploader
              :files="formData.files"
              @files-updated="updateFiles"
            />
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
        operador: "",
        files: [],
        numeroContrato: "",
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
