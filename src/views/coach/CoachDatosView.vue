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
    margin: 8px auto;
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

/* Estilos para las opciones (peso, sexo, altura) */
.options {
    display: flex;
    justify-content: space-between;
    gap: 40px;
}

.option {
    background-color: #2c2c2c;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    text-align: center;
}

.option img {
    width: 100%;
    margin-bottom: 10px;
}

.option label {
    display: block;
    margin-bottom: 10px;
    font-size: 1em;
}

.option input[type="number"] {
    width: 70%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1em;
    margin-top: 10px;
    background-color: #3c3c3c;
    color: white;
}

/* Estilo para las opciones de sexo */
.sexo-options {
    display: inline-flex;
    align-content: center;
    justify-content: space-around;
}

.sexo-options input[type="radio"] {
    margin-right: 5px;
}

.sexo-options label {
    font-size: 1em;
    margin: 0 10px 0 5px
}

.boton-continuar{
    background-color: #d22;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2em;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
}

.boton-continuar:hover{
    background-color: #c00;
}
</style>