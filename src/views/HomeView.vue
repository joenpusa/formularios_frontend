<template>
  <div class="pb-5">
    <div class="row g-4">
      <div class="col-12 col-xxl-9">
        <div class="mb-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3">
              <li class="breadcrumb-item">Inicio</li>
            </ol>
          </nav>
          <h2>Seguimiento PAE</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comsocial">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <span class="bi bi-person-rolodex fs-2"></span>
                  <h4 class="card-title text-dark">Componente social</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <span class="bi bi-check-circle fs-2"></span>
                  <h4 class="card-title text-dark">Componente técnico</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/reportes">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <span class="bi bi-file-earmark-bar-graph fs-2"></span>
                  <h4 class="card-title text-dark">Reportes</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/galeria">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <span class="bi bi-images fs-2"></span>
                  <h4 class="card-title text-dark">Galeria</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <h3>General</h3>
            <hr />
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <router-link to="/comtecnico/form-spqr">
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
            <a
              href="/formatos/acta_de_reunion.pdf"
              download="Acta de reunión.pdf"
            >
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Acta de reunión</h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 flex-wrap">
            <a
              href="/formatos/listado_asistencia_reunion.pdf"
              download="Listado asistencia reunión.pdf"
            >
              <div class="card text-dark bg-light border border-warning h-100">
                <div
                  class="card-body text-center d-flex align-items-center justify-content-center"
                >
                  <h4 class="text-dark">Listado asistencia reunión</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
