import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// 모달 타입 정의
export type ModalType = 'ADD_BOARD' | 'ADD_LIST' | 'ADD_TASK' | 'EDIT_TASK' | 'CONFIRM_DELETE' | 'VIEW_BOARDS' | 'DELETE_BOARD' | 'LOGIN' | null;

interface ModalState {
  isOpen: boolean;
  modalType: ModalType;
  modalProps: Record<string, any>;
}

// 초기 상태
const initialState: ModalState = {
  isOpen: false,
  modalType: null,
  modalProps: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ modalType: ModalType; modalProps?: Record<string, any> }>) => {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps || {};
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
      state.modalProps = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
