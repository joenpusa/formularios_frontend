<template>
  <div class="pb-5">
    <div class="row g-4">
      <div class="col-12 col-xxl-9">
        <div class="mb-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3">
              <li class="breadcrumb-item">
                <router-link to="/home">Inicio</router-link>
              </li>
              <li class="breadcrumb-item">Componente tecnico</li>
            </ol>
          </nav>
          <h2>Componente tecnico</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <h3>Administrativo</h3>
            <hr />
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-etapa-alistamiento">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Etapa de alistamiento</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-etapa-operacion">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Etapa de operación</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-seguimiento-etiquetado">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Seguimiento rotulado y/o etiquetado de alimentos
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-caracteristicas-productos">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Verificación caracteristicas de calidad de productos
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-toma-muestra/pollo">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Toma muestra pollo</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-toma-muestra/res">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Toma muestra carne de res</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-toma-muestra/cerdo">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Toma muestra carne de cerdo</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3 flex-wrap">
            <h3>Coordinadores en campo</h3>
            <hr />
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-verificacion-materia-prima-cct">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación de materia prima comida caliente
                    transportada - CCT
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-verificacion-modalidad-cct">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación modalidad comida caliente
                    transportada - CCT
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-verificacion-materia-prima-rps">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación de materia prima ración para
                    preparar en sitio - PS
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-verificacion-modalidad-rps">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato verificación modalidad ración para preparar en sitio
                    - PS
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-verificacion-rotulado-ri">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato verificación de rotulado ración industrializada - I
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-verificacion-modalidad-ri">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación modalidad ración industrializada - I
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <h3>Supervisores en campo</h3>
            <hr />
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-seguimiento-local">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Formato de seguimiento local</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-seguimiento-rotulado">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de rotulado de seguimiento local
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
