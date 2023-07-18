import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";

export interface Contacts {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

interface contactState {
  contacts: Contacts[];
}

const initialState: contactState = {
  contacts: [],
};

export const createFormData = createAsyncThunk(
  "firestore/addContact",
  async (formData: Contacts) => {
    const collection = await firestore.collection("contact").add(formData);
    const contactId = collection.id;
     const newCotact = { ...formData, id: contactId };
     return newCotact;
  }
);

export const eventsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createFormData.fulfilled,
      (state, action: PayloadAction<Contacts>) => {
        state.contacts.push(action.payload);
      }
    );
  },
});

export default eventsSlice.reducer
