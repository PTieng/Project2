import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { firestore } from '../../firebase';

export interface Event {
    id: string;
    name: string;
    description: string;
    description2: string;
    description3: string;
    description4: string;
    date: string | null;
    img: string;
    img2: string;
    img3: string;
    price: number;
}

interface EventState {
    events: Event[],
    selectedEventId: string | null,
}

const initialState: EventState = {
    events: [],
    selectedEventId: null,
}

export const fetchData = createAsyncThunk('firestore/fetchdata', async() => {
    const collection = await firestore.collection('events').get()
    const events = collection.docs.map((doc) => ({id: doc.id, ...doc.data()}) as Event)
    return events
})

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Event[]>) => {
            state.events = action.payload
        })
       
    }
})

export default eventsSlice.reducer
