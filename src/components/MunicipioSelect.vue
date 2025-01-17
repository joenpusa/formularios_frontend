<template>
  <div>
    <select class="form-select" v-model="selectedMunicipio">
      <option value="">Seleccione un municipio</option>
      <option
        v-for="municipio in municipios"
        :key="municipio"
        :value="municipio"
      >
        {{ municipio }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      // Asociamos el v-model al prop 'value'
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedMunicipio: this.value, // Inicializamos con el valor del v-model
      municipios: [
        "Abrego",
        "Arboledas",
        "Bochalema",
        "Bucarasica",
        "Cáchira",
        "Cácota",
        "Chinácota",
        "Chitagá",
        "Convención",
        "Cúcuta",
        "Cucutilla",
        "Durania",
        "El Carmen",
        "El Tarra",
        "El Zulia",
        "Gramalote",
        "Hacarí",
        "Herrán",
        "La Esperanza",
        "La Playa de Belén",
        "Labateca",
        "Los Patios",
        "Lourdes",
        "Mutiscua",
        "Ocaña",
        "Pamplona",
        "Pamplonita",
        "Puerto Santander",
        "Ragonvalia",
        "Salazar de Las Palmas",
        "San Calixto",
        "San Cayetano",
        "Santiago",
        "Santo Domingo de Silos",
        "Sardinata",
        "Teorama",
        "Tibú",
        "Toledo",
        "Villa Caro",
        "Villa del Rosario",
      ],
    };
  },
  watch: {
    selectedMunicipio(newVal) {
      // Emitimos el valor seleccionado para que se sincronice con el v-model en el componente padre
      this.$emit("update:value", newVal);
    },
  },
};
</script>

<style scoped>
/* Puedes personalizar el estilo aquí si lo necesitas */
</style>
