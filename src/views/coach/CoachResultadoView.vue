<script>
import { NeuralNetwork } from 'brain.js';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      altura: 0,
      peso: 0,
      imc: null,
      clasificacion: '',
      recomendacion: '',
      iaCargando: true,
      net: new NeuralNetwork(),
      router: useRouter(),
      objetivo: localStorage.getItem('objetivo') || 'No definido',
    };
  },
  mounted() {

    // Recuperar los datos de localStorage
    this.peso = localStorage.getItem('peso') || 0;
    this.altura = localStorage.getItem('altura') || 0;

    // Entrenamiento de la red neuronal
    setTimeout(() => {
      this.net.train([
        // Delgado
        { input: { imc: 12 / 40 }, output: { Delgado: 1 } },
        { input: { imc: 18 / 40 }, output: { Delgado: 1 } },
        { input: { imc: 18.5 / 40 }, output: { Delgado: 1 } },
        // Saludable
        { input: { imc: 18.6 / 40 }, output: { Saludable: 1 } },
        { input: { imc: 22 / 40 }, output: { Saludable: 1 } },
        { input: { imc: 24.9 / 40 }, output: { Saludable: 1 } },
        // Sobrepeso
        { input: { imc: 25 / 40 }, output: { Sobrepeso: 1 } },
        { input: { imc: 27 / 40 }, output: { Sobrepeso: 1 } },
        { input: { imc: 29.9 / 40 }, output: { Sobrepeso: 1 } },
        // Obeso
        { input: { imc: 30 / 40 }, output: { Obeso: 1 } },
        { input: { imc: 32 / 40 }, output: { Obeso: 1 } },
        { input: { imc: 40 / 40 }, output: { Obeso: 1 } },
      ]);

      this.iaCargando = false;
      this.calcularIMC();
    }, 2000);
  },
  methods: {
    calcularIMC() {
      const alturaMetros = this.altura / 100;
      this.imc = this.peso / (alturaMetros * alturaMetros);
      const imcNormalizado = this.imc / 40;
      const resultado = this.net.run({ imc: imcNormalizado });

      const clasificaciones = Object.keys(resultado).filter(
        (categoria) => resultado[categoria] > 0.5
      );

      if (clasificaciones.length > 0) {
        this.clasificacion = clasificaciones[0];
      } else {
        this.clasificacion = 'No clasificado';
      }

      this.recomendacion = this.obtenerRecomendacion(this.clasificacion);
    },
    obtenerRecomendacion(clasificacion) {
      const recomendaciones = {
        Delgado: 'Es recomendable aumentar el consumo de calorías de manera equilibrada, con alimentos ricos en nutrientes. Consulta a un nutricionista.',
        Saludable: 'Sigue manteniendo una dieta balanceada y hábitos saludables. Realiza ejercicio regularmente y mantén un buen balance de nutrientes.',
        Sobrepeso: 'Es recomendable reducir el consumo de alimentos altos en calorías y aumentar la actividad física. Consulta a un nutricionista para una dieta adecuada.',
        Obeso: 'Se recomienda adoptar un plan de pérdida de peso que incluya una dieta equilibrada y ejercicio regular. Consulta a un profesional de la salud para obtener orientación.',
        'No clasificado': 'Por favor, verifica los datos ingresados y vuelve a intentar el cálculo.',
      };

      return recomendaciones[clasificacion];
    },
    goToPrincipal() {
      this.router.push('/');
    }
  }
};
</script>

<template>

  <main class="coach-container">
    <!-- Loader de carga -->
    <div v-if="iaCargando" class="loader">
      <h2>Cargando resultados, por favor espera...</h2>
      <div class="dot-spinner">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div>
    </div>
    <!-- Contenido principal de la página -->
    <div v-else>
      <div class="contenedor-principal">
        <div class="coach-virtual">
          <div class="mensaje-inicial">
            <h2>COACH VIRTUAL</h2>
            <p>Perfecto, según tus preferencias, esta rutina es ideal para ti</p>
          </div>

          <!-- Rutinas Recomendadas -->
          <div class="rutinas">
            <div class="container-rutina">
              <!-- Rutinas para Ganar Masa Muscular -->
              <div v-if="objetivo === 'Ganar masa muscular'" class="rutina">
                <h3>RUTINA 1 - Ganar Masa Muscular</h3>
                <ul>
                  <li>Sentadillas</li>
                  <li>Press de banca</li>
                  <li>Sentadilla con Barra</li>
                </ul>
              </div>

              <div v-if="objetivo === 'Ganar masa muscular'" class="rutina">
                <h3>RUTINA 2 - Ganar Masa Muscular</h3>
                <ul>
                  <li>Remo de 90° Abierto con Mancuerna</li>
                  <li>Remo Horizontal con Mancuerna</li>
                  <li>Curl de Biceps con Mancuerna</li>
                </ul>
              </div>

              <!-- Rutinas para Perder Peso -->
              <div v-if="objetivo === 'Bajar de Peso'" class="rutina">
                <h3>RUTINA 1 - Perder Peso</h3>
                <ul>
                  <li>Correr 30 minutos</li>
                  <li>Sentadilla</li>
                  <li>Abdominal con Giro</li>
                </ul>
              </div>

              <div v-if="objetivo === 'Bajar de Peso'" class="rutina">
                <h3>RUTINA 2 - Perder Peso</h3>
                <ul>
                  <li>Plancha</li>
                  <li>Patadas de Tijera</li>
                  <li>Abdominales Bicicleta</li>
                </ul>
              </div>

              <!-- Rutinas para Ganar Fuerza -->
              <div v-if="objetivo === 'Ganar fuerza'" class="rutina">
                <h3>RUTINA 1 - Ganar Fuerza</h3>
                <ul>
                  <li>Sentadilla con Barra</li>
                  <li>Press de banca</li>
                  <li>Remo de 90° Abierto con Mancuerna</li>
                </ul>
              </div>

              <div v-if="objetivo === 'Ganar fuerza'" class="rutina">
                <h3>RUTINA 2 - Ganar Fuerza</h3>
                <ul>
                  <li>Peso Muerto</li>
                  <li>Curl de Bicep con Barra</li>
                  <li>Curl de Biceps con Mancuerna</li>
                </ul>
              </div>
            </div>

            <!-- Resumen de datos -->
            <div class="resumen-datos">
              <h3>RESUMEN DE DATOS</h3>
              <p>Objetivo: <span class="destacar">{{ objetivo }}</span></p>
              <p>Altura: <span class="destacar">{{ altura }} cm</span></p>
              <p>Peso: <span class="destacar">{{ peso }} Kg</span></p>
              <p>IMC (Inidce de masa corporal): <span class="destacar">{{ imc.toFixed(2) }}</span></p>
              <p>Rango de peso: <span class="destacar">{{ clasificacion }}</span></p>
            </div>

            <!-- Recomendaciones de Salud -->
            <div class="recomendaciones-salud">
              <h3>RECOMENDACIONES DE SALUD</h3>
              <p>{{ recomendacion }}</p>
            </div>
          </div>
          <div class="centrar">
            <button class="boton-continuar" @click="goToPrincipal">Continuar</button>
          </div>
        </div>
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
  margin-top: 10px;
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

/* Loader */

.loader {
  display: inline-flex;
  text-align: center;
  align-items: center;
  margin: 10px 10px;
  gap: 10px;
}

.dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: .9s;
  --uib-color: #183153;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: '';
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {

  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>