<template>
    
    <main>
        <section class="content">
            <div class="user-table">
                <h1>Lista de Usuarios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th class="centrar">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td>{{ usuario.nombre }}</td>
                            <td>{{ usuario.email }}</td>
                            <td>{{ usuario.edad }}</td>

                            <td>
                                <button class="btn editar" @click="editarUsuario(usuario.id)">
                                    <i class='bx bx-edit'></i>Editar
                                </button>
                                <button class="btn eliminar" @click="deleteUsuario(usuario.id)">
                                    <i class='bx bx-trash'></i>Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>


<script>


import { getUsuarios, deleteUsuarios } from '@/services/todoService';
export default {

    data() {
        return {
            usuarios: [],
        };
    },
    async mounted() {
        this.usuarios = await getUsuarios();
    },
    methods: {
        async deleteUsuario(usuarios) {
            await deleteUsuarios(usuarios);
            this.usuarios = this.usuarios.filter(usuario => usuario.id !== usuarios);
        },
        editarUsuario(id) {
            this.$router.push(`/AdminEdicionUsuarios/${id}`);
        }

    }
};
</script>



