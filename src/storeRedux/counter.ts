import { createSlice } from '@reduxjs/toolkit'

interface IData {
    id: number,
    name: string,
    age: number,
    status: boolean,
    avatar: string,
    phone: number,
    email: string
}


export interface CounterState {
    users: IData[]
}

const initialState: CounterState = {
    users: [
        {
            id: 1,
            name: "Firuz Shahobiddinzoda",
            age: 19,
            status: false,
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            phone: 102999901,
            email: "firuz.shahobiddinzoda@gmail.com"
        },
        {
            id: 2,
            name: "Amir Rahmonov",
            age: 22,
            status: true,
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            phone: 987654321,
            email: "amir.rahmonov@gmail.com"
        },
        {
            id: 3,
            name: "Ismoil Karimov",
            age: 25,
            status: false,
            avatar: "https://randomuser.me/api/portraits/men/50.jpg",
            phone: 935551122,
            email: "ismoil.karimov@gmail.com"
        },
        {
            id: 4,
            name: "Muhammad Aliyev",
            age: 21,
            status: true,
            avatar: "https://randomuser.me/api/portraits/men/60.jpg",
            phone: 919191919,
            email: "muhammad.aliyev@gmail.com"
        },
        {
            id: 5,
            name: "Aziz Rustamov",
            age: 24,
            status: false,
            avatar: "https://randomuser.me/api/portraits/men/70.jpg",
            phone: 904443322,
            email: "aziz.rustamov@gmail.com"
        },
        {
            id: 6,
            name: "Jamshed Nuriddinov",
            age: 20,
            status: true,
            avatar: "https://randomuser.me/api/portraits/men/15.jpg",
            phone: 933002211,
            email: "jamshed.nuriddinov@gmail.com"
        }
    ]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        deletUser: ((state, { payload }) => {
            state.users = state.users.filter((user) => user.id != payload)
        }),
        addUser: ((state, {payload}) => {
            state.users = [...state.users, {...payload}]
        }),
        editUser: ((state, {payload}) => {
            state.users = state.users.map((user)=> user.id == payload.id ? payload : user)
        })
    },
})


export const {deletUser,addUser,editUser } = counterSlice.actions

export default counterSlice.reducer