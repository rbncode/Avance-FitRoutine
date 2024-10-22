<script></script>

<template>
  <div v-if="rutinas.length == 0">
    <h3>Aún no tienes rutinas, ¡Agrega una rutina!</h3>
    <RouterLink to="/agregar-rutinas">Agregar Rutina</RouterLink>
  </div>
  <div v-else class="container">
    <RouterLink to="/agregar-rutinas">Agregar Rutina</RouterLink>
    <div v-for="(rutina, index) in rutinas" :key="index">
      <TarjetaRutina :rutina="rutina" />
    </div>
  </div>
</template>

<style></style>
