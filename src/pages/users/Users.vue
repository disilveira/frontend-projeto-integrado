<template>
  <div id="users">
    <h1>Usuários</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.ActionListUsers()
  },
  methods: {
    ...mapActions('users', ['ActionListUsers'])
  }
}
</script>

<style>
</style>
