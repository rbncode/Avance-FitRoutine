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
      <div class="form-container">
        <div class="vertical-form">
          <label for="level">Seleccione su nivel:</label>
          <select id="level" name="level" v-model="selectedLevel">
            <option value="" disabled selected hidden>Nivel</option>
            <option value="easy">Fácil</option>
            <option value="intermediate">Intermedio</option>
            <option value="difficult">Difícil</option>
          </select>
        </div>

        <div class="vertical-form">
          <label for="muscle-group">Seleccione sector muscular:</label>
          <select
            id="muscle-group"
            name="muscle-group"
            v-model="selectedMuscleGroup"
          >
            <option value="" disabled selected hidden>Sector muscular</option>
            <option value="t.superior">T. Superior</option>
            <option value="core">Core</option>
            <option value="t.inferior">T. Inferior</option>
          </select>
        </div>
      </div>

      <div class="resultados">
        <div v-for="(rutina, index) in filtrarRutinas" :key="index">
          <TarjetaRutina :rutina="rutina" />
        </div>
      </div>

      <div class="coach-virtual">
        <h3>¿No sabes qué elegir? ¡Pregúntale a nuestro Coach Virtual!</h3>
        <button @click="goTo" class="consultar-btn">Consultar</button>
      </div>
    </div>
  </main>
</template>
