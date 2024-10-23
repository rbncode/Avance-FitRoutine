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
        .get("http://localhost:3000/rutinasGuardadas")
        .then((response) => {
          this.rutinas = response.data;
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
  <div v-if="rutinas.length == 0" class="container">
    <h3>Aún no tienes rutinas, ¡Agrega una rutina!</h3>
    <RouterLink class="add-routine" to="/AgregarRutinas"
      >Agregar Rutina</RouterLink
    >
  </div>
  <div v-else class="container">
    <RouterLink class="add-routine" to="/AgregarRutinas"
      >Agregar Rutina</RouterLink
    >
    <div
      v-for="(rutina, index) in rutinas"
      :key="index"
      class="container-routine"
    >
      <TarjetaRutina :rutina="rutina" :esVistaRutinas="true" />
    </div>
  </div>
</template>

<style scoped>
.container {
  min-width: 600px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-routine {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.add-routine {
  display: flex;
  width: 180px;
  height: 50px;
  padding: 3px 21px;
  justify-content: center;
  background: #ad283d;
  border: none;
  color: #fff;
  font-weight: 400;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  flex-shrink: 0;
  text-decoration: none;
  margin-bottom: 50px;
}
</style>
