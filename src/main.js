import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { getAllFormData, clearFormData } from "./services/db";

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
