<template>
  <div>
    <select v-model="selected" class="form-select" @change="emitChange">
      <option value="">Seleccione un municipio</option>
      <option
        v-for="municipio in municipios"
        :key="municipio.key"
        :value="municipio.key"
      >
        {{ municipio.value }}
      </option>
    </select>
  </div>
</template>

<script>
import { municipios } from "@/data/data_municipios.js";

export default {
  name: "MunicipioSelect",
  props: {
    value: String, // Sincronización con v-model
  },
  data() {
    return {
      selected: this.value,
      municipios, // Importa directamente la data de municipios
    };
  },
  methods: {
    emitChange() {
      this.$emit("update:modelValue", this.selected); // Emitir un evento personalizado
    },
  },
};
</script>
