<template>
  <div class="home">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <NavBarComponent :user_name="user.user_name"/>
        <SideBarComponent :is_admin="user.is_admin"/>
        <div class="main-panel">
          <div class="content-wrapper">
              {{ user_to_edit[0].name }}
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
