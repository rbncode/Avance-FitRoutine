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

<style scoped>
.ejercicios-container {
    font-family: 'Poppins', sans-serif;
    background-color: #292828;
    color: #fff;
}

.main-content {
    text-align: center;
    padding: 40px 20px;
}

.main-content h2 {
    font-size: 36px;
    margin-bottom: 10px;
}

.main-content p {
    font-size: 18px;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.lista {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 0 20px;
}

.ejercicio {
    background-color: #ffffff;
    color: #000;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.ejercicio img {
    height: 200px;
    width: 200px;
    left: 60px;
    position: relative;
    object-fit: cover;
    border-bottom: 2px solid #fff;
}

.ejercicio h3 {
    font-size: 22px;
    margin: 15px 0 10px;
}

.ejercicio p {
    font-size: 16px;
    margin-bottom: 20px;
}
</style>