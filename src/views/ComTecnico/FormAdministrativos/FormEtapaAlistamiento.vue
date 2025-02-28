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
                Verificación técnica a etapa preoperativa bodega de
                almacenamiento y modalidades PS, CCT y I
              </li>
            </ol>
          </nav>
          <h2>
            VERIFICACIÓN TÉCNICA A ETAPA PREOPERATIVA BODEGA DE ALMACENAMIENTO Y
            MODALIDADES PS, CCT Y I
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">ETC </label>
              <input
                class="form-control"
                type="text"
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Minicipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>

            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Operador </label>
              <input
                class="form-control"
                type="text"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">N° contrato </label>
              <input
                class="form-control"
                type="text"
                v-model="form.contrato"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Dirección </label>
              <input
                class="form-control"
                type="text"
                v-model="form.direccion"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Telefono / Correo </label>
              <input
                class="form-control"
                type="text"
                v-model="form.correo"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Fecha visita </label>
              <input
                class="form-control"
                type="date"
                v-model="form.fecha_visita"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora inicio</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_inicio"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora fin</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_fin"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Número de visita </label>
              <select class="form-select" v-model="form.num_visita" required>
                <option value="1ra">1ra</option>
                <option value="2da">2da</option>
                <option value="3ra">3ra</option>
              </select>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Tipo visita </label>
              <select class="form-select" v-model="form.tipo_visita" required>
                <option value="Técnica">Técnica</option>
                <option value="Verificación ETA">Verificación ETA</option>
                <option value="SPQRS">SPQRS</option>
              </select>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1 mt-2">
              <h5>
                OBJETO DE LA VISITA: Realizar apoyo a la supervisión técnica de
                la etapa de alistamiento a cargo del operador contratista, en
                aras de verificar las condiciones previas a la operación del
                Programa de Alimentación Escolar PAE, de conformidad a lo
                establecido en la resolución 00335 de 2021.
              </h5>
              <hr />
              <h5>
                CRITERIOS DE EVALUACIÓN: 1(CUMPLE), 0 (NO CUMPLE), NA (NO
                APLICA), NO (NO OBSERVADO)
              </h5>
              <hr />
              <h5>I. INSTALACIONES FÍSICAS Y SANITARIAS DE LA BODEGA</h5>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >1. Se localiza en sitio seco, no inundable, aislados de
                  cualquier foco de insalubridad que represente riesgos
                  potenciales para la contaminación del alimento, como botaderos
                  de basura, pantanos, charcos, etc.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_1_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >2. La edificación está diseñada y construida de manera que
                  protege e impide la entrada de polvo, lluvia, suciedades u
                  otros contaminantes.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_2" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_2_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >3. Sus accesos y alrededores se mantienen libres de
                  acumulación de basuras, aguas estancadas y otras fuentes de
                  contaminación para el alimento.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_3" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_3_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >4. La bodega está construida a prueba de vectores (roedores,
                  insectos, entre otros).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_4" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_4_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >5. Existe(n) puerta(s) con separación de 1 cm entre el borde
                  inferior y el piso, que permita el aislamiento de las
                  instalaciones con el medio exterior.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_5" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_5_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >6.Los techos y paredes se encuentran limpios (ausencia de
                  telarañas y suciedad).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_6" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_6_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >7.Las diferentes áreas de la bodega se encuentran debidamente
                  separadas e identificadas.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_7" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_7_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >8.La edificación y sus instalaciones están construidas para
                  facilitar las operaciones de limpieza, desinfección y
                  desinfestación.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_8" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_8_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >9.El tamaño de la bodega o las areas son proporcionales a los
                  volúmenes de alimentos manipulados, disponiendo además de
                  espacios libres para la circulación del personal, el traslado
                  de materiales o productos para realizar la limpieza y el
                  mantenimiento de las áreas respectivas.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_9" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_9_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >10.Las áreas están separadas de cualquier tipo de vivienda y
                  no se utilizan como dormitorio.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_10" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_10_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >11.Se dispone del agua potable para efectuar los procesos de
                  limpieza y desinfección efectiva.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_11" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_11_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >12.Los servicios sanitarios son los adecuados, están limpios
                  y cuentan con los elementos requeridos para la higiene
                  personal tales como papel higiénico, jabón líquido
                  antibacterial, papeleras, toallas de papel, implementos
                  desechables o equipos automáticos para el secado de
                  manos.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_12" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_12_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >13.Dispone de las instalaciones para limpieza y desinfección
                  de los equipos y utensilios de trabajo.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_13" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_13_obs"
                  />
                </div>
              </div>
              <hr />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1 mt-2">
              <h5>
                II. VERIFICACIÓN DOCUMENTAL BODEGA Y ESTABLECIMIENTOS CON
                MODALIDAD PS, CCT Y I
              </h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >14.Se evidencia concepto favorable, emitido por la autoridad
                  de salud competente, una vez verificado el cumplimiento de las
                  condiciones higienico sanitarias de la bodega, de conformidad
                  con la ley 9 de 1979 y su reglamenación.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_14" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  Fecha de visita y/o certificado
                  <input
                    class="form-control"
                    type="date"
                    v-model="form.fecha_certificado"
                  />
                  Concepto sanitaria
                  <input
                    class="form-control"
                    placeholder="concepto sanitario"
                    type="text"
                    v-model="form.concepto_sanitario"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >15. Existe un plan de saneamiento aplicable a la bodega y a
                  los establecimientos educativos con modalidad PS, CCT y I, de
                  acuerdo con la normatividad vigente, donde incluya
                  procedimientos, formatos de registros y los siguientes
                  programas: Limpieza y desinfección, desechos solidos, control
                  de plagas y monitoreo de calidad del agua.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_15" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_15_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >16.Se cuenta con un programa de mantenimiento preventivo y
                  correctivo de equipos, aplicable a la bodega y a los
                  establecimientos educativos con modalidad PS, CCT y I, en cuyo
                  contenido se relaciona formato hoja de vida de equipos,
                  cronograma, responsables de las actividades de mantenimiento,
                  entre otros.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_16" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_16_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >17.Se cuenta con el programa de calibración de equipos e
                  instrumentos de medición existentes y aplicable a la bodega y
                  en los comedores escolares.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_17" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_17_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >18.Dispone el operador de los ciclos de menús diseñados,
                  dispuestos y aprobados por la entidad territorial, con la
                  respectiva firma del profesional en Nutrición y dietetica, con
                  un minimo de 10 menús para la modalidad industrializada, y
                  minimo 20 para modalidad preparada en sitio y comida caliente
                  transportada.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_18" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_18_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >19.Los ciclos de menús estan acompañados de los siguientes
                  documentos: analisis nutricional, guias de preparación, lista
                  de intercambios.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_19" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_19_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >20.Se cuenta con un plan de muestreo microbiologico, para los
                  grupos de alimentos seleccionados por la entidad territorial,
                  de las diferentes modalidades de suministro en los
                  establecimientos y comedores escolares, con la periodicidad y
                  terminos definidos</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_20" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_20_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >21.Se cuenta con el programa que detalla los aspectos y
                  criterios de evaluación, aceptación y seguimiento a
                  proveedores, materias primas e insumos en la bodega del
                  operador contratista.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_21" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_21_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >22.Se evidencia el plan de rutas con la periodicidad y dias
                  de entrega de los viveres, elementos de aseo y combustible
                  (gas) a cada comedor escolar.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_22" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_22_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >23.Se evidencia el plan de muestreo microbiologico para los
                  grupos de alimentos seleccionados por la entidad
                  territorial.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_23" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_23_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >24.Se evidencia el modelo de la Ficha Técnica de Información
                  del PAE, que se publicara en los establecimientos
                  educativos.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_24" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_24_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >25.Se evidencia para cada uno de los manipuladores de
                  alimentos de bodega, el certificado médico de aptitud para
                  manipular alimentos, con los respectivos soportes (exámenes de
                  laboratorio clínico), no mayor a un año.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_25" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_25_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >26.Cada uno de los manipuladores de alimentos de bodega,
                  acredita formación en educación sanitaria, principios básicos
                  de Buenas Prácticas de Manufactura y prácticas higiénicas en
                  manipulación y protección de alimentos (no mayor a un
                  año).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_26" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_26_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >27.Se cuenta con un programa de capacitación continua al
                  personal manipulador de alimentos (bodega y E.E), documentado
                  en físico, donde incluye cronograma, responsables, metodologia
                  del plan de capacitación, entre otros.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_27" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_27_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >28.Los transportadores de alimentos mantienen al día
                  (vigentes) y cuentan con los siguientes documentos: licencia
                  de conducción, seguro obligatorio (SOAT), tarjeta de
                  propiedad, revisión técnico-Mecánica, certificados medicos y
                  manipulación de los alimentos, concepto sanitario favorable
                  del vehiculo transportador.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_28" required>
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_28_obs"
                  />
                </div>
              </div>
              <hr />
            </div>
            <div class="row">
              <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                <label class="form-label">Puntaje Esperado</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="form.puntaje_esperado"
                  disabled
                />
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                <label class="form-label">Puntaje Obtenido</label>
                <input
                  class="form-control"
                  type="number"
                  v-model="form.puntaje_obtenido"
                  disabled
                />
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                <label class="form-label">Porcentaje</label>
                <input
                  class="form-control"
                  step="any"
                  type="number"
                  v-model="form.porcentaje"
                  disabled
                />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <label class="form-label"
                  >Conclusiones / Observaciones / Recomendaciones</label
                >
                <textarea
                  class="form-control"
                  v-model="form.observaciones"
                  rows="3"
                >
                </textarea>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <label class="form-label"
                  >Observaciones de quien recibe lla visita</label
                >
                <textarea
                  class="form-control"
                  v-model="form.observaciones_recibe"
                  rows="3"
                >
                </textarea>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <div class="row">
                <div class="col-12 mb-1">
                  <label class="form-label"
                    >Firma equipo PAE/Apoyo a la supervisión</label
                  >
                </div>
                <div class="col-12 mb-1">
                  <SignaturePad
                    idFirma="firma1"
                    :varFirma="form.firma1"
                    @firmas-updated="actualizarFirmas"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.nombre_apoyo"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cedula_apoyo"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cargo_apoyo"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.telefono_apoyo"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <div class="row">
                <div class="col-12 mb-1">
                  <label class="form-label"
                    >Firma quien atiende la visita</label
                  >
                </div>
                <div class="col-12 mb-1">
                  <SignaturePad
                    idFirma="firma2"
                    :varFirma="form.firma2"
                    @firmas-updated="actualizarFirmas"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.nombre_atiende"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cedula_atiende"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cargo_atiende"
                    required
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.telefono_atiende"
                    required
                  />
                </div>
              </div>
            </div>
            <!-- Componente de carga de archivos -->
            <FileUploader :files="form.files" @files-updated="updateFiles" />

            <div class="col-sm-12 col-md-12 col-lg-12 mt-3 mb-1">
              <button type="submit" class="btn btn-primary mr-2">
                Guardar
              </button>
            </div>
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
      form: {
        etc: "Norte de Santander",
        municipio: "",
        operador: "",
        contrato: "",
        direccion: "",
        correo: "",
        fecha_visita: "",
        hora_inicio: "",
        hora_fin: "",
        num_visita: "",
        tipo_visita: "",
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
        fecha_certificado: "",
        concepto_sanitario: "",
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
        puntaje_esperado: 0,
        puntaje_obtenido: 0,
        porcentaje: 0,
        observaciones: "",
        observaciones_recibe: "",
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
    calcularPuntaje() {
      let puntajeEsperado = 0;
      let puntajeObtenido = 0;

      // Recorremos las claves del formulario
      Object.keys(this.form).forEach((key) => {
        // Filtramos solo las respuestas de las preguntas (ignoramos las observaciones)
        if (key.startsWith("pre_") && !key.endsWith("_obs")) {
          let respuesta = this.form[key];

          // Solo cuentan las respuestas que son "1" o "0" para el puntaje esperado
          if (respuesta === "1" || respuesta === "0") {
            puntajeEsperado++;

            // Si la respuesta es "1" (Cumple), suma al puntaje obtenido
            if (respuesta === "1") {
              puntajeObtenido++;
            }
          }
        }
      });

      // Calculamos el porcentaje de cumplimiento
      let porcentajeCumplimiento =
        puntajeEsperado > 0 ? (puntajeObtenido / puntajeEsperado) * 100 : 0;

      // Guardamos los resultados en el formulario o mostramos en consola
      this.form.puntaje_esperado = puntajeEsperado;
      this.form.puntaje_obtenido = puntajeObtenido;
      this.form.porcentaje = porcentajeCumplimiento.toFixed(2);
    },
    guardarFormulario() {
      this.isLoading = true;
      this.calcularPuntaje();
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
      // validar que haya llenado preguntas de verificación
      if (
        this.form.pre_1 == "" ||
        this.form.pre_2 == "" ||
        this.form.pre_3 == "" ||
        this.form.pre_4 == "" ||
        this.form.pre_5 == "" ||
        this.form.pre_6 == "" ||
        this.form.pre_7 == "" ||
        this.form.pre_8 == "" ||
        this.form.pre_9 == "" ||
        this.form.pre_10 == "" ||
        this.form.pre_11 == "" ||
        this.form.pre_12 == "" ||
        this.form.pre_13 == "" ||
        this.form.pre_14 == "" ||
        this.form.pre_15 == "" ||
        this.form.pre_16 == "" ||
        this.form.pre_17 == "" ||
        this.form.pre_18 == "" ||
        this.form.pre_19 == "" ||
        this.form.pre_20 == "" ||
        this.form.pre_21 == "" ||
        this.form.pre_22 == "" ||
        this.form.pre_23 == "" ||
        this.form.pre_24 == "" ||
        this.form.pre_25 == "" ||
        this.form.pre_26 == "" ||
        this.form.pre_27 == "" ||
        this.form.pre_28 == "" ||
        this.form.municipio == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Faltan preguntas por responder. Por favor, complete los campos.",
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
      this.resetFormulario();
      this.isLoading = false;
    },
    async enviarFormularioAlServidor() {
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        // Convertir form a Multipart
        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          if (key !== "files") {
            formData.append(key, this.form[key]);
          }
        });
        this.form.files.forEach((fileObj, index) => {
          formData.append(`files[${index}]`, fileObj.file);
        });
        // Enviar datos con una solicitud POST
        const response = await axios.post(
          `${apiUrl}/ct_etapa_alistamiento`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          this.showToast("Formulario guardado correctamente", "success");
          this.resetFormulario(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast(
          "No se pudo enviar el formulario componente social visita",
          "danger"
        );
      } finally {
        this.isLoading = false;
      }
    },
    resetFormulario() {
      this.form = {
        etc: "Norte de Santander",
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
        fecha_certificado: "",
        concepto_sanitario: "",
        puntaje_esperado: 0,
        puntaje_obtenido: 0,
        porcentaje: 0,
        observaciones: "",
        observaciones_recibe: "",
        files: [], //archivos adjuntos
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
