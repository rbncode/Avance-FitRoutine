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
  <RouterView />
</template>

<style scoped>

</style>
