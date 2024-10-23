<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <div class="logo">
            <h1>FitRoutine</h1>
        </div>
        <ul class="nav-links">
            <li>
                <RouterLink to="/CoachDatos">CoachVR</RouterLink>
            </li>
            <li>
                <RouterLink to="/">Inicio</RouterLink>
            </li>
            <li>
                <RouterLink to="/PerfilUsuario">Perfil</RouterLink>
            </li>
            <li>
                <RouterLink to="/Rutinas">Rutinas</RouterLink>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle">Ejercicios</a>
                <ul class="dropdown-menu">
                    <li>
                        <RouterLink to="/ListaTrenS">Tren Superior</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/ListaCore">Core</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/ListaTrenI">Tren Inferior</RouterLink>
                    </li>
                </ul>
            </li>
            <li><RouterLink to="/AdminListaEjercicios">Cerrar Sesión</RouterLink></li>
        </ul>
    </nav>

</template>

