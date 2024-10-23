<template>
    <div class="container">
        <form @submit.prevent="editarEjercicio">
            <h2 class="form-header">Editar Ejercicio</h2>
            <div class="form-row">
                <div class="left">
                    <p>Nombre del Ejercicio</p>
                    <input type="text" v-model="ejercicio.nombre" placeholder="Nombre previo..." required>
                    <p>Descripción</p>
                    <input type="text" v-model="ejercicio.descripcion" placeholder="Descripción previa..." required>
                    <p>Instrucciones</p>
                    <textarea v-model="ejercicio.instrucciones" placeholder="Instrucciones previas..."
                        rows="4"></textarea>
                    <div class="valores-def">
                        <p>Peso Recomendado</p>
                        <div class="peso-recomendado">
                            <input type="number" v-model="ejercicio.pesoRecomendado" id="pesoRecomendado" required />
                            <label for="pc-checkbox" class="pc-label">PC</label>
                            <input type="checkbox" id="pc-checkbox">
                        </div>
                        <label for="grupoMuscular">Grupo Muscular:</label>
                        <select v-model="ejercicio.grupoMuscular" id="grupoMuscular" required>
                            <option value="Tren Superior">Tren Superior</option>
                            <option value="Core">Core</option>
                            <option value="Tren Inferior">Tren Inferior</option>
                        </select>
                    </div>
                </div>
                <div class="right">
                    <h3>Demostración del ejercicio</h3>
                    <input type="file" class="selector-archivo" @change="cargarImagen" accept="image/*"/>
                    <label>Previsualización de Demostración</label>
                    <div class="preview">
                        <img :src="imagenURL || ejercicio.imagen || 'https://via.placeholder.com/150'" width="150px" alt="Demostración.jpg" />
                    </div>
                </div>
            </div>
            <div class="buttons">
                <button type="button" class="cancel-button" @click="cancelarCambios">Cancelar</button>
                <button type="submit" class="save-button">Guardar Cambios</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {
    setup() {
        const ejercicio = ref({
            nombre: '',
            grupoMuscular: '',
            pesoRecomendado: 0,
            descripcion: '',
            imagen: ''
        });
        const imagenURL = ref('');
        const route = useRoute();
        const router = useRouter();

        const cargarEjercicio = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/ejercicios/${route.params.id}`);
                ejercicio.value = res.data;
            } catch (error) {
                console.error('Error al cargar el ejercicio:', error);
            }
        };

        const cargarImagen = (event) => {
            const archivo = event.target.files[0];
            if (archivo) {

                ejercicio.value.imagen = `/src/views/lista-ejercicios/img-ejercicios/${archivo.name}`;
                imagenURL.value = URL.createObjectURL(archivo);
            }
        };

        const editarEjercicio = async () => {
            try {
                await axios.put(`http://localhost:3000/ejercicios/${route.params.id}`, ejercicio.value);
                router.push('/AdminListaEjercicios');
            } catch (error) {
                console.error('Error al editar el ejercicio:', error);
                alert('Error al editar el ejercicio');
            }
        };

        const cancelarCambios = () => {
            router.push('/AdminListaEjercicios');
        };

        onMounted(cargarEjercicio);

        return {
            ejercicio,
            imagenURL,
            cargarImagen,
            editarEjercicio,
            cancelarCambios
        };
    }
};
</script>

<style scoped>
.container {
    margin-top: 20px;
    margin-left: 270px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 60px;
    background-color: #0D0E16;

}

form {
    background-color: #ffffff;
    color: #000000;
    border-radius: 10px;
    padding: 2% 4%;
    width: 900px;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-header {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.form-row {
    display: flex;
    justify-content: space-between;
    gap: 40px;
}

form input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
}

form select {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
    background-color: #ffffff;
    color: #000000;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    font-family: inherit;
    resize: vertical;
    height: 100px;
}

.peso-recomendado {
    display: flex;
    align-items: center;
}

.peso-input {
    width: 70%;
    -moz-appearance: textfield;
    appearance: textfield;
}

.peso-input::-webkit-outer-spin-button,
.peso-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.peso-recomendado input[type="checkbox"] {
    transform: scale(1.2);
}

.pc-label {
    margin-left: 10px;
}

.valores-def {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
}

.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-left: 15px;

    h3 {
        text-align: left;
    }
}

.selector-archivo {
    max-height: 45px;
}

.preview {
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #ccc;
    border-radius: 8px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.cancel-button,
.save-button {
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 45%;
}

.save-button {
    background-color: #D32F2F;
    color: #fff;
}

.save-button:hover {
    background-color: #b71c1c;
}

.cancel-button {
    background-color: #e0e0e0;
    color: #000;
}

.cancel-button:hover {
    background-color: #bdbdbd;
}
</style>