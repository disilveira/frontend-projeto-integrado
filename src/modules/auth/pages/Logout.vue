<template>
  <a class="dropdown-item" @click="logout()">
    <i class="ti-power-off text-primary"></i>
    Sair
  </a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Logout',
  methods: {
    ...mapActions('auth', ['ActionSignOut']),
    async logout () {
      try {
        await this.ActionSignOut()
        this.$router.push({ name: 'Login' })
      } catch (err) {
        alert(
          err.data ? err.data.message : 'Não foi possível efetuar o logout'
        )
      }
    }
  }
}
</script>
