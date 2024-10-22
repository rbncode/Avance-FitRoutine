<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BotonGris from '@/components/BotonGris.vue';

const ejercicios = ref([]);

const cargarEjercicios = async () => {
    try {
        const res = await axios.get('http://localhost:3000/ejercicios');
        // Filtro
        ejercicios.value = res.data.filter(ejercicio => ejercicio.grupoMuscular === 'Tren Inferior');
    } catch (error) {
        console.error('Error al cargar los ejercicios:', error);
    }
};

onMounted(cargarEjercicios);
</script>

<template>

    <main class="ejercicios-container">
        <!-- Contenido Principal -->
        <section class="main-content">
            <h2>Tren Inferior</h2>
            <p>Ejercicios que desarrollan fuerza y estabilidad en las piernas y glúteos, trabajando músculos como
                cuádriceps, isquiotibiales, aductores y pantorrillas, con movimientos como sentadillas, estocadas y peso
                muerto.</p>

            <!-- Lista ejercicios -->
            <div class="lista">
                <div v-for="ejercicio in ejercicios" :key="ejercicio.id" class="ejercicio">
                    <img :src="ejercicio.imagen" :alt="ejercicio.nombre">
                    <div>
                        <h3>{{ ejercicio.nombre }}</h3>
                        <p>{{ ejercicio.descripcion }}</p>
                        <BotonGris :link="`/DetalleEjercicio/${ejercicio.id}`" button-text="Detalles" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>