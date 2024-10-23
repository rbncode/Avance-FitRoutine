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

<script>
export default {
    data() {
        return {
            usuario: {
                nombre: '',
                email: '',
                password: '',
                edad: null

            },
        };
    },

    mounted() {
        this.cargarUsuario();
    },
    methods: {
        cargarUsuario() {
            const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
            if (usuarioLogeado) {
                this.usuario = usuarioLogeado;
            } else {
                console.error('No hay usuario logueado.');
                this.$router.push('/Login');
            }
        },
        editarPerfil() {
            this.$router.push(`/EdicionUsuario/${this.usuario.id}`);
        },
    },
};
</script>

