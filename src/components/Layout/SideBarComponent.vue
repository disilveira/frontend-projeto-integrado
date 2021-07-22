<template>
  <!-- partial:../../partials/_sidebar.html -->
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">
          <i class="ti-shield menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link">
          <i class="ti-user menu-icon"></i>
          <span class="menu-title">Usuários</span>
        </router-link>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#auth"
          aria-expanded="false"
          aria-controls="auth"
        >
          <i class="ti-write menu-icon"></i>
          <span class="menu-title">Documentação</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="auth">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="https://documenter.getpostman.com/view/12921403/Tz5wXuYJ" target="_blank">
                API
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/disilveira/api-projeto-integrado" target="_blank">
                Backend
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/disilveira/frontend-projeto-integrado" target="_blank">
                Frontend
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
  <!-- partial -->
</template>

<script>
export default {
  name: "SideBarComponent",
  components: {},
};
</script>

<style>
</style>