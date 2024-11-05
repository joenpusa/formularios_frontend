<template>
  <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
  <form>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="d-grid">
      <button
        class="btn btn-primary btn-login text-uppercase fw-bold"
        type="submit"
      >
        Sign in
      </button>
    </div>
  </form>
</template>
