<script setup>
import { useRoute } from 'vue-router';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import NavBarAdmin from './components/NavBarAdmin.vue';
import Footer from './components/FooterComponente.vue';
import SideBar from './components/SideBar.vue';

const route = useRoute();

const esAdmin = () => {
  return route.path.includes('/Admin');
};
</script>

<template>
  <body class="principal">
    <div v-if="esAdmin()" class="admin-view">
      <NavBarAdmin />
      <SideBar />
      <span class="ajustar"><RouterView /></span>
    </div>
    <div v-else class="user-view">
      <NavBar />
      <RouterView />
      <Footer />
    </div>
  </body>
</template>

<style scoped>

</style>
