import axios from "axios"
import { create } from "zustand"

let api = "http://37.27.29.18:8001/api/to-dos"
let checkUrl = "http://37.27.29.18:8001/completed"

export const useTodo = create((set, get) => ({
   users: [],
  infoUser: {},

  getData: async () => {
    try {
      const { data } = await axios.get(api)
      set({ users: data.data })
    } catch (error) {
      console.error(error)
    }
  },

 
  getInfo: async (id) => {
    try {
      let { data } = await axios.get(`${api}/${id}`)
      set({ infoUser: data.data })
    } catch (error) {
      console.error(error)
    }
  },

 
  deleteUser: async (id) => {
    try {
      await axios.delete(`${api}?id=${id}`)
      get().getData()
    } catch (error) {
      console.error(error)
    }
  },


  addUser: async (formData) => {
    try {
      await axios.post(api, formData)
      get().getData()
    } catch (error) {
      console.error(error)
    }
  },


  editUser: async (obj) => {
    try {
      await axios.put(api, obj)
      get().getData()
    } catch (error) {
      console.error(error)
    }
  },


  checkStatus: async (id) => {
    try {
      await axios.put(`${checkUrl}?id=${id}`)
      get().getData()
    } catch (error) {
      console.error(error)
    }
  },


  deleteImage: async (id) => {
    try {
      await axios.delete(`${api}/images/${id}`)
      get().getData()
    } catch (error) {
      console.error(error)
    }
  },


  addImage: async (id, formData) => {
    try {
      await axios.post(`${api}/${id}/images`, formData)
      get().getData()
    } catch (error) {
      console.error(error)
    }
  }
}))