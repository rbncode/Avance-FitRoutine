<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      rutina: {
        ejercicios: [],
      },
    };
  },
  created() {
    this.cargarDetalleRutina();
    console.log("Routine ID:", this.id);
  },
  methods: {
    cargarDetalleRutina() {
      axios
        .get(`http://localhost:3000/rutinas/${this.id}`)
        .then((response) => {
          this.rutina = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <main>
    <div class="volver">
      <button class="volver-btn" onclick="history.back()" id="back-button">
        Volver
      </button>
    </div>
    <h1 style="text-align: center">RUTINAS</h1>
    <h2 style="text-align: center">Nombre de Rutina</h2>
    <div class="info-rutina">
      <table>
        <thead>
          <tr>
            <th>Ejercicio</th>
            <th>Peso</th>
            <th>Repeticiones</th>
            <th>Series</th>
            <th>Descanso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ejercicio in rutina.ejercicios" :key="ejercicio.id">
            <td>{{ ejercicio.nombre }}</td>
            <td>{{ ejercicio.pesoRecomendado }}</td>
            <td>{{ ejercicio.repeticiones }}</td>
            <td>{{ ejercicio.series }}</td>
            <td>{{ ejercicio.descanso }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<style scoped>
.info-rutina {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-rutina table {
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  height: 20%;
}

.info-rutina th {
  background-color: #ad283d;
  color: white;
  padding: 10px;
  text-align: left;
  border: none;
}

.info-rutina td {
  padding: 10px;
  background-color: white;
  border: none;
  color: #000;
  text-align: left;
}
</style>
