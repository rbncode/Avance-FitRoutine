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

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    font-weight: lighter;
    position: fixed;
}

.menu-dashboard {
    width: 250px;
    height: calc(100vh - 60px);
    background: #0D0E16;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 2px solid #ffffff;
    position: fixed;
    top: 58px;
    left: 0;
}


.top-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;

}

.icono i {
    font-size: 80px;
    color: #fff;
}

.admin-name {
    font-size: 18px;
    color: #fff;
    margin-top: 10px;
}

.admin-email {
    font-size: 14px;
    color: #b0b0b0;
}

.menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    margin-top: 0px;
}

.enlace {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    padding: 10px 15px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.enlace:hover {
    background-color: #2a2b38;
}

.enlace i {
    margin-right: 10px;
    font-size: 20px;
}

.logout-button {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    margin-top: auto;
}

.logout-button i {
    margin-right: 10px;
    font-size: 20px;
}

.logout-button:hover {
    background-color: #2a2b38;
}
</style>