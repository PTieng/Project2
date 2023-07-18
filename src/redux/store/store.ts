import contactSlice from "./../slice/contactSlice";
import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../slice/eventSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import homeSlice from "../slice/homeSlice";

export const store = configureStore({
  reducer: {
    homeInput: homeSlice,
    events: eventSlice,
    contacts: contactSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
