<template>
  <div
    v-if="message"
    :class="['toast card card-outline', `card-${type}`, 'show']"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    @click="hide"
  >
    <div class="d-flex">
      <div class="toast-body">
        {{ message }}
      </div>
      <button
        type="button"
        class="btn btn-xs me-2 m-auto"
        aria-label="Close"
        @click="hide"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    type: {
      type: String,
      default: "primary", // Puede ser 'success', 'danger', 'warning', etc.
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    hide() {
      this.show = false;
      this.$emit("clear-message");
    },
  },
  watch: {
    message(newMessage) {
      if (newMessage) {
        this.show = true;
        setTimeout(() => {
          this.show = false;
          this.$emit("clear-message");
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2000;
  transition: opacity 0.5s ease;
}
</style>
