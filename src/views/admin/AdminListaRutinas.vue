<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
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
      router.push(`/admin-editar-rutina/${id}`);
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

    return {
      rutinas,
      editarRutina,
      eliminarRutina,
    };
  },
};
</script>
