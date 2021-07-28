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
                    <h4 class="card-title">Excluir Usuário</h4>
                    <p class="text-danger">Tem certeza que deseja excluir o usuário <strong>{{ user_data.name }}</strong>?</p>
                    <button class="btn btn-danger mr-2" @click="submit()">Sim, confirmar exclusão</button>
                    <router-link :to="{ name: 'Users' }" class="btn btn-light"
                        >Voltar</router-link
                      >
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
      user_data: ''
    }
  },
  methods: {
    submit () {
      try {
        this.$http.delete('https://api-projeto-integrado.herokuapp.com/users/' + this.$route.params.id).then(res => {
          alert(res.body.message)
          this.$router.push({ name: 'Users' })
        })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível cadastrar o usuário')
      }
    }
  },
  mounted () {
    this.$http.get('https://api-projeto-integrado.herokuapp.com/users/' + this.$route.params.id).then(res => {
      this.user_data = res.body[0]
    })
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
