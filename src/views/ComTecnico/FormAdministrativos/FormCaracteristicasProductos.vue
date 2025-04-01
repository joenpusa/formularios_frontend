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
                Verificación caracteristicas de calidad de productos
              </li>
            </ol>
          </nav>
          <h2>
            VERIFICACIÓN CARACTERISTICAS DE CALIDAD DE LOS PRODUCTOS CARNE DE
            RES, CARNE DE CERDO Y POLLO
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">ETC:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="municipio" class="form-label">Municipio:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-md-4">
              <label for="direccion" class="form-label">Dirección:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.direccion"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fecha-visita" class="form-label"
                >Fecha de la Visita:</label
              >
              <input
                type="date"
                class="form-control"
                v-model="form.fecha_visita"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="contrato" class="form-label">N° Contrato:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contrato"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <label class="form-label">Lugar De Verificación:</label>
              <div class="d-flex align-items-center gap-3 flex-wrap">
                <!-- Radio 1 -->
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="Bodega Operador"
                    v-model="form.lugar_verificacion"
                  />
                  <label class="form-check-label" for="bodega-operador"
                    >Bodega Operador</label
                  >
                </div>

                <!-- Radio 2 -->
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="Establecimiento Proveedor"
                    v-model="form.lugar_verificacion"
                  />
                  <label
                    class="form-check-label"
                    for="establecimiento-proveedor"
                    >Establecimiento Proveedor</label
                  >
                </div>

                <!-- Radio 3 -->
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="Comedor Escolar"
                    v-model="form.lugar_verificacion"
                  />
                  <label class="form-check-label" for="comedor-escolar"
                    >Comedor Escolar</label
                  >
                </div>

                <!-- Radio 4 -->
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="Otro"
                    v-model="form.lugar_verificacion"
                  />
                  <label class="form-check-label" for="otro">Otro</label>
                </div>

                <!-- Campo de texto -->
                <input
                  type="text"
                  class="form-control form-control-sm w-auto"
                  placeholder="Especificar Nombre"
                  v-if="form.lugar_verificacion === 'Otro'"
                  v-model="form.lugar_verificacion_otro"
                />
              </div>
            </div>
          </div>

          <h4 class="mt-4 mb-3">PRODUCTO CARNE DE RES</h4>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="fecha-recepcion-res" class="form-label"
                >Fecha de Recepción:</label
              >
              <input
                type="date"
                class="form-control"
                v-model="form.fecha_recepcion_res"
              />
            </div>
            <div class="col-md-4">
              <label for="cantidad-recepcionada-res" class="form-label"
                >Cantidad Recepcionada:</label
              >
              <input
                type="number"
                id="cantidad-recepcionada-res"
                class="form-control"
                v-model="form.cantidad_recepcionada_res"
              />
            </div>
            <div class="col-md-4">
              <label for="proveedores-res" class="form-label"
                >Proveedores:</label
              >
              <input
                type="text"
                id="proveedores-res"
                class="form-control"
                v-model="form.proveedores_res"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">PROPIEDADES ORGANOLEPTICAS CARNE DE RES</h5>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">OLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.olor_res"
                />
                <label class="form-check-label" for="olor-res-caracteristico"
                  >Caracteristico propio de la Especie</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.olor_res"
                />
                <label class="form-check-label" for="olor-res-no-caracteristico"
                  >No Caracteristico, fuerte, fetido, amoniaco</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_olor_res"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">COLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.color_res"
                />
                <label class="form-check-label" for="color-res-caracteristico"
                  >Caracteristico rojo cerezo brillante</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.color_res"
                />
                <label
                  class="form-check-label"
                  for="color-res-no-caracteristico"
                  >tonalidades oscuras, verdosas, azuladas</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_color_res"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">TEXTURA:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="firme"
                  v-model="form.textura_res"
                />
                <label class="form-check-label" for="textura-res-firme"
                  >Firme al tacto</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="pegajosa"
                  v-model="form.textura_res"
                />
                <label class="form-check-label" for="textura-res-pegajosa"
                  >Textura pegajosa, viscosa o babosa</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_textura_res"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">
            ALMACENAMIENTO - TEMPERATURAS DE CONSERVACIÓN (CARNE DE RES)
          </h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="cuarto-frio-res" class="form-label"
                >Cuarto Frio:</label
              >
              <input
                type="text"
                id="cuarto-frio-res"
                class="form-control"
                v-model="form.cuarto_res"
              />
            </div>
            <div class="col-md-3">
              <label for="tanque-res" class="form-label">Tanque:</label>
              <input
                type="text"
                id="tanque-res"
                class="form-control"
                v-model="tanque_res"
              />
            </div>
            <div class="col-md-3">
              <label for="nevera-res" class="form-label">Nevera:</label>
              <input
                type="text"
                id="nevera-res"
                class="form-control"
                v-model="form.nevera_res"
              />
            </div>
            <div class="col-md-3">
              <label for="caba-res" class="form-label">Caba:</label>
              <input
                type="text"
                id="caba-res"
                class="form-control"
                v-model="form.caba_res"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="temp-refrigeracion-res" class="form-label"
                >T° Refrigeración:</label
              >
              <input
                type="number"
                class="form-control"
                v-model="form.temp_ref_res"
              />
            </div>
            <div class="col-md-4">
              <label for="temp-congelacion-res" class="form-label"
                >T° Congelación:</label
              >
              <input
                type="number"
                class="form-control"
                v-model="form.temp_con_res"
              />
            </div>
            <div class="col-md-4">
              <label for="cantidad-almacenada-res" class="form-label"
                >Cantidad Producto Almacenado:</label
              >
              <input
                type="text"
                class="form-control"
                v-model="form.cantidad__alm_res"
              />
            </div>
          </div>
          <div class="border rounded p-3 mb-3">
            <h5 class="mt-3 mb-2">
              Agregar fila Rotulado/Etiquetado carne de res
            </h5>
            <div class="row mb-3">
              <div class="col-md-3">
                <label for="marca-res" class="form-label">MARCA</label>
                <input type="text" class="form-control" v-model="res_marca" />
              </div>
              <div class="col-md-3">
                <label for="contenido-neto-res" class="form-label"
                  >CONTENIDO NETO</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="res_contenido"
                />
              </div>
              <div class="col-md-3">
                <label for="direccion-res" class="form-label"
                  >DIRECCION / LUGAR PROCEDENCIA</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="res_direccion"
                />
              </div>
              <div class="col-md-3">
                <label for="lote-res" class="form-label"
                  >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
                >
                <input type="text" class="form-control" v-model="res_lote" />
              </div>
              <div class="col-md-3">
                <label for="fecha-vencimiento-res" class="form-label"
                  >FECHA DE VENCIMIENTO</label
                >
                <input type="date" class="form-control" v-model="res_fecha" />
              </div>
              <div class="col-md-9">
                <label for="fecha-vencimiento-res" class="form-label"
                  >OBSERVACION</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="res_observaciones"
                />
              </div>
              <div class="col-md-12 mt-3">
                <button
                  type="button"
                  class="btn btn-secondary mb-3"
                  @click="agregarFilaRes"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <table class="table table-bordered text-center">
              <thead class="bg-primary-lighter">
                <tr>
                  <th colspan="6">ROTULADO Y/O ETIQUETADO</th>
                </tr>
                <tr class="bg-light">
                  <th>MARCA</th>
                  <th>CONTENIDO NETO</th>
                  <th>DIRECCIÓN / LUGAR PROCEDENCIA</th>
                  <th>LOTE - FECHA EMPACADO - FECHA DE DESPACHO</th>
                  <th>FECHA DE VENCIMIENTO</th>
                  <th>OBSERVACIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fila, index) in form.filas_res" :key="index">
                  <td>{{ fila.marca }}</td>
                  <td>{{ fila.contenido }}</td>
                  <td>{{ fila.direccion }}</td>
                  <td>{{ fila.lote }}</td>
                  <td>{{ fila.fecha }}</td>
                  <td>{{ fila.observaciones }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <div class="mb-3">
            <label class="form-label">OBSERVACIONES</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="form.observaciones_res"
            ></textarea>
          </div> -->

          <h4 class="mt-4 mb-3">PRODUCTO CARNE DE CERDO</h4>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="fecha-recepcion-cerdo" class="form-label"
                >Fecha de Recepción:</label
              >
              <input
                type="date"
                id="fecha-recepcion-cerdo"
                class="form-control"
                v-model="form.fecha_recepcion_cerdo"
              />
            </div>
            <div class="col-md-4">
              <label for="cantidad-recepcionada-cerdo" class="form-label"
                >Cantidad Recepcionada:</label
              >
              <input
                type="number"
                id="cantidad-recepcionada-cerdo"
                class="form-control"
                v-model="form.cantidad_recepcionada_cerdo"
              />
            </div>
            <div class="col-md-4">
              <label for="proveedores-cerdo" class="form-label"
                >Proveedores:</label
              >
              <input
                type="text"
                id="proveedores-cerdo"
                class="form-control"
                v-model="form.proveedores_cerdo"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">PROPIEDADES ORGANOLEPTICAS CARNE DE CERDO</h5>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">OLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.olor_cerdo"
                />
                <label class="form-check-label"
                  >Caracteristico propio de la Especie</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.olor_cerdo"
                />
                <label class="form-check-label"
                  >No Caracteristico, fuerte, fetido, amoniaco</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_olor_cerdo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">COLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.color_cerdo"
                />
                <label class="form-check-label"
                  >Porcion de carne rosado blanquesino</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.color_cerdo"
                />
                <label class="form-check-label"
                  >tonalidades gris verdoso o azulado</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_color_cerdo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">TEXTURA:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="firme"
                  v-model="form.textura_cerdo"
                />
                <label class="form-check-label"
                  >Firme al tacto, ligeramente humeda</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="pegajosa"
                  v-model="form.textura_cerdo"
                />
                <label class="form-check-label"
                  >Textura pegajosa, viscosa o babosa</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_textura_cerdo"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">
            ALMACENAMIENTO - TEMPERATURAS DE CONSERVACIÓN (CARNE DE CERDO)
          </h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label class="form-label">Cuarto Frio:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cuarto_cerdo"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Tanque:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.tanque_cerdo"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Nevera:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.nevera_cerdo"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Caba:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.caba_cerdo"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">T° Refrigeración:</label>
              <input
                type="number"
                class="form-control"
                v-model="form.temp_ref_cerdo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">T° Congelación:</label>
              <input
                type="number"
                class="form-control"
                v-model="form.temp_con_cerdo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Cantidad Producto Almacenado:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cantidad_alm_cerdo"
              />
            </div>
          </div>

          <div class="border rounded p-3 mb-3">
            <h5 class="mt-3 mb-2">
              Agregar fila Rotulado/Etiquetado carne de cerdo
            </h5>
            <div class="row mb-3">
              <div class="col-md-3">
                <label for="marca-res" class="form-label">MARCA</label>
                <input type="text" class="form-control" v-model="cerdo_marca" />
              </div>
              <div class="col-md-3">
                <label for="contenido-neto-res" class="form-label"
                  >CONTENIDO NETO</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="cerdo_contenido"
                />
              </div>
              <div class="col-md-3">
                <label for="direccion-res" class="form-label"
                  >DIRECCION / LUGAR PROCEDENCIA</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="cerdo_direccion"
                />
              </div>
              <div class="col-md-3">
                <label for="lote-res" class="form-label"
                  >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
                >
                <input
                  type="text"
                  id="lote-res"
                  class="form-control"
                  v-model="cerdo_lote"
                />
              </div>
              <div class="col-md-3">
                <label for="fecha-vencimiento-res" class="form-label"
                  >FECHA DE VENCIMIENTO</label
                >
                <input type="date" class="form-control" v-model="cerdo_fecha" />
              </div>
              <div class="col-md-9">
                <label for="fecha-vencimiento-res" class="form-label"
                  >OBSERVACION</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="cerdo_observaciones"
                />
              </div>
              <div class="col-md-12 mt-3">
                <button
                  type="button"
                  class="btn btn-secondary mb-3"
                  @click="agregarFilaCerdo"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <table class="table table-bordered text-center">
              <thead class="bg-primary-lighter">
                <tr>
                  <th colspan="6">ROTULADO Y/O ETIQUETADO</th>
                </tr>
                <tr class="bg-light">
                  <th>MARCA</th>
                  <th>CONTENIDO NETO</th>
                  <th>DIRECCIÓN / LUGAR PROCEDENCIA</th>
                  <th>LOTE - FECHA EMPACADO - FECHA DE DESPACHO</th>
                  <th>FECHA DE VENCIMIENTO</th>
                  <th>OBSERVACIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fila, index) in form.filas_cerdo" :key="index">
                  <td>{{ fila.marca }}</td>
                  <td>{{ fila.contenido }}</td>
                  <td>{{ fila.direccion }}</td>
                  <td>{{ fila.lote }}</td>
                  <td>{{ fila.fecha }}</td>
                  <td>{{ fila.observaciones }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <div class="mb-3">
            <label class="form-label">OBSERVACIONES</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="form.observaciones_cerdo"
            ></textarea>
          </div> -->

          <h4 class="mt-4 mb-3">PRODUCTO POLLO</h4>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">Fecha de Recepción:</label>
              <input
                type="date"
                class="form-control"
                v-model="form.fecha_recepcion_pollo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Cantidad Recepcionada:</label>
              <input
                type="number"
                class="form-control"
                v-model="form.cantidad_recepcionada_pollo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Proveedores:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.proveedores_pollo"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">PROPIEDADES ORGANOLEPTICAS DEL POLLO</h5>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">OLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.olor_pollo"
                />
                <label class="form-check-label"
                  >Caracteristico propio de la Especie</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.olor_pollo"
                />
                <label class="form-check-label"
                  >fuerte, hedor agrio o similar al azufre</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_olor_pollo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">COLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="caracteristico"
                  v-model="form.color_pollo"
                />
                <label class="form-check-label"
                  >Rosado blanquesino, tonalidad amarillenta</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no-caracteristico"
                  v-model="form.color_pollo"
                />
                <label class="form-check-label">tonalidades gris verdoso</label>
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_color_pollo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">TEXTURA:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="firme"
                  v-model="form.textura_pollo"
                />
                <label class="form-check-label"
                  >Firme al tacto, piel adherida al musculo</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="pegajosa"
                  v-model="form.textura_pollo"
                />
                <label class="form-check-label"
                  >Textura pegajosa, viscosa o babosa</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
                v-model="form.obs_textura_pollo"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">
            ALMACENAMIENTO - TEMPERATURAS DE CONSERVACIÓN (POLLO)
          </h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label class="form-label">Cuarto Frio:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cuarto_pollo"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Tanque:</label>
              <input
                type="text"
                id="tanque-pollo"
                class="form-control"
                v-model="form.tanque_pollo"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Nevera:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.nevera_pollo"
              />
            </div>
            <div class="col-md-3">
              <label class="form-label">Caba:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.caba_pollo"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label class="form-label">T° Refrigeración:</label>
              <input
                type="number"
                class="form-control"
                v-model="form.temp_ref_pollo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">T° Congelación:</label>
              <input
                type="number"
                class="form-control"
                v-model="form.temp_con_pollo"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">Cantidad Producto Almacenado:</label>
              <input
                type="text"
                class="form-control"
                v-model="form.cantidad_alm_pollo"
              />
            </div>
          </div>

          <div class="border rounded p-3 mb-3">
            <h5 class="mt-3 mb-2">Agregar fila Rotulado/Etiquetado de pollo</h5>
            <div class="row mb-3">
              <div class="col-md-3">
                <label for="marca-res" class="form-label">MARCA</label>
                <input type="text" class="form-control" v-model="pollo_marca" />
              </div>
              <div class="col-md-3">
                <label for="contenido-neto-res" class="form-label"
                  >CONTENIDO NETO</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="pollo_contenido"
                />
              </div>
              <div class="col-md-3">
                <label for="direccion-res" class="form-label"
                  >DIRECCION / LUGAR PROCEDENCIA</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="pollo_direccion"
                />
              </div>
              <div class="col-md-3">
                <label for="lote-res" class="form-label"
                  >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
                >
                <input
                  type="text"
                  id="lote-res"
                  class="form-control"
                  v-model="pollo_lote"
                />
              </div>
              <div class="col-md-3">
                <label for="fecha-vencimiento-res" class="form-label"
                  >FECHA DE VENCIMIENTO</label
                >
                <input type="date" class="form-control" v-model="pollo_fecha" />
              </div>
              <div class="col-md-9">
                <label for="fecha-vencimiento-res" class="form-label"
                  >OBSERVACION</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="pollo_observaciones"
                />
              </div>
              <div class="col-md-12 mt-3">
                <button
                  type="button"
                  class="btn btn-secondary mb-3"
                  @click="agregarFilaPollo"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <table class="table table-bordered text-center">
              <thead class="bg-primary-lighter">
                <tr>
                  <th colspan="6">ROTULADO Y/O ETIQUETADO</th>
                </tr>
                <tr class="bg-light">
                  <th>MARCA</th>
                  <th>CONTENIDO NETO</th>
                  <th>DIRECCIÓN / LUGAR PROCEDENCIA</th>
                  <th>LOTE - FECHA EMPACADO - FECHA DE DESPACHO</th>
                  <th>FECHA DE VENCIMIENTO</th>
                  <th>OBSERVACIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fila, index) in form.filas_pollo" :key="index">
                  <td>{{ fila.marca }}</td>
                  <td>{{ fila.contenido }}</td>
                  <td>{{ fila.direccion }}</td>
                  <td>{{ fila.lote }}</td>
                  <td>{{ fila.fecha }}</td>
                  <td>{{ fila.observaciones }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- <div class="mb-3">
            <label for="observaciones-pollo" class="form-label"
              >OBSERVACIONES</label
            >
            <textarea
              class="form-control"
              rows="3"
              v-model="form.observaciones_pollo"
            ></textarea>
          </div> -->

          <h5 class="mt-4 mb-3">OBSERVACIONES GENERALES</h5>
          <div class="mb-3">
            <textarea
              class="form-control"
              rows="4"
              v-model="form.observaciones_generales"
              required
            ></textarea>
          </div>

          <div class="row mt-4">
            <div class="col-md-6 mb-3">
              <h6>Visita Atendida por:</h6>
              <div class="mb-2">
                <SignaturePad
                  idFirma="firma1"
                  :varFirma="form.firma1"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  v-model="form.nombre_atiende"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cargo"
                  v-model="form.cargo_atiende"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                  v-model="form.cedula_atiende"
                />
              </div>
              <div class="mb-2">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Teléfono"
                  v-model="form.telefono_atiende"
                />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <h6>Visita Realizada por:</h6>
              <div class="mb-2">
                <SignaturePad
                  idFirma="firma2"
                  :varFirma="form.firma2"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  v-model="form.nombre_apoyo"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cargo"
                  v-model="form.cargo_apoyo"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                  v-model="form.cedula_apoyo"
                />
              </div>
              <div class="mb-2">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Teléfono"
                  v-model="form.telefono_apoyo"
                />
              </div>
            </div>
          </div>
          <!-- Componente de carga de archivos -->
          <FileUploader :files="form.files" @files-updated="updateFiles" />
          <div class="col-12 mt-2">
            <button type="submit" class="btn btn-primary">Guardar</button>
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
      // Input para tabla temporal res
      res_marca: "",
      res_contenido: "",
      res_direccion: "",
      res_lote: "",
      res_fecha: "",
      res_observaciones: "",
      // Input para tabla temporal cerdo
      cerdo_marca: "",
      cerdo_contenido: "",
      cerdo_direccion: "",
      cerdo_lote: "",
      cerdo_fecha: "",
      cerdo_observaciones: "",
      // Input para tabla temporal pollo
      pollo_marca: "",
      pollo_contenido: "",
      pollo_direccion: "",
      pollo_lote: "",
      pollo_fecha: "",
      pollo_observaciones: "",
      form: {
        etc: "Norte de Santander",
        municipio: "",
        direccion: "",
        fecha_visita: "",
        operador: "",
        contrato: "",
        lugar_verificacion: "",
        lugar_verificacion_otro: "",
        //datos de res
        fecha_recepcion_res: "",
        cantidad_recepcionada_res: "",
        proveedores_res: "",
        olor_res: "",
        color_res: "",
        textura_res: "",
        obs_olor_res: "",
        obs_color_res: "",
        obs_textura_res: "",
        cuarto_res: "",
        tanque_res: "",
        nevera_res: "",
        caba_res: "",
        temp_ref_res: "",
        temp_con_res: "",
        cantidad_alm_res: "",
        //datos de cerdo
        fecha_recepcion_cerdo: "",
        cantidad_recepcionada_cerdo: "",
        proveedores_cerdo: "",
        olor_cerdo: "",
        color_cerdo: "",
        textura_cerdo: "",
        obs_olor_cerdo: "",
        obs_color_cerdo: "",
        obs_textura_cerdo: "",
        cuarto_cerdo: "",
        tanque_cerdo: "",
        nevera_cerdo: "",
        caba_cerdo: "",
        temp_ref_cerdo: "",
        temp_con_cerdo: "",
        cantidad_alm_cerdo: "",
        //datos de pollo
        fecha_recepcion_pollo: "",
        cantidad_recepcionada_pollo: "",
        proveedores_pollo: "",
        olor_pollo: "",
        color_pollo: "",
        textura_pollo: "",
        obs_olor_pollo: "",
        obs_color_pollo: "",
        obs_textura_pollo: "",
        cuarto_pollo: "",
        tanque_pollo: "",
        nevera_pollo: "",
        caba_pollo: "",
        temp_ref_pollo: "",
        temp_con_pollo: "",
        cantidad_alm_pollo: "",
        // Observaciones generales
        observaciones_generales: "",
        observaciones_cerdo: "",
        observaciones_pollo: "",
        observaciones_res: "",
        // datos de firma
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
        files: [], //archivos adjuntos
        filas_res: [],
        filas_cerdo: [],
        filas_pollo: [],
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
    agregarFilaRes() {
      if (
        this.res_marca &&
        this.res_contenido &&
        this.res_direccion &&
        this.res_lote &&
        this.res_fecha
      ) {
        // Agregar una nueva fila con los valores ingresados
        this.form.filas_res.push({
          marca: this.res_marca,
          contenido: this.res_contenido,
          direccion: this.res_direccion,
          lote: this.res_lote,
          fecha: this.res_fecha,
          observaciones: this.res_observaciones,
        });

        // Limpiar los campos después de agregar
        this.res_marca = "";
        this.res_contenido = "";
        this.res_direccion = "";
        this.res_lote = "";
        this.res_fecha = "";
        this.res_observaciones = "";
      } else {
        this.showToast(
          "Por favor, complete todos los campos antes de agregar.",
          "danger"
        );
      }
    },
    agregarFilaCerdo() {
      if (
        this.cerdo_marca &&
        this.cerdo_contenido &&
        this.cerdo_direccion &&
        this.cerdo_lote &&
        this.cerdo_fecha
      ) {
        // Agregar una nueva fila con los valores ingresados
        this.form.filas_cerdo.push({
          marca: this.cerdo_marca,
          contenido: this.cerdo_contenido,
          direccion: this.cerdo_direccion,
          lote: this.cerdo_lote,
          fecha: this.cerdo_fecha,
          observaciones: this.cerdo_observaciones,
        });

        // Limpiar los campos después de agregar
        this.cerdo_marca = "";
        this.cerdo_contenido = "";
        this.cerdo_direccion = "";
        this.cerdo_lote = "";
        this.cerdo_fecha = "";
        this.cerdo_observaciones = "";
      } else {
        this.showToast(
          "Por favor, complete todos los campos antes de agregar.",
          "danger"
        );
      }
    },
    agregarFilaPollo() {
      if (
        this.pollo_marca &&
        this.pollo_contenido &&
        this.pollo_direccion &&
        this.pollo_lote &&
        this.pollo_fecha
      ) {
        // Agregar una nueva fila con los valores ingresados
        this.form.filas_pollo.push({
          marca: this.pollo_marca,
          contenido: this.pollo_contenido,
          direccion: this.pollo_direccion,
          lote: this.pollo_lote,
          fecha: this.pollo_fecha,
          observaciones: this.pollo_observaciones,
        });

        // Limpiar los campos después de agregar
        this.pollo_marca = "";
        this.pollo_contenido = "";
        this.pollo_direccion = "";
        this.pollo_lote = "";
        this.pollo_fecha = "";
        this.pollo_observaciones = "";
      } else {
        this.showToast(
          "Por favor, complete todos los campos antes de agregar.",
          "danger"
        );
      }
    },
    guardarFormulario() {
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
        this.form.filas_cerdo.length == 0 &&
        this.form.filas_pollo.length == 0 &&
        this.form.filas_res.length == 0
      ) {
        this.isLoading = false;
        this.showToast(
          "Debe registrar al menos un rotulado. Por favor, complete los campos.",
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
      }
    },
    guardarOffline() {
      // Leer formularios previos de localStorage
      const guardados =
        JSON.parse(localStorage.getItem("formulariosOffline")) || [];
      guardados.push(this.form); // Añadir el formulario actual
      localStorage.setItem("formulariosOffline", JSON.stringify(guardados));
      this.resetForm();
      this.isLoading = false;
    },
    async enviarFormularioAlServidor() {
      try {
        this.isLoading = true;
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        const formData = new FormData();
        Object.keys(this.form).forEach((key) => {
          if (key !== "files") {
            if (
              key === "filas_res" ||
              key === "filas_cerdo" ||
              key === "filas_pollo"
            ) {
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
          `${apiUrl}/ct_caracteristicas_productos`,
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
            "Formulario de asistencia guardado correctamente",
            "success"
          );
          this.resetForm(); // Reestablecer los campos del formulario
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.showToast("No se pudo enviar el formulario" + error, "danger");
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.form = {
        etc: "Norte de Santander",
        municipio: "",
        direccion: "",
        fecha_visita: "",
        operador: "",
        contrato: "",
        lugar_verificacion: "",
        lugar_verificacion_otro: "",
        //datos de res
        fecha_recepcion_res: "",
        cantidad_recepcionada_res: "",
        proveedores_res: "",
        olor_res: "",
        color_res: "",
        textura_res: "",
        obs_olor_res: "",
        obs_color_res: "",
        obs_textura_res: "",
        cuarto_res: "",
        tanque_res: "",
        nevera_res: "",
        caba_res: "",
        temp_ref_res: "",
        temp_con_res: "",
        cantidad_alm_res: "",
        //datos de cerdo
        fecha_recepcion_cerdo: "",
        cantidad_recepcionada_cerdo: "",
        proveedores_cerdo: "",
        olor_cerdo: "",
        color_cerdo: "",
        textura_cerdo: "",
        obs_olor_cerdo: "",
        obs_color_cerdo: "",
        obs_textura_cerdo: "",
        cuarto_cerdo: "",
        tanque_cerdo: "",
        nevera_cerdo: "",
        caba_cerdo: "",
        temp_ref_cerdo: "",
        temp_con_cerdo: "",
        cantidad_alm_cerdo: "",
        //datos de pollo
        fecha_recepcion_pollo: "",
        cantidad_recepcionada_pollo: "",
        proveedores_pollo: "",
        olor_pollo: "",
        color_pollo: "",
        textura_pollo: "",
        obs_olor_pollo: "",
        obs_color_pollo: "",
        obs_textura_pollo: "",
        cuarto_pollo: "",
        tanque_pollo: "",
        nevera_pollo: "",
        caba_pollo: "",
        temp_ref_pollo: "",
        temp_con_pollo: "",
        cantidad_alm_pollo: "",
        // Observaciones generales
        observaciones_generales: "",
        observaciones_cerdo: "",
        observaciones_pollo: "",
        observaciones_res: "",
        // datos de firma
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
        files: [], //archivos adjuntos
        filas_res: [],
        filas_cerdo: [],
        filas_pollo: [],
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
