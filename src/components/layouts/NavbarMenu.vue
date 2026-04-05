<template>
  <div class="collapse navbar-collapse justify-content-between">
    <div class="navbar-logo">
      <button
        class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalCollapse"
        aria-controls="navbarVerticalCollapse"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span class="navbar-toggle-icon"
          ><span class="toggle-line"></span
        ></span>
      </button>
      <a class="navbar-brand me-1 me-sm-3" href="#">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center">
            <img
              src="../../assets/img/icons/favicon.jpeg"
              alt="PAE NDS"
              width="27"
            />
            <h5 class="logo-text ms-2 d-none d-sm-block">PAE NDS</h5>
          </div>
        </div>
      </a>
    </div>

    <!-- Indicador de formularios pendientes y botón de sincronización manual -->
    <div
      class="d-flex align-items-center gap-2 ms-auto me-3"
      v-if="pendientes > 0"
    >
      <span
        class="badge bg-warning text-dark"
        :title="`${pendientes} formulario(s) guardado(s) sin conexión`"
      >
        <i class="fas fa-cloud-upload-alt me-1"></i>
        {{ pendientes }} pendiente{{ pendientes > 1 ? "s" : "" }}
      </span>
      <button
        class="btn btn-sm btn-outline-warning"
        @click="sincronizarManual"
        :disabled="sincronizando"
        title="Sincronizar formularios guardados offline"
      >
        <i
          class="fas fa-sync-alt me-1"
          :class="{ 'fa-spin': sincronizando }"
        ></i>
        <span v-if="sincronizando">Sincronizando...</span>
        <span v-else>Sincronizar</span>
      </button>
    </div>
  </div>
</template>

<script>
import {
  syncFormulariosOffline,
  getFormulariosPendientes,
} from "@/syncService";

export default {
  name: "NavbarMenu",
  data() {
    return {
      pendientes: 0,
      sincronizando: false,
      intervaloRevision: null,
    };
  },
  mounted() {
    this.actualizarContador();
    // Revisar el contador cada 30 segundos por si cambia en otras pestañas
    this.intervaloRevision = setInterval(this.actualizarContador, 30000);
    // También actualizar cuando vuelva la conexión
    window.addEventListener("online", this.alRecuperarConexion);
  },
  beforeUnmount() {
    clearInterval(this.intervaloRevision);
    window.removeEventListener("online", this.alRecuperarConexion);
  },
  methods: {
    actualizarContador() {
      this.pendientes = getFormulariosPendientes();
    },
    async alRecuperarConexion() {
      // El syncService ya sincroniza automáticamente; esperamos un momento y actualizamos el contador
      await new Promise((r) => setTimeout(r, 3000));
      this.actualizarContador();
    },
    async sincronizarManual() {
      if (this.sincronizando) return;
      this.sincronizando = true;
      try {
        const resultado = await syncFormulariosOffline();
        if (resultado.sincronizados > 0) {
          alert(
            `✅ ${resultado.sincronizados} formulario(s) sincronizado(s) exitosamente.`
          );
        }
        if (resultado.errores > 0) {
          alert(
            `⚠️ ${resultado.errores} formulario(s) no pudieron sincronizarse. Intente de nuevo.`
          );
        }
        this.actualizarContador();
      } catch (e) {
        alert(
          "Error al sincronizar. Verifique la conexión e intente de nuevo."
        );
      } finally {
        this.sincronizando = false;
      }
    },
  },
};
</script>
