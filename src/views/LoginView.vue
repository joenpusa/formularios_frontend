<template>
  <LoadingSpinner :isLoading="isLoading" />
  <ToastNotification
    v-if="toastMessage"
    :message="toastMessage"
    :type="toastType"
  />
  <div class="text-center">
    <img src="../../public/assets/logo.png" alt="logo" />
  </div>
  <div class="card-body login-card-body">
    <p class="login-box-msg">Ingresa con tus credenciales</p>
    <form @submit.prevent="validateForm" novalidate>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          :class="{ 'is-invalid': isEmailInvalid }"
          v-model="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          :class="{ 'is-invalid': isPasswordInvalid }"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="row">
        <div class="col-8">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="rememberMe"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Mantener sesión
            </label>
          </div>
        </div>
        <div class="col-4">
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Ingresar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ToastNotification from "@/components/ToastNotification.vue";

export default {
  components: {
    LoadingSpinner,
    ToastNotification,
  },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      isLoading: false,
      toastMessage: "",
      toastType: "",
      isEmailInvalid: false,
      isPasswordInvalid: false,
    };
  },
  created() {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      this.$router.push("/home");
    }
  },
  methods: {
    validateForm() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      this.isEmailInvalid = !this.email || !emailRegex.test(this.email);
      this.isPasswordInvalid = !this.password;

      if (!this.isEmailInvalid && !this.isPasswordInvalid) {
        this.handleLogin();
      } else {
        this.showToast(
          "Por favor, complete todos los campos correctamente.",
          "danger"
        );
      }
    },
    async handleLogin() {
      this.isLoading = true;
      this.toastMessage = "";
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        const response = await axios.post(`${apiUrl}/login`, {
          email: this.email,
          password: this.password,
        });

        const token = response.data.access_token;
        if (token) {
          if (this.rememberMe) {
            localStorage.setItem("authToken", token);
          } else {
            sessionStorage.setItem("authToken", token);
          }
          this.showToast("Inicio de sesión exitoso", "success");
          this.$router.push("/home");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.showToast(
            error.response.data.message || "Credenciales incorrectas",
            "danger"
          );
        } else {
          this.showToast(
            "Error al iniciar sesión. Intente nuevamente.",
            "danger"
          );
        }
      } finally {
        this.isLoading = false;
      }
    },
    showToast(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      setTimeout(() => {
        this.toastMessage = "";
      }, 5000);
    },
  },
};
</script>

<style>
.is-invalid {
  border-color: red;
}
</style>
