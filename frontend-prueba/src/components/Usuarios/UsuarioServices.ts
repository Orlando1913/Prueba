import axios from "axios";
import { Usuario } from "./Usuario";

const API = 'http://localhost:5000'

export const getUsusarios = async () => {
    return await axios.get<Usuario[]>(`${API}/Usuario`);
}

export const createUsusarios = async (usuario:Usuario) => {
    return await axios.post(`${API}/Usuario`, usuario);
}

export const getUsusario = async (id: string) => {
    return await axios.get<Usuario>(`${API}/Usuario/${id}`);
}

export const updateUsusario = async (id: string, usuario: Usuario) => {
    return await axios.put<Usuario>(`${API}/Usuario/${id}`, usuario);
}

export const deleteUsusario = async (id: string) => {
    return await axios.delete<Usuario>(`${API}/Usuario/${id}`);
}