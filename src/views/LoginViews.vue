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

