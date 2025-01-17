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
                Formulario de verificación etapa alistamiento
              </li>
            </ol>
          </nav>
          <h2>Formulario de verificación etapa alistamiento</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">ETC </label>
              <input
                class="form-control"
                type="text"
                value="Norte de Santander"
                disabled
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Minicipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>

            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Operador </label>
              <input class="form-control" type="text" v-model="form.operador" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">N° contrato </label>
              <input class="form-control" type="text" v-model="form.contrato" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Dirección </label>
              <input
                class="form-control"
                type="text"
                v-model="form.direccion"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Telefono / Correo </label>
              <input class="form-control" type="text" v-model="form.correo" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Fecha visita </label>
              <input
                class="form-control"
                type="date"
                v-model="form.fechaVisita"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora inicio</label>
              <input
                class="form-control"
                type="text"
                v-model="form.horaInicio"
                disabled
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora fin</label>
              <input
                class="form-control"
                type="text"
                v-model="form.horaFin"
                disabled
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Número de visita </label>
              <select class="form-select" v-model="form.numVisita">
                <option value="">1ra</option>
                <option value="">2da</option>
                <option value="">3ra</option>
              </select>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Tipo visita </label>
              <select class="form-select" v-model="form.tipoVisita">
                <option value="">Técnica</option>
                <option value="">Verificación ETA</option>
                <option value="">SPQRS</option>
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >4. La bodega está construida a prueba de vectores (roedores,
                  insectos, entre otros).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >6.Los techos y paredes se encuentran limpios (ausencia de
                  telarañas y suciedad).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >7.Las diferentes áreas de la bodega se encuentran debidamente
                  separadas e identificadas.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >9.El tamaño de la bodega o las areas son proporcionales a los
                  volúmenes de alimentos manipulados, disponiendo además de
                  espacios libres para la circulación del personal, el traslado
                  de materiales o productos y para realizar la limpieza y el
                  mantenimiento de las áreas respectivas.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >10.Las áreas están separadas de cualquier tipo de vivienda y
                  no se utilizan como dormitorio.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >11.Se dispone del agua potable para efectuar los procesos de
                  limpieza y desinfección efectiva.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >13.Dispone de las instalaciones para limpieza y desinfección
                  de los equipos y utensilios de trabajo.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <hr />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1 mt-2">
              <h5>
                II. VERIFICACIÓN DOCUMENTAL BODEGA Y ESTABLECIMIENTOS CON
                MODALIDAD APS, CCT Y RI
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >15. Existe un plan de saneamiento aplicable a la bodega y a
                  los establecimientos educativos con modalidad RPS, CCT y RI,
                  de acuerdo con la normatividad vigente, donde incluya
                  procedimientos, formatos de registros y los siguientes
                  programas: Limpieza y desinfección, desechos solidos, control
                  de plagas y monitoreo de calidad del agua.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >16.Se cuenta con un programa de mantenimiento preventivo y
                  correctivo de equipos, aplicable a la bodega y a los
                  establecimientos educativos con modalidad RPS, CCT y RI, en
                  cuyo contenido se relaciona formato hoja de vida de equipos,
                  cronograma, responsables de las actividades de mantenimiento,
                  entre otros.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >20.Se cuenta con un plan de muestreo microbiologico, para los
                  grupos de alimentos seleccionados por la entidad territorial,
                  de las diferentes modalidades de suministro en los
                  establecimienteos y comedores escolares, con la periodicidad y
                  terminos definidos</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >27.Se cuenta con un programa de capacitación continua al
                  personal manipulador de alimentos (bodega y E.E), documentado
                  en físico, donde incluye cronograma, responsables, medodologia
                  del plan de capacitación, entre otros.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
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
                  <select class="form-select" v-model="form.pre_1">
                    <option value="1">Cumple</option>
                    <option value="0">No Cumple</option>
                    <option value="NA">No Aplica</option>
                    <option value="NO">No Observado</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <input class="form-control" type="text" />
                </div>
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
                    ref="firstSignaturePad"
                    @signatureSaved="handleFirstSignature"
                    @signatureCleared="handleFirstSignatureCleared"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" />
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
                    ref="secondSignaturePad"
                    @signatureSaved="handleSecondSignature"
                    @signatureCleared="handleSecondSignatureCleared"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>

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
      nuevoNombre: "", // Input para el nombre
      nuevoGrado: "", // Input para el grado
      filas: [], //filas de la tabla
      form: {
        fechaVisita: "",
        municipio: "",
        institucion: "",
        sede: "",
        operador: "",
        contrato: "",
        numVisita: "",
        modalidad: "",
        numBeneficiarios: "",
        horaInicio: "",
        horaFin: "",
      },
      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
    handleFirstSignature(signature) {
      this.form.firstSignature = signature;
      this.signatures.firstSignature = true; // La firma ha sido realizada
    },
    handleSecondSignature(signature) {
      this.form.secondSignature = signature;
      this.signatures.secondSignature = true; // La firma ha sido realizada
    },
    handleFirstSignatureCleared() {
      this.signatures.firstSignature = false; // Marca como no firmada
    },
    handleSecondSignatureCleared() {
      this.signatures.secondSignature = false; // Marca como no firmada
    },
    saveSignatures() {
      // Llamamos a los métodos saveSignature de ambos componentes
      this.$refs.firstSignaturePad.saveSignature();
      this.$refs.secondSignaturePad.saveSignature();
    },
    agregarFila() {
      if (this.nuevoNombre && this.nuevoGrado) {
        // Agregar una nueva fila con los valores ingresados
        this.filas.push({
          nombre: this.nuevoNombre,
          grado: this.nuevoGrado,
        });

        // Limpiar los campos después de agregar
        this.nuevoNombre = "";
        this.nuevoGrado = "";
      } else {
        this.showToast(
          "Por favor, complete ambos campos antes de agregar.",
          "danger"
        );
      }
    },
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
