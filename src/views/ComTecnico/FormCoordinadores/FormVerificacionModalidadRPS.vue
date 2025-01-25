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
                Formato de verificación modalidad RPS
              </li>
            </ol>
          </nav>
          <h2>FORMATO DE VERIFICACIÓN MODALIDAD RPS</h2>
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
                v-model="formData.etc"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fecha" class="form-label">Fecha de la visita:</label>
              <input
                type="date"
                id="fecha"
                v-model="formData.fecha"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="municipio" class="form-label">Municipio:</label>
              <MunicipioSelect v-model="formData.municipio" />
            </div>
          </div>
          <div class="row mb-1">
            <div class="col-md-6">
              <label for="institucionEducativa" class="form-label"
                >Institución Educativa:</label
              >
              <input
                type="text"
                id="institucionEducativa"
                v-model="formData.institucionEducativa"
                class="form-control"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="sedeEducativa" class="form-label"
                >Sede Educativa:</label
              >
              <input
                type="text"
                id="sedeEducativa"
                v-model="formData.sedeEducativa"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="numeroVisita" class="form-label"
                >Número de visita:</label
              >
              <select
                id="numeroVisita"
                v-model="formData.numeroVisita"
                class="form-select"
                required
              >
                <option value="1">1ra</option>
                <option value="2">2da</option>
                <option value="3">3ra</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="tipoVisita" class="form-label">Tipo de visita:</label>
              <select
                id="tipoVisita"
                v-model="formData.tipoVisita"
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
                v-model="formData.horaInicial"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="horaFinal" class="form-label">Hora Final:</label>
              <input
                type="time"
                id="horaFinal"
                v-model="formData.horaFinal"
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
                v-model="formData.numeroBeneficiarios"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                id="operador"
                v-model="formData.operador"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">N° Contrato:</label>
              <input
                type="text"
                id="numeroContrato"
                v-model="formData.numeroContrato"
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
                id="numeroContrato"
                v-model="formData.numeroContrato"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Concepto emitido:</label>
              <input
                type="text"
                id="numeroContrato"
                v-model="formData.numeroContrato"
                class="form-control"
                required
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
              <tr>
                <td>1</td>
                <td>
                  El área de almacenamiento de los alimentos se encuentra limpia
                  y se garantizan condiciones higiénico-sanitarias.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  El área de preparación de los alimentos se encuentra limpia y
                  se garantizan condiciones higiénico-sanitarias.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Las Instalaciones sanitarias se encuentran limpias y se cuenta
                  con la dotación adecuada (jabón líquido, gel antibacterial,
                  papel higiénico y papeleras con bolsa).
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  desinfección, en su contenido se describen los procedimientos,
                  operaciones y formatos de registros para la periodicidad de
                  los mismos (áreas, equipos, superficies, utensilios, personal
                  manipulador y alimentos).
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Los implementos (escobas, traperos, recogedores, guantes entre
                  otros) que se utilizan para el aseo, permanecen en adecuadas
                  condiciones de limpieza y en el lugar establecido.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  Los equipos, utensilios y menaje empleados se limpian y
                  desinfectan antes de cada uso y son de materiales resistentes
                  al uso y a la corrosión.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  Se realiza un control de plagas y se cuenta con los siguientes
                  documentos soportes: diagnóstico empresa fumigadora,
                  cronograma, formato de inspección interno, documentación de
                  empresa fumigadora, fichas técnicas. Se encuentran
                  diligenciadas de forma adecuada y oportuna. Fecha de la ultima
                  fumigación:
                  <input type="text" class="form-control" />
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  sólidos, en buen estado, en cantidad suficiente, bien ubicados
                  e identificados conforme a la norma sanitaria vigente.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>
                  La clasificación y segregación de residuos sólidos se realiza
                  de acuerdo con lo establecido en el programa de manejo de
                  residuos. Adicionalmente, los residuos sólidos son retirados
                  con la frecuencia necesaria para evitar generación de olores
                  y/o proliferación de plagas.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  Se realiza la limpieza y desinfección periódica del tanque de
                  almacenamiento de agua potable. Fecha de la última limpieza y
                  desinfección realizada:
                  <input type="text" class="form-control" />
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>22</td>
                <td>
                  Cuenta con la dotación completa, limpia, en buen estado y hace
                  uso adecuado de la misma de acuerdo a lo establecido en la
                  normatividad vigente.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>29</td>
                <td>
                  Las materias primas, se reciben en un lugar limpio y en
                  condiciones físicas que minimicen el riesgo de contaminación o
                  alteración de las características propias de cada producto.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>
                  Se da cumplimiento a los criterios de aceptación y rechazo de
                  la materia prima recibida y existen controles de este proceso
                  (fecha de vencimiento, lote, condiciones de empaque y
                  cumplimiento de la Resolución 5109 de 2005 y demás
                  normatividad vigente).
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td class="table-info" colspan="4">Almacenamiento</td>
              </tr>
              <tr>
                <td>32</td>
                <td>
                  Las condiciones sanitarias del vehículo transportador de
                  alimentos, cumple con lo establecido en la normatividad
                  sanitaria vigente. (Condiciones de higiene y limpieza
                  adecuadas pisos, paredes, techo, estibas, canastillas).
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>33</td>
                <td>
                  Se almacenan los productos de acuerdo con las características
                  de los mismos, en sitios adecuados minimizando el riesgo de
                  contaminación.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>35</td>
                <td>
                  El rotulado y etiquetado del empaque primario de los alimentos
                  cumple con lo estipulado en la Resolución 5109 de 2005 y demás
                  normatividad vigente.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <td>36</td>
                <td>
                  Los registros de control de temperatura de los alimentos en
                  refrigeración y congelación, son diligenciados correctamente y
                  se realizan de manera oportuna.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
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
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Observaciones"
                  />
                </td>
              </tr>
              <tr>
                <th colspan="4">Preparación, ensamble y distribución</th>
              </tr>
              <tr>
                <td>38</td>
                <td>
                  Los procesos de producción se realizan de manera secuencial y
                  continua de tal forma que se protegen los alimentos de
                  posibles riesgos de contaminación.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Se lavan y desinfectan los empaques, los alimentos o materias
                  primas crudas como frutas, verduras y hortalizas y productos
                  de pesca con agua potable, antes de su preparación y en los
                  tiempos establecidos de desinfección.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Los procedimientos de operación como: lavar, pelar, cortar,
                  clasificar, extraer, batir, entre otros, se realizan de manera
                  que se protejan los alimentos y materias primas de posibles
                  riesgos de contaminación.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  generan posibles riesgos de contaminación. Adicionalmente, los
                  procesos de descongelación requeridos se realizan de forma
                  controlada para evitar el desarrollo de microorganismos.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Todos los complementos están libres de contaminación física,
                  biológica, química y cumplen con las características de
                  calidad o inocuidad.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  correctivo de equipos ajustados a las características del
                  establecimiento. Se llevan los registros actualizados que
                  soportan el cumplimiento de las actividades realizadas.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Se realiza monitoreo de las temperaturas para los alimentos
                  fríos y calientes en las diferentes etapas de proceso.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Las temperaturas para los alimentos fríos y calientes en las
                  diferentes etapas de proceso se mantienen dentro del rango de
                  seguridad que garantiza inocuidad.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Se cumple con las características de calidad de los alimentos
                  que conforman la ración servida de acuerdo con las normas
                  legales vigentes.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Se cuenta con instrumentos de medición con el fin de realizar
                  control en cada una de las etapas de producción y se garantiza
                  la confiabilidad de las mediciones realizadas.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
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
                  Se da cumplimiento a los gramajes servidos según grupo escolar
                  verificado en la siguiente tabla.
                </td>
                <td>
                  <select class="form-select">
                    <option value="A">Aceptable (A)</option>
                    <option value="AR">Aceptable con Requerimiento (AR)</option>
                    <option value="I">Inaceptable (I)</option>
                    <option value="NA">No Aplica (NA)</option>
                  </select>
                </td>
                <td>
                  <input type="text" class="form-control" />
                </td>
              </tr>
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
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td>
                    <select class="form-select">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select">
                      <option value="cumple">Cumple</option>
                      <option value="noCumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Leguminosa</td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td>
                    <select class="form-select">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select">
                      <option value="cumple">Cumple</option>
                      <option value="noCumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Cereal</td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td>
                    <select class="form-select">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select">
                      <option value="cumple">Cumple</option>
                      <option value="noCumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Tubérculo, Plátano, Derivado del cereal</td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td>
                    <select class="form-select">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select">
                      <option value="cumple">Cumple</option>
                      <option value="noCumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Verdura</td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td>
                    <select class="form-select">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select">
                      <option value="cumple">Cumple</option>
                      <option value="noCumple">No cumple</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Jugo de Fruta</td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td><input type="text" class="form-control" /></td>
                  <td>
                    <select class="form-select">
                      <option value="g">g</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-select">
                      <option value="cumple">Cumple</option>
                      <option value="noCumple">No cumple</option>
                    </select>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="8" class="text-start">
                    <strong>INDICADOR:</strong> Porcentaje de cumplimiento de
                    condiciones operativas
                  </td>
                  <td>% de Cumplimiento</td>
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
                    Se encuentran estandarizadas los tamaños de las porciones en
                    las preparaciones y se cuenta con elementos de
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
                    El menú entregado a los estudiantes tiene aspecto atractivo
                    y buena presentación.
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
                    En el lugar de consumo se promocionan practicas adecuadas de
                    hábitos alimentarios en los estudiantes beneficiarios.
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
                    bajo, de conformidad a la política para prevenir la pérdida
                    y el desperdicio de alimentos según la ley 1990 de 2019.
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
                    INDICADOR: Número de preparaciones que cumplen criterios de
                    calidad y organolépticos / Número de preparaciones
                    verificadas
                  </td>
                  <td colspan="3">
                    <input type="number" class="form-control" placeholder="%" />
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
              v-model="formData.observaciones"
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
                  ref="firstSignaturePad"
                  @signatureSaved="handleFirstSignature"
                  @signatureCleared="handleFirstSignatureCleared"
                />
              </div>
              <div class="mb-1">
                <label for="nombreEquipo" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreEquipo"
                  v-model="formData.firmaEquipo.nombre"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cedulaEquipo" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaEquipo"
                  v-model="formData.firmaEquipo.cedula"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cargoEquipo" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoEquipo"
                  v-model="formData.firmaEquipo.cargo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="telefonoEquipo" class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  id="telefonoEquipo"
                  v-model="formData.firmaEquipo.telefono"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <label class="form-label">FIRMA QUIEN ATIENDE LA VISITA</label>
              <div class="mb-1">
                <SignaturePad
                  ref="secondSignaturePad"
                  @signatureSaved="handleSecondSignature"
                  @signatureCleared="handleSecondSignatureCleared"
                />
              </div>
              <div class="mb-1">
                <label for="nombreVisita" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="nombreVisita"
                  v-model="formData.firmaVisita.nombre"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cedulaVisita" class="form-label">Cédula:</label>
                <input
                  type="text"
                  id="cedulaVisita"
                  v-model="formData.firmaVisita.cedula"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="cargoVisita" class="form-label">Cargo:</label>
                <input
                  type="text"
                  id="cargoVisita"
                  v-model="formData.firmaVisita.cargo"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-1">
                <label for="telefonoVisita" class="form-label">Teléfono:</label>
                <input
                  type="tel"
                  id="telefonoVisita"
                  v-model="formData.firmaVisita.telefono"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Enviar Formulario
          </button>
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

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
    SignaturePad,
    MunicipioSelect,
  },
  data() {
    return {
      isLoading: false,
      toastMessage: "",
      toastType: "",
      formData: {
        etc: "Norte de Santander",
        fecha: "",
        municipio: "",
        horaInicial: "",
        horaFinal: "",
        institucionEducativa: "",
        sedeEducativa: "",
        numeroVisita: "",
        tipoVisita: "",
        numeroBeneficiarios: "",
        operador: "",
        numeroContrato: "",
        observaciones: "",
        firmaEquipo: { nombre: "", cedula: "", cargo: "", telefono: "" },
        firmaVisita: { nombre: "", cedula: "", cargo: "", telefono: "" },
      },
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
