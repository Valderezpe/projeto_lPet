import { configureStore } from '@reduxjs/toolkit'
import nextRudecer from './nextSlice';

export const store = configureStore({
  reducer: {
    next: nextRudecer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch