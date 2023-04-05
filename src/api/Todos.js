import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export async function getTodos() {
        try {
            const { data } = await axios.get(`${API_URL}todos`);
            return data;

        } catch (error) {
            console.log(error);
        }
}

export async function getTodoById(id) {
    try {
        const { data } = await axios.get(`${API_URL}todos/${id}`);
        return data;

    } catch (error) {
        console.log(error);
    }
}

export async function createTodo(todoData) {
    try {
        const { data } = await axios.post(`${API_URL}todos`, todoData);
        return data;

    } catch (error) {
        console.log(error);
    }
}

export async function editTodo(todoData, todoId) {
    try {
        const { data } = await axios.put(`${API_URL}todos/${todoId}`, todoData);
        return data;

    } catch (error) {
        console.log(error);
    }
}