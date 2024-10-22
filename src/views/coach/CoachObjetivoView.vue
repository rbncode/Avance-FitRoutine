<script setup>
import BotonRojo from '@/components/BotonRojo.vue';
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
                <div class="option">
                    <h3>Ganar masa muscular</h3>
                    <p>Descubre el poder de esculpir tu cuerpo con una rutina que tonifica cada músculo y maximizando
                        definición.</p>
                    <img src="../coach/img-coach/bascula.png" alt="bascula.png">
                </div>

                <!-- Bajar de Peso -->
                <div class="option">
                    <h3>Bajar de Peso</h3>
                    <p>Libérate de esos kilos extra con una rutina enfocada en quemar grasa y mejorar tu resistencia,
                        transformando tu energía y salud de manera efectiva.</p>
                    <img src="../coach/img-coach/musculo.png" alt="musculo.png">
                </div>

                <!-- Ganar Fuerza -->
                <div class="option">
                    <h3>Ganar fuerza</h3>
                    <p>Desafía tus límites y construye fuerza sólida con entrenamientos diseñados para aumentar tu
                        potencia
                        y mejorar tu rendimiento en cada aspecto de tu vida.</p>
                    <img src="../coach/img-coach/musculos.png" alt="musculos.png">
                </div>
            </div>
            <BotonRojo link="/CoachResultado" button-text="Continuar" />
        </div>
    </main>
</template>