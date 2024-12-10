<template>
  <nav aria-label="Paginación">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pagination.prev_page_url }">
        <button
          class="page-link"
          @click="changePage(pagination.prev_page_url)"
          :disabled="!pagination.prev_page_url"
        >
          Anterior
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        :class="{ active: page === pagination.current_page }"
        class="page-item"
      >
        <button
          class="page-link"
          @click="changePage(pagination.path + '?page=' + page)"
        >
          {{ page }}
        </button>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.next_page_url }">
        <button
          class="page-link"
          @click="changePage(pagination.next_page_url)"
          :disabled="!pagination.next_page_url"
        >
          Siguiente
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },
  computed: {
    pages() {
      // Calcula las páginas visibles
      const startPage = Math.max(this.pagination.current_page - 2, 1);
      const endPage = Math.min(
        this.pagination.current_page + 2,
        this.pagination.last_page
      );

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(url) {
      this.$emit("page-changed", url);
    },
  },
};
</script>

<style scoped>
.page-item.disabled .page-link {
  pointer-events: none;
}
</style>
