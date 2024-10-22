<template>

    <main>
        <section class="content">
            <div class="exercise-table">
                <h1>Ejercicios</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Sector Muscular</th>
                            <th>Peso Recomendado</th>
                            <th class="centrar">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>nombre ejercicio</td>
                            <td>grupo muscular</td>
                            <td class="centrar">peso recomendado</td>
                            <td>
                                <button class="btn editar">
                                    <i class='bx bx-edit'></i>Editar
                                </button>
                                <button class="btn eliminar" ><i
                                        class='bx bx-trash'></i>Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>

<style scoped>
.content {
    margin-left: 270px;
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 60px;
    background-color: #0D0E16;
}

h1 {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
}

.exercise-table {
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    color: #000;
}

.exercise-table table {
    width: 100%;
    border-collapse: collapse;
}

.exercise-table table thead th {
    font-size: 18px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
}

.exercise-table table tbody th {
    font-size: 18px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
}

td {
    padding: 15px 10px;
    border-bottom: 1px solid #ccc;
}


.btn {
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    margin: 0 4px;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn.editar {
    background-color: #000;
    color: #fff;
}

.btn.eliminar {
    background-color: red;
    color: #fff;
}

.btn.eliminar:hover,
.btn.editar:hover {
    background-color: #2a2b38;
}

button i {
    margin-right: 8px;
}

.centrar {
    padding-left: 50px;
}
</style>