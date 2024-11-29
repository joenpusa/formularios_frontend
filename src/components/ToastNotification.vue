<template>
  <div
    v-if="message"
    class="position-fixed top-0 end-0 p-3"
    style="z-index: 5"
    id="liveToast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast fade show" :class="`borde-${type}`">
      <div class="toast-header">
        <p class="me-auto">{{ message }}</p>
        <button
          type="button"
          class="btn ms-2 p-0"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="hide"
        >
          <span class="uil uil-times fs-7"></span>
        </button>
      </div>
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
  z-index: 2000;
  transition: opacity 0.5s ease;
}
.borde-success {
  border-left: 5px solid #28a745;
  background-color: #e2f0e5;
}
.borde-danger {
  border-left: 5px solid #dc3545;
  background-color: #f8d7da;
}
.borde-warning {
  border-left: 5px solid #ffc107;
  background-color: #fff3cd;
}
</style>
