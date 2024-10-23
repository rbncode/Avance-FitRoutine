<template>
    <section class="exercises">
        <h2>Descubre tus ejercicios</h2>
        <div class="exercise-grid">
            <router-link to="/ListaCore" class="exercise-item">
                <h3>Core</h3>
                <img src="../views/img/core.jpeg" alt="Ejercicio de Core">
            </router-link>
            
            <router-link to="/ListaTrenI" class="exercise-item">
                <h3>Tren Inferior</h3>
                <img src="../views/img/tren-infeior.jpg" alt="Ejercicio de Tren Inferior">
            </router-link>
            
            <router-link to="/ListaTrenS" class="exercise-item">
                <h3>Tren Superior</h3>
                <img src="../views/img/tren-superior.jpg" alt="Ejercicio de Tren Superior">
            </router-link>
        </div>
    </section>
</template>


<style scoped>

.exercises {
    padding: 40px 20px;
    text-align: center;
    color: #000;
    background-color: #0D0E16;
}

.exercises h2 {
    color: white;
    font-size: 32px;
}

.exercise-grid {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.exercise-item {
    width: 30%;
    text-align: center;
    color: white;
    text-decoration: none;

    border-radius: 5px;
    padding: 15px;

}

.exercise-item img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 20px;

}

.exercise-item h3 {
    margin-top: 10px;
    font-size: 18px;
    color: #e3e3e3;
}

</style>