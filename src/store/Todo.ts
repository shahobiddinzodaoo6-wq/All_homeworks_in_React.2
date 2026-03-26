import { createSlice } from "@reduxjs/toolkit";
import {
  GetTodo,
  infoData
} from "../api/todoApi";

interface IImage {
  id: number;
  imageName: string;

}

interface IData {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: IImage[];
}

interface State {
  data: IData[];
  isLoading: boolean;
  infoUser: IData | null
}

const initialState: State = {
  data: [],
  isLoading: false,
  infoUser: null
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTodo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(GetTodo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(infoData.fulfilled, (state, action) => {
      state.infoUser = action.payload
      state.isLoading = false
    })
  },
});

export default counterSlice.reducer;