<template>
  <div>
    <multiselect
      v-model="selectedUser"
      :options="users"
      :searchable="true"
      :loading="loading"
      :clear-on-select="false"
      :internal-search="false"
      track-by="id"
      label="displayText"
      placeholder="Escribe para buscar..."
      @search-change="fetchUsers"
    >
      <template #singleLabel="{ option }">
        <span>{{ option.name }} ({{ option.num_documento }})</span>
      </template>
      <template #option="{ option }">
        <span>{{ option.name }} ({{ option.num_documento }})</span>
      </template>
    </multiselect>

    <div v-if="loading" class="spinner-border text-primary mt-2" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

export default {
  components: { Multiselect },
  data() {
    return {
      selectedUser: null,
      users: [],
      loading: false,
    };
  },
  methods: {
    async fetchUsers(query) {
      if (query.length < 3) {
        this.users = [];
        return;
      }

      this.loading = true;
      try {
        const apiUrl = `${process.env.VUE_APP_API_BASE_URL}/users`;
        const response = await axios.get(apiUrl, { params: { search: query } });

        if (response.data.success) {
          this.users = response.data.data.data.map((user) => ({
            ...user,
            displayText: `${user.name} (${user.num_documento})`,
          }));
        } else {
          this.users = [];
        }
      } catch (error) {
        console.error("Error al buscar usuarios:", error);
        this.users = [];
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
