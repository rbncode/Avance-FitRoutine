<template>
    <div class="container">
        <form>
            <h2 class="form-header">Registro de Nuevo Ejercicio</h2>
            <div class="form-row">
                <div class="left">
                    <!-- Campos de texto -->
                    <p>Nombre del Ejercicio</p>
                    <input type="text" placeholder="Nombre" required>
                    <p>Descripción</p>
                    <input type="text" placeholder="Descripción" required>
                    <p>Instrucciones</p>
                    <textarea placeholder="Instrucciones" rows="4"></textarea>
                    <div class="valores-def">
                        <!-- Peso recomendado y grupo muscular -->
                        <p>Peso Recomendado</p>
                        <div class="peso-recomendado">
                            <input type="number" required />
                            <label for="pc-checkbox" class="pc-label">PC</label>
                            <input type="checkbox" id="pc-checkbox">
                        </div>
                        <p>Grupo Muscular</p>
                        <select required>
                            <option value="">Seleccionar categoría</option>
                            <option value="Tren Superior">Tren Superior</option>
                            <option value="Core">Core</option>
                            <option value="Tren Inferior">Tren Inferior</option>
                        </select>
                    </div>
                </div>

                <div class="right">
                    <h3>Demostración del ejercicio</h3>
                    <input type="file" class="selector-archivo" accept="image/*" required/>
                    <label>Previsualización de Demostración</label>
                    <div class="preview">
                        <img src=".." width="150px" alt="Demostración" />
                    </div>
                </div>
            </div>

            <!-- Botones de acción -->
            <div class="buttons">
                <button type="button" @click="$router.push('/AdminListaEjercicios')"
                    class="cancel-button">Cancelar</button>
                <button type="submit" class="save-button">Guardar</button>
            </div>
        </form>
    </div>
</template>