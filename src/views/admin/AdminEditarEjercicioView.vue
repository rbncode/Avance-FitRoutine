<template>
    <div class="container">
        <form>
            <h2 class="form-header">Editar Ejercicio</h2>
            <div class="form-row">
                <div class="left">
                    <p>Nombre del Ejercicio</p>
                    <input type="text" placeholder="Nombre previo..." required>
                    <p>Descripción</p>
                    <input type="text" placeholder="Descripción previa..." required>
                    <p>Instrucciones</p>
                    <textarea placeholder="Instrucciones previas..."
                        rows="4"></textarea>
                    <div class="valores-def">
                        <p>Peso Recomendado</p>
                        <div class="peso-recomendado">
                            <input type="number" id="pesoRecomendado" required />
                            <label for="pc-checkbox" class="pc-label">PC</label>
                            <input type="checkbox" id="pc-checkbox">
                        </div>
                        <label for="grupoMuscular">Grupo Muscular:</label>
                        <select id="grupoMuscular" required>
                            <option value="Tren Superior">Tren Superior</option>
                            <option value="Core">Core</option>
                            <option value="Tren Inferior">Tren Inferior</option>
                        </select>
                    </div>
                </div>
                <div class="right">
                    <h3>Demostración del ejercicio</h3>
                    <input type="file" class="selector-archivo" accept="image/*"/>
                    <label>Previsualización de Demostración</label>
                    <div class="preview">
                        <img src=".." width="150px" alt="Demostración.jpg" />
                    </div>
                </div>
            </div>
            <div class="buttons">
                <button type="button" class="cancel-button">Cancelar</button>
                <button type="submit" class="save-button">Guardar Cambios</button>
            </div>
        </form>
    </div>
</template>