<template>

    <main class="coach-container">
        <div class="contenedor-principal">
          <div class="coach-virtual">
            <div class="mensaje-inicial">
              <h2>COACH VIRTUAL</h2>
              <p>Perfecto, según tus preferencias, esta rutina es ideal para ti</p>
            </div>
  
            <!-- Rutinas Recomendadas -->
            <div class="rutinas">
              <div class="rutina">
                <h3>RUTINA DE PIERNAS</h3>
                <p>Objetivo: hipertografía en piernas</p>
                <ul>
                  <li>Sentadillas</li>
                  <li>Prensa de pierna</li>
                  <li>Peso muerto</li>
                </ul>
                <button class="btn editar"><i class='bx bx-edit'></i>Modificar</button>
                <button class="btn eliminar"><i class='bx bx-trash'></i>Eliminar</button>
              </div>
  
              <div class="rutina">
                <h3>RUTINA DE PECHO/BICEPS</h3>
                <p>Objetivo: hipertografía pecho y tríceps</p>
                <ul>
                  <li>Press de banca</li>
                  <li>Curl de bíceps</li>
                  <li>Press inclinado</li>
                </ul>
                <button class="btn editar"><i class='bx bx-edit'></i>Modificar</button>
                <button class="btn eliminar"><i class='bx bx-trash'></i>Eliminar</button>
              </div>
            </div>
  
            <!-- Resumen de datos -->
            <div class="resumen-datos">
              <h3>RESUMEN DE DATOS</h3>
              <p>Objetivo: <span class="destacar">Ganar masa muscular</span></p>
              <p>Altura: <span class="destacar">x</span></p>
              <p>Peso: <span class="destacar">x</span></p>
              <p>IMC (Inidce de masa corporal): <span class="destacar">x</span></p>
              <p>Rango de peso: <span class="destacar">x</span></p>
            </div>
  
            <!-- Recomendaciones de Salud -->
            <div class="recomendaciones-salud">
              <h3>RECOMENDACIONES DE SALUD</h3>
              <p>recomendacion</p>
            </div>
          </div>
          <div class="centrar">
            <button class="boton-continuar">Continuar</button>
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
  }
}

.centrar {
  text-align: center;
}

.contenedor-principal {
  width: 80%;
  max-width: 900px;
  margin: 15px auto;
  background-color: #212121;
  padding: 20px;
  border-radius: 10px;
}

.rutinas {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.rutina {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  text-align: left;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #b0b0b0;
  }

  ul {
    margin-left: 20px;
    color: #fff;
  }

  ul li {
    margin-bottom: 5px;
  }
}

/* Resumen de datos */
.resumen-datos {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: left;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #b0b0b0;
  }

  .destacar {
    color: #fff;
    font-weight: bold;
  }
}

/* Recomendaciones de salud */
.recomendaciones-salud {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: left;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1em;
    color: #b0b0b0;
  }
}

.boton-continuar {
  background-color: #d22;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
}

.boton-continuar:hover {
  background-color: #c00;
}

</style>