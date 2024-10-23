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


