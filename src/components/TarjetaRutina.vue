<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  rutina: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const goTo = (page) => {
  router.push(page);
};

const guardarRutina = () => {
  axios
    .post("http://localhost:3000/rutinaGuardadas", props.rutina)
    .then((response) => {
      console.log("Rutina guardada:", response.data);
      mostrarGuardado.value = false;
    })
    .catch((error) => {
      console.error("Error al guardar la rutina:", error);
    });
};
</script>

<template>
  <div class="routine">
    <h2>{{ rutina.nombre }}</h2>
    <p><strong>Objetivo:</strong> {{ rutina.objetivo }}</p>
    <p>{{ rutina.descripcion }}</p>

    <RouterLink :to="{ name: 'informacion-rutina', params: { id: rutina.id } }"
      >Ver Más</RouterLink
    >
    <button class="save-routine" v-if="mostrarGuardado" @click="guardarRutina">
      Guardar
    </button>
  </div>
</template>
