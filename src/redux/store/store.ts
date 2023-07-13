import {configureStore} from '@reduxjs/toolkit'
import eventSlice from '../slice/eventSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        
        events: eventSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch : () => AppDispatch = useDispatch
export const UseAppSelector : TypedUseSelectorHook<RootState> = useSelector