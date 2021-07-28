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
                    <h4 class="card-title">Cadastrar Usuário</h4>
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
                        <label for="password">Senha</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          v-model="password"
                          required
                          placeholder="Senha"
                        />
                      </div>
                      <button class="btn btn-primary mr-2">Criar</button>
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
import { mapState } from 'vuex'
import NavBarComponent from '../../components/Layout/NavBarComponent.vue'
import SideBarComponent from '../../components/Layout/SideBarComponent.vue'

export default {
  data: function () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      try {
        const postData = { name: this.name, email: this.email, password: this.password }
        this.$http.post('https://api-projeto-integrado.herokuapp.com/auth/signup', postData).then(res => {
          alert(res.body.message)
          this.$router.push({ name: 'Users' })
        })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível cadastrar o usuário')
      }
    }
  },
  computed: {
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
