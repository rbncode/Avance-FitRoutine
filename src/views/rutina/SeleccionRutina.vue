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

<style scoped>
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
