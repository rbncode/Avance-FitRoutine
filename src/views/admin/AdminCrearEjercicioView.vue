<script>
export default {
    data() {
        return {
            nombre: '',
            descripcion: '',
            instrucciones: '',
            pesoRecomendado: '',
            grupoMuscular: '',
            imagen: '', 
            imagenURL: '',  
        };
    },
    methods: {
        cargarImagen(event) {
            const archivo = event.target.files[0];
            if (archivo) {

                this.imagen = `/src/views/lista-ejercicios/img-ejercicios/${archivo.name}`;
                this.imagenURL = URL.createObjectURL(archivo);
            }
        },
        async guardarEjercicio() {
            const nuevoEjercicio = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                instrucciones: this.instrucciones,
                pesoRecomendado: this.pesoRecomendado,
                grupoMuscular: this.grupoMuscular,
                imagen: this.imagen  
            };

            try {
                const res = await fetch('http://localhost:3000/ejercicios', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevoEjercicio),
                });

                if (res.ok) {
                    this.$router.push('/AdminListaEjercicios');
                } else {
                    alert('Error al guardar el ejercicio');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error al conectar con la base de datos');
            }
        }
    }
};
</script>

<template>
    <div class="container">
        <form @submit.prevent="guardarEjercicio">
            <h2 class="form-header">Registro de Nuevo Ejercicio</h2>
            <div class="form-row">
                <div class="left">
                    <!-- Campos de texto -->
                    <p>Nombre del Ejercicio</p>
                    <input type="text" v-model="nombre" placeholder="Nombre" required>
                    <p>Descripción</p>
                    <input type="text" v-model="descripcion" placeholder="Descripción" required>
                    <p>Instrucciones</p>
                    <textarea v-model="instrucciones" placeholder="Instrucciones" rows="4"></textarea>
                    <div class="valores-def">
                        <!-- Peso recomendado y grupo muscular -->
                        <p>Peso Recomendado</p>
                        <div class="peso-recomendado">
                            <input type="number" v-model="pesoRecomendado" required />
                            <label for="pc-checkbox" class="pc-label">PC</label>
                            <input type="checkbox" id="pc-checkbox">
                        </div>
                        <p>Grupo Muscular</p>
                        <select v-model="grupoMuscular" required>
                            <option value="">Seleccionar categoría</option>
                            <option value="Tren Superior">Tren Superior</option>
                            <option value="Core">Core</option>
                            <option value="Tren Inferior">Tren Inferior</option>
                        </select>
                    </div>
                </div>

                <div class="right">
                    <h3>Demostración del ejercicio</h3>
                    <input type="file" class="selector-archivo" @change="cargarImagen" accept="image/*" required/>
                    <label>Previsualización de Demostración</label>
                    <div class="preview">
                        <img :src="imagenURL || 'https://via.placeholder.com/150'" width="150px" alt="Demostración" />
                    </div>
                </div>
            </div>

            <!-- Botones de acción -->
            <div class="buttons">
                <button type="button" @click="$router.push('/AdminListaEjercicios')"
                    class="cancel-button">Cancelar</button>
                <button type="submit" class="save-button">Guardar</button>
            </div>
        </form>
    </div>
</template>

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