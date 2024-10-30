// gestion de la base de datos offline
import { openDB } from "idb";

const DATABASE_NAME = "vue-pwa-app-db";
const STORE_NAME = "formRecords";

export const initDB = async () => {
  return await openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

export const saveRecord = async (data) => {
  const db = await initDB();
  await db.put(STORE_NAME, data);
};

export const getRecords = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

export const clearRecords = async () => {
  const db = await initDB();
  await db.clear(STORE_NAME);
};
