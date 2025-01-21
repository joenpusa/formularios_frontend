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
              />
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4 mb-1">
              <label class="form-label">Hora fin</label>
              <input class="form-control" type="text" v-model="form.horaFin" />
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  >64. La compra de alimentos corresponde a los establecidos en
                  el ciclo de menús dispuestos y aprobado por la ETC.
                </label>
                <div class="col-sm-2">
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  <select class="form-select" v-model="form.pre_1">
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
                  />
                </div>
                <hr />
              </div>
              <div class="row">
                <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                  <label class="form-label">PUNTAJE ESPERADO</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.horaFin"
                  />
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                  <label class="form-label">PUNTAJE OBTENIDO</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.horaFin"
                  />
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 mb-1">
                  <label class="form-label">PORCENTAJE (%)</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="form.horaFin"
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
                    v-model="form.observaciones"
                    rows="3"
                  >
                  </textarea>
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
        files: [],
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
