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

    <RouterLink
      class="see-more"
      :to="{ name: 'InformaciónRutina', params: { id: rutina.id } }"
      >Ver Más</RouterLink
    >
    <button class="save-routine" v-if="mostrarGuardado" @click="guardarRutina">
      Guardar
    </button>
  </div>
</template>

<style scoped>
main,
h1 {
  color: #fff;
  align-items: center;
}

.routine {
  border: 1px solid #fff;
  background-color: #fff;
  color: #000;
  border-radius: 1em;
  margin-bottom: 20px;
  padding: min(3em, 15%);
}

h1 {
  display: flex;
  align-items: center;
  margin: 30px;
  justify-content: center;
  padding: 0 20px;
  flex-grow: 1;
  text-align: center;
}

.see-more {
  justify-content: flex-end;
  border-radius: 10px;
  background: #0d0e16;
  color: #fff;
  width: 105px;
  height: 40px;
  border: none;
  padding: 5px 21px;
  margin: 5px;
  flex-shrink: 0;
  text-decoration: none;
}
</style>
