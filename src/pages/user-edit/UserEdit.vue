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
                    <h4 class="card-title">
                      Editar Usuário - {{ user_to_edit[0].name }}
                    </h4>
                    <form @submit.prevent="submit()" class="forms-sample">
                      <div class="form-group">
                        <label for="nome">Nome</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nome"
                          v-model="name"
                          required
                          placeholder="Nome"
                        />
                      </div>
                      <div class="form-group">
                        <label for="email">E-mail</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          v-model="email"
                          required
                          placeholder="E-mail"
                        />
                      </div>

                      <div class="form-group">
                        <label for="is_admin">Administrador?</label>
                        <select
                          type="text"
                          class="form-control"
                          id="is_admin"
                          v-model="is_admin"
                          required
                        >
                          <option value="1">SIM</option>
                          <option value="0" selected>NÃO</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label for="is_active">Ativo?</label>
                        <select
                          type="text"
                          class="form-control"
                          id="is_active"
                          v-model="is_active"
                          required
                        >
                          <option value="1" selected>SIM</option>
                          <option value="0">NÃO</option>
                        </select>
                      </div>
                      <button class="btn btn-primary mr-2">Atualizar</button>
                      <router-link :to="{ name: 'Users' }" class="btn btn-light"
                        >Voltar</router-link
                      >
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
  data: function () {
    return {
      name: '',
      email: '',
      is_admin: '',
      is_active: ''
    }
  },
  methods: {
    ...mapActions('showUser', ['ActionFindUser']),
    submit () {
      try {
        const postData = {
          user_id: this.$route.params.id,
          name: this.name,
          email: this.email,
          is_admin: this.is_admin,
          is_active: this.is_active
        }
        this.$http
          .patch('https://api-projeto-integrado.herokuapp.com/users', postData)
          .then((res) => {
            alert(res.body.message)
            this.$router.push({ name: 'Users' })
          })
      } catch (err) {
        alert(
          err.body ? err.body.message : 'Não foi possível realizar o cadastro'
        )
      }
    }
  },
  mounted () {
    this.ActionFindUser(this.$route.params.id)
    this.$http.get('https://api-projeto-integrado.herokuapp.com/users/' + this.$route.params.id).then(res => {
      this.name = res.body[0].name
      this.email = res.body[0].email
      this.is_admin = res.body[0].is_admin
      this.is_active = res.body[0].is_active
    })
  },
  computed: {
    ...mapState('showUser', ['user_to_edit']),
    ...mapState('auth', ['user'])
  },
  components: {
    NavBarComponent,
    SideBarComponent
  }
}
</script>

<style scoped>
</style>
