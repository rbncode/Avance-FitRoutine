<script setup>
import BotonNegro from '@/components/BotonNegro.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const ejercicios = ref([]);
const router = useRouter();

const cargarEjercicios = async () => {
    try {
        const res = await axios.get('http://localhost:3000/ejercicios');
        ejercicios.value = res.data;
    } catch (error) {
        console.error('Error al cargar los ejercicios:', error);
    }
};

const editarEjercicio = (id) => {
    router.push(`/AdminEditarEjercicio/${id}`);
};

const eliminarEjercicio = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/ejercicios/${id}`);
        cargarEjercicios();
    } catch (error) {
        console.error('Error al eliminar el ejercicio:', error);
    }
};

onMounted(cargarEjercicios);
</script>

<template>

    <main>
        <section class="content">
            <div class="exercise-table">
                <h1>Ejercicios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Sector Muscular</th>
                            <th>Peso Recomendado</th>
                            <th class="centrar">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ejercicio in ejercicios" :key="ejercicio.id">
                            <td>{{ ejercicio.nombre }}</td>
                            <td>{{ ejercicio.grupoMuscular }}</td>
                            <td class="centrar">{{ ejercicio.pesoRecomendado }} Kg</td>
                            <td>
                                <button class="btn editar" @click="editarEjercicio(ejercicio.id)">
                                    <i class='bx bx-edit'></i>Editar
                                </button>
                                <button class="btn eliminar" @click="eliminarEjercicio(ejercicio.id)"><i
                                        class='bx bx-trash'></i>Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <BotonNegro link="/AdminCrearEjercicio" button-text="+ Añadir Ejercicio" />
            </div>
        </section>
    </main>
</template>

<style scoped>
.content {
    margin-left: 270px;
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 60px;
    background-color: #0D0E16;
}

h1 {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
}

.exercise-table {
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    color: #000;
}

.exercise-table table {
    width: 100%;
    border-collapse: collapse;
}

.exercise-table table thead th {
    font-size: 18px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
}

.exercise-table table tbody th {
    font-size: 18px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
}

td {
    padding: 15px 10px;
    border-bottom: 1px solid #ccc;
}


.btn {
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    margin: 0 4px;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn.editar {
    background-color: #000;
    color: #fff;
}

.btn.eliminar {
    background-color: red;
    color: #fff;
}

.btn.eliminar:hover,
.btn.editar:hover {
    background-color: #2a2b38;
}

button i {
    margin-right: 8px;
}

.centrar {
    padding-left: 50px;
}
</style>