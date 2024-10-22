<template>

    <main class="coach-container">
        <div class="grid-container">
            <div class="boton">
                <BotonRojo link="/" button-text="Volver" />
            </div>
            <div class="mensaje-inicial">
                <h2>COACH VIRTUAL</h2>
                <p>Antes de comenzar, necesitamos conocerte...</p>
            </div>
        </div>
        <div class="coach-virtual">
            <div class="options">
                <form>
                    <div class="options">

                        <!-- Altura -->
                        <div class="option">
                            <label for="altura">¿Cuánto mides?</label>
                            <img src="../coach/img-coach/limite-de-altura.png" alt="altura.png">
                            <input type="number" id="altura" placeholder="Cm" required min="120"
                                max="250">
                        </div>

                        <!-- Peso -->
                        <div class="option">
                            <label for="peso">¿Cuánto pesas?</label>
                            <img src="../coach/img-coach/bascula(1).png" alt="bascula.png">
                            <input type="number" id="peso" placeholder="Kg" required min="20" max="560">
                        </div>

                        <!-- Sexo -->
                        <div class="option">
                            <label>¿Cuál es tu sexo?</label>
                            <img src="../coach/img-coach/masculino-y-femenino.png" alt="sexos.png">
                            <div class="sexo-options">
                                <input type="radio" id="masculino" name="sexo" value="masculino"
                                    required>
                                <label for="masculino">Masculino</label>
                                <input type="radio" id="femenino" name="sexo" value="femenino" required>
                                <label for="femenino">Femenino</label>
                            </div>
                        </div>

                        <!-- Días Disponibles de la Semana -->
                        <div class="option">
                            <label for="dias">¿Cuántos días entrenarás?</label>
                            <img src="../coach/img-coach/calendario.png" alt="calendario.png">
                            <input type="number" id="dias" placeholder="1 a 7" required min="1" max="7">
                        </div>
                    </div>

                    <button type="submit" class="boton-continuar">Continuar</button>
                </form>
            </div>
        </div>

    </main>

</template>