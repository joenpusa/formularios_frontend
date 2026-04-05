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
              <li class="breadcrumb-item">Diagnóstico de infraestructura</li>
            </ol>
          </nav>
          <h2>DIAGNÓSTICO DE INFRAESTRUCTURA</h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario" ref="wizardForm">
          <div class="card mb-4" v-if="currentStepData">
            <div
              class="card-header bg-primary text-white d-flex justify-content-between align-items-center"
            >
              <h5 class="mb-0">{{ currentStepData.category }}</h5>
              <span
                class="badge bg-light text-primary fs-6"
                style="min-width: 120px; text-align: center"
                >Paso {{ currentStep + 1 }} de {{ steps.length }}</span
              >
            </div>
            <div class="card-body">
              <h6
                class="text-primary border-bottom pb-2 mb-4"
                v-if="currentStepData.subcategory"
              >
                Subcategoría: {{ currentStepData.subcategory }}
              </h6>

              <!-- STEP 0 -->
              <div v-show="currentStep === 0" ref="step0">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label">ETC:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.etc"
                      required
                      disabled
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Fecha de la Visita:</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="form.fecha_visita"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Hora de la Visita:</label>
                    <input
                      type="time"
                      class="form-control"
                      v-model="form.hora_visita"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label for="municipio" class="form-label">Municipio:</label>
                    <MunicipioSelect v-model="form.municipio" />
                  </div>
                  <div class="col-md-4">
                    <label for="institucionEducativa" class="form-label"
                      >Institución Educativa:</label
                    >
                    <InstitucionSelect
                      v-model="form.institucion"
                      :municipio-id="form.municipio"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="sedeEducativa" class="form-label"
                      >Sede Educativa:</label
                    >
                    <SedeSelect
                      v-model="form.sede"
                      :institucion-id="form.institucion"
                    />
                  </div>
                </div>
              </div>
              <!-- STEP 1 -->
              <div v-show="currentStep === 1" ref="step1">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label">4. Zona Geográfica:</label>
                    <select
                      class="form-select"
                      v-model="form.zona_geografica"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Urbana">Urbana</option>
                      <option value="Rural">Rural</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >5. Modelos de Atención que actualmente se presta:</label
                    >
                    <select
                      class="form-select"
                      v-model="form.modelo_atencion"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="PAE para pueblos indígenas">
                        PAE para pueblos indígenas
                      </option>
                      <option value="PAE convencional">PAE convencional</option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >6. Tipos de Complemento Alimentario:</label
                    >
                    <select
                      class="form-select"
                      v-model="form.tipo_complemento"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="Complemento alimentario jornada mañana/tarde (CAJM/JT)"
                      >
                        Complemento alimentario jornada mañana/tarde (CAJM/JT)
                      </option>
                      <option value="Complemento alimentario Almuerzo">
                        Complemento alimentario Almuerzo
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >7. Modalidades de Atención del Servicio que actualmente
                      se presta:</label
                    >
                    <select
                      class="form-select"
                      v-model="form.modalidad_atencion"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Preparada en sitio">
                        Preparada en sitio
                      </option>
                      <option value="Caliente Transportada">
                        Caliente Transportada
                      </option>
                      <option value="Industrializada">Industrializada</option>
                      <option
                        value="Preparada en sitio, Caliente transportada, Industrializada"
                      >
                        Preparada en sitio, Caliente transportada,
                        Industrializada
                      </option>
                      <option value="Preparada en sitio e Industrializada">
                        Preparada en sitio e Industrializada
                      </option>
                      <option value="Caliente Transportada e Industrializada">
                        Caliente Transportada e Industrializada
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3 align-items-end">
                  <div class="col-md-4">
                    <label class="form-label"
                      >8. Si la I.E. o sede es modalidad industrializada, ¿tiene
                      algún área que se pueda utilizar como comedor?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.ind_area_comedor"
                      :disabled="!isIndustrializada"
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="No aplica" v-if="!isIndustrializada">
                        No aplica
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >9. Si la I.E. o sede es modalidad es industrializada,
                      ¿tiene área que se pueda utilizar para producción
                      (cocina), con dotación de mesones y lavaplatos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.ind_area_produccion"
                      :disabled="!isIndustrializada"
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="No aplica" v-if="!isIndustrializada">
                        No aplica
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >10. Si la I.E. o sede es modalidad es industrializada,
                      ¿tiene acceso a agua potable?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.ind_agua_potable"
                      :disabled="!isIndustrializada"
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="No aplica" v-if="!isIndustrializada">
                        No aplica
                      </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 2 -->
              <div v-show="currentStep === 2" ref="step2">
                <div class="row mb-3">
                  <div class="col-md-12">
                    <label class="form-label"
                      >11. ¿La sede está cerca de potenciales fuentes de
                      contaminación (basureros, mataderos, pantanos,
                      etc.)?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.cerca_contaminacion"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 3 -->
              <div v-show="currentStep === 3" ref="step3">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >12. ¿La sede educativa está ubicada en zona de conflicto
                      armado e inestabilidad social?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.zona_conflicto"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >13. ¿Con qué frecuencia las dinámicas de conflicto armado
                      e inestabilidad social afectan la Operación o entrega del
                      PAE?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.frecuencia_conflicto"
                      :disabled="form.zona_conflicto !== 'Sí'"
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.zona_conflicto !== 'Sí'"
                      >
                        No aplica
                      </option>
                      <option value="Muy frecuente">Muy frecuente</option>
                      <option value="Algo frecuente">Algo frecuente</option>
                      <option value="poco frecuente">Poco frecuente</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 4 -->
              <div v-show="currentStep === 4" ref="step4">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >14. ¿La sede tiene un espacio dedicado al almacenamiento
                      de alimentos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.esp_almacenamiento"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >15. El material predominante del techo en ese lugar es
                      (almacenamiento):</label
                    >
                    <select
                      class="form-select"
                      v-model="form.mat_techo_alm"
                      :disabled="form.esp_almacenamiento === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Techo de concreto">
                        Techo de concreto
                      </option>
                      <option value="Techos de metal o acero">
                        Techos de metal o acero
                      </option>
                      <option value="Tejas de barro o arcilla">
                        Tejas de barro o arcilla
                      </option>
                      <option value="Tejas de plástico">
                        Tejas de plástico
                      </option>
                      <option value="Techo de paja o madera">
                        Techo de paja o madera
                      </option>
                      <option value="Sin techo">Sin techo</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_almacenamiento === 'No'"
                      >
                        No aplica
                      </option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >16. El material predominante del piso en ese lugar es
                      (almacenamiento):</label
                    >
                    <select
                      class="form-select"
                      v-model="form.mat_piso_alm"
                      :disabled="form.esp_almacenamiento === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_almacenamiento === 'No'"
                      >
                        No aplica
                      </option>
                      <option value="Baldosa">Baldosa</option>
                      <option value="Ladrillo">Ladrillo</option>
                      <option value="Cemento, gravilla">
                        Cemento, gravilla
                      </option>
                      <option value="Madera, Tabla, Tablón">
                        Madera, Tabla, Tablón
                      </option>
                      <option value="Tierra, arena">Tierra, arena</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >17. El material predominante de las paredes en ese lugar
                      es (almacenamiento):</label
                    >
                    <select
                      class="form-select"
                      v-model="form.mat_paredes_alm"
                      :disabled="form.esp_almacenamiento === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_almacenamiento === 'No'"
                      >
                        No aplica
                      </option>
                      <option value="Bloque, ladrillo, piedra, adobe">
                        Bloque, ladrillo, piedra, adobe
                      </option>
                      <option value="Bahareque, madera, tabla, tablón">
                        Bahareque, madera, tabla, tablón
                      </option>
                      <option
                        value="Material prefabricado (drywall, aglomerado, laminas de polietileno)"
                      >
                        Material prefabricado (drywall, aglomerado, laminas de
                        polietileno)
                      </option>
                      <option value="Guadua, caña, esterilla, latas">
                        Guadua, caña, esterilla, latas
                      </option>
                      <option value="Sin paredes">Sin paredes</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >18. ¿En qué estado se encuentra el espacio dedicado al
                      almacenamiento?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.est_almacenamiento"
                      :disabled="form.esp_almacenamiento === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_almacenamiento === 'No'"
                      >
                        No aplica
                      </option>
                      <option value="Bueno">Bueno</option>
                      <option value="Regular">Regular</option>
                      <option value="Malo">Malo</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 5 -->
              <div v-show="currentStep === 5" ref="step5">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >19. ¿La sede tiene un espacio dedicado a la preparación
                      de alimentos (cocina)?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.esp_preparacion"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >20. El material predominante del techo en ese lugar es
                      (preparación):</label
                    >
                    <select
                      class="form-select"
                      v-model="form.mat_techo_prep"
                      :disabled="form.esp_preparacion === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_preparacion === 'No'"
                      >
                        No aplica
                      </option>
                      <option value="Techo de concreto">
                        Techo de concreto
                      </option>
                      <option value="Techos de metal o acero">
                        Techos de metal o acero
                      </option>
                      <option value="Tejas de barro o arcilla">
                        Tejas de barro o arcilla
                      </option>
                      <option value="Tejas de plástico">
                        Tejas de plástico
                      </option>
                      <option value="Techo de paja o madera">
                        Techo de paja o madera
                      </option>
                      <option value="Sin techo">Sin techo</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >21. El material predominante del piso en ese lugar es
                      (preparación):</label
                    >
                    <select
                      class="form-select"
                      v-model="form.mat_piso_prep"
                      :disabled="form.esp_preparacion === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_preparacion === 'No'"
                      >
                        No aplica
                      </option>
                      <option value="Baldosa">Baldosa</option>
                      <option value="Ladrillo">Ladrillo</option>
                      <option value="Cemento, gravilla">
                        Cemento, gravilla
                      </option>
                      <option value="Madera, Tabla, Tablón">
                        Madera, Tabla, Tablón
                      </option>
                      <option value="Tierra, arena">Tierra, arena</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >22. El material predominante de las paredes en ese lugar
                      es (preparación):</label
                    >
                    <select
                      class="form-select"
                      v-model="form.mat_paredes_prep"
                      :disabled="form.esp_preparacion === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_preparacion === 'No'"
                      >
                        No aplica
                      </option>
                      <option value="Bloque, ladrillo, piedra, adobe">
                        Bloque, ladrillo, piedra, adobe
                      </option>
                      <option value="Bahareque, madera, tabla, tablón">
                        Bahareque, madera, tabla, tablón
                      </option>
                      <option
                        value="Material prefabricado (drywall, aglomerado, laminas de polietileno)"
                      >
                        Material prefabricado (drywall, aglomerado, laminas de
                        polietileno)
                      </option>
                      <option value="Guadua, caña, esterilla, latas">
                        Guadua, caña, esterilla, latas
                      </option>
                      <option value="Sin paredes">Sin paredes</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >23. ¿En qué estado se encuentra el espacio dedicado a la
                      preparación?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.est_preparacion"
                      :disabled="form.esp_preparacion === 'No'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No aplica"
                        v-if="form.esp_preparacion === 'No'"
                      >
                        No aplica
                      </option>
                      <option value="Bueno">Bueno</option>
                      <option value="Regular">Regular</option>
                      <option value="Malo">Malo</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 6 -->
              <div v-show="currentStep === 6" ref="step6">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >24. ¿Cómo es el espacio que se utiliza para el consumo de
                      alimentos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.esp_consumo"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Un espacio sin techo (a la intemperie)">
                        Un espacio sin techo (a la intemperie)
                      </option>
                      <option
                        value="Un espacio con techo pero compartido con otras areas comunes (biblioteca, sala de computo, etc.)"
                      >
                        Un espacio con techo pero compartido con otras areas
                        comunes (biblioteca, sala de computo, etc.)
                      </option>
                      <option value="Un salón de clase">
                        Un salón de clase
                      </option>
                      <option value="Un espacio cerrado exclusivo para comedor">
                        Un espacio cerrado exclusivo para comedor
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >25. ¿En qué estado se encuentra el espacio dedicado al
                      consumo?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.est_consumo"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Bueno">Bueno</option>
                      <option value="Regular">Regular</option>
                      <option value="Malo">Malo</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 7 -->
              <div v-show="currentStep === 7" ref="step7">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >26. ¿La sede tiene un espacio o área demarcada para la
                      disposición de residuos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.area_residuos"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >27. ¿La sede tiene baños de uso exclusivo para el
                      personal manipulador de alimentos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.banos_manipuladores"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 8 -->
              <div v-show="currentStep === 8" ref="step8">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >28. ¿La sede cuenta con el servicio de
                      electricidad?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.electricidad"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                      <option value="Intermitente">Intermitente</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >29. ¿La sede cuenta con acceso a agua?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.acceso_agua"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                      <option value="Intermitente">Intermitente</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >30. ¿De dónde obtiene principalmente el agua para el
                      PAE?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.fuente_agua"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Acueducto">Acueducto</option>
                      <option value="Agua en botella o bolsa">
                        Agua en botella o bolsa
                      </option>
                      <option value="Carrotanque">Carrotanque</option>
                      <option value="Pozo">Pozo</option>
                      <option value="Agua lluvia">Agua lluvia</option>
                      <option value="Cuerpos de agua (Ríos, quebradas, etc.)">
                        Cuerpos de agua (Ríos, quebradas, etc.)
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >31. ¿La sede cuenta con el servicio de
                      alcantarillado?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.alcantarillado"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >32. ¿Cuál de los siguientes combustibles se utilizan en
                      la sede educativa para la preparación de los
                      alimentos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.combustible"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Meteriales de desecho">
                        Meteriales de desecho
                      </option>
                      <option value="Gas natural o pipeta">
                        Gas natural o pipeta
                      </option>
                      <option
                        value="Leña, madera, carbón de leña o carbón mineral"
                      >
                        Leña, madera, carbón de leña o carbón mineral
                      </option>
                      <option value="Petróleo, gasolina, kerosene o alcohol">
                        Petróleo, gasolina, kerosene o alcohol
                      </option>
                      <option value="Electricidad">Electricidad</option>
                      <option value="No Aplica">No Aplica</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >33. ¿Cuenta con un espacio adecuado para almacenar la
                      pipeta de gas?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.espacio_gas"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                      <option value="No Aplica">No Aplica</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-3">
                    <label class="form-label"
                      >34. ¿La sede cuenta con el servicio de recolección de
                      basuras (aseo)?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.recoleccion_basura"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >35. ¿De qué forma se hace la disposición de los residuos
                      orgánicos (provenientes de los restos de alimentos) del
                      PAE en esta sede educativa?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.disp_organicos"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="La tiran a un río, quebrada, caño, laguna, mar"
                      >
                        La tiran a un río, quebrada, caño, laguna, mar
                      </option>
                      <option value="La tiran a un patio, lote, sanja o baldío">
                        La tiran a un patio, lote, sanja o baldío
                      </option>
                      <option value="Lo queman">Lo queman</option>
                      <option value="Lo entierran">Lo entierran</option>
                      <option value="Uso en compost o lombricultura">
                        Uso en compost o lombricultura
                      </option>
                      <option value="Uso como alimento para animales">
                        Uso como alimento para animales
                      </option>
                      <option value="Empresa recolectora de aseo">
                        Empresa recolectora de aseo
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >36. ¿De qué forma se hace la disposición de residuos no
                      orgánicos (envases de plástico, metal, vidrio, papel,
                      cartón, etc.) del PAE en esta sede educativa?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.disp_no_organicos"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="Lo tiran a un río, quebrada, caño, laguna, mar"
                      >
                        Lo tiran a un río, quebrada, caño, laguna, mar
                      </option>
                      <option value="Lo tiran a un patio, lote, sanja o baldío">
                        Lo tiran a un patio, lote, sanja o baldío
                      </option>
                      <option value="Lo queman">Lo queman</option>
                      <option value="Lo entierran">Lo entierran</option>
                      <option value="Lo reciclan">Lo reciclan</option>
                      <option value="Empresa recolectora de aseo">
                        Empresa recolectora de aseo
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >37. ¿Realizan algún tipo de clasificación de residuos
                      sólidos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.clasi_residuos"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 9 -->
              <div v-show="currentStep === 9" ref="step9">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >38. ¿Cuántas neveras tiene?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_neveras"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >39. ¿Cuántas de esas funcionan?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.func_neveras"
                      min="0"
                      :max="form.cant_neveras"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >40. ¿Cuál de los siguientes tamaños corresponde a la
                      mayoría de las neveras que funcionan?:</label
                    >
                    <select
                      class="form-select"
                      v-model="form.tamano_neveras"
                      :disabled="
                        form.cant_neveras === 0 || form.func_neveras === 0
                      "
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No Aplica"
                        v-if="
                          form.cant_neveras === 0 || form.func_neveras === 0
                        "
                      >
                        No Aplica
                      </option>
                      <option value="Nevera domestica vertical Menor a 400 Lt">
                        Nevera domestica vertical Menor a 400 Lt
                      </option>
                      <option value="Nevera domestica vertical De 400 a 800 Lt">
                        Nevera domestica vertical De 400 a 800 Lt
                      </option>
                      <option
                        value="Nevera domestica vertical De 1200 a 1600 Lt"
                      >
                        Nevera domestica vertical De 1200 a 1600 Lt
                      </option>
                      <option
                        value="Nevera domestica vertical De 1600 a 2200 Lt"
                      >
                        Nevera domestica vertical De 1600 a 2200 Lt
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >41. ¿Cuántos congeladores tiene?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_conge"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >42. ¿Cuántos de estos funcionan?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.func_conge"
                      min="0"
                      :max="form.cant_conge"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >43. ¿Cuál de los siguientes tamaños corresponde a la
                      mayoría de los congeladores que funcionan:</label
                    >
                    <select
                      class="form-select"
                      v-model="form.tamano_conge"
                      :disabled="form.func_conge === 0 || form.cant_conge === 0"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option
                        value="No Aplica"
                        v-if="form.func_conge === 0 || form.cant_conge === 0"
                      >
                        No Aplica
                      </option>
                      <option value="Congelador pequeño menor a 400 Lt">
                        Congelador pequeño menor a 400 Lt
                      </option>
                      <option value="Congelador mediano de 400 a 800 Lt">
                        Congelador mediano de 400 a 800 Lt
                      </option>
                      <option value="Congelador grande de 1400 a 1600 Lt">
                        Congelador grande de 1400 a 1600 Lt
                      </option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >44. ¿Almacena los alimentos en tarimas o estibas de tal
                      forma que se encuentren elevados del suelo?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.almacena_estibas"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label"
                      >45. ¿Qué elementos utiliza para el almacenamiento de los
                      alimentos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.elementos_alm"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Estante(s)">Estante(s)</option>
                      <option value="Canastilla(s)">Canastilla(s)</option>
                      <option value="Balde(s)">Balde(s)</option>
                      <option value="Caja(s)">Caja(s)</option>
                      <option value="Ninguno">Ninguno</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 10 -->
              <div v-show="currentStep === 10" ref="step10">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >46. ¿Cuántas básculas o pesos tiene (funcionales)?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_bas"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >47. ¿Cuánta es la capacidad de la báscula o el
                      peso?:</label
                    >
                    <input
                      :type="form.cant_bas === 0 ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.cap_bas"
                      min="0"
                      :disabled="form.cant_bas === 0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >48. Unidad de medida del peso o de la báscula:</label
                    >
                    <select
                      class="form-select"
                      v-model="form.uni_bas"
                      :disabled="form.cant_bas === 0"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="No aplica" v-if="form.cant_bas === 0">
                        No aplica
                      </option>
                      <option value="Kg">Kg</option>
                      <option value="Gr">Gr</option>
                      <option value="Oz">Oz</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3 align-items-end">
                  <div class="col-md-3">
                    <label class="form-label"
                      >49. ¿La sede cuenta con termómetro funcionando exclusivo
                      para el PAE?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.term_fun"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="SI">SI</option>
                      <option value="NO">NO</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >50. ¿La sede cuenta con ollas a presión exclusivas para
                      el uso del PAE?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.ollas_pre"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="SI">SI</option>
                      <option value="NO">NO</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >51. ¿Las ollas a presión son de 4 Lt o 6 Lt?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.cap_ollas_pre"
                      :disabled="form.ollas_pre === 'NO'"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="No Aplica" v-if="form.ollas_pre === 'NO'">
                        No Aplica
                      </option>
                      <option value="4 Lt">4 Lt</option>
                      <option value="6 Lt">6 Lt</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >52. ¿Cuántas de estas ollas a presión funcionan?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.ollas_pre_fun"
                      min="0"
                      :disabled="form.ollas_pre === 'NO'"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >53. Cantidad de Ralladores en buen estado:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_ral"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >54. Cantidad de exprimidores en buen estado:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_exp"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >55. Cantidad de Tablas de Picar en buen estado (No de
                      madera):</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_tab_pic"
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >56. ¿Cuántas estufas tiene?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_estufas"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >57. ¿Cuántos quemadores o fogones tienen en total sus
                      estufas?</label
                    >
                    <input
                      :type="form.cant_estufas === 0 ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.total_quemadores"
                      min="0"
                      :disabled="form.cant_estufas === 0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >58. ¿Cuántos de estos quemadores funcionan
                      correctamente?</label
                    >
                    <input
                      :type="form.cant_estufas === 0 ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.quemadores_fun"
                      min="0"
                      :disabled="form.cant_estufas === 0"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >59. ¿Cuántas licuadoras tiene?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_lic"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >60. ¿Cuántas de estas licuadoras funcionan?</label
                    >
                    <input
                      :type="form.cant_lic === 0 ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.lic_fun"
                      min="0"
                      :disabled="form.cant_lic === 0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >61. ¿Cuántas de las licuadoras que funcionan son
                      industriales?</label
                    >
                    <input
                      :type="form.cant_lic === 0 ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.lic_ind"
                      min="0"
                      :disabled="form.cant_lic === 0"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-3">
                    <label class="form-label"
                      >62. ¿La sede cuenta con ollas, olletas o pailas
                      exclusivas para el PAE?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.ollas_exc"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >63. ¿Cuántas ollas u olletas presentan buena vida
                      útil?</label
                    >
                    <input
                      :type="form.ollas_exc === 'No' ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.ollas_util"
                      min="0"
                      :disabled="form.ollas_exc === 'No'"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >64. ¿Cuántas pailas presentan buena vida útil?</label
                    >
                    <input
                      :type="form.ollas_exc === 'No' ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.pailas_util"
                      min="0"
                      :disabled="form.ollas_exc === 'No'"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >65. ¿Cuántos calderos presentan buena vida útil?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.calderos_util"
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >66. ¿Qué tamaño son los calderos arroceros?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.tam_calderos"
                      :disabled="form.calderos_util === 0"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="No aplica" v-if="form.calderos_util === 0">
                        No aplica
                      </option>
                      <option value="Pequeño">Pequeño</option>
                      <option value="Mediano">Mediano</option>
                      <option value="Grande">Grande</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >67. ¿La sede cuenta con cuchillos exclusivos para el uso
                      del PAE?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.cuch_exc"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >68. ¿Cuántos cuchillos presentan buena vida útil?</label
                    >
                    <input
                      :type="form.cuch_exc === 'No' ? 'text' : 'number'"
                      class="form-control"
                      v-model.number="form.cuch_util"
                      min="0"
                      :disabled="form.cuch_exc === 'No'"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label"
                      >69. ¿La sede cuenta con cucharones y cucharas de servir
                      exclusivas para el uso del PAE?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.cuchara_serv"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 11 -->
              <div v-show="currentStep === 11" ref="step11">
                <div class="row mb-3">
                  <div class="col-md-3">
                    <label class="form-label"
                      >70. De los niños que reciben PAE ¿Cuántos niños caben
                      sentados al tiempo?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.cap_ninos"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Todos (100%)">Todos (100%)</option>
                      <option value="Un poco mas de la mitad (75%)">
                        Un poco mas de la mitad (75%)
                      </option>
                      <option value="La mitad (50%)">La mitad (50%)</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >71. ¿De cuántos platos dispone para el consumo de
                      alimentos?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cant_platos"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >72. ¿Cuántos de estos platos son llanos y se encuentran
                      en buen estado?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.pla_lla"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >73. ¿Cuántos de estos platos son hondos y se encuentran
                      en buen estado?</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.pla_hon"
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-3">
                    <label class="form-label"
                      >74. ¿Con cuántos portas en buen estado cuentan para el
                      consumo de alimentos?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.portas"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >75. ¿De cuántos pocillos o vasos dispone para el consumo
                      de alimentos en buen estado?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.vasos"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >76. ¿De cuántas cucharas dispone para el consumo de
                      alimentos?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.cucharas"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label class="form-label"
                      >77. ¿De cuántos tenedores dispone para el consumo de
                      alimentos?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.tenedores"
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
              <!-- STEP 12 -->
              <div v-show="currentStep === 12" ref="step12">
                <div class="row mb-3">
                  <div class="col-md-4">
                    <label class="form-label"
                      >78. ¿Cuántos recipientes de material sanitario (canecas)
                      con tapa y bolsa plástica tiene la sede?:</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      v-model.number="form.recip_sani"
                      min="0"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >79. ¿Tiene batería sanitaria (tazas o inodoros)
                      exclusivos para personal manipulador de alimentos?</label
                    >
                    <select
                      class="form-select"
                      v-model="form.banos_exc"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label"
                      >80. ¿Tiene lavamanos exclusivos para personal manipulador
                      de alimentos?</label
                    >
                    <select class="form-select" v-model="form.lav_exc" required>
                      <option value="" disabled>Seleccione...</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 13 -->
              <div v-show="currentStep === 13" ref="step13">
                <div class="row mb-3">
                  <div class="col-md-12">
                    <label class="form-label">Conclusión del diagnostico</label>
                    <p>
                      De acuerdo al analisis del estado de las condiciones de
                      infraestruuta, servicios publicos, dotacion y
                      accesibilidad identificada en el presente diagnostico. Se
                      detemina que el MODELO DE ATENCION PAE a implementar en
                      esta SEDE EDUCATIVA es:
                    </p>
                    <select
                      class="form-select"
                      v-model="form.modelo_implementar"
                      required
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="PAE para pueblos indigenas">
                        PAE para pueblos indigenas
                      </option>
                      <option value="PAE convencional">PAE convencional</option>
                      <option
                        value="PAE para sedes educativas en zonas rurales de dificil acceso"
                      >
                        PAE para sedes educativas en zonas rurales de dificil
                        acceso
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- STEP 14 -->
              <div v-if="currentStep === 14" ref="step14">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <h4>Firma equipo PAE / Apoyo a la supervisión</h4>
                    <div>
                      <SignaturePad
                        idFirma="firma1"
                        :varFirma="form.firma1"
                        @firmas-updated="actualizarFirmas"
                      />
                    </div>
                    <div>
                      <label class="form-label">Nombre:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nombreEquioPAE"
                        v-model="form.nombre_apoyo"
                        required
                      />
                    </div>
                    <div>
                      <label class="form-label">Documento:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.cedula_apoyo"
                        required
                      />
                    </div>
                    <div>
                      <label class="form-label">Cargo:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.cargo_apoyo"
                        required
                      />
                    </div>
                    <div>
                      <label class="form-label">Teléfono:</label>
                      <input
                        type="tel"
                        class="form-control"
                        v-model="form.telefono_apoyo"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h4>Firma quien atiende la visita</h4>
                    <div>
                      <SignaturePad
                        idFirma="firma2"
                        :varFirma="form.firma2"
                        @firmas-updated="actualizarFirmas"
                      />
                    </div>
                    <div>
                      <label class="form-label">Nombre:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.nombre_atiende"
                        required
                      />
                    </div>
                    <div>
                      <label class="form-label">Documento:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.cedula_atiende"
                        required
                      />
                    </div>
                    <div>
                      <label class="form-label">Cargo:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.cargo_atiende"
                        required
                      />
                    </div>
                    <div>
                      <label class="form-label">Teléfono:</label>
                      <input
                        type="tel"
                        class="form-control"
                        v-model="form.telefono_atiende"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!-- Componente de carga de archivos -->
                <FileUploader
                  :files="form.files"
                  :required-docs="requiredDocs"
                  @files-updated="updateFiles"
                />
              </div>

              <!-- Botones de Navegación del Wizard -->
              <div class="d-flex justify-content-between mt-4 border-top pt-4">
                <button
                  type="button"
                  class="btn btn-secondary px-4 py-2"
                  @click="prevStep"
                  :disabled="currentStep === 0"
                >
                  <i class="fas fa-chevron-left me-2"></i> Atrás
                </button>
                <button
                  type="button"
                  class="btn btn-primary px-4 py-2"
                  @click="nextStep"
                  v-if="currentStep < steps.length - 1"
                >
                  Siguiente <i class="fas fa-chevron-right ms-2"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-success px-4 py-2"
                  @click="submitWizard"
                  v-if="currentStep === steps.length - 1"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading"
                    ><i class="fas fa-spinner fa-spin me-2"></i>
                    Guardando...</span
                  >
                  <span v-else
                    ><i class="fas fa-save me-2"></i> Guardar Diagnóstico</span
                  >
                </button>
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
import MunicipioSelect from "@/components/MunicipioSelect.vue";
import InstitucionSelect from "@/components/InstitucionSelect.vue";
import SedeSelect from "@/components/SedeSelect.vue";
import SignaturePad from "@/components/SignaturePad.vue";
import FileUploader from "@/components/FileUploader.vue";

