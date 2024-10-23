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


