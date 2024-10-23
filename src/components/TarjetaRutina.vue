<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  rutina: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const mostrarGuardado = ref(true);

const guardarRutina = async () => {
  const nuevaRutina = {
    nombre: props.rutina.nombre,
    descripcion: props.rutina.descripcion,
    nivelDificultad: props.rutina.nivelDificultad,
    grupoMuscular: props.rutina.grupoMuscular,
    ejercicios: props.rutina.ejercicios,
  };

  try {
    const res = await fetch("http://localhost:3000/rutinasGuardadas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaRutina),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    console.log("Rutina guardada:", data);
    mostrarGuardado.value = false; // Oculta el botón después de guardar
  } catch (error) {
    console.error("Error al guardar la rutina:", error);
  }
};
</script>

<template>
  <div class="routine">
    <h2>{{ rutina.nombre }}</h2>
    <p><strong>Objetivo:</strong> {{ rutina.objetivo }}</p>
    <p>{{ rutina.descripcion }}</p>

    <div class="btn-container">
      <button class="see-more">
        <RouterLink
          class="no-link"
          :to="{ name: 'InformaciónRutina', params: { id: rutina.id } }"
          >Ver Más</RouterLink
        >
      </button>
      <button
        class="save-routine"
        v-if="mostrarGuardado && !esVistaRutinas"
        @click="guardarRutina"
      >
        Guardar
      </button>
    </div>
  </div>
</template>

<style scoped>
main,
h1 {
  color: #fff;
  align-items: center;
}

.btn-container {
  display: flex;
  gap: 10px;
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

.no-link {
  text-decoration: none;
  color: white;
}

.see-more {
  display: flex;
  width: 105px;
  height: 40px;
  padding: 5px 21px;
  justify-content: center;
  align-items: center;
  background: #0d0e16;
  border: none;
  color: #fff;
  font-weight: 400;
  gap: 10px;
  border-radius: 10px;
}

.save-routine {
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
}
</style>
