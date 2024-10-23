<template>
    <div class="container">
    <div class="login-container">
        <div class="wrapper">
            <form @submit.prevent="login">
                <h1>Inicio de Sesión</h1>

                <div class="input-box">
                    <i class='bx bxs-user'></i>
                    <input type="text" placeholder="Email" v-model="email" required />
                </div>

            
                <div class="input-box">
                    <i class='bx bxs-key'></i>
                    <input type="password" placeholder="Password"  v-model="password" required />
                </div>

              
                <div v-if="error" class="error-message">
                    {{ error_mensaje }}
                </div>

               
                <button type="submit" class="btn">Iniciar Sesión</button>

                <div class="remember-forgot">
                    <p>¿Todavía no tienes cuenta?</p>
                    <router-link to="/crearCuenta">Crea una ahora</router-link>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { getUsuarios } from '@/services/todoService'; 

export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: "",
            error: false,
            error_mensaje: "",
        };
    },
    methods: {
        async login() {
            if (!this.email || !this.password) {
                this.error = true;
                this.error_mensaje = 'Por favor, completa todos los campos.';
                return;
            }

            try {
                let usuarios = await getUsuarios();
                let usuario = usuarios.find(
                    user => user.email === this.email && user.password.toString() === this.password
                );

                if (usuario) {
                    localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
                    this.$router.push('/'); //redirige a la pagina principal
                } else {
                    this.error = true;
                    this.error_mensaje = 'Correo electrónico o contraseña incorrectos.';
                }
            } catch (error) {
                console.error(error);
                this.error = true;
                this.error_mensaje = 'Ocurrió un error durante el inicio de sesión. Por favor, intenta nuevamente.';
            }
        }
    }
};
</script>

