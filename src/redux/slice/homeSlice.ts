import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";

export interface HomeInput {
  id?: string;
  packages: string;
  name: string;
  quantity: number;
  price: number;
  email: string;
  phone: string;
  date: string;
  numCard: string;
  endDate: string;
  cvv: string;

}

interface HomeState {
  homes: HomeInput[];
}

const initialState: HomeState = {
  homes: [],
};

export const createFormData = createAsyncThunk(
  "firestore/add",
  async (data: Omit<HomeInput, "id">) => {
    const collection = await firestore.collection("bookTickets").add(data);
    const newdata: HomeInput = { id: collection.id, ...data };
    console.log(newdata);
    return newdata;
  }
);

export const fetchData = createAsyncThunk("firestore/fetchdata", async () => {
  const collection = await firestore.collection("bookTickets").get();
  const ticket = collection.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as HomeInput)
  );
  return ticket;
});

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
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<HomeInput[]>) => {
        state.homes = action.payload;
      }
    );
  },
});

export default homeSlice.reducer;
