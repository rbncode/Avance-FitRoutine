<script setup>
import BotonRojo from '@/components/BotonRojo.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const objetivoSeleccionado = ref('');
const router = useRouter();

const seleccionarObjetivo = (objetivo) => {
    objetivoSeleccionado.value = objetivo;
    localStorage.setItem('objetivo', objetivo); // Guardar el objetivo en localStorage
};

</script>

<template>
    <main class="coach-container">
        <div class="grid-container">
            <div class="boton">
                <BotonRojo link="/CoachDatos" button-text="Volver" />
            </div>
            <div class="mensaje-inicial">
                <h2>COACH VIRTUAL</h2>
                <p>¿Cuál es tu objetivo?</p>
            </div>
        </div>

        <div class="coach-virtual">
            <div class="options">
                <!-- Ganar Masa Muscular -->
                <div 
                    class="option" 
                    :class="{ 'selected': objetivoSeleccionado === 'Ganar masa muscular' }" 
                    @click="seleccionarObjetivo('Ganar masa muscular')"
                >
                    <h3>Ganar masa muscular</h3>
                    <p>Descubre el poder de esculpir tu cuerpo con una rutina que tonifica cada músculo y maximizando definición.</p>
                    <img src="../coach/img-coach/musculo.png" alt="musculo.png">
                </div>

                <!-- Bajar de Peso -->
                <div 
                    class="option" 
                    :class="{ 'selected': objetivoSeleccionado === 'Bajar de Peso' }" 
                    @click="seleccionarObjetivo('Bajar de Peso')"
                >
                    <h3>Bajar de Peso</h3>
                    <p>Libérate de esos kilos extra con una rutina enfocada en quemar grasa y mejorar tu resistencia, transformando tu energía y salud de manera efectiva.</p>
                    <img src="../coach/img-coach/bascula.png" alt="bascula.png">
                </div>

                <!-- Ganar Fuerza -->
                <div 
                    class="option" 
                    :class="{ 'selected': objetivoSeleccionado === 'Ganar fuerza' }" 
                    @click="seleccionarObjetivo('Ganar fuerza')"
                >
                    <h3>Ganar fuerza</h3>
                    <p>Desafía tus límites y construye fuerza sólida con entrenamientos diseñados para aumentar tu potencia y mejorar tu rendimiento en cada aspecto de tu vida.</p>
                    <img src="../coach/img-coach/musculos.png" alt="musculos.png">
                </div>
            </div>
            <BotonRojo link="/CoachResultado" button-text="Continuar" />
        </div>
    </main>
</template>

<style scoped>
.coach-container {
    font-family: 'Poppins', sans-serif;
    background-color: #292828;
    color: #fff;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.mensaje-inicial {
    text-align: center;

    h2 {
        font-size: 2em;
        margin-bottom: 10px;
        margin-top: 20px;
    }
}

.boton {
    margin-left: 30px;
}

.coach-virtual {
    text-align: center;
    padding: 20px;
    margin: 10px auto 20px auto;
    width: 90%;
    max-width: 1000px;
    background-color: #212121;
    color: white;
    border-radius: 10px;
}

.coach-virtual h2 {
    font-size: 2em;
    margin-bottom: 10px;
}

.coach-virtual p {
    margin-bottom: 30px;
    font-size: 1.2em;
}

.options {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    p {
        font-size: 0.8rem;
    }
}

.option {
    background-color: #2c2c2c;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
}

.option img {
    width: 70%;
    margin-bottom: 10px;
}

.option label {
    display: block;
    margin-bottom: 10px;
    font-size: 1.2em;
}

.option:hover{
    background-color: #3b3b3b; 
    transform: translateY(-5px);
}

.selected {
    background-color: #4CAF50; /* Cambia el color de fondo al ser seleccionado */
    transform: translateY(-5px); /* Mantén el efecto de levantado */
}
</style>