<template>
    <div class="container">
        <div class="info-edit-container">
            <div class="info-box">
                <div class="info-header">
                    <h2>Información del Usuario</h2>
                    <i class='bx bxs-user-circle'></i>
                </div>
                <div class="profile-info">
                    <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
                    <p><strong>Correo Electrónico:</strong> {{ usuario.email }}</p>
                    <p><strong>Edad:</strong> {{ usuario.edad }}</p>
                    <p><strong>Contraseña:</strong> {{ usuario.password }}</p>
                </div>
            </div>
            
            <div class="edit-box">
                <h2>Editar Información</h2>
                <form>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" v-model="usuario.nombre">

                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" v-model="usuario.email">

                    <label for="age">Edad:</label>
                    <input type="number" id="age" v-model="usuario.edad">

                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" v-model="usuario.password">
                </form>
                <div class="buttons">
                    <button type="button" class="cancel-button" @click="cancelar">Cancelar</button>
                    <button type="submit" class="save-button" @click="guardar">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            usuario: {
                nombre: '',
                email: '',
                edad: null,
                password: ''
            }
        };
    },
    methods: {
        async obtenerUsuario() {
            const usuarioID = this.$route.params.id; 
            try {
                const response = await axios.get(`http://localhost:3000/usuarios/${usuarioID}`);
                this.usuario = response.data;
            } catch (error) {
                console.error(`Error al obtener el usuario: ${error.message}`);
            }
        },
        cancelar() {
            this.$router.push('/AdminEdicionUsuarios'); 
        },
        async guardar() {
            const usuarioID = this.$route.params.id; 
            try {
              
                await axios.put(`http://localhost:3000/usuarios/${usuarioID}`, this.usuario);

                console.log('Información guardada:', this.usuario);
                
            } catch (error) {
                console.error(`Error al guardar los cambios: ${error.message}`);
            }
        }
    },
    mounted() {
        this.obtenerUsuario(); 
    }
};
</script>