export default {
  name: "FormDiagnostico",
  components: {
    LoadingSpinner,
    ToastNotification,
    MunicipioSelect,
    InstitucionSelect,
    SedeSelect,
    SignaturePad,
    FileUploader,
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        {
          category: "CONDICIONES GENERALES DE LA OPERACIÓN",
          subcategory: "Identificación de Sede",
        },
        {
          category: "CONDICIONES GENERALES DE LA OPERACIÓN",
          subcategory: "Operación Actual",
        },
        { category: "UBICACIÓN Y ACCESO", subcategory: "Ubicación de la sede" },
        {
          category: "UBICACIÓN Y ACCESO",
          subcategory: "Dificultad de acceso por conflicto",
        },
        {
          category: "CONDICIONES DE INFRAESTRUCTURA",
          subcategory: "Almacenamiento",
        },
        {
          category: "CONDICIONES DE INFRAESTRUCTURA",
          subcategory: "Preparación (Cocina)",
        },
        {
          category: "CONDICIONES DE INFRAESTRUCTURA",
          subcategory: "Consumo (Comedor)",
        },
        {
          category: "CONDICIONES DE INFRAESTRUCTURA",
          subcategory: "Disposición de residuos y Áreas sanitarias",
        },
        { category: "ACCESO Y CALIDAD DE SERVICIOS PÚBLICOS", subcategory: "" },
        {
          category: "DOTACIÓN DE EQUIPOS Y MENAJE",
          subcategory: "Equipos de Almacenamiento",
        },
        {
          category: "DOTACIÓN DE EQUIPOS Y MENAJE",
          subcategory: "Equipos de Preparación",
        },
        {
          category: "DOTACIÓN DE EQUIPOS Y MENAJE",
          subcategory: "Menaje de Consumo",
        },
        {
          category: "DOTACIÓN DE EQUIPOS Y MENAJE",
          subcategory: "Higiene y Sanidad",
        },
        { category: "CONCLUSIÓN DEL DIAGNÓSTICO", subcategory: "" },
        { category: "FIRMAS Y ARCHIVOS", subcategory: "" },
      ],
      isLoading: false,
      toastMessage: "",
      toastType: "",
      form: {
        etc: "Norte de Santander",
        municipio: "",
        institucion: "",
        sede: "",
        fecha_visita: "",
        hora_visita: "",
        zona_geografica: "",
        modelo_atencion: "",
        tipo_complemento: "",
        modalidad_atencion: "",
        ind_area_comedor: "",
        ind_area_produccion: "",
        ind_agua_potable: "",
        cerca_contaminacion: "",
        zona_conflicto: "",
        frecuencia_conflicto: "",
        esp_almacenamiento: "",
        mat_techo_alm: "",
        mat_piso_alm: "",
        mat_paredes_alm: "",
        est_almacenamiento: "",
        esp_preparacion: "",
        mat_techo_prep: "",
        mat_piso_prep: "",
        mat_paredes_prep: "",
        est_preparacion: "",
        esp_consumo: "",
        est_consumo: "",
        area_residuos: "",
        banos_manipuladores: "",
        electricidad: "",
        acceso_agua: "",
        fuente_agua: "",
        alcantarillado: "",
        combustible: "",
        espacio_gas: "",
        recoleccion_basura: "",
        disp_organicos: "",
        disp_no_organicos: "",
        clasi_residuos: "",
        cant_neveras: "",
        func_neveras: "",
        tamano_neveras: "",
        cant_conge: "",
        func_conge: "",
        tamano_conge: "",
        almacena_estibas: "",
        elementos_alm: "",
        cant_bas: "",
        cap_bas: "",
        uni_bas: "",
        term_fun: "",
        ollas_pre: "",
        cap_ollas_pre: "",
        ollas_pre_fun: "",
        cant_ral: "",
        cant_exp: "",
        cant_tab_pic: "",
        cant_estufas: "",
        total_quemadores: "",
        quemadores_fun: "",
        cant_lic: "",
        lic_fun: "",
        lic_ind: "",
        ollas_exc: "",
        ollas_util: "",
        pailas_util: "",
        calderos_util: "",
        tam_calderos: "",
        cuch_exc: "",
        cuch_util: "",
        cuchara_serv: "",
        cap_ninos: "",
        cant_platos: "",
        pla_lla: "",
        pla_hon: "",
        portas: "",
        vasos: "",
        cucharas: "",
        tenedores: "",
        recip_sani: "",
        banos_exc: "",
        lav_exc: "",
        modelo_implementar: "",
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
    };
  },
  computed: {
    currentStepData() {
      return this.steps[this.currentStep];
    },
    isIndustrializada() {
      return this.form.modalidad_atencion === "Industrializada";
    },
    requiredDocs() {
      const reqs = [];

      if (this.form.sede != "") reqs.push("Foto de la sede");

      if (this.form.modalidad_atencion === "Preparada en sitio") {
        reqs.push("Foto del comedor");
      }

      if (this.form.func_neveras >= 1) reqs.push("Foto de la nevera");
      if (this.form.func_conge >= 1) reqs.push("Foto del congelador");
      if (this.form.cant_bas >= 1) reqs.push("Foto de la báscula");
      if (this.form.ollas_pre === "SI" && this.form.cap_ollas_pre >= 1)
        reqs.push("Foto de la ollas de presion");
      if (this.form.cant_ral >= 1) reqs.push("Foto rallador");
      if (this.form.cant_tab_pic >= 1) reqs.push("Foto tabla de picar");
      if (this.form.cant_estufas >= 1) reqs.push("Foto de estufa");
      if (
        this.form.cant_lic >= 1 &&
        (this.form.lic_fun >= 1 || this.form.lic_ind >= 1)
      )
        reqs.push("Foto licuadora");
      if (this.form.ollas_util >= 1) reqs.push("Foto ollas");
      if (this.form.pailas_util >= 1) reqs.push("Foto pailas");
      if (this.form.calderos_util >= 1) reqs.push("Foto calderos");
      if (this.form.cuch_util >= 1) reqs.push("Foto de cuchillos");
      if (this.form.cuchara_serv === "Sí")
        reqs.push("Foto de cucharas de servir");
      if (this.form.pla_lla >= 1) reqs.push("Foto platos llanos");
      if (this.form.pla_hon >= 1) reqs.push("Foto platos hondos");
      if (this.form.portas >= 1) reqs.push("Foto de portas");
      if (this.form.vasos >= 1) reqs.push("Foto pocillos/vasos");
      if (this.form.cucharas >= 1) reqs.push("Foto de cucharas");

      return reqs;
    },
  },
  watch: {
    "form.esp_almacenamiento"(val) {
      if (val === "No") {
        this.form.mat_techo_alm = "No aplica";
        this.form.mat_piso_alm = "No aplica";
        this.form.mat_paredes_alm = "No aplica";
        this.form.est_almacenamiento = "No aplica";
      } else {
        if (this.form.mat_techo_alm === "No aplica")
          this.form.mat_techo_alm = "";
        if (this.form.mat_piso_alm === "No aplica") this.form.mat_piso_alm = "";
        if (this.form.mat_paredes_alm === "No aplica")
          this.form.mat_paredes_alm = "";
        if (this.form.est_almacenamiento === "No aplica")
          this.form.est_almacenamiento = "";
      }
    },
    "form.esp_preparacion"(val) {
      if (val === "No") {
        this.form.mat_techo_prep = "No aplica";
        this.form.mat_piso_prep = "No aplica";
        this.form.mat_paredes_prep = "No aplica";
        this.form.est_preparacion = "No aplica";
      } else {
        if (this.form.mat_techo_prep === "No aplica")
          this.form.mat_techo_prep = "";
        if (this.form.mat_piso_prep === "No aplica")
          this.form.mat_piso_prep = "";
        if (this.form.mat_paredes_prep === "No aplica")
          this.form.mat_paredes_prep = "";
        if (this.form.est_preparacion === "No aplica")
          this.form.est_preparacion = "";
      }
    },
    "form.cant_neveras"(val) {
      if (val === 0) {
        this.form.tamano_neveras = "No Aplica";
        this.form.func_neveras = 0;
      } else {
        if (this.form.tamano_neveras === "No Aplica")
          this.form.tamano_neveras = "";
      }
    },
    "form.cant_conge"(val) {
      if (val === 0) {
        this.form.tamano_conge = "No Aplica";
        this.form.func_conge = 0;
      } else {
        if (this.form.tamano_conge === "No Aplica") this.form.tamano_conge = "";
      }
    },
    "form.calderos_util"(val) {
      if (val === 0) {
        this.form.tam_calderos = "No aplica";
      } else {
        if (this.form.tam_calderos === "No aplica") this.form.tam_calderos = "";
      }
    },
    "form.modalidad_atencion"() {
      if (!this.isIndustrializada) {
        this.form.ind_area_comedor = "No aplica";
        this.form.ind_area_produccion = "No aplica";
        this.form.ind_agua_potable = "No aplica";
      } else {
        if (this.form.ind_area_comedor === "No aplica")
          this.form.ind_area_comedor = "";
        if (this.form.ind_area_produccion === "No aplica")
          this.form.ind_area_produccion = "";
        if (this.form.ind_agua_potable === "No aplica")
          this.form.ind_agua_potable = "";
      }
    },
    "form.zona_conflicto"(val) {
      if (val !== "Sí") {
        this.form.frecuencia_conflicto = "No aplica";
      } else {
        if (this.form.frecuencia_conflicto === "No aplica")
          this.form.frecuencia_conflicto = "";
      }
    },
    "form.ollas_pre"(val) {
      if (val === "NO") {
        this.form.cap_ollas_pre = "No Aplica";
        this.form.ollas_pre_fun = 0;
      } else if (this.form.cap_ollas_pre === "No Aplica") {
        this.form.cap_ollas_pre = "";
      }
    },
    "form.cant_estufas"(val) {
      if (val === 0) {
        this.form.total_quemadores = "No aplica";
        this.form.quemadores_fun = "No aplica";
      } else {
        if (this.form.total_quemadores === "No aplica")
          this.form.total_quemadores = "";
        if (this.form.quemadores_fun === "No aplica")
          this.form.quemadores_fun = "";
      }
    },
    "form.cant_bas"(val) {
      if (val === 0) {
        this.form.cap_bas = "No aplica";
        this.form.uni_bas = "No aplica";
      } else {
        if (this.form.cap_bas === "No aplica") this.form.cap_bas = "";
        if (this.form.uni_bas === "No aplica") this.form.uni_bas = "";
      }
    },
    "form.cant_lic"(val) {
      if (val === 0) {
        this.form.lic_fun = "No aplica";
        this.form.lic_ind = "No aplica";
      } else {
        if (this.form.lic_fun === "No aplica") this.form.lic_fun = "";
        if (this.form.lic_ind === "No aplica") this.form.lic_ind = "";
      }
    },
    "form.ollas_exc"(val) {
      if (val === "No") {
        this.form.ollas_util = "No aplica";
        this.form.pailas_util = "No aplica";
      } else {
        if (this.form.ollas_util === "No aplica") this.form.ollas_util = "";
        if (this.form.pailas_util === "No aplica") this.form.pailas_util = "";
      }
    },
    "form.cuch_exc"(val) {
      if (val === "No") {
        this.form.cuch_util = "No aplica";
      } else {
        if (this.form.cuch_util === "No aplica") this.form.cuch_util = "";
      }
    },
  },
  methods: {
    validateStep() {
      let isValid = true;
      const stepContainer = this.$refs[`step${this.currentStep}`];
      if (stepContainer) {
        const inputs = stepContainer.querySelectorAll(
          "input, select, textarea"
        );
        for (let input of inputs) {
          if (!input.checkValidity()) {
            input.reportValidity(); // Show native tooltip
            isValid = false;
            break; // Show one at a time to not overwhelm
          }
        }
      }
      return isValid;
    },
    nextStep() {
      if (this.validateStep()) {
        this.currentStep++;
        window.scrollTo(0, 0);
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        window.scrollTo(0, 0);
      }
    },
    submitWizard() {
      if (this.validateStep()) {
        this.guardarFormulario();
      }
    },
    updateFiles(files) {
      this.form.files = files;
    },
    actualizarFirmas({ idFirma, firma }) {
      this.form[idFirma] = firma;
    },
    showToast(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      setTimeout(() => {
        this.toastMessage = "";
      }, 4000);
    },
    async guardarFormulario() {
      this.isLoading = true;
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
      // validar archivos requeridos dinámicos
      const missingDocs = this.requiredDocs.filter(
        (doc) => !this.form.files.some((f) => f.nombre_archivo.startsWith(doc))
      );
      if (missingDocs.length > 0) {
        this.isLoading = false;
        this.showToast(
          `Faltan archivos obligatorios: ${missingDocs.join(", ")}`,
          "danger"
        );
        return;
      }
      if (
        this.form.nombre_apoyo == "" ||
        this.form.cedula_apoyo == "" ||
        this.form.telefono_apoyo == "" ||
        this.form.cargo_apoyo == "" ||
        this.form.nombre_atiende == "" ||
        this.form.cedula_atiende == "" ||
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
      if (
        this.form.municipio == "" ||
        this.form.institucion == "" ||
        this.form.sede == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Faltan datos de municipio, institucion o sede. Por favor, complete los campos.",
          "danger"
        );
        return;
      }
      if (navigator.onLine) {
        this.enviarFormularioAlServidor();
      } else {
        this.guardarOffline();
      }
    },
    getSanitizedForm() {
      const sanitized = { ...this.form };
      const numericFields = [
        "cap_bas",
        "total_quemadores",
        "quemadores_fun",
        "lic_fun",
        "lic_ind",
        "ollas_util",
        "pailas_util",
        "cuch_util",
      ];
      numericFields.forEach((field) => {
        if (sanitized[field] === "No aplica") {
          sanitized[field] = 0;
        }
      });
      return sanitized;
    },
    /**
     * Convierte un objeto File a Data URL (base64) usando FileReader.
     */
    fileToDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    /**
     * Guarda el formulario en localStorage para sincronizar después.
     * Los archivos se convierten a base64 porque los objetos File no son serializables.
     */
    async guardarOffline() {
      try {
        const sanitized = this.getSanitizedForm();

        // Convertir cada archivo a base64 para poder persistirlo en localStorage
        const filesConBase64 = await Promise.all(
          sanitized.files.map(async (fileObj) => ({
            nombre_archivo: fileObj.nombre_archivo,
            tipo: fileObj.tipo,
            // Si ya es un data URL (fue cargado desde localStorage), lo dejamos igual
            file:
              fileObj.file instanceof File
                ? await this.fileToDataURL(fileObj.file)
                : fileObj.file,
          }))
        );
        sanitized.files = filesConBase64;

        const guardados =
          JSON.parse(localStorage.getItem("formulariosOffline")) || [];
        guardados.push(sanitized);
        localStorage.setItem("formulariosOffline", JSON.stringify(guardados));

        this.showToast(
          `Formulario guardado sin conexión (${guardados.length} pendiente${
            guardados.length > 1 ? "s" : ""
          }). Se enviará automáticamente cuando haya internet.`,
          "warning"
        );
        this.resetForm();
      } catch (error) {
        console.error("[guardarOffline] Error:", error);
        this.showToast("Error al guardar el formulario offline.", "danger");
      } finally {
        this.isLoading = false;
      }
    },
    async enviarFormularioAlServidor() {
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;

        const formData = new FormData();
        const sanitizedForm = this.getSanitizedForm();
        Object.keys(sanitizedForm).forEach((key) => {
          if (key !== "files") {
            formData.append(key, sanitizedForm[key]);
          }
        });

        this.form.files.forEach((fileObj, index) => {
          formData.append(`files[${index}]`, fileObj.file);
        });

        const response = await axios.post(`${apiUrl}/diagnostico`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 201) {
          this.showToast("Diagnóstico guardado exitosamente", "success");
          this.resetForm();
        }
      } catch (error) {
        console.error("Error submitting format:", error);
        this.showToast("Error al guardar el diagnóstico", "danger");
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      Object.keys(this.form).forEach((key) => {
        if (key === "files") {
          this.form[key] = [];
        } else {
          this.form[key] = "";
        }
      });
    },
  },
};
</script>

<style scoped>
.card-header {
  border-bottom: 2px solid #f8b425;
}
.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}
</style>
