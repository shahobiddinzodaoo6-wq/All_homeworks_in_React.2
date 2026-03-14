import { create } from 'zustand'



export const useTodo = create((set) => (
    {
        users: [
            {
                name: "Ali",
                age: 18,
                status: false,
                avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
                id: 1
            },
            {
                name: "Karim",
                age: 20,
                status: true,
                avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
                id: 2
            },
            {
                name: "Said",
                age: 17,
                status: false,
                avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
                id: 3
            },
            {
                name: "Jasur",
                age: 22,
                status: true,
                avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
                id: 4
            }
        ],
        deleteUser: (id: number) =>
            set((state: any) => ({users: state.users.filter((user: any) =>  user.id != id) })),

        addUser: (newUser: any) => 
            set((state: any) => ({users: [...state.users, {...newUser}] })),

        editUser: (obj: any) => 
            set((state: any) => ({ users: state.users.map((user:any) => user.id == obj.id ? obj : user )}))
    }))