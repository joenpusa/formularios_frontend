<template>
  <div
    v-if="show"
    class="toast align-items-center text-bg-{{ type }} border-0"
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
        class="btn-close btn-close-white me-2 m-auto"
        aria-label="Close"
        @click="hide"
      ></button>
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
    },
  },
  watch: {
    message(newMessage) {
      if (newMessage) {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1100;
}
</style>
