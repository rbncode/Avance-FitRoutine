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
          this.routine = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template></template>
