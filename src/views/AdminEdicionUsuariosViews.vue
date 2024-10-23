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



<style scoped>
.container {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    background: #0D0E16;
    display: flex;
    flex-direction: column;
    height: 100vh;
}


.icono i {
    font-size: 90px;
    color: #fff;
}
.container {
    margin-left: 270px;
    flex-grow: 1;
    padding: 60px;
    background-color: #0D0E16;
}

.info-edit-container {
    display: flex;
    gap: 20px;
}

.info-box,
.edit-box {
    background-color: #ffffff;
    color: #000000;
    padding: 20px;
    border-radius: 10px;
    flex: 1;
    min-width: 0;
}

.info-box {
    display: flex;
    flex-direction: column;
}


.info-box p {
    font-size: 18px;
    margin-bottom: 20px;
}

.info-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.info-header i {
    font-size: 150px;
    margin-bottom: 10px;
}

.info-header h2 {
    font-size: 24px;
    margin: 0;
}

.edit-box h2 {
    font-size: 24px;
    margin: 0;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
    font-size: 22px;
}

form {
    display: flex;
    flex-direction: column;
}

form label {
    margin-bottom: 5px;
}

form input {
    padding: 10px;
    margin-bottom: 15px;
    border: 2px solid #000;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000;
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

.info-box .info-field {
    margin-bottom: 15px;
}

.info-box .info-field:last-of-type {
    margin-bottom: 0;
}
</style>

