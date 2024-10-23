<template>

    <div class="container">
        <div class="wrapper">
            <form @submit.prevent="guardarUsuario">
                <h1>Crear cuenta</h1>
                <div class="input-box">
                    <h4>Nombre</h4>
                    <input type="text" v-model="nuevoUsuario.nombre" required>
                </div>

                <div class="input-box">
                    <h4>Correo Electrónico</h4>
                    <input type="email"  v-model="nuevoUsuario.email" required>
                </div>
                <div class="input-box">
                    <h4>Edad</h4>
                    <input type="number" v-model="nuevoUsuario.edad" required>
                </div>
                <div class="input-box">
                    <h4>Contraseña</h4>
                    <input type="password"  v-model="nuevoUsuario.password" required>
                </div>
                <button type="submit" class="btn">Crear cuenta</button>
            </form>
        </div>
    </div>

</template>


<script>
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
        async guardarUsuario () {
            try {
                const usuarioCreado = await createUsuario(this.nuevoUsuario);
                console.log('Usuario creado:' ,usuarioCreado);
                this.$router.push('/Login')
            }catch (error) {
                console.error('Error al crear el usuario:', error.message);
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