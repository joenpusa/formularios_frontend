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
            <div class="col-md-3">
              <label for="etc" class="form-label">ETC:</label>
              <input
                type="text"
                id="etc"
                class="form-control"
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="municipio" class="form-label">Municipio:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-md-3">
              <label for="direccion" class="form-label">Dirección:</label>
              <input
                type="text"
                id="direccion"
                class="form-control"
                v-model="form.direccion"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="fecha-visita" class="form-label"
                >Fecha de la Visita:</label
              >
              <input
                type="date"
                id="fecha-visita"
                class="form-control"
                v-model="form.fecha_visita"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="operador" class="form-label">Operador:</label>
              <input
                type="text"
                id="operador"
                class="form-control"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="contrato" class="form-label">N° Contrato:</label>
              <input
                type="text"
                id="contrato"
                class="form-control"
                v-model="form.contrato"
                required
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <label class="form-label">Lugar De Verificación:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="bodega-operador"
                />
                <label class="form-check-label" for="bodega-operador"
                  >Bodega Operador</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="establecimiento-proveedor"
                />
                <label class="form-check-label" for="establecimiento-proveedor"
                  >Establecimiento Proveedor</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="comedor-escolar"
                />
                <label class="form-check-label" for="comedor-escolar"
                  >Comedor Escolar</label
                >
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="otro" />
                <label class="form-check-label" for="otro">Otro</label>
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Especificar Nombre"
              />
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
                id="fecha-recepcion-res"
                class="form-control"
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
              />
            </div>
            <div class="col-md-4">
              <label for="proveedores-res" class="form-label"
                >Proveedores:</label
              >
              <input type="text" id="proveedores-res" class="form-control" />
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
                  name="olor-res"
                  id="olor-res-caracteristico"
                />
                <label class="form-check-label" for="olor-res-caracteristico"
                  >Caracteristico propio de la Especie</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="olor-res"
                  id="olor-res-no-caracteristico"
                />
                <label class="form-check-label" for="olor-res-no-caracteristico"
                  >No Caracteristico, fuerte, fetido, amoniaco</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">COLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="color-res"
                  id="color-res-caracteristico"
                />
                <label class="form-check-label" for="color-res-caracteristico"
                  >Caracteristico rojo cerezo brillante</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="color-res"
                  id="color-res-no-caracteristico"
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
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">TEXTURA:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="textura-res"
                  id="textura-res-firme"
                />
                <label class="form-check-label" for="textura-res-firme"
                  >Firme al tacto</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="textura-res"
                  id="textura-res-pegajosa"
                />
                <label class="form-check-label" for="textura-res-pegajosa"
                  >Textura pegajosa, viscosa o babosa</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
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
              <input type="text" id="cuarto-frio-res" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="tanque-res" class="form-label">Tanque:</label>
              <input type="text" id="tanque-res" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="nevera-res" class="form-label">Nevera:</label>
              <input type="text" id="nevera-res" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="caba-res" class="form-label">Caba:</label>
              <input type="text" id="caba-res" class="form-control" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="temp-refrigeracion-res" class="form-label"
                >T° Refrigeración:</label
              >
              <input
                type="text"
                id="temp-refrigeracion-res"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="temp-congelacion-res" class="form-label"
                >T° Congelación:</label
              >
              <input
                type="text"
                id="temp-congelacion-res"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="cantidad-almacenada-res" class="form-label"
                >Cantidad Producto Almacenado:</label
              >
              <input
                type="text"
                id="cantidad-almacenada-res"
                class="form-control"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">ROTULADO Y/O ETIQUETADO</h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="marca-res" class="form-label">MARCA</label>
              <input type="text" id="marca-res" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="contenido-neto-res" class="form-label"
                >CONTENIDO NETO</label
              >
              <input type="text" id="contenido-neto-res" class="form-control" />
            </div>
            <div class="col-md-2">
              <label for="direccion-res" class="form-label"
                >DIRECCION / LUGAR PROCEDENCIA</label
              >
              <input type="text" id="direccion-res" class="form-control" />
            </div>
            <div class="col-md-2">
              <label for="lote-res" class="form-label"
                >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
              >
              <input type="text" id="lote-res" class="form-control" />
            </div>
            <div class="col-md-2">
              <label for="fecha-vencimiento-res" class="form-label"
                >FECHA DE VENCIMIENTO</label
              >
              <input
                type="date"
                id="fecha-vencimiento-res"
                class="form-control"
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="observaciones-res" class="form-label"
              >OBSERVACIONES</label
            >
            <textarea
              id="observaciones-res"
              class="form-control"
              rows="3"
            ></textarea>
          </div>

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
              />
            </div>
            <div class="col-md-4">
              <label for="proveedores-cerdo" class="form-label"
                >Proveedores:</label
              >
              <input type="text" id="proveedores-cerdo" class="form-control" />
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
                  name="olor-cerdo"
                  id="olor-cerdo-caracteristico"
                />
                <label class="form-check-label" for="olor-cerdo-caracteristico"
                  >Caracteristico propio de la Especie</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="olor-cerdo"
                  id="olor-cerdo-no-caracteristico"
                />
                <label
                  class="form-check-label"
                  for="olor-cerdo-no-caracteristico"
                  >No Caracteristico, fuerte, fetido, amoniaco</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">COLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="color-cerdo"
                  id="color-cerdo-caracteristico"
                />
                <label class="form-check-label" for="color-cerdo-caracteristico"
                  >Porcion de carne rosado blanquesino</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="color-cerdo"
                  id="color-cerdo-no-caracteristico"
                />
                <label
                  class="form-check-label"
                  for="color-cerdo-no-caracteristico"
                  >tonalidades gris verdoso o azulado</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">TEXTURA:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="textura-cerdo"
                  id="textura-cerdo-firme"
                />
                <label class="form-check-label" for="textura-cerdo-firme"
                  >Firme al tacto, ligeramente humeda</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="textura-cerdo"
                  id="textura-cerdo-pegajosa"
                />
                <label class="form-check-label" for="textura-cerdo-pegajosa"
                  >Textura pegajosa, viscosa o babosa</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">
            ALMACENAMIENTO - TEMPERATURAS DE CONSERVACIÓN (CARNE DE CERDO)
          </h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="cuarto-frio-cerdo" class="form-label"
                >Cuarto Frio:</label
              >
              <input type="text" id="cuarto-frio-cerdo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="tanque-cerdo" class="form-label">Tanque:</label>
              <input type="text" id="tanque-cerdo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="nevera-cerdo" class="form-label">Nevera:</label>
              <input type="text" id="nevera-cerdo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="caba-cerdo" class="form-label">Caba:</label>
              <input type="text" id="caba-cerdo" class="form-control" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="temp-refrigeracion-cerdo" class="form-label"
                >T° Refrigeración:</label
              >
              <input
                type="text"
                id="temp-refrigeracion-cerdo"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="temp-congelacion-cerdo" class="form-label"
                >T° Congelación:</label
              >
              <input
                type="text"
                id="temp-congelacion-cerdo"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="cantidad-almacenada-cerdo" class="form-label"
                >Cantidad Producto Almacenado:</label
              >
              <input
                type="text"
                id="cantidad-almacenada-cerdo"
                class="form-control"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">ROTULADO Y/O ETIQUETADO</h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="marca-cerdo" class="form-label">MARCA</label>
              <input type="text" id="marca-cerdo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="contenido-neto-cerdo" class="form-label"
                >CONTENIDO NETO</label
              >
              <input
                type="text"
                id="contenido-neto-cerdo"
                class="form-control"
              />
            </div>
            <div class="col-md-2">
              <label for="direccion-cerdo" class="form-label"
                >DIRECCION / LUGAR PROCEDENCIA</label
              >
              <input type="text" id="direccion-cerdo" class="form-control" />
            </div>
            <div class="col-md-2">
              <label for="lote-cerdo" class="form-label"
                >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
              >
              <input type="text" id="lote-cerdo" class="form-control" />
            </div>
            <div class="col-md-2">
              <label for="fecha-vencimiento-cerdo" class="form-label"
                >FECHA DE VENCIMIENTO</label
              >
              <input
                type="date"
                id="fecha-vencimiento-cerdo"
                class="form-control"
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="observaciones-cerdo" class="form-label"
              >OBSERVACIONES</label
            >
            <textarea
              id="observaciones-cerdo"
              class="form-control"
              rows="3"
            ></textarea>
          </div>

          <h4 class="mt-4 mb-3">PRODUCTO POLLO</h4>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="fecha-recepcion-pollo" class="form-label"
                >Fecha de Recepción:</label
              >
              <input
                type="date"
                id="fecha-recepcion-pollo"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="cantidad-recepcionada-pollo" class="form-label"
                >Cantidad Recepcionada:</label
              >
              <input
                type="number"
                id="cantidad-recepcionada-pollo"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="proveedores-pollo" class="form-label"
                >Proveedores:</label
              >
              <input type="text" id="proveedores-pollo" class="form-control" />
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
                  name="olor-pollo"
                  id="olor-pollo-caracteristico"
                />
                <label class="form-check-label" for="olor-pollo-caracteristico"
                  >Caracteristico propio de la Especie</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="olor-pollo"
                  id="olor-pollo-no-caracteristico"
                />
                <label
                  class="form-check-label"
                  for="olor-pollo-no-caracteristico"
                  >fuerte, hedor agrio o similar al azufre</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">COLOR:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="color-pollo"
                  id="color-pollo-caracteristico"
                />
                <label class="form-check-label" for="color-pollo-caracteristico"
                  >Rosado blanquesino, tonalidad amarillenta</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="color-pollo"
                  id="color-pollo-no-caracteristico"
                />
                <label
                  class="form-check-label"
                  for="color-pollo-no-caracteristico"
                  >tonalidades gris verdoso</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
              />
            </div>
            <div class="col-md-4">
              <label class="form-label">TEXTURA:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="textura-pollo"
                  id="textura-pollo-firme"
                />
                <label class="form-check-label" for="textura-pollo-firme"
                  >Firme al tacto, piel adherida al musculo</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="textura-pollo"
                  id="textura-pollo-pegajosa"
                />
                <label class="form-check-label" for="textura-pollo-pegajosa"
                  >Textura pegajosa, viscosa o babosa</label
                >
              </div>
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Observación"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">
            ALMACENAMIENTO - TEMPERATURAS DE CONSERVACIÓN (POLLO)
          </h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="cuarto-frio-pollo" class="form-label"
                >Cuarto Frio:</label
              >
              <input type="text" id="cuarto-frio-pollo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="tanque-pollo" class="form-label">Tanque:</label>
              <input type="text" id="tanque-pollo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="nevera-pollo" class="form-label">Nevera:</label>
              <input type="text" id="nevera-pollo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="caba-pollo" class="form-label">Caba:</label>
              <input type="text" id="caba-pollo" class="form-control" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <label for="temp-refrigeracion-pollo" class="form-label"
                >T° Refrigeración:</label
              >
              <input
                type="text"
                id="temp-refrigeracion-pollo"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="temp-congelacion-pollo" class="form-label"
                >T° Congelación:</label
              >
              <input
                type="text"
                id="temp-congelacion-pollo"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="cantidad-almacenada-pollo" class="form-label"
                >Cantidad Producto Almacenado:</label
              >
              <input
                type="text"
                id="cantidad-almacenada-pollo"
                class="form-control"
              />
            </div>
          </div>

          <h5 class="mt-3 mb-2">ROTULADO Y/O ETIQUETADO</h5>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="marca-pollo" class="form-label">MARCA</label>
              <input type="text" id="marca-pollo" class="form-control" />
            </div>
            <div class="col-md-3">
              <label for="contenido-neto-pollo" class="form-label"
                >CONTENIDO NETO</label
              >
              <input
                type="text"
                id="contenido-neto-pollo"
                class="form-control"
              />
            </div>
            <div class="col-md-2">
              <label for="direccion-pollo" class="form-label"
                >DIRECCION / LUGAR PROCEDENCIA</label
              >
              <input type="text" id="direccion-pollo" class="form-control" />
            </div>
            <div class="col-md-2">
              <label for="lote-pollo" class="form-label"
                >LOTE - FECHA EMPACADO - FECHA DE DESPACHO</label
              >
              <input type="text" id="lote-pollo" class="form-control" />
            </div>
            <div class="col-md-2">
              <label for="fecha-vencimiento-pollo" class="form-label"
                >FECHA DE VENCIMIENTO</label
              >
              <input
                type="date"
                id="fecha-vencimiento-pollo"
                class="form-control"
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="observaciones-pollo" class="form-label"
              >OBSERVACIONES</label
            >
            <textarea
              id="observaciones-pollo"
              class="form-control"
              rows="3"
            ></textarea>
          </div>

          <h5 class="mt-4 mb-3">OBSERVACIONES GENERALES</h5>
          <div class="mb-3">
            <textarea
              id="observaciones-generales"
              class="form-control"
              rows="4"
            ></textarea>
          </div>

          <div class="row mt-4">
            <div class="col-md-6 mb-3">
              <h6>Visita Atendida por:</h6>
              <div class="mb-2">
                <SignaturePad
                  ref="firstSignaturePad"
                  @signatureSaved="handleFirstSignature"
                  @signatureCleared="handleFirstSignatureCleared"
                />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Cargo" />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                />
              </div>
              <div class="mb-2">
                <input type="tel" class="form-control" placeholder="Teléfono" />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Firma" />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <h6>Visita Realizada por:</h6>
              <div class="mb-2">
                <SignaturePad
                  ref="secondSignaturePad"
                  @signatureSaved="handleSecondSignature"
                  @signatureCleared="handleSecondSignatureCleared"
                />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Cargo" />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                />
              </div>
              <div class="mb-2">
                <input type="tel" class="form-control" placeholder="Teléfono" />
              </div>
              <div class="mb-2">
                <input type="text" class="form-control" placeholder="Firma" />
              </div>
            </div>
          </div>
          <div class="col-12 mt-2">
            <button type="submit" class="btn btn-primary">Guardar</button>
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
        firstSignature: "",
        secondSignature: "",
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
