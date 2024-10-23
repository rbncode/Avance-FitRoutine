import axios from "axios";

const API_URL = 'http://localhost:3000/usuarios';



export const getUsuarios = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error(`Error get usuarios: ${error.message}`);
    }
}

export const createUsuario = async (nuevoUsuario) => {
    try {
        const response = await axios.post(API_URL, nuevoUsuario);
        return response.data; 
    } catch (error) {
        console.error(`Error al crear el usuario: ${error.message}`);
    }
}

export const editUsuario = async (usuarioID, usuarioActualizado) => {
    try {
        const response = await axios.put(`${API_URL}/${usuarioID}`, usuarioActualizado);
        return response.data;
    } catch (error) {
        console.error(`Error al editar el usuario con ID ${usuarioID}: ${error.message}`);
    }
}

export const getUsuarioByID = async (usuarioID) => {
    try {
        const response = await axios.get(`${API_URL}/${usuarioID}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el usuario con ID ${usuarioID}: ${error.message}`);
    }
}


export const deleteUsuarios = async (usuariosID) => {
    try {
        await axios.delete(`${API_URL}/${usuariosID}`);
    }catch (error) {
        console.error(`Error al eliminar el usuario: ${usuariosID} : ${error.message}`)
    }
}