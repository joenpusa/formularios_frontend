<template>
  <div>
    <h2>Formulario de Registro base offline</h2>
    <form @submit.prevent="handleSubmit">
      <label for="name">Nombre:</label>
      <input type="text" v-model="formData.name" required />
      <label for="email">Email:</label>
      <input type="email" v-model="formData.email" required />
      <button type="submit">Guardar</button>
    </form>
    <p v-if="isOffline">Estás offline, el registro se guardará localmente.</p>
  </div>
</template>

<script>
import { saveFormData } from "../services/db";

export default {
  data() {
    return {
      formData: { name: "", email: "" }, // Añade tus campos aquí
    };
  },
  methods: {
    async submitForm() {
      // Guardar los datos en IndexedDB
      await saveFormData(this.formData);
      alert(
        "Datos guardados localmente. Se sincronizarán cuando haya conexión."
      );
    },
  },
};
</script>
