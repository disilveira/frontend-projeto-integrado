<template>
  <div class="home">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <NavBarComponent :user_name="user.user_name" />
        <SideBarComponent :is_admin="user.is_admin" />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Editar Usuário - {{ user_to_edit[0].name }}</h4>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="hidden" :value="user_to_edit[0].user_id">
                        <input type="hidden" :value="user_to_edit[0].is_admin">
                        <input type="hidden" :value="user_to_edit[0].is_active">
                        <input
                          type="text"
                          class="form-control"
                          id="nome"
                          :value="user_to_edit[0].name"
                          placeholder="Nome"
                        />
                      </div>
                      <div class="form-group">
                        <label for="email">E-mail</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          :value="user_to_edit[0].email"
                          placeholder="E-mail"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary mr-2">
                        Atualizar
                      </button>
                      <router-link :to="{ name: 'Users' }" class="btn btn-light">Voltar</router-link>
                    </form>
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
  name: 'UserEdit',
  mounted () {
    this.ActionFindUser(this.$route.params.id)
  },
  computed: {
    ...mapState('showUser', ['user_to_edit']),
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('showUser', ['ActionFindUser'])
  },
  components: {
    NavBarComponent,
    SideBarComponent
  }
}
</script>

<style scoped>
</style>
