import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';





let api = "http://6941690a686bc3ca8166e0b0.mockapi.io/data"


export interface IData {
  id: string;
  name: string;
  age: number;
  avatar: string;
  status: boolean
}



export interface CounterState {
  users: IData[],
  isLoading: boolean
}

const initialState: CounterState = {
  users: [],
  isLoading: false
}

export const GetData = createAsyncThunk("counter/GetData", async () => {
  try {
    const { data } = await axios.get(api)
    return data
  } catch (error) {
    console.error(error);
  }
})


export const DeleteUser = createAsyncThunk("counter/DeleteUser", async (id: string, { dispatch }) => {
  try {
    await axios.delete(`${api}/${id}`)
    dispatch(GetData())
  } catch (error) {
    console.error(error);
  }
})


export const addUser = createAsyncThunk("counter/addUser", async (newUser: IData, { dispatch }) => {
  try {
    await axios.post(api, newUser)
    dispatch(GetData())
  } catch (error) {
    console.error(error);
  }
})


export const editUser = createAsyncThunk("counter/editUser", async (objUser: IData, {dispatch}) => {
  try {
    await axios.put(`${api}/${objUser.id}`, objUser)
    dispatch(GetData())
  } catch (error) {
    console.error(error);
  }
})


export const searchData = createAsyncThunk("counter/searchData", async (searching: string) => {
  try {
    const {data} = await axios.get(`${api}?name=${searching}`)
    return data 
  } catch (error) {
    console.error(error);
  }
})




export const selectData = createAsyncThunk( "counter/selectData", async (status: string) => {
  try {
    if (status != "all" ) {
      const {data} = await axios.get(`${api}?status=${status}`)
      return data
    }else{
        const {data} = await axios.get(api)
        return data
    }
  } catch (error) {
    console.error(error);
  }
})




export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(GetData.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(GetData.fulfilled, (state, action) => {
      state.users = action.payload
      state.isLoading = false
    })

    builder.addCase(GetData.rejected, (state) => {
      state.isLoading = false
    })


    builder.addCase(selectData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(selectData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(selectData.rejected, (state) => {
      state.isLoading = false;
    });


    builder.addCase(searchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(searchData.rejected, (state) => {
      state.isLoading = false;
    });

  }

})




export const { } = counterSlice.actions

export default counterSlice.reducer