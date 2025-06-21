import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './slices/boardsSlice';
import modalReducer from './slices/modalSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    modal: modalReducer,
    auth: authReducer,
  },
});

// RootState와 AppDispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
