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
                VERIFICACIÓN TÉCNICA A ETAPA OPERATIVA BODEGA DE ALMACENAMIENTO
                Y MODALIDADES PS, CCT Y I
              </li>
            </ol>
          </nav>
          <h2>
            VERIFICACIÓN TÉCNICA A ETAPA OPERATIVA BODEGA DE ALMACENAMIENTO Y
            MODALIDADES PS, CCT Y I
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <label class="form-label">ETC </label>
              <input
                class="form-control"
                type="text"
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <label class="form-label">Minicipio </label>
              <MunicipioSelect v-model="form.municipio" />
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <label class="form-label">Operador </label>
              <input
                class="form-control"
                type="text"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <label class="form-label">N° contrato </label>
              <input
                class="form-control"
                type="text"
                v-model="form.contrato"
                required
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <label class="form-label">Dirección </label>
              <input
                class="form-control"
                type="text"
                v-model="form.direccion"
                required
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <label class="form-label">Telefono / Correo </label>
              <input
                class="form-control"
                type="text"
                v-model="form.correo"
                required
              />
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Fecha inicio de visita </label>
              <input
                class="form-control"
                type="date"
                v-model="form.fecha_visita"
                required
              />
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora inicio</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_inicio"
                required
              />
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora de terminación</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_fin"
                required
              />
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Fecha inicio de visita </label>
              <input
                class="form-control"
                type="date"
                v-model="form.fecha_visita2"
                required
              />
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora inicio</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_inicio2"
                required
              />
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora de terminación</label>
              <input
                class="form-control"
                type="time"
                v-model="form.hora_fin2"
                required
              />
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
              <label class="form-label">Número de visita </label>
              <select class="form-select" v-model="form.num_visita" required>
                <option value="1ra">1ra</option>
                <option value="2da">2da</option>
                <option value="3ra">3ra</option>
              </select>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mb-1">
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
              <h5>
                I. CONDICIONES SANITARIAS DE LAS INSTALACIONES DE LA BODEGA DE
                ALMACENAMIENTO
              </h5>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >1. Los pisos, paredes y techos se encuentran limpios y se
                  realiza mantenimiento para garantizar condiciones higienico
                  sanitarias.</label
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
                  >2. No se permite la presencia de animales en la
                  bodega.</label
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
                  >3. El manejo de los residuos líquidos dentro del
                  establecimiento se realiza de manera que impide la
                  contaminación de los alimentos o de las superficies de
                  potencial contacto con éste.</label
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
                  >4. Los servicios sanitarios son los adecuados, están limpios
                  y cuentan con los elementos requeridos para la higiene
                  personal tales como papel higiénico, jabón líquido
                  antibacterial, toallas de papel, implementos desechables o
                  equipos automáticos para el secado de manos y
                  papeleras.</label
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
                  >5. En las proximidades de los lavamanos se ubican avisos o
                  advertencias al personal sobre la necesidad de lavarse las
                  manos luego de usar los servicios sanitarios, después de
                  cualquier cambio de actividad y antes de iniciar labores de
                  producción.</label
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
              <hr />
              <h5>II. PERSONAL MANIPULADOR DE BODEGA</h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >6. El personal manipulador de bodega, utiliza la dotación
                  completa (vestimenta, calzado cerrado, gorro, tapabocas,
                  delantal) en buen estado, de color claro y cumple con las
                  especificaciones de la normatividad legal vigente.</label
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
                  >7. La presentación personal de los manipuladores es adecuada
                  (uñas cortas, limpias y sin esmalte, cabello recogido, sin uso
                  de joyas, accesorios y portan el uniforme limpio.)</label
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
                  >8. El personal ajeno a la bodega ingresa con la debida
                  dotación (tapabocas, cofia y bata).</label
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
              <hr />
              <h5>
                III. REQUISITOS HIGIÉNICOS DE ALMACENAMIENTO DE LOS ALIMENTOS EN
                LA BODEGA
              </h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >9. Los productos o alimentos que conforman las raciones de
                  acuerdo a la modalidad de atención, son conservados de acuerdo
                  a las caracteristicas y condiciones de cada producto
                  (refrigeración, congelación, ambiente), de manera que
                  garanticen su calidad, inocuidad y vida util.</label
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
                  >10. Los productos o alimentos se encuentran dentro de su vida
                  útil, con fecha de vencimiento vigente y son aptos para el
                  consumo.</label
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
                  >11.No se evidencia alimentos con algun tipo de contaminación
                  biológica, química, física o cruzada, o en condiciones de
                  riesgo de contaminación.</label
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
                  >12.Se evidencia estantes, anaqueles y estibas limpias,
                  fabricados de material resistente, no porosos y de fácil
                  limpieza y desinfección.</label
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
              <hr />
              <h5>IV. CONDICIONES DE ALMACENAMIENTO DE LOS ALIMENTOS</h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >13. El almacenamiento de los productos y materias primas que
                  requieren refrigeración o congelación, se realiza teniendo en
                  cuenta las condiciones de temperatura, humedad y circulación
                  del aire que requiere cada alimento.</label
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
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-1 mt-2">
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >14.El almacenamiento de los alimentos se realiza en
                  recipientes o superficies en buen estado, de material
                  sanitario, ordenadamente en pilas, estibas, canastillas,
                  estanteria, tarimas, canecas con tapa u otra forma de
                  almacenamiento, de manera que evite cualquier forma de
                  contaminación y garantice sus propiedades fisicas.</label
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
                  <input
                    class="form-control"
                    placeholder="observaciones"
                    type="text"
                    v-model="form.pre_14_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >15. El almacenamiento de los alimentos se realiza
                  ordenadamente en pilas o estibas con separación mínima de 60
                  centímetros con respecto a las paredes perimetrales, y se
                  dispone sobre paletas o tarimas elevadas del piso por lo menos
                  15 centímetros de manera que se permita la inspección,
                  limpieza y fumigación, si es el caso.</label
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
                  >16.Los alimentos se encuentran separados entre sí, según sus
                  caracteristicas, de manera que se evita la contaminación
                  cruzada.</label
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
                  >17.Los productos empleados para la limpieza y desinfección se
                  encuentran rotulados y se almacenan en un sitio protegido y
                  aislado de los alimentos.</label
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
                  >18.El almacenamiento y apilación de los alimentos, cumplen
                  con la altura y el número máximo indicado en el exterior de la
                  caja, evitando el deterioro o daño del envase y
                  embalaje.</label
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
                  >19.Los embalajes de los productos se almacenan en forma
                  cruzada o de traba para evitar el deslizamiento de los
                  mismos.</label
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
                  >20.Las cajas no sobrepasan el nivel del borde de la estiba,
                  del anaquel o estantería donde se encuentren
                  almacenadas.</label
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
                  >21.Existen espacios que permiten la adecuada limpieza y
                  desinfección del área de almacenamiento.</label
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
                  >22.Los alimentos están almacenados en su empaque secundario
                  original.</label
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
                  >23.El área de almacenamiento de los alimentos se encuentra
                  debidamente identificada.</label
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
                  >24.Los productos envasados, no poseen rupturas ni
                  abulladuras. (Si aplica)</label
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
                  >25.Los empaques de los alimentos no se encuentran
                  rotos.</label
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
                  >26.El rotulado del empaque de los alimentos cumple con las
                  especificaciones exigidas en la normatividad vigente
                  (Resolución 5109/2005).</label
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
                  >27.Los alimentos perecederos de alto riesgo en salud pública
                  y aquellos que por sus características, de acuerdo con la
                  información contenida en su rotulado, requieran condiciones
                  especiales de almacenamiento y manejo, se transportan en
                  refrigeración o congelación.</label
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
                  >28.Los alimentos perecederos de alto riesgo en salud pública
                  son almacenados bajo las condiciones exigidas y se encuentran
                  debidamente rotulados.</label
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
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >29. Las frutas y verduras almacenadas se encuentran sin daño
                  físico o deterioro</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_29" required>
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
                    v-model="form.pre_29_obs"
                  />
                </div>
              </div>
              <hr />
              <h5>V. EQUIPOS Y/O UTENSILIOS DE BODEGA</h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >30. Los equipos y/o utensilios están fabricados con
                  materiales resistentes al uso y a la corrosión.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_30" required>
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
                    v-model="form.pre_30_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >31. Los equipos y/o utensilios, son de acabado liso, no
                  poroso, no absorbente, libre de defectos y grietas, y permiten
                  unas adecuadas actividades de limpieza y desinfección.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_31" required>
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
                    v-model="form.pre_31_obs"
                  />
                </div>
              </div>
              <hr />
              <h5>VI. CONDICIONES DE TRANSPORTE DE LOS ALIMENTOS</h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >32. El transporte garantiza el mantenimiento de las
                  condiciones de conservación requeridas para el producto
                  alimenticio: refrigeración, congelación, recipientes o
                  canastillas de material sanitario con tapa, etc., y cumple con
                  la normatividad vigente. (si aplica)</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_32" required>
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
                    v-model="form.pre_32_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >33. Los vehículos se encuentran en adecuadas condiciones
                  sanitarias, de aseo y operación para el transporte de los
                  alimentos. (Si aplica)</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_33" required>
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
                    v-model="form.pre_33_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >34. los vehículos son utilizados exclusivamente para el
                  transporte de alimentos y llevan el aviso de transporte de
                  alimentos. (Si aplica)</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_34" required>
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
                    v-model="form.pre_34_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >35. El transportador y el auxiliar, cuentan con la vestimenta
                  adecuada, de acuerdo a la normatividad sanitaria vigente. (Si
                  aplica)</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_35" required>
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
                    v-model="form.pre_35_obs"
                  />
                </div>
              </div>
              <hr />
              <h5>
                VII. VERIFICACIÓN DOCUMENTAL / REGISTROS / SOPORTES DE OPERACIÓN
                BODEGA DE ALMACENAMIENTO
              </h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >36. Se implementa el programa de limpieza y desinfección en
                  areas y superficies utilizadas en la bodega, asi como en
                  equipos y utensilios, se evidencian registros de las
                  actividades realizadas.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_36" required>
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
                    v-model="form.pre_36_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >37. Se implementa el programa de manejo de residuos solidos,
                  de conformidad a los procedimientos descritos en el documento,
                  se evidencian registros de las actividades realizadas.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_37" required>
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
                    v-model="form.pre_37_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >38. Se Implementa el programa de monitoreo y calidad de agua
                  (existencia de tanques de almacenamiento, protección de los
                  mismos, limpieza y desinfección, registros, entre otros
                  aspectos).
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_38" required>
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
                    v-model="form.pre_38_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >39. No se evidencia presencia fisica, huellas, excremento o
                  daños a los empaques o alimentos causados por plagas, se
                  evidencian soportes y registros de control.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_39" required>
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
                    v-model="form.pre_39_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >40. Se cuenta con los soportes de capacitación continua,
                  dirigido al personal manipulador de alimentos de la bodega, en
                  cumplimiento al cronograma establecido en el respectivo
                  programa.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_40" required>
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
                    v-model="form.pre_40_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >41. Se evidencia hoja de vida de equipos y soportes de
                  mantenimiento preventivo y/o correctivo, de conformidad a los
                  procedimientos y cronogramas establecidos en el respectivo
                  programa.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_41" required>
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
                    v-model="form.pre_41_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >42. Se evidencia hoja de vida de los equipos e instrumentos
                  de medición, ademas de los soportes de calibración a los
                  mismos, de conformidad al cronograma establecido en el
                  respectivo programa.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_42" required>
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
                    v-model="form.pre_42_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >43. Se cuenta con la lista e información correspondiente de
                  los proveedores de alimentos.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_43" required>
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
                    v-model="form.pre_43_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >44. Se evidencian los registros de control y criterios de
                  calidad, durante el ingreso de los alimentos a la bodega de
                  almacenamiento.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_44" required>
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
                    v-model="form.pre_44_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >45. Se llevan los registros con fecha de recepción y
                  cantidades de productos no conformes, de conformidad al
                  criterio de rechazo identificado.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_45" required>
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
                    v-model="form.pre_45_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >46. Se lleva un control y registros de la rotación de los
                  alimentos almacenados de acuerdo a su fecha de vencimiento y
                  caracteristicas, de tal manera que se cumpla con la premisa
                  "primeras entradas - primeras salidas" (metodo PEPS).
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_46" required>
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
                    v-model="form.pre_46_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >47.Se cuenta con registros diarios de verificación de
                  temperatura de los equipos de refrigeración y congelación.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_47" required>
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
                    v-model="form.pre_47_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >48. Se cuenta con las fichas técnicas de los alimentos y/o
                  productos almacenados en bodega.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_48" required>
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
                    v-model="form.pre_48_obs"
                  />
                </div>
              </div>
              <hr />
              <h5>
                VIII. VERIFICACIÓN DOCUMENTAL / REGISTROS / SOPORTES DE
                OPERACIÓN PAE MODALIDADES PS, CCT Y I
              </h5>
              <hr />
              <div class="row">
                <label class="col-sm-6"
                  >49. Se informa periodicamente a la entidad territorial
                  (supervisión del programa), el grado de avance operativo del
                  contrato, mediante el sistema de monitoreo y control
                  establecido (Informe de Actividades Obligaciones Contractuales
                  Operador PAE).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_49" required>
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
                    v-model="form.pre_49_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >50. Se cuenta con los soportes, sobre las actividades de
                  mantenimiento preventivo de equipos (licuadora, estufa,
                  nevera, olla a presión), para la totalidad de unidades de
                  servicio con modalidad PS, CCT y I de acuerdo al programa
                  establecido y según APU correspondiente.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_50" required>
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
                    v-model="form.pre_50_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >51. Se cuenta con los soportes, sobre las actividades de
                  mantenimiento correctivo de equipos (licuadora, estufa,
                  nevera, olla a presión), realizadas al 40% del total de las
                  unidades de servicio con modalidad PS, CCT y I, de acuerdo al
                  programa establecido y según APU correspondiente.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_51" required>
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
                    v-model="form.pre_51_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >52. Se cuenta con los soportes sobre las actividades de
                  calibración de equipos e instrumentos de medición
                  (termometros, grameras) realizadas en las unidades de servicio
                  con modalidad PS, CCT y I, de acuerdo al programa
                  establecido.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_52" required>
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
                    v-model="form.pre_52_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >53. Cuenta con los soportes de entrega de la dotación y
                  elementos de protección en material antifluido:1 pantalon, 1
                  camisa, 1 delantal, 1 gorro, 1 tapabocas, 1 par calzado
                  cerrado, al personal manipulador de alimentos en los comedores
                  escolares con modalidad PS, de acuerdo a las cantidades
                  establecidas por la entidad según APU correspondiente (una (1)
                  dotación completa).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_53" required>
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
                    v-model="form.pre_53_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >54. Cuenta con los soportes de entrega de la dotación y
                  elementos de protección en material antifluido:1 pantalon, 1
                  camisa, 1 delantal, 1 gorro, 1 tapabocas, 1 par calzado
                  cerrado, al personal manipulador de alimentos y 1 delantal, 1
                  gorro, 1 tapabocas al personal auxiliar, de los
                  establecimientos de preparación con modalidad CCT, de acuerdo
                  a las cantidades establecidas por la entidad, según APU
                  correspondiente (una (1) dotación completa).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_54" required>
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
                    v-model="form.pre_54_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >55. Cuenta con los soportes de entrega de la dotación y
                  elementos de protección en material antifluido: 1 delantal, 1
                  gorro, 1 tapabocas, al personal manipulador de alimentos en
                  los establecimientos educativos con modalidad I, de acuerdo a
                  las cantidades establecidas por la entidad según APU
                  correspondiente (una (1) dotación completa).
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_55" required>
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
                    v-model="form.pre_55_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >56. Se cuenta con los soportes de las actividades realizadas,
                  encuanto a la remisión y entrega de alimentos, efectuados en
                  cada una de las instituciones y sedes educativas del
                  departamento. (formatos diligenciados con sus respectivas
                  firmas de recibido por parte de los responsables).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_56" required>
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
                    v-model="form.pre_56_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >57. Se cuenta con los soportes, de las actividades de
                  reposición de productos o entrega de alimentos faltantes, en
                  los comedores escolares y/o establecimientos educativos,
                  (formatos debidamente diligenciado, con sus respectivas
                  firmas).</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_57" required>
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
                    v-model="form.pre_57_obs"
                  />
                </div>
              </div>

              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >58. Se cuenta con las actas de soporte de la entrega de
                  insumos e implementos de aseo, conforme a las cantidades y
                  periodicidad por modalidad de atención (PS, CCT, I),
                  correspondientes a cada uno de las instituciones y sedes
                  educativas beneficiarias del Programa, donde se desarrollan
                  actividades de limpieza y desinfección. Lo anterior según APU
                  correspondiente.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_58" required>
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
                    v-model="form.pre_58_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >59. El operador realiza entrega de las acciones de mejora, de
                  acuerdo a los hallazgos evidenciados en campo por la
                  supervisión del Programa.</label
                >
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_59" required>
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
                    v-model="form.pre_59_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >60.La carpeta de cada una de las manipuladoras de alimentos
                  por modalidad de atención (PS, CCT, I) cuentan con los
                  examenes medicos (coprológico, KOH (uñas), frotis de
                  garganta), certificados medicos y certificación de asistencia
                  a curso de manipulacion, buenas practicas de manufactura e
                  higiene de los alimentos.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_60" required>
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
                    v-model="form.pre_60_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >61.Se reporta a la ETC, los resultados de analisis
                  microbiologicos de las muestras de alimentos: ensalada, jugo,
                  seco y leche en polvo, por modalidad de atención (PS y CCT),
                  conforme al numero de muestras indicadas en el APU
                  correspondiente.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_61" required>
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
                    v-model="form.pre_61_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >62. Se reporta a la ETC, los resultados de analisis
                  microbiologicos de las muestras de alimentos: lacteo y cereal,
                  para la modalidad de atención I, conforme al numero de
                  muestras indicadas en el APU correspondiente.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_62" required>
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
                    v-model="form.pre_62_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >63. Se desarrollan capacitaciones continuas acorde con el
                  cronograma y la metodologia del plan, sobre prácticas
                  higiénicas en la manipulación de alimentos, preparación,
                  almacenamiento, conservación, rotulado y/o etiquetado, minuta
                  patron, ciclos de menús, estandarización de porciones,
                  diligenciamiento de formatos, manejo de PEPS, plan de
                  saneamiento basico, entre otros. verificación de soportes
                  mediante listados de asistencia, fotos y actas.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_63" required>
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
                    v-model="form.pre_63_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >64. La compra de alimentos corresponde a los establecidos en
                  el ciclo de menús dispuestos y aprobado por la ETC.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_64" required>
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
                    v-model="form.pre_64_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >65. En el marco del comunicado DAB N° 4000-4113- 2020 del 25
                  de septiembre del 2020, emitido por el Instituto Nacional de
                  Vigilancia de Medicamentos y Alimentos - INVIMA, el operador
                  cuenta con los soportes respectivos que indican que la carne
                  que se suministra a los beneficiarios del Programa, proviene
                  de establecimientos autorizados por la autoridad competente
                  (guia de transporte, destino de la carne, inscripción y
                  autorización INVIMA o ETS).
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_65" required>
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
                    v-model="form.pre_65_obs"
                  />
                </div>
              </div>
              <div class="row">
                <hr />
                <label class="col-sm-6"
                  >66. La compra de alimentos perecederos se hace máximo para
                  cinco (5) días.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_66" required>
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
                    v-model="form.pre_66_obs"
                  />
                </div>
                <hr />
              </div>
              <div class="row">
                <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                  <label class="form-label">PUNTAJE ESPERADO</label>
                  <input
                    class="form-control"
                    type="number"
                    v-model="form.puntaje_esperado"
                    disabled
                  />
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                  <label class="form-label">PUNTAJE OBTENIDO</label>
                  <input
                    class="form-control"
                    type="number"
                    v-model="form.puntaje_obtenido"
                    disabled
                  />
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                  <label class="form-label">PORCENTAJE (%)</label>
                  <input
                    class="form-control"
                    type="number"
                    step="any"
                    v-model="form.porcentaje"
                    disabled
                  />
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 mb-1">
                  <label class="form-label"
                    >CONCLUSIONES / OBSERVACIONES / RECOMENDACIONES</label
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
                    >OBSERVACIONES DE QUIEN RECIBE LA VISITA</label
                  >
                  <textarea
                    class="form-control"
                    v-model="form.observaciones_recibe"
                    rows="3"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <div class="row">
                <div class="col-12 mb-1">
                  <label class="form-label">Visita realizada por:</label>
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
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cedula_apoyo"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cargo_apoyo"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.telefono_apoyo"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <div class="row">
                <div class="col-12 mb-1">
                  <label class="form-label">Visita realizada por:</label>
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
                    v-model="form.nombre_apoyo2"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cedula_apoyo2"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cargo_apoyo2"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.telefono_apoyo2"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
              <div class="row">
                <div class="col-12 mb-1">
                  <label class="form-label">Visita atendida por:</label>
                </div>
                <div class="col-12 mb-1">
                  <SignaturePad
                    idFirma="firma3"
                    :varFirma="form.firma3"
                    @firmas-updated="actualizarFirmas"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Nombre</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.nombre_atiende"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cédula</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cedula_atiende"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Cargo</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.cargo_atiende"
                  />
                </div>
                <div class="col-12 mb-1">
                  <label class="form-label">Teléfono</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.telefono_atiende"
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
      nuevoNombre: "", // Input para el nombre
      nuevoGrado: "", // Input para el grado
      filas: [], //filas de la tabla
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
        fecha_visita2: "",
        hora_inicio2: "",
        hora_fin2: "",
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
        puntaje_esperado: 0,
        puntaje_obtenido: 0,
        porcentaje: 0,
        observaciones: "",
        observaciones_recibe: "",
        firma1: "",
        firma2: "",
        firma3: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        nombre_apoyo2: "",
        cedula_apoyo2: "",
        cargo_apoyo2: "",
        telefono_apoyo2: "",
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
      if (this.form.firma1 == "" || this.form.firma3 == "") {
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
        this.form.pre_29 == "" ||
        this.form.pre_30 == "" ||
        this.form.pre_31 == "" ||
        this.form.pre_32 == "" ||
        this.form.pre_33 == "" ||
        this.form.pre_34 == "" ||
        this.form.pre_35 == "" ||
        this.form.pre_36 == "" ||
        this.form.pre_37 == "" ||
        this.form.pre_38 == "" ||
        this.form.pre_39 == "" ||
        this.form.pre_40 == "" ||
        this.form.pre_41 == "" ||
        this.form.pre_42 == "" ||
        this.form.pre_43 == "" ||
        this.form.pre_44 == "" ||
        this.form.pre_45 == "" ||
        this.form.pre_46 == "" ||
        this.form.pre_47 == "" ||
        this.form.pre_48 == "" ||
        this.form.pre_49 == "" ||
        this.form.pre_50 == "" ||
        this.form.pre_51 == "" ||
        this.form.pre_52 == "" ||
        this.form.pre_53 == "" ||
        this.form.pre_54 == "" ||
        this.form.pre_55 == "" ||
        this.form.pre_56 == "" ||
        this.form.pre_57 == "" ||
        this.form.pre_58 == "" ||
        this.form.pre_59 == "" ||
        this.form.pre_60 == "" ||
        this.form.pre_61 == "" ||
        this.form.pre_62 == "" ||
        this.form.pre_63 == "" ||
        this.form.pre_64 == "" ||
        this.form.pre_65 == "" ||
        this.form.pre_66 == "" ||
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
          `${apiUrl}/ct_etapa_operaciones`,
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
        municipio: "",
        operador: "",
        contrato: "",
        direccion: "",
        correo: "",
        fecha_visita: "",
        hora_inicio: "",
        hora_fin: "",
        fecha_visita2: "",
        hora_inicio2: "",
        hora_fin2: "",
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
        puntaje_esperado: 0,
        puntaje_obtenido: 0,
        porcentaje: 0,
        observaciones: "",
        observaciones_recibe: "",
        firma1: "",
        firma2: "",
        firma3: "",
        nombre_apoyo: "",
        cedula_apoyo: "",
        cargo_apoyo: "",
        telefono_apoyo: "",
        nombre_apoyo2: "",
        cedula_apoyo2: "",
        cargo_apoyo2: "",
        telefono_apoyo2: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
        files: [],
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
