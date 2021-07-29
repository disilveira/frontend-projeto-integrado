<template>
  <div id="users">
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
                    <div class="row">
                        <div class="col-lg-12 text-right">
                            <router-link :to="{ name: 'User-Create' }" class="btn btn-xs btn-success">Cadastrar Usuário</router-link>
                        </div>
                    </div>
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
                            <td width="1%"><router-link :to="{ name: 'User-Edit', params: { id: user.user_id } }" class="btn btn-xs btn-primary">Editar</router-link></td>
                            <td width="1%"><router-link :to="{ name: 'User-Delete', params: { id: user.user_id } }" class="btn btn-xs btn-danger">Excluir</router-link></td>
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
    ...mapState('users', ['users'])
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
