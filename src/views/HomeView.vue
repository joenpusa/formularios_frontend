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
            <a href="#">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <span class="bi bi-file-earmark-bar-graph fs-2"></span>
                  <h4 class="card-title text-dark">Reportes</h4>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <a href="#">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <span class="bi bi-images fs-2"></span>
                  <h4 class="card-title text-dark">Galeria</h4>
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
