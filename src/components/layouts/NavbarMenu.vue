<template>
  <div class="collapse navbar-collapse justify-content-between">
    <div class="navbar-logo">
      <button
        class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalCollapse"
        aria-controls="navbarVerticalCollapse"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span class="navbar-toggle-icon"
          ><span class="toggle-line"></span
        ></span>
      </button>
      <a class="navbar-brand me-1 me-sm-3" href="#">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center">
            <img
              src="../../assets/img/icons/favicon.jpeg"
              alt="PAE NDS"
              width="27"
            />
            <h5 class="logo-text ms-2 d-none d-sm-block">PAE NDS</h5>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMenu",
};
</script>
