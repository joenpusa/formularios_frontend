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
                <router-link to="/comsocial">Componente social</router-link>
              </li>
              <li class="breadcrumb-item">Formulario de visita</li>
            </ol>
          </nav>
          <h2>
            FORMATO DE VERIFICACIÓN DE LOS MECANISMOS DE GESTIÓN SOCIAL EN EL
            PROGRAMA DE ALIMENTACIÓN ESCOLAR - PAE
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario" novalidate>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">ETC </label>
              <input
                class="form-control"
                type="text"
                value="Norte de Santander"
                v-model="form.etc"
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
              <label class="form-label">Municipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Institución educativa </label>
              <input
                class="form-control"
                type="text"
                v-model="form.institucion"
                required
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Sede educativa </label>
              <input
                class="form-control"
                type="text"
                v-model="form.sede"
                required
              />
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
              <label class="form-label">Número de visita </label>
              <select class="form-select" v-model="form.num_visita">
                <option value="1ra">1ra</option>
                <option value="2da">2da</option>
                <option value="3ra">3ra</option>
              </select>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Modalidad de atención</label>
              <select class="form-select" v-model="form.modalidad">
                <option value="I">I</option>
                <option value="PS">PS</option>
                <option value="CCT">CCT</option>
              </select>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">N° beneficiarios atendidos </label>
              <input
                class="form-control"
                type="number"
                v-model="form.num_beneficiarios"
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
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item border-top">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Califique según nivel de cumplimiento: Cumple - No cumple
                      - No aplica - No observado
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse show"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    style=""
                  >
                    <div class="accordion-body pt-0">
                      <div class="row">
                        <hr />
                        <label class="col-sm-8"
                          >1. Conoce la Resolución 00335 de 2021 - Lineamientos
                          Generales del Programa de Alimentación Escolar-
                          PAE.</label
                        >
                        <div class="col-sm-4">
                          <select
                            class="form-select"
                            v-model="form.pre_1"
                            required
                          >
                            <option value="Cumple">Cumple</option>
                            <option value="No cumple">No cumple</option>
                            <option value="No aplica">No aplica</option>
                            <option value="No observado">No observado</option>
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <hr />
                        <label class="col-sm-8"
                          >2. Conoce los mecanismos de participación ciudadana,
                          control social y acceso a la información que dispone
                          la resolución para que la comunidad educativa pueda
                          realizar acompañamiento y ejercer vigilancia y control
                          a la operación del Programa de Alimentación Escolar -
                          PAE.</label
                        >
                        <div class="col-sm-4">
                          <select class="form-select" v-model="form.pre_2">
                            <option value="Cumple">Cumple</option>
                            <option value="No cumple">No cumple</option>
                            <option value="No aplica">No aplica</option>
                            <option value="No observado">No observado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Verificación Mecanismos de Participación Ciudadana
                    </button>
                  </h2>
                  <div
                    class="accordion-collapse collapse"
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                    style=""
                  >
                    <div class="accordion-body pt-0">
                      <div class="row">
                        <hr />
                        <label class="col-sm-8"
                          >3. Se evidencia soporte de conformación del Comité de
                          Alimentación Escolar - CAE, en el Establecimiento
                          Educativo. Adjuntar acta correspondiente del
                          CAE.</label
                        >
                        <div class="col-sm-4">
                          <select class="form-select" v-model="form.pre_3">
                            <option value="Cumple">Cumple</option>
                            <option value="No cumple">No cumple</option>
                            <option value="No aplica">No aplica</option>
                            <option value="No observado">No observado</option>
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <hr />
                        <label class="col-sm-8"
                          >4. El Comité de Alimentación Escolar - CAE realiza la
                          totalidad de reuniones de seguimiento y acompañamiento
                          al adecuado funcionamiento del Programa de
                          Alimentación Escolar - PAE en la Institución
                          Educativa, según lo dispuesto en la circular N° 207 de
                          noviembre del 2024. Adjuntar actas de reunión
                          correspondientes.</label
                        >
                        <div class="col-sm-4">
                          <select class="form-select" v-model="form.pre_4">
                            <option value="Cumple">Cumple</option>
                            <option value="No cumple">No cumple</option>
                            <option value="No aplica">No aplica</option>
                            <option value="No observado">No observado</option>
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <hr />
                        <label class="col-sm-8"
                          >5. La calidad de la información que contiene las
                          actas evidenciadas es clara y completa según lo
                          requiere el modelo de formato Acta de Constitución de
                          Comité de Alimentación Escolar - CAE.</label
                        >
                        <div class="col-sm-4">
                          <select class="form-select" v-model="form.pre_5">
                            <option value="Cumple">Cumple</option>
                            <option value="No cumple">No cumple</option>
                            <option value="No aplica">No aplica</option>
                            <option value="No observado">No observado</option>
                          </select>
                        </div>
                      </div>
                      <div class="row">
                        <hr />
                        <label class="col-sm-8"
                          >6. La Institución Educativa participa y promueve la
                          asistencia a las mesas públicas convocadas por la ETC
                          como espacio de dialogo y participación entre los
                          actores del PAE para el mejoramiento continuo del
                          programa.</label
                        >
                        <div class="col-sm-4">
                          <select class="form-select" v-model="form.pre_5">
                            <option value="Cumple">Cumple</option>
                            <option value="No cumple">No cumple</option>
                            <option value="No aplica">No aplica</option>
                            <option value="No observado">No observado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Verificación Mecanismos de Control Social
                      </button>
                    </h2>
                    <div
                      class="accordion-collapse collapse"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                      style=""
                    >
                      <div class="accordion-body pt-0">
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >7. La Institución Educativa manifiesta realizar
                            seguimiento a la gestión del Programa de
                            Alimentación Escolar mediante la rendición de
                            cuentas que realiza la Entidad Territorial.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_7">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >8. Se tiene conocimiento acerca de la constitución
                            de veedurías ciudadanas en el PAE.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_8">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >9. Se tiene conocimiento acerca de la ley 2042 de
                            2020 por medio de la cual se otrogan herramientas a
                            los padres de familia realice acompañamiento eficaz
                            a los recursos del PAE.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_9">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Acceso a la Información
                      </button>
                    </h2>
                    <div
                      class="accordion-collapse collapse"
                      id="collapseFour"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                      style=""
                    >
                      <div class="accordion-body pt-0">
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >10. Se evidencia publicada la ficha técnica de
                            información del PAE en un lugar visible, de tal
                            manera que la información mínima requerida pueda ser
                            consultada por los actores del programa para fines
                            de seguimiento y vigilancia comunitaria.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_10">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >11. Se evidencian publicados los ciclos de menú
                            establecidos, en un lugar visible a toda la
                            comunidad educativa para llevar a cabo los procesos
                            de vigilancia comunitaria y control social.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_11">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >12. Se tiene conocimiento de los canales de
                            atención dispuestos por la ETC y el operador para la
                            recepción de solicitudes, peticiones, quejas y
                            reclamos (SPQR).</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_12">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Beneficiarios
                      </button>
                    </h2>
                    <div
                      class="accordion-collapse collapse"
                      id="collapseFive"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                      style=""
                    >
                      <div class="accordion-body pt-0">
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >13. Se tiene en cuenta los criterios establecidos
                            en la resolución para la priorización de los
                            estudiantes beneficiarios y asignación del
                            complemento alimentario a entregar.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_13">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >14. Se realiza acompañamiento por parte del
                            Establecimiento Educativo a los estudiantes
                            beneficiarios en el área de entrega y/o consumo de
                            los complementos alimentarios entregados.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_14">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >15. El comportamiento de los estudiantes
                            beneficiarios es el adecuado al momento de la
                            entrega y/o consumo del complemento.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_15">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <hr />
                          <label class="col-sm-8"
                            >16. El Establecimiento Educativo fomenta y apoya
                            las iniciativas pedagógicas que integren procesos
                            formativos que impulsen las buenas prácticas
                            higiénicas, los hábitos alimentarios saludables, el
                            respeto y la tolerancia entre los diferentes
                            estudiantes beneficiarios, de tal manera que la
                            alimentación escolar genere condiciones que permitan
                            el logro de trayectorias educativas completas y el
                            desarrollo integral de los Niños, Niñas, Jóvenes y
                            Adolescentes beneficiarios.</label
                          >
                          <div class="col-sm-4">
                            <select class="form-select" v-model="form.pre_16">
                              <option value="Cumple">Cumple</option>
                              <option value="No cumple">No cumple</option>
                              <option value="No aplica">No aplica</option>
                              <option value="No observado">No observado</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <label class="form-label"
                  >INDICADOR: Porcentaje de Cumplimiento Mecanismos de Gestión
                  Social
                </label>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="number"
                    v-model="form.perc_gest_social"
                    min="0"
                    max="100"
                  />
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <label class="form-label"
                  >Observaciones / Recomendaciones / Conclusiones / Acciones de
                  Mejora
                </label>
                <textarea
                  class="form-control"
                  v-model="form.observaciones"
                  rows="3"
                >
                </textarea>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <label class="form-label">Compromisos adquiridos </label>
                <hr />
                <label>
                  NOTA: Si se generan compromisos en relación a los mecanismos
                  de gestión social por parte del Establecimiento Educativo se
                  dispone el siguiente correo por parte de la Entidad
                  Territorial para realizar el envío de los soportes de
                  cumplimiento de los mismos: gestionsocialpaends@gmail.com
                </label>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item border-top">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                      >
                        Compromiso #1
                      </button>
                    </h2>
                    <div
                      class="accordion-collapse collapse"
                      id="collapseSix"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body pt-0">
                        <div class="row">
                          <hr />
                          <div class="col-sm-12">
                            <label class="form-label"
                              >Descripción del compromiso</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_1_desc"
                              type="text"
                            />
                          </div>
                          <div class="col-sm-6">
                            <label class="form-label">Responsable</label>
                            <input
                              class="form-control"
                              v-model="form.compromiso_1_resp"
                              type="text"
                            />
                          </div>
                          <div class="col-sm-6">
                            <label class="form-label"
                              >Fecha prevista de cumplimiento</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_1_fecha"
                              type="date"
                            />
                          </div>
                          <div class="col-sm-12">
                            <label class="form-label"
                              >Mecanismo de seguimiento</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_1_mecanismo"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSeven">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="true"
                        aria-controls="collapseSeven"
                      >
                        Compromiso #2
                      </button>
                    </h2>
                    <div
                      class="accordion-collapse collapse"
                      id="collapseSeven"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body pt-0">
                        <div class="row">
                          <hr />
                          <div class="col-sm-12">
                            <label class="form-label"
                              >Descripción del compromiso</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_2_desc"
                              type="text"
                            />
                          </div>
                          <div class="col-sm-6">
                            <label class="form-label">Responsable</label>
                            <input
                              class="form-control"
                              v-model="form.compromiso_2_resp"
                              type="text"
                            />
                          </div>
                          <div class="col-sm-6">
                            <label class="form-label"
                              >Fecha prevista de cumplimiento</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_2_fecha"
                              type="date"
                            />
                          </div>
                          <div class="col-sm-12">
                            <label class="form-label"
                              >Mecanismo de seguimiento</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_2_mecanismo"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEight">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="true"
                        aria-controls="collapseEight"
                      >
                        Compromiso #3
                      </button>
                    </h2>
                    <div
                      class="accordion-collapse collapse"
                      id="collapseEight"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body pt-0">
                        <div class="row">
                          <hr />
                          <div class="col-sm-12">
                            <label class="form-label"
                              >Descripción del compromiso</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_3_desc"
                              type="text"
                            />
                          </div>
                          <div class="col-sm-6">
                            <label class="form-label">Responsable</label>
                            <input
                              class="form-control"
                              v-model="form.compromiso_3_resp"
                              type="text"
                            />
                          </div>
                          <div class="col-sm-6">
                            <label class="form-label"
                              >Fecha prevista de cumplimiento</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_3_fecha"
                              type="date"
                            />
                          </div>
                          <div class="col-sm-12">
                            <label class="form-label"
                              >Mecanismo de seguimiento</label
                            >
                            <input
                              class="form-control"
                              v-model="form.compromiso_3_mecanismo"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
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
                      <input
                        class="form-control"
                        v-model="form.nombre_apoyo"
                        type="text"
                        required
                      />
                    </div>
                    <div class="col-12 mb-1">
                      <label class="form-label">Cédula</label>
                      <input
                        class="form-control"
                        v-model="form.cedula_apoyo"
                        type="text"
                        required
                      />
                    </div>
                    <div class="col-12 mb-1">
                      <label class="form-label">Cargo</label>
                      <input
                        class="form-control"
                        v-model="form.cargo_apoyo"
                        type="text"
                        required
                      />
                    </div>
                    <div class="col-12 mb-1">
                      <label class="form-label">Teléfono</label>
                      <input
                        class="form-control"
                        v-model="form.telefono_apoyo"
                        type="text"
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
                        ref="secondSignaturePad"
                        @signatureSaved="handleSecondSignature"
                        @signatureCleared="handleSecondSignatureCleared"
                      />
                    </div>
                    <div class="col-12 mb-1">
                      <label class="form-label">Nombre</label>
                      <input
                        class="form-control"
                        v-model="form.nombre_atiende"
                        type="text"
                        required
                      />
                    </div>
                    <div class="col-12 mb-1">
                      <label class="form-label">Cédula</label>
                      <input
                        class="form-control"
                        v-model="form.cedula_atiende"
                        type="text"
                        required
                      />
                    </div>
                    <div class="col-12 mb-1">
                      <label class="form-label">Cargo</label>
                      <input
                        class="form-control"
                        v-model="form.cargo_atiende"
                        type="text"
                        required
                      />
                    </div>
                    <div class="col-12 mb-1">
                      <label class="form-label">Teléfono</label>
                      <input
                        class="form-control"
                        v-model="form.telefono_atiende"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!-- Componente de carga de archivos -->
                <FileUploader
                  :files="form.files"
                  @files-updated="updateFiles"
                />
              </div>

              <div class="col-sm-12 col-md-12 col-lg-12 mt-3 mb-1">
                <button type="submit" class="btn btn-primary">Guardar</button>
              </div>
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
        fecha_visita: "",
        municipio: "",
        institucion: "",
        sede: "",
        operador: "",
        contrato: "",
        num_visita: "",
        modalidad: "",
        num_beneficiarios: "",
        hora_inicio: "",
        hora_fin: "",
        pre_1: "",
        pre_2: "",
        pre_3: "",
        pre_4: "",
        pre_5: "",
        pre_6: "",
        pre_7: "",
        pre_8: "",
        pre_9: "",
        pre_10: "",
        pre_11: "",
        pre_12: "",
        pre_13: "",
        pre_14: "",
        pre_15: "",
        compromiso_1_desc: "",
        compromiso_1_resp: "",
        compromiso_1_fecha: "",
        compromiso_1_mecanismo: "",
        compromiso_2_desc: "",
        compromiso_2_resp: "",
        compromiso_2_fecha: "",
        compromiso_2_mecanismo: "",
        compromiso_3_desc: "",
        compromiso_3_resp: "",
        compromiso_3_fecha: "",
        compromiso_3_mecanismo: "",
        cedula_apoyo: "",
        nombre_apoyo: "",
        telefono_apoyo: "",
        cargo_apoyo: "",
        cedula_atiende: "",
        nombre_atiende: "",
        telefono_atiende: "",
        cargo_atiende: "",
        perc_gest_social: 0,
        observaciones: "",
        firstSignature: "",
        secondSignature: "",
        files: [],
      },
      signatures: {
        firstSignature: false,
        secondSignature: false,
      },
      formulariosOffline: [], // Para almacenar temporalmente los formularios en localStorage
    };
  },
  methods: {
    updateFiles(files) {
      // Actualiza la lista de archivos en el formulario
      this.form.files = files;
    },
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
    async guardarFormulario() {
      // Primero, guardamos las firmas
      if (!this.signatures.firstSignature || !this.signatures.secondSignature) {
        return; // Evitamos el envío del formulario
      }
      // Primero, guardamos las firmas
      this.saveSignatures();

      try {
        const response = await axios.get(`/users/${this.$route.params.id}`);
        if (response.status === 200) {
          this.toastMessage = "Formulario guardado exitosamente.";
          this.toastType = "success";
        } else {
          this.toastMessage = "Error al guardar el formulario.";
          this.toastType = "error";
        }
      } catch (error) {
        this.toastMessage = "Error al cargar el usuario.";
        this.toastType = "error";
      } finally {
        this.isLoading = false;
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
