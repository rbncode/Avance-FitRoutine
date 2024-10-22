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