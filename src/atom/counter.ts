import { atom } from "jotai"

interface IData {
    id: number,
    name: string,
    age: number,
    status: boolean
}

export const dataAtom = atom <IData[]>([
    {
        id: 1,
        name: "Firuz",
        age: 19,
        status: false
    },
    {
        id: 2,
        name: "Amirjon",
        age: 15,
        status: false
    },
    {
        id: 3,
        name: "Ahmad",
        age: 19,
        status: false
    }
])


export const deleteAtom = atom(null, (get, set, id) => {
    set(
        dataAtom,
        get(dataAtom).filter((user) => user.id != id)
    )
})

export const addNew = atom(null, (get, set, newUser: IData) => {
    set(dataAtom, [...get(dataAtom), newUser])
})

export const editUserAtom = atom(null, (get, set, editUser: IData) => {
    set(dataAtom, get(dataAtom).map((user) => user.id == editUser.id ? editUser : user))
})