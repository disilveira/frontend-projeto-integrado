<template>
  <div class="container-scroller">
    <!-- partial:../../partials/_navbar.html -->
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
        <a class="navbar-brand brand-logo mr-5" href="../../index.html"
          ><img src="../../assets/images/logo.svg" class="mr-2" alt="logo"
        /></a>
        <a class="navbar-brand brand-logo-mini" href="../../index.html"
          ><img src="../../assets/images/logo-mini.svg" alt="logo"
        /></a>
      </div>
      <div
        class="
          navbar-menu-wrapper
          d-flex
          align-items-center
          justify-content-end
        "
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
              <img src="../../assets/images/faces/face28.jpg" alt="profile" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <a class="dropdown-item">
                <i class="ti-settings text-primary"></i>
                Settings
              </a>
              <a class="dropdown-item">
                <i class="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button
          class="
            navbar-toggler navbar-toggler-right
            d-lg-none
            align-self-center
          "
          type="button"
          data-toggle="offcanvas"
        >
          <span class="ti-view-list"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
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
                  <a
                    class="nav-link"
                    href="../../pages/samples/register-2.html"
                  >
                    Register 2
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="../../pages/samples/lock-screen.html"
                  >
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
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Line chart</h4>
                  <canvas id="lineChart"></canvas>
                </div>
              </div>
            </div>
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Bar chart</h4>
                  <canvas id="barChart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Area chart</h4>
                  <canvas id="areaChart"></canvas>
                </div>
              </div>
            </div>
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Doughnut chart</h4>
                  <canvas id="doughnutChart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Pie chart</h4>
                  <canvas id="pieChart"></canvas>
                </div>
              </div>
            </div>
            <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Scatter chart</h4>
                  <canvas id="scatterChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:../../partials/_footer.html -->

        <footer class="footer">
          <div
            class="d-sm-flex justify-content-center justify-content-sm-between"
          >
            <span
              class="
                text-muted text-center text-sm-left
                d-block d-sm-inline-block
              "
              >Copyright © 2018
              <a href="https://www.templatewatch.com/" target="_blank"
                >Templatewatch</a
              >. All rights reserved.</span
            >
            <span
              class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"
              >Hand-crafted & made with <i class="ti-heart text-danger ml-1"></i
            ></span>
          </div>
        </footer>

        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
</template>

<script>
export default {
  title: "Dashboard",
};
</script>

<style scoped>
</style>
