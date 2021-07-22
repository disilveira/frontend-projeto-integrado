<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <NavBarComponent />
      <SideBarComponent />
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Lista de Usuários</h4>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>First name</th>
                          <th>Progress</th>
                          <th>Amount</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Herman Beck</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                style="width: 25%"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                        <tr>
                          <td>Messsy Adam</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-danger"
                                role="progressbar"
                                style="width: 75%"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$245.30</td>
                          <td>July 1, 2015</td>
                        </tr>
                        <tr>
                          <td>John Richards</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style="width: 90%"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$138.00</td>
                          <td>Apr 12, 2015</td>
                        </tr>
                        <tr>
                          <td>Peter Meggik</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                style="width: 50%"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                        <tr>
                          <td>Edward</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-danger"
                                role="progressbar"
                                style="width: 35%"
                                aria-valuenow="35"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$ 160.25</td>
                          <td>May 03, 2015</td>
                        </tr>
                        <tr>
                          <td>John Doe</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-info"
                                role="progressbar"
                                style="width: 65%"
                                aria-valuenow="65"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$ 123.21</td>
                          <td>April 05, 2015</td>
                        </tr>
                        <tr>
                          <td>Henry Tom</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style="width: 20%"
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$ 150.00</td>
                          <td>June 16, 2015</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- main-panel ends -->
    </div>
  </div>
</template>

<script>
import NavBarComponent from "../Layout/NavBarComponent.vue";
import SideBarComponent from "../Layout/SideBarComponent.vue";
export default {
  name: 'UserComponent',
  title: 'Usuários',
  components: {
    NavBarComponent,
    SideBarComponent,
  }
};
</script>

<style scoped>
</style>