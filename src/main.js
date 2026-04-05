import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// Activa la sincronización automática de formularios offline al recuperar conexión
import "./syncService";

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

createApp(App).use(router).mount("#app");
