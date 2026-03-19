import axios from "axios";
import { create } from "zustand";

let api = "https://6941690a686bc3ca8166e0b0.mockapi.io/users"




export interface IUser {
    id: number
    name: string
    age: number
    avatar: string
    status: boolean
}

export interface ITodoStore {
    users: IUser[]

    getData: () => Promise<void>

    deleteUser: (id: number) => Promise<void>

    addUser: (newUser: IUser) => Promise<void>

    editUser: (editObj: IUser) => Promise<void>

    selectData: (status: "all" | "true" | "false") => Promise<void>

    searchData: (searching: string) => Promise<void>
}


export const useTodo = create<ITodoStore>((set, get) => ({
    users: [],
    getData: async () => {
        try {
            const { data } = await axios.get<IUser[]>(api)
            set({ users: data })
        } catch (error) {
            console.error(error);
        }
    },
    deleteUser: async (id: number) => {
        try {
            await axios.delete(`${api}/${id}`)
            await get().getData()
        } catch (error) {
            console.error(error);

        }
    },
    addUser: async (newUser: IUser) => {
        try {
            await axios.post(api, newUser)
            get().getData()
        } catch (error) {
            console.error(error);
        }
    },
    editUser: async (editObj: IUser) => {
        try {
            await axios.put(`${api}/${editObj.id}`, editObj)
            get().getData()
        } catch (error) {
            console.error(error);

        }
    },
    selectData: async (status: any) => {
        try {
            if (status != "all") {
                const { data } = await axios.get(`${api}?status=${status}`);
                set({ users: data });
            } else {
                await get().getData();
            }
        } catch (error) {
            console.error(error);
        }
    },
    searchData: async (searching: any) => {
        try {
            const { data } = await axios.get(`${api}?name=${searching}`);
            set({ users: data });
        } catch (error) {
            console.error(error);
        }
    },


}
))