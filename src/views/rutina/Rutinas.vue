<script setup>
import RutinasUsuario from "@/components/RutinasUsuario.vue";
import BotonVuelta from "@/components/BotonVuelta.vue";
</script>

<template>
  <main>
    <div class="container">
      <BotonVuelta />
      <RutinasUsuario />
    </div>
  </main>
</template>

<style scoped>
main {
  padding: min(30px, 7%);
  background-color: #0f1017;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "navbar"
    "main";
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
