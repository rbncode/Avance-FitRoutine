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



<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #0D0E16;
}

.wrapper {
    width: 420px;
    color: white;
}

.wrapper h1 {
    font-size: 35px;
    text-align: center;

}

.wrapper .input-box {
    position: relative;
    margin: 30px 0;
    height: 50px;
    width: 100%;
    margin-bottom: 40px;
}

.input-box input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 16px;
    color: #000000;
    padding: 5px;
}

.input-box input::placeholder {
    color: #000000;
}



.wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: -15px 0 15px;
}

.wrapper .btn {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    margin: 20px 0 60px;
    background-color: #AD283D;
    color: #fff;
    font-weight: bold;
    font-size: 16px;

}

h4 {
    font-weight: normal;
}
</style>