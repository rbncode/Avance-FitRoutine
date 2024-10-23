<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import BotonNegro from "@/components/BotonNegro.vue";

// Definir variables reactivas
const rutinas = ref([]);
const router = useRouter();

// Método para cargar las rutinas desde el backend
const cargarRutinas = async () => {
  try {
    const res = await axios.get("http://localhost:3000/rutinas");
    rutinas.value = res.data;
  } catch (error) {
    console.error("Error al cargar las rutinas:", error);
  }
};

// Método para redirigir a la página de edición de rutina
const editarRutina = (id) => {
  router.push(`/AdminEditarRutina/${id}`);
};

// Método para eliminar una rutina
const eliminarRutina = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/rutinas/${id}`);
    cargarRutinas(); // Recargar las rutinas después de eliminar
  } catch (error) {
    console.error("Error al eliminar la rutina:", error);
  }
};

// Cargar rutinas al montar el componente
onMounted(cargarRutinas);
</script>

<template>
  <main>
    <div class="container">
      <div class="routine-info">
        <h2>Rutinas</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th class="centrar">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rutina in rutinas" :key="rutina.id">
              <td>{{ rutina.nombre }}</td>
              <td>{{ rutina.descripcion }}</td>
              <td>
                <button @click="editarRutina(rutina.id)" class="btn edit">
                  <i class="bx bx-edit"></i>Editar</button
                ><button @click="eliminarRutina(rutina.id)" class="btn delete">
                  <i class="bx bx-trash"></i>Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <BotonNegro link="/AdminNuevaRutina" button-text="Agregar Rutina" />
      </div>
    </div>
  </main>
</template>
<style scoped>
.container {
  margin-left: 270px;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  background-color: #0d0e16;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.routine-info {
  width: 100%;
  max-width: 1100px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  color: #000;
}

.routine-info table {
  width: 100%;
  border-collapse: collapse;
}

.routine-info table thead th {
  font-size: 18px;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
}

.routine-info table tbody th {
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

.btn.edit {
  background-color: #000;
  color: #fff;
}

.btn.delete {
  background-color: red;
  color: #fff;
}

.btn.delete:hover,
.btn.edit:hover {
  background-color: #2a2b38;
}

button i {
  margin-right: 8px;
}

.centrar {
  padding-left: 50px;
}
</style>
