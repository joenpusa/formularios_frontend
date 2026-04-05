/**
 * syncService.js
 * Sincroniza los formularios guardados offline en localStorage con el servidor.
 *
 * Los formularios se guardan bajo la key "formulariosOffline" como un array de objetos.
 * Cada objeto tiene todos los campos del formulario, incluyendo "files" que es un array de:
 *   { nombre_archivo: string, file: string (base64 data URL) }
 *
 * Al sincronizar, se reconstruyen los archivos desde base64 a Blob y se envían
 * como multipart/form-data, igual que lo hace enviarFormularioAlServidor() en el componente.
 */

import axios from "@/axios";

const STORAGE_KEY = "formulariosOffline";
const API_URL = process.env.VUE_APP_API_BASE_URL;

/**
 * Convierte un Data URL (base64) a un objeto Blob para poder subirlo como archivo.
 */
function dataURLtoBlob(dataURL) {
  const [header, data] = dataURL.split(",");
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(data);
  const array = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }
  return new Blob([array], { type: mime });
}

/**
 * Construye el FormData a partir de un formulario guardado offline,
 * reconstruyendo los archivos desde base64.
 */
function buildFormData(form) {
  const formData = new FormData();

  Object.keys(form).forEach((key) => {
    if (key !== "files") {
      // Los valores null/undefined los convertimos a cadena vacía para evitar errores
      formData.append(key, form[key] ?? "");
    }
  });

  if (Array.isArray(form.files)) {
    form.files.forEach((fileObj, index) => {
      if (fileObj.file && fileObj.file.startsWith("data:")) {
        // El archivo fue guardado como Data URL (base64)
        const blob = dataURLtoBlob(fileObj.file);
        const extension = blob.type.split("/")[1] || "bin";
        const filename =
          fileObj.nombre_archivo || `archivo_${index}.${extension}`;
        formData.append(`files[${index}]`, blob, filename);
      }
    });
  }

  return formData;
}

/**
 * Intenta sincronizar todos los formularios pendientes en localStorage.
 * Retorna un objeto con el resultado: { sincronizados, errores, total }
 */
export async function syncFormulariosOffline() {
  const pendientes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (pendientes.length === 0) {
    console.log("[syncService] No hay formularios pendientes.");
    return { sincronizados: 0, errores: 0, total: 0 };
  }

  console.log(
    `[syncService] Iniciando sincronización de ${pendientes.length} formulario(s)...`
  );

  const exitosos = [];
  const fallidos = [];

  for (let i = 0; i < pendientes.length; i++) {
    const form = pendientes[i];
    try {
      console.log(
        `[syncService] Enviando formulario ${i + 1}/${pendientes.length}...`
      );
      const formData = buildFormData(form);

      const response = await axios.post(`${API_URL}/diagnostico`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201 || response.status === 200) {
        exitosos.push(i);
        console.log(
          `[syncService] ✅ Formulario ${i + 1} sincronizado exitosamente.`
        );
      } else {
        fallidos.push(i);
        console.warn(
          `[syncService] ⚠️ Formulario ${i + 1} respondió con status ${
            response.status
          }.`
        );
      }
    } catch (error) {
      fallidos.push(i);
      console.error(
        `[syncService] ❌ Error sincronizando formulario ${i + 1}:`,
        error?.response?.data || error.message
      );
    }
  }

  // Conservar solo los que fallaron para reintentar la próxima vez
  const restantes = pendientes.filter((_, i) => fallidos.includes(i));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(restantes));

  console.log(
    `[syncService] Sincronización completa: ${exitosos.length} exitosos, ${fallidos.length} fallidos.`
  );

  return {
    sincronizados: exitosos.length,
    errores: fallidos.length,
    total: pendientes.length,
  };
}

/**
 * Retorna cuántos formularios hay pendientes de sincronizar.
 */
export function getFormulariosPendientes() {
  const pendientes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return pendientes.length;
}

/**
 * Listener automático: sincroniza cuando el navegador recupera conexión.
 * Se activa al importar este módulo (ej. en main.js).
 */
window.addEventListener("online", async () => {
  console.log(
    "[syncService] Conexión detectada. Sincronizando automáticamente..."
  );
  await syncFormulariosOffline();
});
