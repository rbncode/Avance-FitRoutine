<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const ejercicio = ref({});
const route = useRoute();
const router = useRouter();

const cargarEjercicio = async () => {
    const id = route.params.id;
    try {
        const res = await axios.get(`http://localhost:3000/ejercicios/${id}`);
        ejercicio.value = res.data;
    } catch (error) {
        console.error('Error al cargar los detalles del ejercicio:', error);
    }
};

const volverAtras = () => {
    router.go(-1);
};

const instruccionesConSaltos = computed(() => {
    return ejercicio.value.instrucciones ? ejercicio.value.instrucciones.replace(/\n/g, '<li>') : '';
});

onMounted(cargarEjercicio);
</script>

<template>

    <main class="detalle-container">
        <div class="barra-superior">
            <button class="button-volver" v-on:click="volverAtras()">Volver</button>
            <h2>{{ ejercicio.nombre }}</h2>
        </div>
        <div class="grid-container-ejercicio">
            <div class="demo">
                <h3>Demostración</h3>
                <img :src="ejercicio.imagen" :alt="ejercicio.nombre" width="500px" style="margin-top: 25px;" />
            </div>
            <div class="info">
                <div class="instrucciones">
                    <h3>Indicaciones</h3>
                    <ul>
                        <li v-html="instruccionesConSaltos"></li>
                    </ul>
                </div>
                <div class="peso-recomendado">
                    <h3 class="peso-mensaje">Peso recomendado: {{ ejercicio.pesoRecomendado }} Kg</h3>
                    <ul>
                        <li>Este peso es el recomendado para poder familiarizarte con la ejecución del ejercicio.</li>
                        <li>Una vez logres sentirte cómodo realizando el ejercicio, puedes sumar más peso, añadir más
                            repeticiones o series para progresar tu desarrollo físico.</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
.detalle-container {
    font-family: 'Poppins', sans-serif;
    background-color: #292828;
    color: #fff;
}

.barra-superior {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .button-volver {
        margin-left: 25px;
        background-color: #d22;
        color: white;
        border: none;
        font-size: 1.2em;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 30px;
        width: 120px;
        height: 45px;
        padding: 10px;
    }

    .button-volver:hover {
        background-color: #c00;
    }
}

.barra-superior h2 {
    text-align: center;
    align-items: center;
    font-size: 2rem;
}

.grid-container-ejercicio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px 90px;
    padding: 20px;
    border-radius: 3%;
    background-color: #ffffff;
    color: #121212;
}

.instrucciones h3,
.peso-mensaje,
.demo h3 {
    background-color: #121212;
    color: #ffffff;
    font-size: 2rem;
    padding-left: 7%;
    margin: 0 -1%;
    border-radius: 5%;
    width: 50%;
}

.instrucciones ul, .peso-recomendado ul{
    margin: 15px 0;
}

.grid-container ul {
    margin: 3%;
}

.peso-mensaje {
    width: 80%;
}
</style>