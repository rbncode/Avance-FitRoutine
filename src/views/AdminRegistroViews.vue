<template>
    <div class="container">
        <h2 class="form-header">Registro Nuevo Usuario</h2>
        <form @submit.prevent="guardarUsuario">
            <div class="form-row">
                <input type="text" placeholder="Nombre" v-model="nuevoUsuario.nombre" required>
                <input type="number" placeholder="Edad" v-model="nuevoUsuario.edad" required>
                <input type="email" placeholder="Correo Electrónico" v-model="nuevoUsuario.email" required>
            </div>

            <input type="password" placeholder="Contraseña" v-model="nuevoUsuario.password" required>

            <div class="buttons">
                <button type="button" class="cancel-button" @click="cancelar">Cancelar</button>
                <button type="submit" class="save-button">Guardar</button>
            </div>
        </form>
    </div>
</template>


<script >
import { createUsuario } from '@/services/todoService';
export default {
    data() {
        return {
            nuevoUsuario: {
                nombre: '',
                email: '',
                edad: null,
                password: ''
            }
        };
    },
    methods: {
        async guardarUsuario() {
            try {
                const usuarioCreado = await createUsuario(this.nuevoUsuario);
                console.log('Usuario creado:', usuarioCreado);
                this.$router.push('/Login')
            } catch (error) {
                console.error('Error al crear el usuario:', error.message);
            }
        },

        cancelar() {

            this.nuevoUsuario = {
                nombre: '',
                email: '',
                edad: null,
                password: ''
            };
        }
    }
};

</script>



<style scoped>
.container {
    margin-left: 270px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
    background-color: #0D0E16;
    margin-top: 50px;

}

.container h2 {
    font-size: 40px;

}

form {
    background-color: #ffffff;
    color: #000000;
    border-radius: 10px;
    padding: 3%;
    width: 800px;
    height: auto;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-header {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    margin-bottom: 5px;
    margin-top: -20px;
}

.form-row {
    display: flex;
    justify-content: space-between;
    gap: 15px;
}

form input[type="password"] {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 100%;
}

form input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 16px;
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