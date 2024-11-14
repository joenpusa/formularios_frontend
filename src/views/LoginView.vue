<template>
  <div class="login-page bg-body-secondary">
    <LoadingSpinner :isLoading="isLoading" />
    <ToastNotification
      v-if="toastMessage"
      :message="toastMessage"
      :type="toastType"
    />
    <div class="login-box">
      <div class="login-logo">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Ingresa con tus credenciales</p>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
                required
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
                    Mantemer sesión
                  </label>
                </div>
              </div>
              <div class="col-4">
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
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
    async handleLogin() {
      this.isLoading = true;
      this.toastMessage = "";
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL;
        const response = await axios.post(`${apiUrl}/api/login`, {
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
        console.log("entre al catch");
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
    },
  },
};
</script>

<style>
/* Agrega aquí cualquier estilo adicional si es necesario */
</style>
