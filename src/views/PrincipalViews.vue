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


