<template>
    <div class="container">
        <div class="wrapper">
            <form @submit.prevent="guardarCambios">
                <h1>Edicion Cuenta </h1>
                <div class="input-box">
                    <h4>Nombre</h4>
                    <input type="text" v-model="usuario.nombre" required>
                </div>

                <div class="input-box">
                    <h4>Correo Electrónico</h4>
                    <input type="email"  v-model="usuario.email" required>
                </div>
                <div class="input-box">
                    <h4>Edad</h4>
                    <input type="number"  v-model="usuario.edad" required>
                </div>
                <div class="input-box">
                    <h4>Contraseña</h4>
                    <input type="password"  v-model="usuario.password" required>
                </div>
                <button type="submit" class="btn">Guardar cambios</button>
            </form>
        </div>
    </div>
</template>


<script>

import { getUsuarioByID, editUsuario } from '@/services/todoService';

export default {


 
    data() {
        return {
            usuario: {
                nombre: '',
                email: '',
                edad: null,
                password: ''
            },
            usuarioID: this.$route.params.id 
        };
    },
    async mounted() {
        await this.cargarUsuario();
    },
    methods: {
        async cargarUsuario() {
            try {
                const usuarioData = await getUsuarioByID(this.usuarioID);
                this.usuario = usuarioData;
            } catch (error) {
                console.error('Error al cargar el usuario:', error.message);
            }
        },
        async guardarCambios() {
            try {
                const usuarioActualizado = await editUsuario(this.usuarioID, this.usuario);
                console.log('Usuario actualizado:', usuarioActualizado);
            
            } catch (error) {
                console.error('Error al guardar los cambios:', error.message);
            }
        }
    }
};
</script>



