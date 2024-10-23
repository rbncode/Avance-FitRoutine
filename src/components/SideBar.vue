<script>
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            router: useRouter()
        };
    },
    methods: {
        goTo(ruta) {
            this.router.push(ruta);
        }
    }
}
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    </head>
    <nav class="menu-dashboard">
        <div class="top-menu">
            <div class="icono">
                <i class='bx bxs-user-circle'></i>
            </div>
            <p class="admin-name">Administrador Robin</p>
            <p class="admin-email">robin.01@gmail.com</p>
        </div>

        <ul class="menu">

            <li><a v-on:click="goTo('/AdminRegistro')" class="enlace"><i
                        class='bx bx-user-plus'></i>Registro</a>
            </li>
            <li><a v-on:click="goTo('/')" class="enlace"><i
                        class='bx bxs-calendar-minus'></i>Rutinas</a>
            </li>
            <li><a v-on:click="goTo('/AdminListaEjercicios')" class="enlace"><i
                        class='bx bx-dumbbell'></i>Ejercicios</a>
            </li>
            <li><a v-on:click="goTo('/AdminListaUsuarios')" class="enlace"><i class='bx bx-group'></i>Usuarios</a></li>
            <li><a v-on:click="goTo('/')" class="enlace"><i class='bx bx-log-out'></i>Cerrar Sesión</a></li>
        </ul>
    </nav>
</template>

