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
        <form @submit.prevent="guardarFormulario">
          <!-- CATEGORÍA: CONDICIONES GENERALES DE LA OPERACIÓN -->
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">
                CATEGORÍA: CONDICIONES GENERALES DE LA OPERACIÓN
              </h5>
            </div>
            <div class="card-body">
              <h6 class="text-primary border-bottom pb-2">
                Subcategoría: Identificación de Sede
              </h6>
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
              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Operación Actual
              </h6>
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
                    <option
                      value="PAE para sedes en zonas rurales de difícil acceso"
                    >
                      PAE para sedes en zonas rurales de difícil acceso
                    </option>
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
                    <option value="Complemento mañana/tarde (CAJM/JT)">
                      Complemento mañana/tarde (CAJM/JT)
                    </option>
                    <option value="Almuerzo">Almuerzo</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label"
                    >7. Modalidades de Atención del Servicio:</label
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
                    <option value="Preparada en sitio y Caliente transportada">
                      Preparada en sitio y Caliente transportada
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
                    >8. Si es industrializada, ¿tiene área para comedor?</label
                  >
                  <select
                    class="form-select"
                    v-model="form.ind_area_comedor"
                    :disabled="!isIndustrializada"
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >9. Si es industrializada, ¿tiene área para producción
                    (cocina)?</label
                  >
                  <select
                    class="form-select"
                    v-model="form.ind_area_produccion"
                    :disabled="!isIndustrializada"
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >10. Si es industrializada, ¿tiene acceso a agua
                    potable?</label
                  >
                  <select
                    class="form-select"
                    v-model="form.ind_agua_potable"
                    :disabled="!isIndustrializada"
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- CATEGORÍA: UBICACIÓN Y ACCESO -->
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">CATEGORÍA: UBICACIÓN Y ACCESO</h5>
            </div>
            <div class="card-body">
              <h6 class="text-primary border-bottom pb-2">
                Subcategoría: Ubicación de la sede
              </h6>
              <div class="row mb-3">
                <div class="col-md-12">
                  <label class="form-label"
                    >11. ¿Está cerca de fuentes de contaminación?</label
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

              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Dificultad de acceso por conflicto
              </h6>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label"
                    >12. ¿Ubicada en zona de conflicto armado?</label
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
                    >13. ¿Con qué frecuencia el conflicto afecta la
                    entrega?</label
                  >
                  <select
                    class="form-select"
                    v-model="form.frecuencia_conflicto"
                    :disabled="form.zona_conflicto !== 'Sí'"
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Muy frecuente">Muy frecuente</option>
                    <option value="Algo frecuente">Algo frecuente</option>
                    <option value="poco frecuente">Poco frecuente</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- CATEGORÍA: CONDICIONES DE INFRAESTRUCTURA -->
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">CATEGORÍA: CONDICIONES DE INFRAESTRUCTURA</h5>
            </div>
            <div class="card-body">
              <h6 class="text-primary border-bottom pb-2">
                Subcategoría: Almacenamiento
              </h6>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label"
                    >14. ¿Tiene espacio dedicado al almacenamiento?</label
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
                    >15. Material predominante del techo:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.mat_techo_alm"
                    :disabled="form.esp_almacenamiento === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Techo de concreto">Techo de concreto</option>
                    <option value="Techos de metal o acero">
                      Techos de metal o acero
                    </option>
                    <option value="Tejas de barro">Tejas de barro</option>
                    <option value="Tejas de plástico">Tejas de plástico</option>
                    <option value="Techo de paja">Techo de paja</option>
                    <option value="Sin techo">Sin techo</option>
                    <option value="No Aplica">No Aplica</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >16. Material predominante del piso:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.mat_piso_alm"
                    :disabled="form.esp_almacenamiento === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Baldosa">Baldosa</option>
                    <option value="Ladrillo">Ladrillo</option>
                    <option value="Cemento/gravilla">Cemento/gravilla</option>
                    <option value="Madera">Madera</option>
                    <option value="Tierra/arena">Tierra/arena</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label"
                    >17. Material predominante de las paredes:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.mat_paredes_alm"
                    :disabled="form.esp_almacenamiento === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Bloque/ladrillo">Bloque/ladrillo</option>
                    <option value="bahareque/madera">Bahareque/madera</option>
                    <option value="Material prefabricado">
                      Material prefabricado
                    </option>
                    <option value="Guadua/caña">Guadua/caña</option>
                    <option value="Sin paredes">Sin paredes</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label"
                    >18. Estado del espacio de almacenamiento:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.est_almacenamiento"
                    :disabled="form.esp_almacenamiento === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Regular">Regular</option>
                    <option value="Malo">Malo</option>
                  </select>
                </div>
              </div>

              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Preparación (Cocina)
              </h6>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label"
                    >19. ¿Tiene espacio dedicado a la preparación?</label
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
                    >20. Material predominante del techo:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.mat_techo_prep"
                    :disabled="form.esp_preparacion === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Concreto">Concreto</option>
                    <option value="Metal">Metal</option>
                    <option value="Barro">Barro</option>
                    <option value="Plástico">Plástico</option>
                    <option value="Paja">Paja</option>
                    <option value="Sin techo">Sin techo</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >21. Material predominante del piso:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.mat_piso_prep"
                    :disabled="form.esp_preparacion === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Baldosa">Baldosa</option>
                    <option value="Ladrillo">Ladrillo</option>
                    <option value="Cemento">Cemento</option>
                    <option value="Madera">Madera</option>
                    <option value="Tierra">Tierra</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label"
                    >22. Material predominante de las paredes:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.mat_paredes_prep"
                    :disabled="form.esp_preparacion === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Bloque">Bloque</option>
                    <option value="bahareque">Bahareque</option>
                    <option value="Prefabricado">Prefabricado</option>
                    <option value="Guadua">Guadua</option>
                    <option value="Sin paredes">Sin paredes</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label"
                    >23. Estado del espacio de preparación:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.est_preparacion"
                    :disabled="form.esp_preparacion === 'No'"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Regular">Regular</option>
                    <option value="Malo">Malo</option>
                  </select>
                </div>
              </div>

              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Consumo (Comedor)
              </h6>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label"
                    >24. ¿Cómo es el espacio de consumo?</label
                  >
                  <select
                    class="form-select"
                    v-model="form.esp_consumo"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Espacio sin techo">Espacio sin techo</option>
                    <option value="Espacio con techo compartido">
                      Espacio con techo compartido
                    </option>
                    <option value="Un salón de clase">Un salón de clase</option>
                    <option value="Espacio cerrado exclusivo">
                      Espacio cerrado exclusivo
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label"
                    >25. Estado del área de consumo:</label
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

              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Disposición de residuos y Áreas sanitarias
              </h6>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label"
                    >26. ¿Tiene área demarcada para residuos?</label
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
                    >27. ¿Baños exclusivos para manipuladores?</label
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
          </div>

          <!-- CATEGORÍA: ACCESO Y CALIDAD DE SERVICIOS PÚBLICOS -->
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">
                CATEGORÍA: ACCESO Y CALIDAD DE SERVICIOS PÚBLICOS
              </h5>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label"
                    >28. ¿Cuenta con electricidad?</label
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
                    >29. ¿Cuenta con acceso a agua?</label
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
                    >30. ¿De dónde obtiene el agua para el PAE?</label
                  >
                  <select
                    class="form-select"
                    v-model="form.fuente_agua"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Acueducto">Acueducto</option>
                    <option value="Agua en botella/bolsa">
                      Agua en botella/bolsa
                    </option>
                    <option value="Carrotanque">Carrotanque</option>
                    <option value="Pozo">Pozo</option>
                    <option value="Agua lluvia">Agua lluvia</option>
                    <option value="Cuerpos de agua (Ríos/quebradas)">
                      Cuerpos de agua (Ríos/quebradas)
                    </option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label"
                    >31. ¿Cuenta con alcantarillado?</label
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
                    >32. Combustible utilizado para preparación:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.combustible"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Gas natural/pipeta">
                      Gas natural/pipeta
                    </option>
                    <option value="Leña/madera">Leña/madera</option>
                    <option value="Petróleo/gasolina">Petróleo/gasolina</option>
                    <option value="Electricidad">Electricidad</option>
                    <option value="No Aplica">No Aplica</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >33. ¿Espacio adecuado para pipeta de gas?</label
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
                    >34. ¿Cuenta con recolección de basuras?</label
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
                    >35. Disposición de residuos orgánicos:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.disp_organicos"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Se tiran a río/quebrada">
                      Se tiran a río/quebrada
                    </option>
                    <option value="Patio/lote">Patio/lote</option>
                    <option value="Quema">Quema</option>
                    <option value="Entierro">Entierro</option>
                    <option value="Compost">Compost</option>
                    <option value="Alimento animales">Alimento animales</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >36. Disposición de residuos no orgánicos:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.disp_no_organicos"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Río/quebrada">Río/quebrada</option>
                    <option value="Patio/lote">Patio/lote</option>
                    <option value="Quema">Quema</option>
                    <option value="Entierro">Entierro</option>
                    <option value="Reciclaje">Reciclaje</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >37. ¿Realizan clasificación de residuos?</label
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
          </div>

          <!-- CATEGORÍA: DOTACIÓN DE EQUIPOS Y MENAJE -->
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">CATEGORÍA: DOTACIÓN DE EQUIPOS Y MENAJE</h5>
            </div>
            <div class="card-body">
              <h6 class="text-primary border-bottom pb-2">
                Subcategoría: Equipos de Almacenamiento
              </h6>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label">38. ¿Cuántas neveras tiene?:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.cant_neveras"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label">39. ¿Cuántas funcionan?:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.func_neveras"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >40. Tamaño de la mayoría de neveras:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.tamano_neveras"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="No Aplica" v-if="form.cant_neveras === 0">
                      No Aplica
                    </option>
                    <option value="Menor a 400 Lt">Menor a 400 Lt</option>
                    <option value="De 400 a 800 Lt">De 400 a 800 Lt</option>
                    <option value="De 1200 a 1600 Lt">De 1200 a 1600 Lt</option>
                    <option value="De 1600 a 2200 Lt">De 1600 a 2200 Lt</option>
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
                  <label class="form-label">42. ¿Cuántos funcionan?:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.func_conge"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >43. Tamaño de la mayoría de congeladores:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.tamano_conge"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option
                      value="No Aplica"
                      v-if="form.cant_neveras === 0 || form.cant_conge === 0"
                    >
                      No Aplica
                    </option>
                    <option value="Menor a 400 Lt">Menor a 400 Lt</option>
                    <option value="De 400 a 800 Lt">De 400 a 800 Lt</option>
                    <option value="De 1400 a 1600 Lt">De 1400 a 1600 Lt</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">44. ¿Almacena sobre estibas?</label>
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
                    >45. Elementos para almacenamiento:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.elementos_alm"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Estante">Estante</option>
                    <option value="Canastilla">Canastilla</option>
                    <option value="Balde">Balde</option>
                    <option value="Caja">Caja</option>
                    <option value="Ninguno">Ninguno</option>
                  </select>
                </div>
              </div>

              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Equipos de Preparación
              </h6>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label">46. ¿Cuántas básculas tiene?</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.cant_bas"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label">47. Capacidad de la báscula:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.cap_bas"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label">48. Unidad de medida:</label>
                  <select class="form-select" v-model="form.uni_bas" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="Kg">Kg</option>
                    <option value="Gr">Gr</option>
                    <option value="Oz">Oz</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3 align-items-end">
                <div class="col-md-3">
                  <label class="form-label"
                    >49. ¿Tiene termómetro funcionando?</label
                  >
                  <select class="form-select" v-model="form.term_fun" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >50. ¿Tiene ollas a presión exclusivas?</label
                  >
                  <select class="form-select" v-model="form.ollas_pre" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >51. Capacidad de ollas a presión:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.cap_ollas_pre"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="4 Lt">4 Lt</option>
                    <option value="6 Lt">6 Lt</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >52. ¿Cuántas ollas a presión funcionan?</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.ollas_pre_fun"
                    min="0"
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
                    >55. Cantidad de Tablas de Picar (No madera):</label
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
                  <label class="form-label">56. ¿Cuántas estufas tiene?</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.cant_estufas"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label">57. Total de quemadores:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.total_quemadores"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >58. Quemadores que funcionan correctamente:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.quemadores_fun"
                    min="0"
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
                    >60. Licuadoras que funcionan:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.lic_fun"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label">61. Licuadoras industriales:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.lic_ind"
                    min="0"
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3">
                  <label class="form-label"
                    >62. ¿Ollas/olletas/pailas exclusivas?</label
                  >
                  <select class="form-select" v-model="form.ollas_exc" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >63. Ollas con buena vida útil:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.ollas_util"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >64. Pailas con buena vida útil:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.pailas_util"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label class="form-label"
                    >65. Calderos con buena vida útil:</label
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
                    >66. Tamaño calderos arroceros:</label
                  >
                  <select
                    class="form-select"
                    v-model="form.tam_calderos"
                    required
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="Pequeño">Pequeño</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label">67. ¿Cuchillos exclusivos?</label>
                  <select class="form-select" v-model="form.cuch_exc" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >68. Cuchillos con buena vida útil:</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.cuch_util"
                    min="0"
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label"
                    >69. ¿Cucharones/cucharas de servir exclusivas?</label
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

              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Menaje de Consumo
              </h6>
              <div class="row mb-3">
                <div class="col-md-3">
                  <label class="form-label"
                    >70. Capacidad de niños sentados al tiempo:</label
                  >
                  <select class="form-select" v-model="form.cap_ninos" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="Todos (100%)">Todos (100%)</option>
                    <option value="75%">75%</option>
                    <option value="50%">50%</option>
                    <option value="25%">25%</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label">71. ¿Cuántos platos dispone?</label>
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
                    >72. Platos llanos en buen estado:</label
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
                    >73. Platos hondos en buen estado:</label
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
                  <label class="form-label">74. Portas en buen estado:</label>
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
                    >75. Pocillos/vasos en buen estado:</label
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
                  <label class="form-label">76. Cantidad de cucharas:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.cucharas"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-3">
                  <label class="form-label">77. Cantidad de tenedores:</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="form.tenedores"
                    min="0"
                    required
                  />
                </div>
              </div>

              <h6 class="text-primary border-bottom pb-2 mt-4">
                Subcategoría: Higiene y Sanidad
              </h6>
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label"
                    >78. Recipientes sanitarios (canecas con tapa):</label
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
                    >79. ¿Baños exclusivos para personal?</label
                  >
                  <select class="form-select" v-model="form.banos_exc" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label"
                    >80. ¿Lavamanos exclusivos para personal?</label
                  >
                  <select class="form-select" v-model="form.lav_exc" required>
                    <option value="" disabled>Seleccione...</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- CATEGORÍA: CONCLUSIÓN DEL DIAGNÓSTICO -->
          <div class="card mb-4">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">CATEGORÍA: CONCLUSIÓN DEL DIAGNÓSTICO</h5>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-12">
                  <label class="form-label"
                    >MODELO DE ATENCIÓN PAE a implementar:</label
                  >
                  <textarea
                    class="form-control"
                    rows="4"
                    v-model="form.modelo_implementar"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Signatures -->
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
          <FileUploader :files="form.files" @files-updated="updateFiles" />
          <button type="submit" class="btn btn-primary btn-lg mt-3 w-100">
            Guardar Diagnóstico
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
    isIndustrializada() {
      return (
        this.form.modalidad_atencion === "Industrializada" ||
        this.form.modalidad_atencion ===
          "Preparada en sitio e Industrializada" ||
        this.form.modalidad_atencion ===
          "Caliente Transportada e Industrializada"
      );
    },
  },
  watch: {
    "form.esp_almacenamiento"(val) {
      if (val === "No") {
        this.form.mat_techo_alm = "";
        this.form.mat_piso_alm = "";
        this.form.mat_paredes_alm = "";
        this.form.est_almacenamiento = "";
      }
    },
    "form.esp_preparacion"(val) {
      if (val === "No") {
        this.form.mat_techo_prep = "";
        this.form.mat_piso_prep = "";
        this.form.mat_paredes_prep = "";
        this.form.est_preparacion = "";
      }
    },
    "form.cant_neveras"(val) {
      if (val === 0) {
        this.form.tamano_neveras = "No Aplica";
        this.form.tamano_conge = "No Aplica";
      } else {
        if (this.form.tamano_neveras === "No Aplica")
          this.form.tamano_neveras = "";
        if (this.form.tamano_conge === "No Aplica") this.form.tamano_conge = "";
      }
    },
    "form.cant_conge"(val) {
      if (val === 0) {
        this.form.tamano_conge = "No Aplica";
      } else if (
        this.form.tamano_conge === "No Aplica" &&
        this.form.cant_neveras !== 0
      ) {
        this.form.tamano_conge = "";
      }
    },
    isIndustrializada(val) {
      if (!val) {
        this.form.ind_area_comedor = "";
        this.form.ind_area_produccion = "";
        this.form.ind_agua_potable = "";
      }
    },
    "form.zona_conflicto"(val) {
      if (val !== "Sí") {
        this.form.frecuencia_conflicto = "";
      }
    },
  },
  methods: {
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
    guardarOffline() {
      const guardados =
        JSON.parse(localStorage.getItem("formulariosOffline")) || [];
      guardados.push(this.form);
      localStorage.setItem("formulariosOffline", JSON.stringify(guardados));
      this.resetForm();
      this.isLoading = false;
    },
    async enviarFormularioAlServidor() {
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;

        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          if (key !== "files") {
            formData.append(key, this.form[key]);
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
