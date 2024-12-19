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
              <li class="breadcrumb-item">Componente social</li>
            </ol>
          </nav>
          <h2>Componente social</h2>
          <hr />
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comsocial/formvisita">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <h4 class="text-dark">F. de visita</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comsocial/formasistencia">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <h4 class="text-dark">F. asistencia EAN</h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <router-link to="/comsocial/form-verificacion-personal">
              <div class="card text-dark bg-light border border-warning">
                <div class="card-body text-center">
                  <h4 class="text-dark">F. personal manipulador</h4>
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
