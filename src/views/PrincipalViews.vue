<template>
    <section class="hero">
        <div class="hero-text">
            <h1>
                <span class="line1">Bienvenido</span>
                <span class="line2">a FitRoutine</span>
            </h1>

            <RouterLink to="/Login">
                <button class="btn">Comenzar</button>
            </RouterLink>
        </div>
    </section>

    <section class="mission">
        <div class="mission-content">
            <img src="../views/img/mision.jpg" alt="Imagen de entrenamiento" class="mission-img">
            <div class="mission-text">
                <h2>Nuestra Misión</h2>
                <p>A medida que más personas se inscriben en el gimnasio, se vuelve fundamental contar con un plan de
                    entrenamiento para mejorar cada día y seguir una rutina de manera ordenada.</p>
                <p>Un plan bien estructurado no solo maximiza los resultados, sino que también ayuda a mantener la
                    motivación y la constancia en el camino hacia tus objetivos fitness.</p>
            </div>
        </div>
    </section>
    <EjerciciosComponente />

</template>


<script setup>
import EjerciciosComponente from '@/components/EjerciciosComponente.vue';
</script>

<style scoped>
.hero {
    position: relative;
    background: url('../views/img//fitrutine-principal.png') no-repeat center center/cover;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
}

.hero-text h1 {
    font-size: 48px;
    color: white;
    font-size: 48px;
    z-index: 2;
}

.hero-text .line1 {
    display: block;
    font-size: 48px;
}

.hero-text .line2 {
    display: block;
    font-size: 48px;
}

.btn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #ff3b3b;
    color: white;
    border: none;
    border-radius: 19px;
    cursor: pointer;
    font-weight: bold;
}

.mission {
    background-color: #1e1e1e;
    padding: 20px 20px 40px;
}

.mission-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

}

.mission-img {
    width: 50%;
    border-radius: 10px;
    max-height: 300px;
    object-fit: cover;
}

.mission-text {
    width: 55%;
    color: white;
    padding-left: 20px;
}

.mission-text h2 {
    font-size: 32px;
    margin: 0 0 20px 20px;

}

.mission-text p {
    margin-bottom: 10px;
}
</style>