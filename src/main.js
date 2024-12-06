import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { getAllFormData, clearFormData } from "./services/db";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendors/simplebar/simplebar.min.css";
import "./assets/css/theme.css";
import "./assets/css/user.min.css";
import "./assets/vendors/leaflet/leaflet.css";
import "./assets/vendors/leaflet.markercluster/MarkerCluster.css";
import "./assets/vendors/leaflet.markercluster/MarkerCluster.Default.css";
import "./assets/vendors/flatpickr/flatpickr.min.css";

// import "./assets/vendors/popper/popper.min.js";
// import "./assets/vendors/bootstrap/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/vendors/anchorjs/anchor.min.js";
import "./assets/vendors/is/is.min.js";
import "./assets/vendors/fontawesome/all.min.js";
import "./assets/vendors/lodash/lodash.min.js";
import "./assets/vendors/list.js/list.min.js";
import "./assets/vendors/feather-icons/feather.min.js";
import "./assets/vendors/dayjs/dayjs.min.js";
import "./assets/vendors/leaflet/leaflet.js";
import "./assets/vendors/leaflet.markercluster/leaflet.markercluster.js";
import "./assets/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/vendors/flatpickr/flatpickr.min.js";
// import "./assets/vendors/echarts/echarts.min.js";

async function syncDataWithBackend() {
  // Obtener datos de IndexedDB
  const data = await getAllFormData();
  if (data.length > 0) {
    try {
      // Enviar los datos al backend (simulado aquí como una llamada fetch)
      await fetch("https://api.example.com/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // Limpiar datos de IndexedDB una vez enviados
      await clearFormData();
      console.log("Datos sincronizados exitosamente.");
    } catch (error) {
      console.error("Error al sincronizar datos:", error);
    }
  }
}

// Monitorea los cambios de conectividad
window.addEventListener("online", syncDataWithBackend);

createApp(App).use(router).mount("#app");
