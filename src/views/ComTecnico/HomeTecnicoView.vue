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
            <router-link to="/comtecnico/form-toma-muestra-pollo">
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
            <router-link to="/comtecnico/form-toma-muestra-res">
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
            <router-link to="/comtecnico/form-toma-muestra-cerdo">
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
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación materia prima CCT
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación modalidad CCT
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación materia prima RPS
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación modalidad RPS
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación materia prima RI
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">
                    Formato de verificación modalidad RI
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
            <router-link to="/comtecnico">
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
            <router-link to="/comtecnico">
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
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <h3>General</h3>
            <hr />
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">SPQR</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Acta de reunión</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Listado asistencia reunión</h4>
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
