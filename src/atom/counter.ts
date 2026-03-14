import { atom } from "jotai";

interface IData {
    id: number,
    name: string,
    age: number,
    status: boolean,
    avatar: string
}

export const dataAtom = atom<IData[]>([
    {
        id: 1,
        name: "Firuz",
        age: 19,
        status: false,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Amirjon",
        age: 15,
        status: false,
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        id: 3,
        name: "Ahmad",
        age: 19,
        status: false,
        avatar: "https://randomuser.me/api/portraits/men/50.jpg"
    }
])


export const deleteUser = atom(null, (get, set, id) => {
    set(dataAtom, get(dataAtom).filter((user) => user.id != id))
})


export const addUser = atom(null,(get,set,newUser: IData) => {
    set(dataAtom,[...get(dataAtom), newUser])
})

export const editUser = atom(null,(get,set,editObj: IData) => {
    set(dataAtom,get(dataAtom).map((user) => user.id == editObj.id ? editObj : user))
})