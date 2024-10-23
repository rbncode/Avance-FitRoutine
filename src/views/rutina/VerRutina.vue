<script>
import axios from "axios";
import BotonVuelta from "@/components/BotonVuelta.vue";

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
      <BotonVuelta />
    </div>
    <div class="info-rutina">
      <h2 style="text-align: center">{{ rutina.nombre }}</h2>
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
main {
  padding: min(30px, 7%);
  background-color: #0f1017;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "navbar"
    "main";
}

h2 {
  color: white;
  margin: 0;
  padding: 10px 0; /* Adjust this padding as necessary */
  text-align: center;
}

.info-rutina {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* Reduce the margin-top to decrease the spacing */
}

.info-rutina table {
  border-radius: 10px;
  width: 50%;
  margin: 10px 0; /* Add some margin to create space between the heading and the table */
  height: auto;
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
