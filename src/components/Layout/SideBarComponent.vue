<template>
  <!-- partial:../../partials/_sidebar.html -->
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="../../index.html">
          <i class="ti-shield menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#auth"
          aria-expanded="false"
          aria-controls="auth"
        >
          <i class="ti-user menu-icon"></i>
          <span class="menu-title">Usuários</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="auth">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="../../pages/samples/login.html">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../../pages/samples/login-2.html">
                Login 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../../pages/samples/register.html">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../../pages/samples/register-2.html">
                Register 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../../pages/samples/lock-screen.html">
                Lockscreen
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../../documentation/documentation.html">
          <i class="ti-write menu-icon"></i>
          <span class="menu-title">Documentação</span>
        </a>
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