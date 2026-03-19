import { atom } from "jotai"
import axios from 'axios'
import { loadable } from 'jotai/utils'



const api = "https://6941690a686bc3ca8166e0b0.mockapi.io/data"
const trigger = atom(false)
export const selectAtom = atom("")
export const searchAtom = atom("")


const GetDataAtom = atom(async (get) => {
    get(trigger)
    const searchValue = get(searchAtom)
    const selectValue = get(selectAtom)


    try {
        const { data } = await axios.get(
            searchValue && selectValue ? `${api}?name=${searchValue}&status=${selectValue}` : searchValue ? `${api}?name=${searchValue}` : selectValue ? `${api}?status=${selectValue}` : api
        )
        return data
    } catch (error) {
        console.error(error);
    }
})

export const deleteUser = atom(null, async (get, set, id) => {
    try {
        await axios.delete(`${api}/${id}`)
        set(trigger, !get(trigger))
    } catch (error) {
        console.error(error);
    }
})

export const addUser = atom(null, async (get, set, newUser) => {
    try {
        await axios.post(api, newUser)
        set(trigger, !get(trigger))
    } catch (error) {
        console.error(error);
    }
})

export const editUser = atom(null, async (get, set, ObjUser: any) => {
    try {
        await axios.put(`${api}/${ObjUser.id}`, ObjUser)
        set(trigger, !get(trigger))
    } catch (error) {
        console.error(error);
    }
})


export const loadableAtom = loadable(GetDataAtom)