<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home' }" class="nav-link">
          <i class="ti-dashboard menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </router-link>
      </li>
      <li v-if="is_admin === 1" class="nav-item">
        <router-link :to="{ name: 'Users' }" class="nav-link">
          <i class="ti-user menu-icon"></i>
          <span class="menu-title">Usuários</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideBarComponent',
  props: ['is_admin'],
  components: {}
}
</script>

<style>
</style>
