<template>
  <div class="pb-5">
    <div class="row g-4">
      <div class="col-12 col-xxl-6">
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
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <h4 class="text-dark">SPQR</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <h4 class="text-dark">Acta de reunión</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comtecnico">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
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
