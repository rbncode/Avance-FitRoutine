<script setup>
import TarjetaRutina from "@/components/TarjetaRutina.vue";
import axios from "axios";
import { ref, computed, onMounted } from "vue";

const rutinas = ref([]);
const selectedLevel = ref(null);
const selectedMuscleGroup = ref(null);

const cargarRutinas = async () => {
  try {
    const res = await axios.get("http://localhost:3000/rutinas");
    rutinas.value = res.data;
  } catch (error) {
    console.error("Error al cargar las rutinas:", error);
  }
};

const filtrarRutinas = computed(() => {
  return rutinas.value.filter((rutina) => {
    const matchesLevel = selectedLevel.value
      ? rutina.nivelDificultad === selectedLevel.value
      : true;
    const matchesMuscleGroup = selectedMuscleGroup.value
      ? rutina.muscleGroup === selectedMuscleGroup.value
      : true;
    return matchesLevel && matchesMuscleGroup;
  });
});

onMounted(() => {
  cargarRutinas();
});
</script>

<template>
  <main>
    <div class="busqueda-container">
      <div class="resultados">
        <div v-for="(rutina, index) in filtrarRutinas" :key="index">
          <TarjetaRutina :rutina="rutina" :esVistaRutinas="false" />
        </div>
      </div>

      <div class="coach-virtual">
        <h3>¿No sabes qué elegir? ¡Pregúntale a nuestro Coach Virtual!</h3>
        <RouterLink to="/CoachDatos" class="consultar-btn"
          >Consultar</RouterLink
        >
      </div>
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

.busqueda-container {
  display: flex;
  max-width: 1200px;
  border: 1px solid var(--line-clr);
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondary-text-clr);
  border-radius: 1em;
  margin-bottom: 20px;
  padding: min(3em, 15%);
}

.form-container {
  display: flex;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 50px;
}

.vertical-form {
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
}

.form-container label,
select {
  flex: 1;
}

.nombre-rutina {
  color: #000;
  justify-content: flex-start;
}

.resultados {
  justify-content: center;
  margin: 20px;
  max-width: 1000px;
  padding: min(3em, 15%);
}

.resultado-rutina {
  border-radius: 10px;
  padding: 10px;
  border: 2px solid #cbcbcb;
  background: #fff;
  width: 958px;
  height: 98px;
  align-items: center;
  flex-shrink: 0;
  margin: 20px;
  display: flex;

  justify-content: space-between;
}

.guardar {
  display: flex;
  width: 105px;
  height: 40px;
  padding: 5px 21px;
  justify-content: center;
  align-items: center;
  background: #ad283d;
  border: none;
  color: #fff;
  font-weight: 400;
  gap: 10px;
  border-radius: 10px;
  flex-shrink: 0;
}

.coach-virtual {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.coach-virtual h3 {
  padding: 20px;
}
.consultar-btn {
  display: flex;
  width: 105px;
  height: 40px;
  padding: 10px 21px;
  justify-content: center;
  align-items: center;
  background: #ad283d;
  border: none;
  color: #fff;
  font-weight: 400;
  gap: 10px;
  border-radius: 10px;
  flex-shrink: 0;
}

.rutina-header {
  display: flex;
  font-size: 3em;
  justify-content: center;
  margin: 50px auto;
}
</style>
