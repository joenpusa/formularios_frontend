// sinconrizacion con el servidor cuando este en linea
import { getRecords, clearRecords } from "./services/db";

const syncWithBackend = async () => {
  const records = await getRecords();
  if (records.length > 0) {
    try {
      await fetch("https://your-backend-endpoint/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(records),
      });
      await clearRecords();
      console.log("Datos sincronizados con el servidor");
    } catch (error) {
      console.error("Error sincronizando datos", error);
    }
  }
};

window.addEventListener("online", syncWithBackend);
