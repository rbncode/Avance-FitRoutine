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

<style scoped>
.container {
    font-family: 'Poppins', sans-serif;
    background-color: #0D0E16;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

header {
    width: 100%;
    background-color: #2D2D2D;
    padding: 14px;
    margin-top: 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    text-transform: uppercase;
    font-weight: bold;
}

.logo {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

.profile {
    text-align: center;
    margin-top: 25px;
}

h1 {
    top: 10px;
    font-size: 36px;
    margin-bottom: 2rem;
    color: #fff;
}

.profile-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 10px;
    display: inline-block;
    text-align: left;
    width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.user-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    font-size: 150px;
    color: #0D0E16;


}

.profile-info p strong {
    margin-right: 10px;
    color: #0D0E16;

}

.profile-info p {
    color: #0D0E16;
    padding: 14px;
}

.edit-button {
    display: block;
    width: 100%;
    background-color: #d32f2f;
    color: white;
    padding: 0.75rem;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: background-color 0.3s ease;
}

.edit-button:hover {
    background-color: #b71c1c;
}
</style>