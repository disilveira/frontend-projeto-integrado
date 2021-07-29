<template>
  <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div
      class="
        text-center
        navbar-brand-wrapper
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <a class="navbar-brand brand-logo mr-5" href="#"><h4><strong>SS Telemática</strong></h4></a>
      <a class="navbar-brand brand-logo-mini" href="#"><h4><strong>SS</strong></h4></a>
    </div>
    <div
      class="navbar-menu-wrapper d-flex align-items-center justify-content-end"
    >
      <button
        class="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-toggle="minimize"
      >
        <span class="ti-view-list"></span>
      </button>
      <ul class="navbar-nav navbar-nav-right">
        <li class="nav-item nav-profile dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
            id="profileDropdown"
          >
            Olá, <strong>{{ user_name }}</strong>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right navbar-dropdown"
            aria-labelledby="profileDropdown"
          >
          <logout></logout>
          </div>
        </li>
      </ul>
      <button
        class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="ti-view-list"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import Logout from '../../modules/auth/pages/Logout.vue'
export default {
  name: 'NavBarComponent',
  data: () => ({
    user_name: localStorage.getItem('userName')
  }),
  components: {
    Logout
  }
}
</script>

<style>
</style>
