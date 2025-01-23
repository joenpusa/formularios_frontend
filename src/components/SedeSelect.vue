<template>
  <div>
    <select v-model="selected" class="form-select" @change="emitChange">
      <option value="">Seleccione una sede</option>
      <option v-for="sede in filteredSedes" :key="sede.key" :value="sede.key">
        {{ sede.value }}
      </option>
    </select>
  </div>
</template>

<script>
import { sedes } from "@/data/data_sedes.js";

export default {
  name: "SedeSelect",
  props: {
    institucionId: String, // Clave de la institución seleccionada
    value: String, // Sincronización con v-model
  },
  data() {
    return {
      selected: this.value,
      sedes,
    };
  },
  computed: {
    filteredSedes() {
      //return this.sedes.filter((sede) => sede.int_key === this.institucionId);
      const result = this.sedes.filter(
        (sede) => sede.ins_key === this.institucionId
      );
      return result;
    },
  },
  methods: {
    emitChange() {
      this.$emit("update:value", this.selected); // Actualiza el v-model
      this.$emit("update:modelValue", this.selected); // Actualiza el v-model
    },
  },
};
</script>
