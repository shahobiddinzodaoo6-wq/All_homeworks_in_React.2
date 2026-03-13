import { create } from "zustand";



export const useTodo = create((set, get) => (
    {
        data: [
            {
                id: 1,
                name: "Firuz",
                age: 19,
                status: true,
                avatar: "https://randomuser.me/api/portraits/men/1.jpg"
            },
            {
                id: 2,
                name: "Ahmad",
                age: 21,
                status: false,
                avatar: "https://randomuser.me/api/portraits/men/2.jpg"
            },
            {
                id: 3,
                name: "Ismoil",
                age: 18,
                status: true,
                avatar: "https://randomuser.me/api/portraits/men/3.jpg"
            },
            {
                id: 4,
                name: "Zafar",
                age: 22,
                status: false,
                avatar: "https://randomuser.me/api/portraits/men/4.jpg"
            },
            {
                id: 5,
                name: "Ali",
                age: 20,
                status: true,
                avatar: "https://randomuser.me/api/portraits/men/5.jpg"
            },
            {
                id: 6,
                name: "Rustam",
                age: 23,
                status: false,
                avatar: "https://randomuser.me/api/portraits/men/6.jpg"
            },
            {
                id: 7,
                name: "Said",
                age: 24,
                status: true,
                avatar: "https://randomuser.me/api/portraits/men/7.jpg"
            },
            {
                id: 8,
                name: "Kamol",
                age: 19,
                status: false,
                avatar: "https://randomuser.me/api/portraits/men/8.jpg"
            }
        ],
    }
))






