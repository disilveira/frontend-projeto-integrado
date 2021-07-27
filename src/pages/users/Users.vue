<template>
  <div id="users">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <NavBarComponent :user_name="user.user_name"/>
        <SideBarComponent :is_admin="user.is_admin"/>
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
                            <th>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr :key="user.user_id" v-for="user in users">
                            <td>{{ user.user_id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td><router-link :to="{ name: 'User-Edit', params: { id: user.user_id } }" >Editar</router-link></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NavBarComponent from '../../components/Layout/NavBarComponent.vue'
import SideBarComponent from '../../components/Layout/SideBarComponent.vue'

export default {
  name: 'Users',
  mounted () {
    this.ActionListUsers()
  },
  computed: {
    ...mapState('users', ['users']),
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('users', ['ActionListUsers'])
  },
  components: {
    NavBarComponent,
    SideBarComponent
  }
}
</script>

<style>
</style>
