<template>
  <div>
    <select
      class="form-select"
      v-model="selectedOption"
      :disabled="disabled || options.length === 0"
    >
      <option value="">Seleccione una opción</option>
      <option v-for="option in options" :key="option.key" :value="option.key">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedOption: this.value,
    };
  },
  watch: {
    selectedOption(newValue) {
      this.$emit("update:value", newValue);
    },
  },
};
</script>
