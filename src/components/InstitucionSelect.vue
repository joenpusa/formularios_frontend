<template>
  <div>
    <select v-model="selected" class="form-select" @change="emitChange">
      <option value="">Seleccione una institución</option>
      <option
        v-for="institucion in filteredInstituciones"
        :key="institucion.key"
        :value="institucion.key"
      >
        {{ institucion.value }}
      </option>
    </select>
  </div>
</template>

<script>
import { instituciones } from "@/data/data_instituciones";

export default {
  name: "InstitucionSelect",
  props: {
    municipioId: String, // Clave del municipio seleccionada
    value: String, // Sincronización con v-model
  },
  data() {
    return {
      selected: this.value,
      instituciones,
    };
  },
  computed: {
    filteredInstituciones() {
      console.log("Municipio seleccionado:", this.municipioId); // Muestra la clave del municipio
      const result = this.instituciones.filter(
        (institucion) => institucion.mun_key === this.municipioId
      );
      console.log("Instituciones filtradas:", result); // Muestra el resultado del filtro
      return result;
    },
  },
  methods: {
    emitChange() {
      this.$emit("update:value", this.selected); // Actualiza el v-model
    },
  },
  watch: {
    municipioId(newVal) {
      console.log("Nuevo municipioId recibido:", newVal);
      this.filteredInstituciones = this.instituciones.filter(
        (inst) => inst.mun_key === newVal
      );
    },
  },
};
</script>
