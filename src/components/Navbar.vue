<template>
  <nav class="navbar">
    <div class="logo">
      <h1>FitRoutine</h1>
    </div>
    <ul class="nav-links">
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li><RouterLink to="/">Perfil</RouterLink></li>
      <li><RouterLink to="/rutinas">Rutinas</RouterLink></li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle">Ejercicios</a>
        <ul class="dropdown-menu">
          <li>
            <RouterLink to="/">Tren Superior</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Tren Inferior</RouterLink>
          </li>
          <li><RouterLink to="/">Core</RouterLink></li>
        </ul>
      </li>
      <li><a href="/">Cerrar Sesion</a></li>
    </ul>
  </nav>
</template>
