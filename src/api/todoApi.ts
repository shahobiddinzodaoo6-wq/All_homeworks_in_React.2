import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://37.27.29.18:8001/api/to-dos";
const checkUrl = "http://37.27.29.18:8001/completed";

export const apiImage = "http://37.27.29.18:8001/images";


export const GetTodo = createAsyncThunk("todo/GetTodo", async () => {
    const { data } = await axios.get(api);
    return data.data;
});


export const deleteUser = createAsyncThunk(
    "todo/deleteUser",
    async (id: number, { dispatch }) => {
        await axios.delete(`${api}?id=${id}`);
        dispatch(GetTodo());
    }
);


export const addUser = createAsyncThunk(
    "todo/addUser",
    async (formData: FormData, { dispatch }) => {
        await axios.post(api, formData);
        dispatch(GetTodo());
    }
);



export const editUser = createAsyncThunk(
    "todo/editUser",
    async (obj: any, { dispatch }) => {
        await axios.put(api, obj);
        dispatch(GetTodo());
    }
);


export const checkStatus = createAsyncThunk(
    "todo/checkStatus",
    async (id: number, { dispatch }) => {
        await axios.put(`${checkUrl}?id=${id}`);
        dispatch(GetTodo());
    }
);


export const deleteImage = createAsyncThunk(
    "todo/deleteImage",
    async (id: number, { dispatch }) => {
        await axios.delete(`${api}/images/${id}`);
        dispatch(GetTodo());
    }
);


export const addImage = createAsyncThunk(
    "todo/addImage",
    async ({ id, formData }: any, { dispatch }) => {
        await axios.post(`${api}/${id}/images`, formData);
        dispatch(GetTodo());
    }
);

export const infoData = createAsyncThunk("todo/infoData", async (id) => {
    try {
        const { data } = await axios.get(`${api}/${id}`)
        return data.data
    } catch (error) {
        console.error(error);

    }
})