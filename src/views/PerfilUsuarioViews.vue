<template>
    <div class="container">
        <main>
            <section class="profile">
                <h1>Perfil Usuario</h1>
                <div class="profile-card">
                    <div class="user-icon">
                        <i class='bx bxs-user-circle'></i>
                    </div>
                    <div class="profile-info">
                        <p><strong>Nombre</strong>: {{ usuario.nombre }}</p>
                        <p><strong>Correo Electronico</strong>: {{ usuario.email }}</p>
                        <p><strong>Password</strong>: {{ usuario.password }}</p>
                        <p><strong>Edad</strong>:{{ usuario.edad }}</p>
                    </div>
                    <button class="edit-button" @click="editarPerfil">Editar perfil</button>
            </div>
        </section>
    </main>
</div>
</template>

