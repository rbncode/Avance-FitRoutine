<script></script>

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
        <div v-for="(rutina, index) in rutinas" :key="index">
          <RoutineCard :rutina="rutina" />
        </div>
      </div>

      <div class="coach-virtual">
        <h3>¿No sabes qué elegir? ¡Pregúntale a nuestro Coach Virtual!</h3>
        <button @click="goTo" class="consultar-btn">Consultar</button>
      </div>
    </div>
  </main>
</template>
