<script>
import TarjetaRutina from "./TarjetaRutina.vue";
import axios from "axios";
export default {
  components: {
    TarjetaRutina,
  },
  data() {
    return {
      rutinas: [],
    };
  },
  mounted() {
    this.cargarRutinasGuardadas();
  },
  methods: {
    cargarRutinasGuardadas() {
      axios
        .get("http://localhost:3000/rutinas")
        .then((response) => {
          this.rutinas = data;
        })
        .catch((error) => {
          console.error("Error al cargar las rutinas:", error);
        });
    },
    verDetalles(id) {
      this.$router.push({ name: "ver rutina", params: { id: id } });
    },
  },
};
</script>

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
