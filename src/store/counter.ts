import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IData {
  id: number;
  name: string;
  age: number;
  avatar: string;
  status: boolean
}



export interface CounterState {
  users: IData[]
}

const initialState: CounterState = {
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


  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    deleteUser: ((state, { payload }) => {
      state.users = state.users.filter((e) => e.id != payload)
    }),
    addUser: ((state, { payload }) => {
      state.users = [...state.users, { ...payload }]
    }),
    editUser: ((state, { payload }) => {
      state.users = state.users.map((e) => e.id == payload.id ? payload : e)
    })
  },
})


export const {deleteUser,addUser,editUser } = counterSlice.actions

export default counterSlice.reducer