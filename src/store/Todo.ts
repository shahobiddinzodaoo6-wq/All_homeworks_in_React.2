import { create } from 'zustand'


export const useTodo = create((set, get) => ({
    // count: 0,
    // setCount: () => set((state: any) => ({count: state.count + 1})),
    // setMinus: () => set((state: any) => ({count: state.count - 1}))

    data: [
        { id: 1, name: "Firuz", age: 19 },
        { id: 2, name: "Ahmad", age: 19 },
        { id: 3, name: "Idiboy", age: 19 },
        { id: 4, name: "Ismoil", age: 20 },
        { id: 5, name: "Valid", age: 17 },
    ],
    deleteData: (id) => set((state) => ({ data: state.data.filter((item) => item.id != id) })),

    addUser: (name) =>
        set((state) => ({
            data: [
                ...state.data,
                { id: Date.now(), name }
            ]
        }))
}))