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
                Seguimiento rotulado y/o etiquetado de alimentos
              </li>
            </ol>
          </nav>
          <h2>
            SEGUIMIENTO ROTULADO Y/O ETIQUETADO DE ALIMENTOS BODEGA DE
            ALMACENAMIENTO
          </h2>
          <hr />
        </div>
        <form @submit.prevent="guardarFormulario">
          <div class="row mb-4">
            <div class="col-md-4 mb-1">
              <label for="etc" class="form-label">ETC:</label>
              <input
                type="text"
                id="etc"
                class="form-control"
                v-model="form.etc"
                required
              />
            </div>
            <div class="col-md-4 mb-1">
              <label for="municipio" class="form-label">MUNICIPIO:</label>
              <MunicipioSelect v-model="form.municipio" />
            </div>
            <div class="col-md-4 mb-1">
              <label for="direccion" class="form-label"
                >DIRECCIÓN BODEGA:</label
              >
              <input
                type="text"
                id="direccion"
                class="form-control"
                v-model="form.direccion"
                required
              />
            </div>
            <div class="col-md-4 mb-1">
              <label for="operador" class="form-label">OPERADOR:</label>
              <input
                type="text"
                id="operador"
                class="form-control"
                v-model="form.operador"
                required
              />
            </div>
            <div class="col-md-4 mb-1">
              <label for="contrato" class="form-label">N° CONTRATO:</label>
              <input
                type="text"
                id="contrato"
                class="form-control"
                v-model="form.contrato"
                required
              />
            </div>
            <div class="col-md-4 mb-1">
              <label for="fecha" class="form-label">FECHA DE LA VISITA:</label>
              <input
                type="date"
                id="fecha"
                class="form-control"
                v-model="form.fecha_visita"
                required
              />
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead class="table-light">
                <tr class="text-center">
                  <th colspan="8" class="text-center">
                    ALIMENTOS MODALIDADES RACIÓN PREPARADA EN SITIO - PS Y
                    COMIDA CALIENTE TRANSPORTADA
                  </th>
                </tr>
                <tr>
                  <th class="text-center">ALIMENTO</th>
                  <th class="text-center">MARCA</th>
                  <th class="text-center">CONTENIDO NETO</th>
                  <th class="text-center">PAIS DE ORIGEN</th>
                  <th class="text-center">NOMBRE O DIRECCIÓN DEL FABRICANTE</th>
                  <th class="text-center">LOTE</th>
                  <th class="text-center">FECHA DE VENCIMIENTO</th>
                  <th class="text-center">
                    N° DEL REGISTRO, PERMISO, NOTIFICACION SANITARIA
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    A.Leguminosa:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_Leguminosa"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    B.Leguminosa:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_B_Leguminosa"
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_B_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_B_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_B_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_B_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_B_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_B_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_B_Leguminosa"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    C.Leguminosa:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_C_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_C_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_C_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_C_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_C_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_C_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_C_Leguminosa"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_C_Leguminosa"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Arroz:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_Arroz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_Arroz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_Arroz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_Arroz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_Arroz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_Arroz"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_Arroz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_Arroz"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Azucar:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_Azucar"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_Azucar"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_Azucar"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_Azucar"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_Azucar"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_Azucar"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_Azucar"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_Azucar"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Sal:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_Sal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_Sal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_Sal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_Sal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_Sal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_Sal"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_Sal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_Sal"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Aceite:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_Aceite"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_Aceite"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_Aceite"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_Aceite"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_Aceite"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_Aceite"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_Aceite"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_Aceite"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Leche en polvo:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_Lechep"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_Lechep"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_Lechep"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_Lechep"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_Lechep"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_Lechep"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_Lechep"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_Lechep"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Spaghetti:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_Spaghetti"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_Spaghetti"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_Spaghetti"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_Spaghetti"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_Spaghetti"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_Spaghetti"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_Spaghetti"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_Spaghetti"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Cereal: Pan de Leche:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_PanLeche"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_PanLeche"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_PanLeche"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_PanLeche"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_PanLeche"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_PanLeche"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_PanLeche"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_PanLeche"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    B. Cereal: Pan Mantequilla
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_B_PanMantequilla"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_B_PanMantequilla"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_B_PanMantequilla"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_B_PanMantequilla"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_B_PanMantequilla"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_B_PanMantequilla"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_B_PanMantequilla"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_B_PanMantequilla"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    C. Cereal: Pan Sal:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_C_PanSal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_C_PanSal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_C_PanSal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_C_PanSal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_C_PanSal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_C_PanSal"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_C_PanSal"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_C_PanSal"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    D. Cereal: Pan Dulce:
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_D_PanDulce"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_D_PanDulce"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_D_PanDulce"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_D_PanDulce"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_D_PanDulce"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_D_PanDulce"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_D_PanDulce"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_D_PanDulce"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    E. Cereal: Pan Maiz
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_E_PanMaiz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_E_PanMaiz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_E_PanMaiz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_E_PanMaiz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_E_PanMaiz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_E_PanMaiz"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_E_PanMaiz"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_E_PanMaiz"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    F. Cereal: Galleta Casera
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_F_GlletaCasera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_F_GlletaCasera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_F_GlletaCasera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_F_GlletaCasera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_F_GlletaCasera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_F_GlletaCasera"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_F_GlletaCasera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_F_GlletaCasera"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    A. Lácteo: Leche Entera
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_A_LacheEntera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_A_LacheEntera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_A_LacheEntera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_A_LacheEntera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_A_LacheEntera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_A_LacheEntera"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_A_LacheEntera"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_A_LacheEntera"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    B. Lácteo: Avena
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_B_LacteoAvena"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_B_LacteoAvena"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_B_LacteoAvena"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_B_LacteoAvena"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_B_LacteoAvena"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_B_LacteoAvena"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_B_LacteoAvena"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_B_LacteoAvena"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    B. Lácteo: Avena Sabor a Maracuya
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_B_LacteoAvenaSaborMaracuya"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    B. Dulce: Bocadillo de Guayaba
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.nombre_B_DulceBocadilloGuayaba"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.marca_B_DulceBocadilloGuayaba"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.contenido_B_DulceBocadilloGuayaba"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.pais_B_DulceBocadilloGuayaba"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.fabricante_B_DulceBocadilloGuayaba"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.lote_B_DulceBocadilloGuayaba"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.fecha_B_DulceBocadilloGuayaba"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.registro_B_DulceBocadilloGuayaba"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mb-4">
            <label for="observaciones" class="form-label"
              >OBSERVACIONES GENERALES</label
            >
            <textarea
              id="observaciones"
              class="form-control"
              rows="4"
              v-model="form.observaciones"
              required
            ></textarea>
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <h4>Visita Atendida por:</h4>
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
                  required
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cargo"
                  v-model="form.cargo_atiende"
                  required
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
                  required
                />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <h4>Visita Realizada por:</h4>
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
                  v-model="form.nombre_apoyo1"
                  required
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cargo"
                  v-model="form.cargo_apoyo1"
                  required
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                  v-model="form.cedula_apoyo1"
                  required
                />
              </div>
              <div class="mb-2">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Teléfono"
                  v-model="form.telefono_apoyo1"
                  required
                />
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <h4>Visita Realizada por:</h4>
              <div class="mb-2">
                <SignaturePad
                  idFirma="firma3"
                  :varFirma="form.firma3"
                  @firmas-updated="actualizarFirmas"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  v-model="form.nombre_apoyo2"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cargo"
                  v-model="form.cargo_apoyo2"
                />
              </div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="N° de Identificación"
                  v-model="form.cedula_apoyo2"
                />
              </div>
              <div class="mb-2">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Teléfono"
                  v-model="form.telefono_apoyo2"
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
      form: {
        etc: "Norte de Santander",
        municipio: "",
        direccion: "",
        operador: "",
        contrato: "",
        fecha_visita: "",
        nombbre_A_Leguminosa: "",
        marca_A_Leguminosa: "",
        contenido_A_Leguminosa: "",
        pais_A_Leguminosa: "",
        fabricante_A_Leguminosa: "",
        lote_A_Leguminosa: "",
        fecha_A_Leguminosa: "",
        registro_A_Leguminosa: "",
        nombre_B_Leguminosa: "",
        marca_B_Leguminosa: "",
        contenido_B_Leguminosa: "",
        pais_B_Leguminosa: "",
        fabricante_B_Leguminosa: "",
        lote_B_Leguminosa: "",
        fecha_B_Leguminosa: "",
        registro_B_Leguminosa: "",
        nombre_C_Leguminosa: "",
        marca_C_Leguminosa: "",
        contenido_C_Leguminosa: "",
        pais_C_Leguminosa: "",
        fabricante_C_Leguminosa: "",
        lote_C_Leguminosa: "",
        fecha_C_Leguminosa: "",
        registro_C_Leguminosa: "",
        nombre_A_Arroz: "",
        marca_A_Arroz: "",
        contenido_A_Arroz: "",
        pais_A_Arroz: "",
        fabricante_A_Arroz: "",
        lote_A_Arroz: "",
        fecha_A_Arroz: "",
        registro_A_Arroz: "",
        nombre_A_Azucar: "",
        marca_A_Azucar: "",
        contenido_A_Azucar: "",
        pais_A_Azucar: "",
        fabricante_A_Azucar: "",
        lote_A_Azucar: "",
        fecha_A_Azucar: "",
        registro_A_Azucar: "",
        nombre_A_Sal: "",
        marca_A_Sal: "",
        contenido_A_Sal: "",
        pais_A_Sal: "",
        fabricante_A_Sal: "",
        lote_A_Sal: "",
        fecha_A_Sal: "",
        registro_A_Sal: "",
        nombre_A_Aceite: "",
        marca_A_Aceite: "",
        contenido_A_Aceite: "",
        pais_A_Aceite: "",
        fabricante_A_Aceite: "",
        lote_A_Aceite: "",
        fecha_A_Aceite: "",
        registro_A_Aceite: "",
        nombre_A_Lechep: "",
        marca_A_Lechep: "",
        contenido_A_Lechep: "",
        pais_A_Lechep: "",
        fabricante_A_Lechep: "",
        lote_A_Lechep: "",
        fecha_A_Lechep: "",
        registro_A_Lechep: "",
        nombre_A_Spaghetti: "",
        marca_A_Spaghetti: "",
        contenido_A_Spaghetti: "",
        pais_A_Spaghetti: "",
        fabricante_A_Spaghetti: "",
        lote_A_Spaghetti: "",
        fecha_A_Spaghetti: "",
        registro_A_Spaghetti: "",
        nombre_A_PanLeche: "",
        marca_A_PanLeche: "",
        contenido_A_PanLeche: "",
        pais_A_PanLeche: "",
        fabricante_A_PanLeche: "",
        lote_A_PanLeche: "",
        fecha_A_PanLeche: "",
        registro_A_PanLeche: "",
        nombre_B_PanMantequilla: "",
        marca_B_PanMantequilla: "",
        contenido_B_PanMantequilla: "",
        pais_B_PanMantequilla: "",
        fabricante_B_PanMantequilla: "",
        lote_B_PanMantequilla: "",
        fecha_B_PanMantequilla: "",
        registro_B_PanMantequilla: "",
        nombre_C_PanSal: "",
        marca_C_PanSal: "",
        contenido_C_PanSal: "",
        pais_C_PanSal: "",
        fabricante_C_PanSal: "",
        lote_C_PanSal: "",
        fecha_C_PanSal: "",
        registro_C_PanSal: "",
        nombre_D_PanDulce: "",
        marca_D_PanDulce: "",
        contenido_D_PanDulce: "",
        pais_D_PanDulce: "",
        fabricante_D_PanDulce: "",
        lote_D_PanDulce: "",
        fecha_D_PanDulce: "",
        registro_D_PanDulce: "",
        nombre_E_PanMaiz: "",
        marca_E_PanMaiz: "",
        contenido_E_PanMaiz: "",
        pais_E_PanMaiz: "",
        fabricante_E_PanMaiz: "",
        lote_E_PanMaiz: "",
        fecha_E_PanMaiz: "",
        registro_E_PanMaiz: "",
        nombre_F_GlletaCasera: "",
        marca_F_GlletaCasera: "",
        contenido_F_GlletaCasera: "",
        pais_F_GlletaCasera: "",
        fabricante_F_GlletaCasera: "",
        lote_F_GlletaCasera: "",
        fecha_F_GlletaCasera: "",
        registro_F_GlletaCasera: "",
        nombre_A_LacheEntera: "",
        marca_A_LacheEntera: "",
        contenido_A_LacheEntera: "",
        pais_A_LacheEntera: "",
        fabricante_A_LacheEntera: "",
        lote_A_LacheEntera: "",
        fecha_A_LacheEntera: "",
        registro_A_LacheEntera: "",
        nombre_B_LacteoAvena: "",
        marca_B_LacteoAvena: "",
        contenido_B_LacteoAvena: "",
        pais_B_LacteoAvena: "",
        fabricante_B_LacteoAvena: "",
        lote_B_LacteoAvena: "",
        fecha_B_LacteoAvena: "",
        registro_B_LacteoAvena: "",
        nombre_B_LacteoAvenaSaborMaracuya: "",
        marca_B_LacteoAvenaSaborMaracuya: "",
        contenido_B_LacteoAvenaSaborMaracuya: "",
        pais_B_LacteoAvenaSaborMaracuya: "",
        fabricante_B_LacteoAvenaSaborMaracuya: "",
        lote_B_LacteoAvenaSaborMaracuya: "",
        fecha_B_LacteoAvenaSaborMaracuya: "",
        registro_B_LacteoAvenaSaborMaracuya: "",
        nombre_B_DulceBocadilloGuayaba: "",
        marca_B_DulceBocadilloGuayaba: "",
        contenido_B_DulceBocadilloGuayaba: "",
        pais_B_DulceBocadilloGuayaba: "",
        fabricante_B_DulceBocadilloGuayaba: "",
        lote_B_DulceBocadilloGuayaba: "",
        fecha_B_DulceBocadilloGuayaba: "",
        registro_B_DulceBocadilloGuayaba: "",
        observaciones: "",
        nombre_apoyo1: "",
        cedula_apoyo1: "",
        cargo_apoyo1: "",
        telefono_apoyo1: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
        nombre_apoyo2: "",
        cedula_apoyo2: "",
        cargo_apoyo2: "",
        telefono_apoyo2: "",
        firma1: "",
        firma2: "",
        firma3: "",
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
    guardarFormulario() {
      this.isLoading = true;

      if (this.form.firma1 == "" || this.form.firma2 == "") {
        this.isLoading = false;
        this.showToast(
          "Debe diligenciar las firmas correspondientes",
          "danger"
        );
        return;
      }

      if (this.form.files.length < 1) {
        this.isLoading = false;
        this.showToast("Debe adjuntar al menos un archivo", "danger");
        return;
      }
      if (
        this.form.etc == "" ||
        this.form.municipio == "" ||
        this.form.direccion == "" ||
        this.form.operador == "" ||
        this.form.contrato == "" ||
        this.form.fecha_visita == ""
      ) {
        this.isLoading = false;
        this.showToast(
          "Debe diligenciar todos los campos obligatorios",
          "danger"
        );
        return;
      }
      if (
        this.form.marca_A_Leguminosa == "" &&
        this.form.marca_B_Leguminosa == "" &&
        this.form.marca_C_Leguminosa == "" &&
        this.form.marca_A_Arroz == "" &&
        this.form.marca_A_Azucar == "" &&
        this.form.marca_A_Sal == "" &&
        this.form.marca_A_Aceite == "" &&
        this.form.marca_A_Lechep == "" &&
        this.form.marca_A_Spaghetti == "" &&
        this.form.marca_A_PanLeche == "" &&
        this.form.marca_B_PanMantequilla == "" &&
        this.form.marca_C_PanSal == "" &&
        this.form.marca_D_PanDulce == "" &&
        this.form.marca_E_PanMaiz == "" &&
        this.form.marca_F_GlletaCasera == "" &&
        this.form.marca_A_LacheEntera == "" &&
        this.form.marca_B_LacteoAvena == "" &&
        this.form.marca_B_LacteoAvenaSaborMaracuya == "" &&
        this.form.marca_B_DulceBocadilloGuayaba == ""
      ) {
        this.isLoading = false;
        this.showToast("Debe diligenciar al menos un producto", "danger");
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
      this.resetFormulario();
      this.isLoading = false;
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
          `${apiUrl}/ct_seguimiento_etiquetado`,
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
          "No se pudo enviar el formulario seguimiento de etiquetado",
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
        direccion: "",
        operador: "",
        contrato: "",
        fecha_visita: "",
        nombbre_A_Leguminosa: "",
        marca_A_Leguminosa: "",
        contenido_A_Leguminosa: "",
        pais_A_Leguminosa: "",
        fabricante_A_Leguminosa: "",
        lote_A_Leguminosa: "",
        fecha_A_Leguminosa: "",
        registro_A_Leguminosa: "",
        nombre_B_Leguminosa: "",
        marca_B_Leguminosa: "",
        contenido_B_Leguminosa: "",
        pais_B_Leguminosa: "",
        fabricante_B_Leguminosa: "",
        lote_B_Leguminosa: "",
        fecha_B_Leguminosa: "",
        registro_B_Leguminosa: "",
        nombre_C_Leguminosa: "",
        marca_C_Leguminosa: "",
        contenido_C_Leguminosa: "",
        pais_C_Leguminosa: "",
        fabricante_C_Leguminosa: "",
        lote_C_Leguminosa: "",
        fecha_C_Leguminosa: "",
        registro_C_Leguminosa: "",
        nombre_A_Arroz: "",
        marca_A_Arroz: "",
        contenido_A_Arroz: "",
        pais_A_Arroz: "",
        fabricante_A_Arroz: "",
        lote_A_Arroz: "",
        fecha_A_Arroz: "",
        registro_A_Arroz: "",
        nombre_A_Azucar: "",
        marca_A_Azucar: "",
        contenido_A_Azucar: "",
        pais_A_Azucar: "",
        fabricante_A_Azucar: "",
        lote_A_Azucar: "",
        fecha_A_Azucar: "",
        registro_A_Azucar: "",
        nombre_A_Sal: "",
        marca_A_Sal: "",
        contenido_A_Sal: "",
        pais_A_Sal: "",
        fabricante_A_Sal: "",
        lote_A_Sal: "",
        fecha_A_Sal: "",
        registro_A_Sal: "",
        nombre_A_Aceite: "",
        marca_A_Aceite: "",
        contenido_A_Aceite: "",
        pais_A_Aceite: "",
        fabricante_A_Aceite: "",
        lote_A_Aceite: "",
        fecha_A_Aceite: "",
        registro_A_Aceite: "",
        nombre_A_Lechep: "",
        marca_A_Lechep: "",
        contenido_A_Lechep: "",
        pais_A_Lechep: "",
        fabricante_A_Lechep: "",
        lote_A_Lechep: "",
        fecha_A_Lechep: "",
        registro_A_Lechep: "",
        nombre_A_Spaghetti: "",
        marca_A_Spaghetti: "",
        contenido_A_Spaghetti: "",
        pais_A_Spaghetti: "",
        fabricante_A_Spaghetti: "",
        lote_A_Spaghetti: "",
        fecha_A_Spaghetti: "",
        registro_A_Spaghetti: "",
        nombre_A_PanLeche: "",
        marca_A_PanLeche: "",
        contenido_A_PanLeche: "",
        pais_A_PanLeche: "",
        fabricante_A_PanLeche: "",
        lote_A_PanLeche: "",
        fecha_A_PanLeche: "",
        registro_A_PanLeche: "",
        nombre_B_PanMantequilla: "",
        marca_B_PanMantequilla: "",
        contenido_B_PanMantequilla: "",
        pais_B_PanMantequilla: "",
        fabricante_B_PanMantequilla: "",
        lote_B_PanMantequilla: "",
        fecha_B_PanMantequilla: "",
        registro_B_PanMantequilla: "",
        nombre_C_PanSal: "",
        marca_C_PanSal: "",
        contenido_C_PanSal: "",
        pais_C_PanSal: "",
        fabricante_C_PanSal: "",
        lote_C_PanSal: "",
        fecha_C_PanSal: "",
        registro_C_PanSal: "",
        nombre_D_PanDulce: "",
        marca_D_PanDulce: "",
        contenido_D_PanDulce: "",
        pais_D_PanDulce: "",
        fabricante_D_PanDulce: "",
        lote_D_PanDulce: "",
        fecha_D_PanDulce: "",
        registro_D_PanDulce: "",
        nombre_E_PanMaiz: "",
        marca_E_PanMaiz: "",
        contenido_E_PanMaiz: "",
        pais_E_PanMaiz: "",
        fabricante_E_PanMaiz: "",
        lote_E_PanMaiz: "",
        fecha_E_PanMaiz: "",
        registro_E_PanMaiz: "",
        nombre_F_GlletaCasera: "",
        marca_F_GlletaCasera: "",
        contenido_F_GlletaCasera: "",
        pais_F_GlletaCasera: "",
        fabricante_F_GlletaCasera: "",
        lote_F_GlletaCasera: "",
        fecha_F_GlletaCasera: "",
        registro_F_GlletaCasera: "",
        nombre_A_LacheEntera: "",
        marca_A_LacheEntera: "",
        contenido_A_LacheEntera: "",
        pais_A_LacheEntera: "",
        fabricante_A_LacheEntera: "",
        lote_A_LacheEntera: "",
        fecha_A_LacheEntera: "",
        registro_A_LacheEntera: "",
        nombre_B_LacteoAvena: "",
        marca_B_LacteoAvena: "",
        contenido_B_LacteoAvena: "",
        pais_B_LacteoAvena: "",
        fabricante_B_LacteoAvena: "",
        lote_B_LacteoAvena: "",
        fecha_B_LacteoAvena: "",
        registro_B_LacteoAvena: "",
        nombre_B_LacteoAvenaSaborMaracuya: "",
        marca_B_LacteoAvenaSaborMaracuya: "",
        contenido_B_LacteoAvenaSaborMaracuya: "",
        pais_B_LacteoAvenaSaborMaracuya: "",
        fabricante_B_LacteoAvenaSaborMaracuya: "",
        lote_B_LacteoAvenaSaborMaracuya: "",
        fecha_B_LacteoAvenaSaborMaracuya: "",
        registro_B_LacteoAvenaSaborMaracuya: "",
        nombre_B_DulceBocadilloGuayaba: "",
        marca_B_DulceBocadilloGuayaba: "",
        contenido_B_DulceBocadilloGuayaba: "",
        pais_B_DulceBocadilloGuayaba: "",
        fabricante_B_DulceBocadilloGuayaba: "",
        lote_B_DulceBocadilloGuayaba: "",
        fecha_B_DulceBocadilloGuayaba: "",
        registro_B_DulceBocadilloGuayaba: "",
        observaciones: "",
        nombre_apoyo1: "",
        cedula_apoyo1: "",
        cargo_apoyo1: "",
        telefono_apoyo1: "",
        nombre_atiende: "",
        cedula_atiende: "",
        cargo_atiende: "",
        telefono_atiende: "",
        nombre_apoyo2: "",
        cedula_apoyo2: "",
        cargo_apoyo2: "",
        telefono_apoyo2: "",
        firma1: "",
        firma2: "",
        firma3: "",
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
