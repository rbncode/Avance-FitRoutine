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

                    if(usuario.rol === 'administrador'){
                        this.$router.push('/AdminRegistro');
                    }else {
                    this.$router.push('/'); //redirige a la pagina principal
                    }
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

<style scoped>



.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px;
    background: #0D0E16;
    margin-top: 0;
}

*{
    box-sizing: border-box;
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
    padding: 20px 40px 20px 60px;
}



.input-box input::placeholder {
    color: #000000;
}

.input-box i {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 25px;
    color: black;
}

.wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: -15px 0 15px;
}

.remember-forgot a {
    color: #fff;
}

.remember-forgot a:hover {
    text-decoration: underline;
}

.wrapper .btn {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: none;
    margin-bottom: 40px;
    background-color: #d32f2f;
    color: #fff;
    font-weight: bold;
}

.error-message {
    color: red;
    margin-bottom: 15px;
}
</style>