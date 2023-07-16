import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";

export interface HomeInput {
  id?: string;
  packages: string;
  name: string;
  quantity: string;
  price: number;
  email: string;
  phone: string;
  date: string;
}

interface HomeState {
  homes: HomeInput[];
}

const initialState: HomeState = {
  homes: [],
};

// export const saveFormData = createAsyncThunk(
//   "firestore/saveData",
//   async (formData: HomeInput) => {
//     await firestore.collection("bookTickets").add(formData);
//   }
// );

export const createFormData = createAsyncThunk(
  "firestore/add",
  async (data: Omit<HomeInput, "id">) => {
    const collection = await firestore.collection("bookTickets").add(data);
    const newdata: HomeInput = { id: collection.id, ...data };
    return newdata;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createFormData.fulfilled,
      (state, action: PayloadAction<HomeInput>) => {
        state.homes.push(action.payload);
      }
    );
  },
});

export default homeSlice.reducer;
