import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './slices/boardsSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    modal: modalReducer,
  },
});

// RootState와 AppDispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
